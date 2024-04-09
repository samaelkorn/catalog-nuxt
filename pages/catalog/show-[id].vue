<script lang="tsx" setup>
useHead({ title: "Detail - Samael" })
const route = useRoute()

const InlineComponent = () => {
  return <div>Детальная {route.params.id}</div>
}
</script>

<template>
  <InlineComponent />
</template>
