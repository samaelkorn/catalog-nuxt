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

const InlineComponent = () => {
    return <div >
        {list.map(item =>
            <div key={item.path} class="mb-3">
                <NuxtLink to={item.path}>
                    <Button label={item.label} />
                </NuxtLink>
            </div>
        )}
    </div>
}

</script>

<template>
    <InlineComponent />
</template>