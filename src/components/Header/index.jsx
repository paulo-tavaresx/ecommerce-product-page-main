import { useState } from 'react'
import * as Styled from './styles'

export const Header = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <Styled.Container>
      <Styled.Menu
        onClick={() => setVisible(!isVisible)}
        src={isVisible ? '/images/icon-close.svg' : '/images/icon-menu.svg'}
      />
      <Styled.Archor href="#">
        <Styled.Logo src="/images/logo.svg" />
      </Styled.Archor>
      <Styled.NavLinks>
        <Styled.Archor href="#">Collections</Styled.Archor>
        <Styled.Archor href="#">Men</Styled.Archor>
        <Styled.Archor href="#">Women</Styled.Archor>
        <Styled.Archor href="#">About</Styled.Archor>
        <Styled.Archor href="#">Contact</Styled.Archor>
      </Styled.NavLinks>

      <Styled.Box>
        <Styled.Cart src="/images/icon-cart.svg" />

        <Styled.Avatar src="/images/image-avatar.png" />
        <Styled.Basket>
          <Styled.Display>Cart</Styled.Display>
          <Styled.BasketListBox></Styled.BasketListBox>
        </Styled.Basket>
      </Styled.Box>
    </Styled.Container>
  )
}
