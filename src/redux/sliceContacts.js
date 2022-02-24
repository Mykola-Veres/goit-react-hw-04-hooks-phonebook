import { createSlice } from '@reduxjs/toolkit'

// export const sliceUser = createSlice({
//   name: "user",
//   initialState: {
//     login: "",
//     isLoggedIn: false,
//   },
//   reducers: {
//     logIn(state, action) {
//       state.login = action.payload;
//       state.isLoggedIn = true;
//     },
//     logOut(state) {
//       state.login = "";
//       state.isLoggedIn = false;
//     },
//   }
// })
// export const {logIn, logOut} = sliceUser.actions

export const sliceContacts = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = [...action.payload]
    },
    filterContacts(state, action) {
      state.filter = action.payload
    },
  }
})
export const {addContacts, filterContacts, removeContacts} = sliceContacts.actions

