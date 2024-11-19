import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // This should be populated with your product data
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.items = action.payload;
        },
        updateProducts(state, action) {
            const updatedProducts = action.payload;
            state.items = state.items.map(product =>
                updatedProducts.find(updated => updated.id === product.id) || product
            );
        }
    }
});

export const { setProducts, updateProducts } = productsSlice.actions;
export default productsSlice.reducer;
