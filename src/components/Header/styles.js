import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    padding: 2rem 2.5rem 2.5rem;
    width: 100%;
    max-width: 111rem;

    @media ${theme.media.desktop} {
      padding: 3rem 0.5rem 3.5rem;
      border-bottom: 1px solid ${theme.colors.neutral.lightGrayingBlue};
      gap: 6rem;
    }
  `}
`

export const Menu = styled.img`
  ${({ theme }) => css`
    display: block;
    cursor: pointer;

    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`

export const Logo = styled.img``

export const Archor = styled.a`
  ${() => css`
    font-size: 1.6rem;
  `}
`
export const NavLinks = styled.nav`
  ${({ theme }) => css`
    display: none;
    flex-direction:column
    cursor: pointer;
    column-gap: 3.5rem;

    @media ${theme.media.desktop} {
      display: flex;
      flex-direction: row;
    }
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 2.5rem;
    position: relative;

    @media ${theme.media.desktop} {
      gap: 4.5rem;
    }
  `}
`

export const Cart = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 2.5rem;
    cursor: pointer;

    @media ${theme.media.desktop} {
      width: 5rem;
    }
  `}
`

export const Basket = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 33.5rem;
    border-radius: 0.8rem;
    right: -1.5rem;
    top: 6rem;
    margin: 0 auto 0 0;
    z-index: 1;
    background-color: purple;
    background-color: ${theme.colors.neutral.white};
    box-shadow: 0.1rem 0.5rem 1.5rem rgba(0, 0, 0, 0.3);
  `}
`

export const Display = styled.p`
  ${({ theme }) => css`
    padding: 2.5rem 2.5rem 3rem;
    font-weight: 700;
    border-bottom: 1px solid ${theme.colors.neutral.lightGrayingBlue};
  `}
`

export const BasketListBox = styled.div`
  ${() => css`
    padding: 2.5rem 2.5rem 3rem;
  `}
`
