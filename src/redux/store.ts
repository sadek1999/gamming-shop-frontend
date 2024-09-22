import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/api'
import cardReducer from "./features/cardSlice"

export const store = configureStore({
  reducer: {
    card:cardReducer,
   [baseApi.reducerPath]:baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch