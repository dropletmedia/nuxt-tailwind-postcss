<template>
  <div class="container">
    <h1>Hello world</h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="postcss">
.container {
  & h1 {
    font-size: 40px;
  }
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 my-5 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
