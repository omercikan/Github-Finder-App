const UsersReducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_USERS': 
            return {
                ...state,
                users: action.users,
                loading: false
            }
        case 'SET_OTHER_USERS': 
            return {
                ...state,
                otherUsers: action.otherUsers
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS': 
            return {
                ...state,
                users: [],
                otherUsers: [],
                loading: false
            }
        default: 
            return state;
    }
};

export default UsersReducer;