export const goToCart = (history) =>
{
    history.push("/cart")
}

export const goToHome = (history) =>
{
    history.push("/")
}

export const goToSignUp = (history) =>
{
    history.push("/signUp")
}

export const goToLogin= (history) =>
{
    history.push("/login")
}

export const goToProfile = (history) =>
{
    history.push(`/profile`)
}

export const goToRestaurante = (history, id) =>
{
    history.push(`/restaurant/${id}`)
}

export const goToSearch = (history) =>
{
    history.push("/search")
}

export const goToAddress = (history) =>
{
    history.push("/address")
}

export const goToPerfil = (history) =>
{
    history.push("/perfil")
}
