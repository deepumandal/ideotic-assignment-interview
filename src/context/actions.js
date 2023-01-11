export const tongle = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case "LOGIN_FORM_LOADING": {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case "LOGIN_FORM_SUCCESS": {
            localStorage.setItem('primary', action.payload.token)
            return {
                ...state,
                loading: false,
                error: false,
                data: {
                    isAuth: true,
                    userToken: action.payload.token
                }
            }
        }
        case "LOGIN_FORM_ERROR": {
            return {
                ...state,
                error: true,
                loading: false,
            }
        }
        default: return state
    }
}