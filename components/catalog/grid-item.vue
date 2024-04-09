<script lang="tsx" setup>
const props = defineProps({
    index: Number,
    item: {
        id: Number,
        name: String,
        status: String,
        price: Number,
        category: String,
    }
})
</script>

<template>
    <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
        <div class="surface-50 flex justify-content-center border-round p-3">
            <div class="relative mx-auto">
                <img class="border-round w-full" :src="item.image" :alt="item.name" style="max-width: 300px" />
                <Tag :value="item.status" severity="success" class="absolute" style="left: 4px; top: 4px"></Tag>
            </div>
        </div>
        <div class="pt-4">
            <div class="flex flex-row justify-content-between align-items-start gap-2">
                <div>
                    <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                    <div class="text-lg font-medium text-900 mt-1">{{ item.name }}</div>
                </div>
            </div>
            <div class="flex flex-column gap-4 mt-4">
                <span class="text-2xl font-semibold text-900">${{ item.price }}</span>
                <div class="flex gap-2">
                    <NuxtLink :to="`catalog/show-${item.id}`">
                        <Button icon="pi pi-shopping-cart" label="Подробнее"
                            class="flex-auto white-space-nowrap"></Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>