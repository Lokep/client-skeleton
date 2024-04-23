<style lang="scss" scoped></style>

<template>
  <div class="w-full h-full flex items-start">
    <div class="leftbar shrink-0 w-64 h-screen overflow-y-auto bg-gray-100 px-2 py-4">
      <Leftbar />
    </div>
    <div class="flex-1 h-full overflow-y-auto py-4 px-8">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
