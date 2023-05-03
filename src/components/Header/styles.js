import styled, { css } from 'styled-components'

const setMenuVisible = (theme) => css`
  opacity: 1;
  visibility: visible;
  z-index: 4;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 9rem 3.5rem;
  width: 25rem;
  height: 100vh;
  z-index: 3;
  background-color: ${theme.colors.neutral.white};

  & ${Archor} {
    font-size: 1.8rem;
    font-weight: 700;
    color: #000;
    z-index: index 6;
  }
`

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

    @media ${theme.media.laptop} {
      padding: 3rem 2.5rem 3.5rem;
      border-bottom: 1px solid ${theme.colors.neutral.lightGrayingBlue};
      gap: 6rem;
    }
    @media ${theme.media.desktop} {
      padding: 3rem 0.5rem 3.5rem;
    }
    @media ${theme.media.largeDesktop} {
      max-width: 130rem;
    }
  `}
`

export const Menu = styled.img`
  ${({ theme }) => css`
    display: block;
    z-index: 5;
    cursor: pointer;
    @media ${theme.media.laptop} {
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
export const NavLinks = styled.ul`
  ${({ theme, menuVisible }) => css`
    opacity: 0;
    visibility: hidden;
    display: none;
    list-style-type: none;
    cursor: pointer;
    column-gap: 3.5rem;
    @media ${theme.media.mobile} {
      ${menuVisible && setMenuVisible(theme)}
    }
    @media ${theme.media.laptop} {
      display: flex;
      opacity: 1;
      visibility: visible;
    }
  `}
`
export const NavItem = styled.li`
  ${({ theme }) => css`
    position: relative;
    transition: 0.5s ease-in-out;
    @media ${theme.media.laptop} {
      &:hover {
        &::before {
          content: '';
          position: absolute;
          top: 6.5rem;
          left: 0;
          width: 100%;
          height: 0.5rem;
          background-color: ${theme.colors.primary.orange};
        }
      }
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

    @media ${theme.media.laptop} {
      gap: 4.5rem;
    }
  `}
`
export const CartContainer = styled.div`
  cursor: pointer;
  position: relative;
`
export const DisplayQuantityInCart = styled.span`
  ${({ theme }) => css`
    position: absolute;
    width: 2rem;
    left: 50%;
    top: -0.5rem;
    font-size: 0.9rem;
    text-align: center;
    background-color: ${theme.colors.primary.orange};
    color: ${theme.colors.neutral.white};
    border-radius: 8rem;
  `}
`

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 2.6rem;
    border: 2px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    @media ${theme.media.laptop} {
      width: 5rem;
      &:hover {
        border-color: ${theme.colors.primary.orange};
      }
    }
  `}
`
