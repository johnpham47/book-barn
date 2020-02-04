const initialState = {
    isAuth: false,
    cart: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuth: true
            }
        
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false
            }
        
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart + 1
            }
    }
    return state
}

export default reducer