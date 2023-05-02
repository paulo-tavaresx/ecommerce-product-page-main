import P from 'prop-types'
import { context } from './context'
import { useState } from 'react'
import { productsList } from '../../utils/productsList'

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([])

  return (
    <context.Provider
      value={{ productsInCart, setProductsInCart, productsList }}
    >
      {children}
    </context.Provider>
  )
}

CartProvider.propTypes = {
  children: P.node.isRequired,
}
