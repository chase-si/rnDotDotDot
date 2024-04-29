import { RefDomCurrent } from './types.js';

export const getRefDomOriginXY = (dom: RefDomCurrent) => {
  return new Promise((resolve, reject) => {
    try {
      dom.measure((x, y, widht, height, pageX, pageY) => {
        resolve({
          x: pageX,
          y: pageY
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}

export const getRandomPosition = ({
  xMin = 0,
  xMax,
  yMin = 0,
  yMax,
  randomFactor = 1
}: {
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  randomFactor?: number
}): {
  x: number;
  y: number;
} => {
  const randomX = Math.floor(Math.random() * (xMax - xMin + 1) * randomFactor + xMin)
  const randomY = Math.floor(Math.random() * (yMax - yMin + 1) * randomFactor + yMin)

  return {
    x: randomX,
    y: randomY
  }
}