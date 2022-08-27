const InitialState: InitialStateType = {
    isLoggedIn: false
}

type InitialStateType = {
    isLoggedIn: boolean
}

export const authReducer = (state:InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }

}

export const authAC = () => ({type: 'AUTH'} as const)

export type authACType = ReturnType<typeof authAC>

type ActionsType =
    |authACType