import { ADD_PRODUCTS, FETCH_PRODUCTS, UPDATE_PRODUCTS, DELETE_PRODUCTS } from "../types/type";

let initialState = {
    products: []
}

export default function ProductReducer(state = initialState, action) {

    switch (action.type) {

        case FETCH_PRODUCTS:
            console.log("Data is Fetched", action.payload);
            return {
                ...state,
                products: action.payload,
            };

        case ADD_PRODUCTS:
            console.log("Data is Added", action.payload);
            let newProducts = state.products;
            newProducts.push(action.payload);
            return {
                ...state,
                products: newProducts,
            };

        case DELETE_PRODUCTS:
            console.log('Data in Delete', action.payload);
            let findProduct = state.products.filter((item) => item.docID !== action.payload);
            return {
                ...state,
                products: findProduct
            };

        case UPDATE_PRODUCTS:
            console.log("Data is Updeted", action.payload);
            let updateProducts = state.products.map((item) => {
                if (action.payload.docID === item.docID) {
                    return {
                        ...action.payload.data,
                        ...action.payload.docID
                    }
                } else {
                    return item
                }
            });
            return {
                ...state,
                products: updateProducts
            };

        default:
            return state;
    }

}