<script lang="tsx" setup>
import Header from '@/components/ui/header.vue'
</script>

<template>
    <div class="layout-wrapper">
        <Header title="Catalog" />
        <div class="layout-main-container">
            <div class="layout-main">
                <slot />
            </div>
        </div>
    </div>
</template>

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