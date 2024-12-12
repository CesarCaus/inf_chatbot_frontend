import { Dimensions, PixelRatio } from 'react'

const { width } = Dimensions.get('window')

const figmaWidth = 1525

const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * widthPercent) / 100
  )

  return screenPixel
}

export const metrics = {
  px,
}