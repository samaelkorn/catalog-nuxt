<template>
    <div
        class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">Вход</div>
                        <span class="text-600 font-medium">В административную панель</span>
                    </div>
                    <form @submit.prevent="signInWithOAuth">
                        <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email" type="text" placeholder="Email" class="w-full md:w-30rem mb-5"
                            style="padding: 1rem" v-model="email" />
                        <label for="password" class="block text-900 font-medium text-xl mb-2">Пароль</label>
                        <Password id="password" v-model="password" placeholder="Пароль" :feedback="false"
                            :toggleMask="true" class="w-full mb-3" inputClass="w-full"
                            :inputStyle="{ padding: '1rem' }"></Password>
                        <Button type="submit" label="Войти" class="w-full p-3 text-xl" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="tsx" setup>
useHead({ title: "Login - Samael" })
definePageMeta({
    layout: 'login'
})

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const signInWithOAuth = () => {
    supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    }).then(() => {
        navigateTo({ path: '/admin' })
    })
}
</script>