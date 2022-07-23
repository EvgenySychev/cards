const InitialState: InitialStateType = {
    login: 'start'
}

type InitialStateType = {
    login: string
}

export const loginReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const loginAC = () => ({type: 'LOGIN'} as const)

type LoginACType = ReturnType<typeof loginAC>

type ActionsType =
    |LoginACType