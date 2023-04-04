<template>
    <form @submit.prevent="submit">
        <div><input type="text" placeholder="email" v-model="inputForm.email" /></div>
        <div><input type="password" placeholder="password" v-model="inputForm.password" /></div>
        <button type="submit">Login</button>
    </form>
</template>

<script lang="ts" setup>
const inputForm = reactive({
    email: "",
    password: ""
})

const { login } = useDirectusAuth()
const { onLogin } = useApollo()

async function submit() {
    if (!inputForm.email || !inputForm.password) {
        return
    }

    const auth = await login(inputForm)

    console.log("Authenticated with: ", auth)

    onLogin(auth.access_token)

    return navigateTo("/")
}
</script>