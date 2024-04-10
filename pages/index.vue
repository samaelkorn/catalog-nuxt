<template>
    <div v-for="item in list">
        <div :key="item.path" class="mb-3">
            <NuxtLink :to="item.path">
                <Button :label="item.label" />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="tsx" setup>
useHead({ title: "Home - Samael" })

const list = [
    {
        path: '/catalog',
        label: 'Каталог'
    },
    {
        path: '/admin',
        label: 'Админка'
    }
]
</script>

