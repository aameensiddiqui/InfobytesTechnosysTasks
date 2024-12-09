import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Components/redux/store.js'
import { Provider } from 'react-redux'
import { productsFetch } from './Components/redux/product/productsSlice.js'
import { getTotal } from './Components/redux/cart/cartSlice.js'

store.dispatch(productsFetch())
store.dispatch(getTotal())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
