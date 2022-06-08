import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface DarkModeState {
  value: boolean
}

// Define the initial state using that type
const initialState: DarkModeState = {
  value: false
}

export const darkModeSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state: any) => {
      state.value = !state.value
    },

  },
})

export const { toggle } = darkModeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.darkMode.value

export default darkModeSlice.reducer