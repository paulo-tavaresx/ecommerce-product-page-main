import P from 'prop-types'
import * as Styled from './styles'

export const Image = ({ srcImg, onClick = null, alt = undefined }) => {
  return <Styled.Container onClick={onClick} src={srcImg} alt={alt} />
}

Image.propTypes = {
  srcImg: P.string.isRequired,
  onClick: P.func,
  alt: P.string,
}
