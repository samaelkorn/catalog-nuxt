<template>
    <div>
        <slot />
    </div>
</template>

<script lang="tsx" setup>

</script>

<style lang="scss">
.layout-wrapper {
    min-height: 100vh;
}

.layout-main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    padding: 7rem 2rem 2rem 4rem;
    transition: margin-left 0.2s;
}

.layout-main {
    flex: 1 1 auto;
}
</style>