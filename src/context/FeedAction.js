export const FeedAction = (state, action) => {
    switch (action.type) {
        case "FEED_LOADING": {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case "FEED_BREAD_SUCCESS": {
            return {
                ...state,
                loading: false,
                error: false,
                bread: action.payload || []
            }
        }
        case "FEED_BREAD_ERROR": {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        case "GET_BREADDATA_SUCCESS" : {
            return {
                ...state,
                data : action.payload
            }
        }

        default: {
            return state
        }
    }
}