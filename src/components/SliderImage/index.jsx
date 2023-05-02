import * as Styled from './styles'
import { imagesList } from './imagesList'
import { useState } from 'react'

export const SliderImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightBoxVisible, setLightBoxVisible] = useState(false)

  function handleArrowNext() {
    setCurrentImageIndex((previousIndex) => {
      if (previousIndex + 1 === imagesList.length) {
        return 0
      } else {
        return previousIndex + 1
      }
    })
  }

  function handleArrowPrevious() {
    setCurrentImageIndex((previousIndex) => {
      if (previousIndex - 1 < 0) {
        return imagesList.length - 1
      } else {
        return previousIndex - 1
      }
    })
  }

  function handleTrumbanail(index) {
    if (currentImageIndex !== index) {
      setCurrentImageIndex(index)
    }
  }

  return (
    <Styled.Container>
      <Styled.DisplayImage
        onClick={() => setLightBoxVisible(true)}
        src={imagesList[currentImageIndex]}
      />
      <Styled.ArrowPrevious
        onClick={handleArrowPrevious}
        src="/images/icon-previous.svg"
        alt="previous image arrow"
      />
      <Styled.ArrowNext
        onClick={handleArrowNext}
        src="/images/icon-next.svg"
        alt="next image arrow"
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

      <Styled.LightBoxContainer lightBoxVisible={lightBoxVisible}>
        <Styled.CloseLightBox
          onClick={() => setLightBoxVisible(false)}
          src="/images/icon-close.svg"
        />
        <Styled.LightBoxImg src={imagesList[currentImageIndex]} />
        <Styled.ArrowPrevious
          onClick={handleArrowPrevious}
          src="/images/icon-previous.svg"
          alt="previous image arrow"
        />
        <Styled.ArrowNext
          onClick={handleArrowNext}
          src="/images/icon-next.svg"
          alt="next image arrow"
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
