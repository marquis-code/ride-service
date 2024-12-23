<!-- components/CursorWrapper.vue -->
<script setup lang="ts">
// Type for the cursor events handlers
type CursorEvent = () => void

// Event handlers
const onBeforeStart: CursorEvent = () => {
  console.log('Cursor effect is about to start')
}

const onAfterStart: CursorEvent = () => {
  console.log('Cursor effect has started')
}

const onReady: CursorEvent = () => {
  console.log('Cursor effect is ready')
}

const onBeforeDestroy: CursorEvent = () => {
  console.log('Cursor effect is about to be destroyed')
}

const onAfterDestroy: CursorEvent = () => {
  console.log('Cursor effect has been destroyed')
}
</script>

<template>
  <div>
    <!-- Default slot for child content -->
    <slot></slot>

    <!-- Cursor effect component with event bindings -->
    <cursor-fx
      @before-start="onBeforeStart"
      @after-start="onAfterStart"
      @ready="onReady"
      @before-destroy="onBeforeDestroy"
      @after-destroy="onAfterDestroy"
    />
  </div>
</template>