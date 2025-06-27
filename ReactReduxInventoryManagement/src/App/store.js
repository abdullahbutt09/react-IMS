import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "../Features/InventorySlice";

export const store = configureStore({
    reducer: {
        inventory: inventorySlice,
    },
});