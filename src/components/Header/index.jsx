import { useContext, useState } from 'react'
import * as Styled from './styles'
import { Basket } from '../Basket'
import { context } from '../../contexts/CartProvider/context'
import { Image } from '../Image'
import { Container } from '../Container'

export const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false)
  const [cartVisible, setCartVisible] = useState(false)
  const { productsInCart } = useContext(context)
  let counterProductsInCart = productsInCart
    .reduce((currentValue, { quantity }) => currentValue + quantity, 0)
    .toString()

  return (
    <Styled.Container>
      <Styled.Menu
        onClick={() => setmenuVisible(!menuVisible)}
        src={menuVisible ? '/images/icon-close.svg' : '/images/icon-menu.svg'}
      />
      <Styled.Archor href="#">
        <Styled.Logo src="/images/logo.svg" alt="logo" />
      </Styled.Archor>
      <Container as={'nav'}>
        <Styled.NavLinks menuVisible={menuVisible}>
          <Styled.NavItem>
            <Styled.Archor href="#">Collections</Styled.Archor>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.Archor href="#">Men</Styled.Archor>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.Archor href="#">Women</Styled.Archor>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.Archor href="#">About</Styled.Archor>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.Archor href="#">Contact</Styled.Archor>
          </Styled.NavItem>
        </Styled.NavLinks>
      </Container>

      <Styled.Box>
        <Styled.CartContainer>
          {counterProductsInCart > 0 && (
            <Styled.DisplayQuantityInCart>
              {counterProductsInCart}
            </Styled.DisplayQuantityInCart>
          )}
          <Image
            onClick={() => setCartVisible(!cartVisible)}
            srcImg="/images/icon-cart.svg"
            alt="cart"
          />
        </Styled.CartContainer>

        <Styled.Avatar src="/images/image-avatar.png" alt="avatar" />
        <Basket cartVisible={cartVisible} />
      </Styled.Box>
    </Styled.Container>
  )
}
