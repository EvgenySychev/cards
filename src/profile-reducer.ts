const InitialState: InitialStateType = {
    profile: 'start'
}

type InitialStateType = {
    profile:string
}

export const profileReducer = (state:InitialStateType= InitialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case "PROFILE":
            return {...state}
        default:
            return state
    }
}

export const profileAC = () => ({type:'PROFILE'} as const)

type ProfileACType = ReturnType<typeof profileAC>

type ActionsType =
    |ProfileACType