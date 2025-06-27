import { createSlice , nanoid } from "@reduxjs/toolkit";

const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

const initialState = {
  products: savedProducts.length > 0 ? savedProducts : [
    { id: nanoid(), name: "Product 1", category: "Product Category", quantity: 10, price: 100 }
  ]
};

const saveToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { name, quantity, price  , category} = action.payload;
            state.products.push({
                id: nanoid(),
                name,
                quantity,
                price,
                category
            });
            saveToLocalStorage(state.products);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            saveToLocalStorage(state.products);
        },
        updateProduct: (state, action) => {
            const { id , name, quantity, price , category} = action.payload;
            const existingProduct = state.products.find((product) => product.id === id);
            if (existingProduct) {
                existingProduct.name = name;
                existingProduct.quantity = quantity;
                existingProduct.price = price;
                existingProduct.category = category;
                saveToLocalStorage(state.products);
            }
        },
        clearInventory: (state) => {
            state.products = [];
            saveToLocalStorage([]);
        },
    }
});

export const { addProduct, removeProduct, updateProduct, clearInventory } = inventorySlice.actions;
export default inventorySlice.reducer;