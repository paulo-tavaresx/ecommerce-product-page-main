import { Header } from './components/Header'
import { Product } from './components/Product'
import { CartProvider } from './contexts/CartProvider'

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Product />
      </CartProvider>
    </>
  )
}

export default App
