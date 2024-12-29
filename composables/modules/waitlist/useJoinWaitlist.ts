import { waitlist_api } from "@/api_factory/modules/waitlist";
import { useCustomToast } from '@/composables/core/useCustomToast'

const loading = ref(false)
const payload = ref({
    email: "",
})

export const useJoinWaitlist = () => {
    const { showToast } = useCustomToast();
    const router = useRouter()
    const joinWaitlist = async () => {
        loading.value = true
        const res = await waitlist_api.$_join_waitlist(payload.value) as any
        console.log(res, 'res here')
        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: res.data.message,
                toastType: "success",
                duration: 3000
              });
              payload.value.email = ""
        } else {
            showToast({
                title: "Error",
                message: res?.data?.error || 'Soemthing went wrong',
                toastType: "error",
                duration: 3000
              });
        }
        loading.value = false
    }

    return { loading, joinWaitlist, payload }
}
