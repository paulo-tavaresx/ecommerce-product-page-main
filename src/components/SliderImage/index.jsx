import * as Styled from './styles'
import { imagesList } from './imagesList'
import { useState } from 'react'

export const SliderImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxVisible, setLightboxVisible] = useState(false)

  function handleArrowNext() {
    setCurrentImageIndex((previewIndex) => {
      if (previewIndex + 1 === imagesList.length) {
        return 0
      } else {
        return previewIndex + 1
      }
    })
  }

  function handleArrowPrevious() {
    setCurrentImageIndex((previewIndex) => {
      if (previewIndex - 1 < 0) {
        return imagesList.length - 1
      } else {
        return previewIndex - 1
      }
    })
  }

  function handleTrumbanail(index) {
    setCurrentImageIndex((previewIndex) => {
      if (previewIndex !== index) {
        return index
      } else {
        return previewIndex
      }
    })
  }

  return (
    <Styled.Container>
      <Styled.DisplayImage
        onClick={() => setLightboxVisible(true)}
        src={imagesList[currentImageIndex]}
      />
      <Styled.ArrowPrevious
        onClick={handleArrowPrevious}
        src="/images/icon-previous.svg"
      />
      <Styled.ArrowNext onClick={handleArrowNext} src="/images/icon-next.svg" />

      <Styled.Trumbnails>
        {imagesList.map((srcImg, index) => (
          <Styled.Trumbnail
            onClick={() => handleTrumbanail(index)}
            key={index}
            backgroundImage={srcImg}
            active={index === currentImageIndex}
          />
        ))}
      </Styled.Trumbnails>

      <Styled.LightBoxContainer visible={lightboxVisible}>
        <Styled.CloseLightBox
          onClick={() => setLightboxVisible(false)}
          src="/images/icon-close.svg"
        />
        <Styled.LightBoxImg src={imagesList[currentImageIndex]} />
        <Styled.ArrowPrevious
          onClick={handleArrowPrevious}
          src="/images/icon-previous.svg"
        />
        <Styled.ArrowNext
          onClick={handleArrowNext}
          src="/images/icon-next.svg"
        />

        <Styled.Trumbnails>
          {imagesList.map((srcImg, index) => (
            <Styled.Trumbnail
              onClick={() => handleTrumbanail(index)}
              key={index}
              backgroundImage={srcImg}
              active={index === currentImageIndex}
            />
          ))}
        </Styled.Trumbnails>
      </Styled.LightBoxContainer>
    </Styled.Container>
  )
}
