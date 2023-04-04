export default defineNuxtRouteMiddleware(async function(to, from) {
    const {token, refreshToken, expires, refreshTokens } = useDirectusToken()
    const user = useDirectusUser()

    const { onLogin } = useApollo()

    console.log("Token: ", token.value)
    console.log("Refresh token: ", refreshToken.value)
    console.log("Expire: ", expires.value)
    console.log("User: ", user.value)

    if (!user.value) {
        try {
            console.log("Refreshing token")
            const auth = await refreshTokens()
            console.log(auth)
            onLogin(auth?.access_token)
            
        } catch {
            return navigateTo("/login")
        }
    }
})