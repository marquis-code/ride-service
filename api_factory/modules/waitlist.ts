import { GATEWAY_ENDPOINT } from '../axios.config'

export const waitlist_api = {
     $_join_waitlist: (credential: any) => {
        const url = '/waitlist'
        return GATEWAY_ENDPOINT.post(url, credential)
    }
}
