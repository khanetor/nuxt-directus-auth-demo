<template>
    <div>
        <div>
            Hello World
        </div>
        <button @click="runRefresh">Refresh token</button>

        <div v-if="pending">Loading clubs...</div>

        <ul v-if="!!data">
            <li v-for="club in data.clubs">
                {{ club.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ["auth"]
})

const { refreshTokens } = useDirectusToken()
// const { getItems } = useDirectusItems()

async function runRefresh() {
    const auth = await refreshTokens()
    console.log(auth)
}

type Club = { id: number, name: string }

const query = gql`
    query {
        clubs {
            id
            name
        } 
    }
`

const variables = {}

const { data, pending } = await useAsyncQuery<{ clubs: Club[] }>(query, variables)
console.log(data.value)
</script>