import styled, { css } from 'styled-components'
const isActive = () => css`
  border: 2px solid #ff7d1a;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: 0;
    background-color: #fff;
    opacity: 0.75;
  }
  &:hover {
    opacity: 1;
    cursor: none;
  }
`
const lightBoxVisible = () => css`
  opacity: 1;
  visibility: visible;
`

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: ;
    @media ${theme.media.desktop} {
      border-radius: 2rem;
      max-width: 44.5rem;
      > ${ArrowPrevious}, > ${ArrowNext} {
        display: none;
      }
    }
  `}
`

export const DisplayImage = styled.img`
  ${() => css`
    width: 100%;
    border-radius: inherit;
    cursor: pointer;
    user-select: none;
  `}
`
export const ArrowPrevious = styled.img`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: ${theme.colors.neutral.white};
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    padding: 1.3rem 1.6rem;
  `}
`
export const ArrowNext = styled.img`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: ${theme.colors.neutral.white};
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    padding: 1.3rem 1.6rem;
  `}
`

export const Trumbnails = styled.div`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.desktop} {
      margin-top: 3rem;
      max-width: 44.5rem;
      display: grid;
      place-items: center;
      gap: 2.8rem;
      grid-template-columns: repeat(auto-fill, 9rem);
    }
  `}
`
export const Trumbnail = styled.div`
  ${({ theme, backgroundImage, active }) => css`
    @media ${theme.media.desktop} {
      border-radius: 0.8rem;
      width: 100%;
      height: 9rem;
      cursor: pointer;
      user-select: none;
      position: relative;
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-color: ${theme.colors.neutral.lightGrayingBlue};

      &:hover {
        opacity: 0.5;
      }
      ${active && isActive()}
    }
  `}
`

export const LightBoxContainer = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 55rem;
    width: 100%;

    display: none;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    opacity: 0;
    visibility: hidden;

    &::before {
      content: '';
      position: absolute;
      left: -100%;
      top: -50%;
      width: 300vh;
      height: 300vh;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.75);
    }
    @media ${theme.media.desktop} {
      ${visible && lightBoxVisible()}
      display:flex;

      & > ${ArrowPrevious}, > ${ArrowNext} {
        display: block;
        cursor: pointer;
        top: 45%;
        z-index: 3;
        user-select: none;
      }
      > ${ArrowPrevious} {
        left: 0;
        transform: translate(-50%, -50%);
      }
      > ${ArrowNext} {
        right: 0;
        transform: translate(50%, -50%);
      }
    }
    ${Trumbnail} {
      z-index: 3;
    }
  `}
`
export const CloseLightBox = styled.img`
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  margin-bottom: 2.5rem;
  user-select: none;
  cursor: pointer;
  z-index: 2;
`

export const LightBoxImg = styled.img`
  width: 100%;
  border-radius: 1.5rem;
  user-select: none;
  z-index: 2;
`
