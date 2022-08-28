
const initialState: InitialStateType = {
    isInitialized: false
}

type InitialStateType = {
    isInitialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP":
            return {...state}
        default:
            return state
    }
}

export const appAC = () => ({type: 'APP'} as const)

export type appACType = ReturnType<typeof appAC>

type ActionsType =
    | appACType
