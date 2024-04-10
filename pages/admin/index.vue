<template>
    <Button label="Добавить" @click="visible = true"></Button>
    <DataTable :value="data?.products" :tableStyle="{ minWidth: '50rem' }">
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Имя"></Column>
        <Column field="price" header="Цена"></Column>
    </DataTable>
    <Dialog v-model:visible="visible" modal header="Добавить" :style="{ width: '25rem' }">
        <span class="p-text-secondary block mb-5">Заполните поля</span>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="name" class="font-semibold w-6rem">Название</label>
            <InputText id="name" v-model="form.name" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="category" class="font-semibold w-6rem">Категория</label>
            <InputText id="category" v-model="form.category" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="color" class="font-semibold w-6rem">Цвет</label>
            <InputText id="email" v-model="form.color" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="price" class="font-semibold w-6rem">Цена</label>
            <InputText id="price" v-model="form.price" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="status" class="font-semibold w-6rem">Статус</label>
            <InputText id="status" v-model="form.status" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <input type="file" v-on:change="handleChangeFile($event?.target?.files)">
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Отмена" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Добавить" @click="handleStore"></Button>
        </div>
    </Dialog>
</template>

<script setup>
useHead({ title: "Admin - Samael" })
definePageMeta({
    layout: 'admin'
})

const visible = ref(false)
const form = ref({
    name: '',
    price: '',
    category: '',
    status: '',
    color: '',
})

const file = ref()

const { data } = await useAsyncData(
    'products',
    () => $fetch('/api/products')
)

const handleChangeFile = (list) => {
    list[0] && (() => { file.value = list[0] })()
}

const handleStore = () => {
    const formData = new FormData()
    const data = { ...form.value }
    for (let key in data) {
        formData.set(key, data[key] ?? '')
    }
    formData.set('image', file.value)
    $fetch('/api/product-store', {
        method: 'POST',
        body: formData
    })
}
</script>
