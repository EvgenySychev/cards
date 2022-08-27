const InitialState: InitialStateType = {
    password: '123456'
}

type InitialStateType = {
    password: string
}

export const passwordReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const passwordAC = () => ({type: 'LOGIN'} as const)

type PasswordACType = ReturnType<typeof passwordAC>

type ActionsType =
    |PasswordACType