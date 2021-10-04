let initialState = {products:[{name:"ash",price:12},{name:'asd',price:15}]}
export default function ProductsReducer(state = initialState, action){
    switch(action.type) {
        case 'products/add':
        let newProducts = [...state.products, action.products]
        return newProducts;
        default :
        return state;
    }
}