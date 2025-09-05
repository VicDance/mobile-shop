import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProductList from '../products/ProductList'
import ProductDetail from '../products/ProductDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ProductList /> },
      { path: 'product/:id', element: <ProductDetail /> }
    ]
  }
])
