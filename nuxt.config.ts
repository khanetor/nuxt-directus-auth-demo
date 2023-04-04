// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["nuxt-directus", "@nuxtjs/apollo"],
    directus: {
        url: 'http://localhost:8055/'
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://localhost:8055/graphql'
            }
        },
    }
})
