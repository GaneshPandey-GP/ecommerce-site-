export const initialState = {
    product_list: [],
    product: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCT_LIST":
            return{
                ...state,
                product_list: action.product_list
            }
        case "SET_PRODUCT":
            return{
                ...state,
                product: action.product
            }           
           
        default:
            return state;
    }
    
}