import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import {sliceContacts} from "./sliceContacts"

// export const icrement = createAction("myValue/icrement")
// export const decrement = createAction("myValue/decrement")
// console.log(icrement.toString())

// const myReducer = createReducer(100, {
//     [icrement]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// })

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   }
// })

// const sliceCounter = createSlice({
//   name: "myValue",
//   initialState: 150,
//   reducers: {
//     icrement(state, action) {
//       return state + action.payload
//     },
//     decrement(state, action) {
//       return state - action.payload
//     },
//   }
// })
// export const {icrement, decrement} = sliceCounter.actions

// export const store2 = configureStore({
//   reducer: {
//     user: sliceUser.reducer,
//     myValue: sliceCounter.reducer,
//   }
// })

export const store = configureStore({
  reducer: {
    contacts: sliceContacts.reducer,
  }
})

