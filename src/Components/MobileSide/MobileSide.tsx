import React from 'react'
import { MobileSideContainer } from './MobileSide.styled'

type Props = {}

const MobileSide = (props: Props) => {
  return (
      <MobileSideContainer>
      <picture>
        <source
          srcSet={require('../../img/iPhone15Black2x500.png')}
          media="(min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2)"
        />
        <source
          srcSet={require('../../img/iPhone15Black1x500.png')}
          media="(min-width: 1440px) and (-webkit-min-device-pixel-ratio: 1)"
        />
        <source
          srcSet={require('../../img/iPhone15Black12x300.png')}
          media="(max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)"
        />
        <source
                  srcSet={require('../../img/iPhone15Black1300.png')}
          media="(max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)"
        />
        <img
          src={require('../../img/iPhone15Black1300.png')}
          alt="phone"
        />
      </picture>
    </MobileSideContainer>
  )
}

export default MobileSide