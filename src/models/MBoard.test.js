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

  describe('matrixize', () => {
    test('creates a 2 dimension array from a single dimension array', () => {
      let cells = (new Array(16)).fill(null)
      let matrix = matrixize(cells)

      expect(matrix.length).toBe(4)
      expect(matrix[0].length).toBe(4)
      expect(matrix[1].length).toBe(4)
      expect(matrix[2].length).toBe(4)
      expect(matrix[3].length).toBe(4)
    })

    test('creates a 2 dimension array from a single dimension array with a specific width', () => {
      let cells = (new Array(3)).fill(null)
      let matrix = matrixize(cells, 1)

      expect(matrix.length).toBe(3)
      expect(matrix[0].length).toBe(1)
      expect(matrix[1].length).toBe(1)
      expect(matrix[2].length).toBe(1)
    })

  })



})
