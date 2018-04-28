import {
  randomlyAddCell,
  matrixize,
  getCoordinate
} from './MBoard'

describe('MBoard', () => {
  describe('randomlyAddCell', () => {
    test('randomly adds 2 to the cells', () => {
      let cells = (new Array(16)).fill(null)
      let modifiedCells = randomlyAddCell(cells)
      let twoTimesModifiedCell = randomlyAddCell(modifiedCells)

      let cellWithElement = modifiedCells.reduce((acc, cell) => {
        return acc += (cell !== null) ? 1 : 0
      }, 0)
      let cellsWithElementAfterTwoTimesModified = twoTimesModifiedCell.reduce((acc, cell) => {
        return acc += (cell !== null) ? 1 : 0
      }, 0)

      expect(cellWithElement).toBe(1)
      expect(cellsWithElementAfterTwoTimesModified).toBe(2)
    })
  })
})
