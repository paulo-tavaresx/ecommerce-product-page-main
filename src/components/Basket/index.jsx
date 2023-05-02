import P from 'prop-types'
import * as Styled from './styles'
import { context } from '../../contexts/CartProvider/context'
import { useContext } from 'react'
import { Container } from '../Container'
import { Image } from '../Image'
import { formater } from '../../utils/formater'

export const Basket = ({ cartVisible = false }) => {
  const { productsInCart, setProductsInCart } = useContext(context)

  function handleRemoveProduct(productIndex) {
    setProductsInCart((previousProducts) => {
      const newProductsList = [...previousProducts]
      newProductsList.splice(productIndex, 1)
      return newProductsList
    })
  }

  return (
    <Styled.Container basketVisible={cartVisible}>
      <Styled.Display>Cart</Styled.Display>
      {productsInCart.length > 0 && (
        <Styled.BasketList>
          {productsInCart.map((product, index) => (
            <Styled.BasketItem key={index}>
              <Styled.ProductImg src={product.srcImg} alt="product image" />
              <Container>
                <Styled.Text>{product.name}</Styled.Text>
                <Container>
                  <Styled.Text as={'span'}>{`${formater.format(
                    product.discountPrice
                  )} x ${product.quantity} `}</Styled.Text>
                  <Styled.Strong>
                    {formater.format(product.discountPrice * product.quantity)}
                  </Styled.Strong>
                </Container>
              </Container>

              <Image
                onClick={() => handleRemoveProduct(index)}
                srcImg="/images/icon-delete.svg"
              />
            </Styled.BasketItem>
          ))}
          <Styled.Button>Checkout</Styled.Button>
        </Styled.BasketList>
      )}
      {productsInCart.length === 0 && (
        <Styled.BasketEmptyText>Your cart is empty.</Styled.BasketEmptyText>
      )}
    </Styled.Container>
  )
}

Basket.propTypes = {
  cartVisible: P.bool,
}
