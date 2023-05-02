import styled, { css } from 'styled-components'

const cartBasketVisible = () => css`
  visibility: visible;
  opacity: 1;
`

export const Container = styled.div`
  ${({ theme, basketVisible }) => css`
    position: absolute;
    width: 33.5rem;
    right: -1.5rem;
    top: 6rem;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    margin: 0 auto 0 0;
    border-radius: 0.8rem;
    transition: opacity 0.5s ease-in-out;
    background-color: ${theme.colors.neutral.white};
    box-shadow: 0.1rem 0.5rem 1.5rem rgba(0, 0, 0, 0.3);

    ${basketVisible && cartBasketVisible()}
    @media ${theme.media.laptop} {
      width: 36rem;
    }
  `}
`

export const Display = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    padding: 2.5rem 2.5rem 3rem;
    border-bottom: 1px solid ${theme.colors.neutral.lightGrayingBlue};
  `}
`

export const BasketList = styled.ul`
  ${() => css`
    padding: 2.5rem 2.5rem 3rem;
    list-style-type: none;
  `}
`

export const BasketItem = styled.li`
  ${() => css`
    display: flex;
    gap: 1.8rem;
    align-items: center;
    margin-bottom: 2.5rem;
  `}
`

export const BasketEmptyText = styled.p`
  ${({ theme }) => css`
    padding: 8.5rem 2.5rem;
    text-align: center;
    font-weight: 700;
    color: ${theme.colors.neutral.darkGrayishBlue};
  `}
`

export const ProductImg = styled.img`
  ${() => css`
    width: 5rem;
    border-radius: 0.5rem;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.colors.neutral.darkGrayishBlue};
  `}
`

export const Strong = styled.strong`
  color: #000;
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    gap: 1.5rem;
    cursor: pointer;
    align-items: center;
    padding: 2rem 12rem;
    border-radius: 0.8rem;
    justify-content: center;
    border: none;
    font-weight: 700;
    color: ${theme.colors.neutral.white};
    background-color: ${theme.colors.primary.orange};
  `}
`
