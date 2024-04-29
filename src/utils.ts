
export const getRefDomOriginXY = (dom: {
    measure: (callback: (x: number, y: number, width: number, height: number, left: number, top: number) => void) => void
}) => {
    return new Promise((resolve, reject) => {
        dom.measure((x, y, widht, height, left, top) => {
            resolve({
                x,
                y
            })
        })
    })
}

export const getRandomPosition = ({
    xMin = 0,
    xMax,
    yMin = 0,
    yMax,
    originPosition
} : {
    xMin: number,
    xMax: number,
    yMin: number,
    yMax: number,
    originPosition: { x: number, y: number }
}) => {
    const { x: originX, y: originY } = originPosition
    console.log(1, xMax, yMax)
    const randomX = Math.floor(Math.random() * (xMax - xMin + 1) + xMin)
    const randomY = Math.floor(Math.random() * (yMax - yMin + 1) + yMin)

    let newX = randomX
    let newY = randomY
    if (randomX + originX > xMax) {
        newX = randomX - originX
    } else if (randomX + originX < xMin) {
        newX = randomX + originX
    }
    // if (randomY + originY > yMax) {
    //     newY = randomY - originY
    // } else if (randomY + originY < yMin) {
    //     newY = randomY + originX
    // }
    console.log(2)
    return {
        x: newX,
        y: randomY
    }
}