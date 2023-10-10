// slidebarStore.js
import { writable } from "svelte/store";

// Initial state
const initialState = {
    isOpen: false,
};

// Create a writable store
export const slidebarStore = writable(initialState);

// Define the toggleSlidebar function
export function toggleSlidebar() {
    slidebarStore.update((state) => ({
        ...state,
        isOpen: !state.isOpen,
    }));
}
