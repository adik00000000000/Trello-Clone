import { createSlice } from "@reduxjs/toolkit";

const trelloSlice = createSlice({
  name: "trello",
  initialState: {
    task: [],
    isOpenCart: false,
    modal: false,
    cartId: null,
  },
  reducers: {
    addTrello: (state, action) => {
      state.task = [...state.task, action.payload];
    },
    addCard: (state, action) => {
      state.task.map((item) => {
        if (item.id === action.payload.parrentId) {
          item.description.push(action.payload);
        }
      });
    },
    deleteCard: (state, action) => {
      state.task = state.task.filter((item) => item.id !== action.payload);
    },
    updateTrello: (state, action) => {
      const { id, cartTitle } = action.payload;
      state.task.forEach((task) => {
        const card = task.description.find((item) => item.id === id);
        if (card) {
          card.cartTitle = cartTitle;
        }
      });
    },
    openCart: (state, action) => {
      state.isOpenCart = true;
      state.cartId = action.payload.id;
    },
    closeCart: (state) => {
      state.isOpenCart = false;
      state.cartId = null;
    },
    modalOpen: (state) => {
      state.modal = true;
    },
    modalClose: (state) => {
      state.modal = false;
    },
  },
});

export const {
  addTrello,
  addCard,
  deleteCard,
  openCart,
  closeCart,
  modalClose,
  modalOpen,
  updateTrello,
} = trelloSlice.actions;
export const trelloReducer = trelloSlice.reducer;
