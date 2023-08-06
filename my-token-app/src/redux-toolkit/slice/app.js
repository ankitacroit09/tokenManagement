import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tokenList:[]
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTokenList: (state, action) => {
      console.log(action.payload)
      state.tokenList = action.payload
    },
  }
})

export const {
  setTokenList
} = appSlice.actions
export default appSlice.reducer
