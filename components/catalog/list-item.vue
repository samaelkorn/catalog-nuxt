<script lang="tsx" setup>
interface TItem {
    index: number
    item: {
        id: number
        name: string
        status: string
        image: string
        category: string
        price: number
    }
}
const { index, item } = defineProps<TItem>()
</script>

<template>
    <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
        :class="{ 'border-top-1 surface-border': index !== 0 }">
        <div class="md:w-10rem relative">
            <img class="block xl:block mx-auto border-round w-full" :src="item.image" :alt="item.name" />
            <Tag :value="item.status" severity="success" class="absolute" style="left: 4px; top: 4px"></Tag>
        </div>
        <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
            <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                <div>
                    <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                    <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                </div>
            </div>
            <div class="flex flex-column md:align-items-end gap-5">
                <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                <div class="flex flex-row-reverse md:flex-row gap-2">
                    <NuxtLink :to="`catalog/${item.id}`">
                        <Button icon="pi pi-shopping-cart" label="Подробнее"
                            class="flex-auto md:flex-initial white-space-nowrap"></Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>