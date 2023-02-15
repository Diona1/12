export const reducer = (state, action) => {
    switch (action.type) {
        // for comments
        case "READ_MORE":
            return {
                ...state,
                sliceLast: state.sliceLast = state.length,
                read: state.read = true
            }
        case "READ_LESS":
            return {
                ...state,
                sliceLast: state.sliceLast = "180",
                read: state.read = false
            }
        // for load more
        case "LOAD_MORE":
            return {
                ...state,
                index: state.index + 4
            }
        case "IS_COMPLETED": {
            return {
                ...state,
                completed: state.completed = true
            }
        }
        // for loading
        case "LOADING": {
            return {
                ...state,
                loading: state.loading = true
            }
        }
        case "LOADING_FALSE": {
            return {
                ...state,
                loading: state.loading = false
            }
        }
        // for openMovies Info
        case "OPEN_TRUE": {
            return {
                ...state,
                info: state.info = true
            }
        }
        case "OPEN_FALSE": {
            return {
                ...state,
                info: state.info = false
            }
        }
        // for filter
        case "FILTER_TRENDING": {
            return {
                ...state,
                trendingFilter: action.nextTrend
            }
        }
        case "FILTER_TOP": {
            return {
                ...state,
                topFilter: action.topFilter
            }
        }
        case "FILTER_UP": {
            return {
                ...state,
                upFilter: action.upFilter
            }
        }
        case "FILTER_SIMILAR": {
            return {
                ...state,
                simFilter: action.nextSim
            }
        }
        case "IMAGE_SIZE": {
            return {
                ...state,
                size: action.newSize
            }
        }
        case "DEFAULT_IMAGE_SIZE": {
            return {
                ...state,
                size: state.size = "w500"
            }
        }
        case "SPEED": {
            return {
                ...state,
                speed: action.newSpeed
            }
        }
        case "DEFAULT_SLIDER_SPEED": {
            return {
                ...state,
                speed: state.speed = "10000"
            }
        }
        case "THEME": {
            return {
                ...state,
                color: action.payload
            }
        }
        case "DEFAULT_THEME": {
            return {
                ...state,
                color: state.color = "#e6b31e"
            }
        }
        default:
            return;
    }
}

export const initial = {
    size: "w500",
    trendingFilter: "all",
    topFilter: "all",
    upFilter: "all",
    simFilter: "all",
    color: window.localStorage.getItem("THEME_COLOR") == null ?
        "#e6b31e" : window.localStorage.getItem("THEME_COLOR"),
    speed: "10000"
}