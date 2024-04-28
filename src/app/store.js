
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const initialState = {
  auth: {
    status: true,
    userData: null,
  }
};

const saveToLocalStorage = (state) => {
  try {
    const newState = {
      auth: state.auth,
    };
    const serializedState = JSON.stringify(newState);
    localStorage.setItem("Class-Hub", serializedState);
  } catch (e) {
    console.warn(e);
    alert(e.message);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("Class-Hub");
    if (serializedState === null) return initialState;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return initialState;
  }
};

const rootReducer = {
  auth: authSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: loadFromLocalStorage(),
});

// Subscribe to store changes and save to local storage
store.subscribe(() => {
  const state = store.getState();
  // Save state to local storage
  saveToLocalStorage(state);
});

export default store;
