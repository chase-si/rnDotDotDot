import { it } from '@jest/globals';

import { getRandomPositions } from '../src/utils'

it("test getRandomPositions", () => {
  expect(
    getRandomPositions({ xMin: 0, xMax: 10, yMin: 0, yMax: 10, arrLength: 5 }))
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number)
      })
  ]))
})