import { configureStore } from '@reduxjs/toolkit'
import overviewReducer from '../components/overview/overviewSlice'

export default configureStore({
  reducer: {
    overview: overviewReducer
  }
})