/*import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    //items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    items: [],
    statusTab: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({productId, quantity});
            }
            //localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }else{
                state.items = (state.items).filter(item => item.productId !== productId);
            }
           // localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state){
            if(state.statusTab === false){
                state.statusTab = true;
            }else{
                state.statusTab = false;
            }
        }
    }
})
export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;*/
/*import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    statusTab: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
        },
        changeQuantity(state, action){
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = (state.items).filter(item => item.productId !== productId);
            }
        },
      
        toggleStatusTab(state){
            if(state.statusTab === false){
                state.statusTab = true;
            }else{
                state.statusTab = false;
            }
        },
        
        clearCart(state) {
            state.items = [];
        }
    }
});

export const { addToCart, changeQuantity, toggleStatusTab, clearCart } = cartSlice.actions;
export default cartSlice.reducer;*/
/*import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    statusTab: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId);
            }
        },
        openStatusTab(state) {
            state.statusTab = true;
        },
        closeStatusTab(state) {
            state.statusTab = false;
        },
        clearCart(state) {
            state.items = [];
        }
    }
});

export const { addToCart, changeQuantity, openStatusTab, closeStatusTab, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

*/
// Corrected one


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    //statusTab: true
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId);
            }
        },
      /*  openStatusTab(state) {
            state.statusTab = true;
        },
        closeStatusTab(state) {
            state.statusTab = false;
        },*/
        clearCart(state) {
            state.items = [];
        }
    }
});

export const { addToCart, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],
//     //statusTab: true
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             const { productId, quantity } = action.payload;
//             const indexProductId = state.items.findIndex(item => item.productId === productId);
//             if (indexProductId >= 0) {
//                 state.items[indexProductId].quantity += quantity;
//             } else {
//                 state.items.push({ productId, quantity });
//             }
//         },
//         changeQuantity(state, action) {
//             const { productId, quantity } = action.payload;
//             const indexProductId = state.items.findIndex(item => item.productId === productId);
//             if (quantity > 0) {
//                 state.items[indexProductId].quantity = quantity;
//             } else {
//                 state.items = state.items.filter(item => item.productId !== productId);
//             }
//         },
//       /*  openStatusTab(state) {
//             state.statusTab = true;
//         },
//         closeStatusTab(state) {
//             state.statusTab = false;
//         },*/
//         clearCart(state) {
//             state.items = [];
//         }
//     }
// });

// export const { addToCart, changeQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

