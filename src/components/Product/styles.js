import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 6rem;

    max-width: 110.8rem;
    @media ${theme.media.desktop} {
      margin-top: 9rem;
      margin-bottom: 13rem;
      flex-direction: row;
      gap: 12.5rem;
      align-items: center;
    }
  `}
`

export const ProductInfoBox = styled.div`
  ${({ theme }) => css`
    max-width: 44.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    @media ${theme.media.desktop} {
      padding: 0;
    }
  `}
`

export const CompanyName = styled.p`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${theme.colors.primary.orange};
    margin-bottom: 2rem;
    @media ${theme.media.desktop} {
      margin-bottom: 3rem;
    }
  `}
`

export const ProductTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 2.8rem;
    margin-bottom: 3rem;
    @media ${theme.media.desktop} {
      font-size: 3.8rem;
      margin-bottom: 5rem;
    }
  `}
`
export const ProductDescription = styled.p`
  ${({ theme }) => css`
    line-height: 2rem;
    color: ${theme.colors.neutral.darkGrayishBlue};
    margin-bottom: 3.5rem;
  `}
`
export const PriceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    @media ${theme.media.desktop} {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
  `}
`

export const DiscountPrice = styled.h2`
  ${() => css`
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.8rem;
  `}
`

export const DiscountPercent = styled.span`
  ${({ theme }) => css`
    padding: 0.6rem 0.9rem;
    background-color: ${theme.colors.primary.paleOrange};
    font-size: 1.4rem;
    text-align: center;
    font-weight: 700;
    border-radius: 0.8rem;
    max-width: 5rem;
    color: ${theme.colors.primary.orange};
  `}
`

export const RealPrice = styled.h3`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.neutral.lightGrayingBlue};
    text-decoration: line-through;
  `}
`

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    @media ${theme.media.desktop} {
      grid-template-columns: 1fr 2fr;
    }
  `}
`

export const CounterContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.8rem;
    background-color: ${theme.colors.neutral.lightWhite};

    @media ${theme.media.desktop} {
      max-width: 16rem;
      width: 100%;
    }
  `}
`

export const Button = styled.img`
  padding: 2.5rem;
  opacity: 1;
  user-select: none;
  cursor: pointer;
`

export const Counter = styled.p`
  font-weight: 700;
  padding: 0 1.6rem;
  user-select: none;
`

export const AddCartButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: 700;
    color: ${theme.colors.neutral.white};
    background-color: ${theme.colors.primary.orange};
    padding: 2rem;
    border-radius: 0.8rem;
    gap: 1.5rem;

    svg {
      fill: ${theme.colors.neutral.white};
    }

    @media ${theme.media.desktop} {
      max-width: 27rem;
      cursor: pointer;
    }
  `}
`
