<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <DataView :value="data?.products ?? []" :layout="layout" dataKey="id">
          <template #header>
            <div class="grid grid-nogutter">
              <div class="col-6 text-right">
                <DataViewLayoutOptions v-model="layout" />
              </div>
            </div>
          </template>
          <template #list="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                <ListItem :item="item" :index="index" />
              </div>
            </div>
          </template>
          <template #grid="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                <GridItem :item="item" :index="index" />
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>
</template>
ƒ
<script lang="tsx" setup>
import ListItem from '@/components/catalog/list-item.vue'
import GridItem from '@/components/catalog/grid-item.vue'

useHead({ title: "Catalog - Samael" })
const layout = ref<'grid' | 'list'>('grid')

const { data } = await useAsyncData(
  'products',
  () => $fetch('/api/products')
)
</script>