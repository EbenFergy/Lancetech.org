import { configureStore } from '@reduxjs/toolkit';
import { UIReducer } from '../slices/uiSlice';
import { CoreReducer } from '../slices/coreSlice';

const store = configureStore({
  reducer: {
    UIReducer: UIReducer,
    CoreReducer: CoreReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat();
  },
});

export default store;
