import {
  randomlyAddCell,
  matrixize,
  getCoordinate,
  modifiedCells,
  eachPair,
  fillNull
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

  describe('getCoordinate', () => {
    test('returns coordinate for 2 dimension array from a single dimension index', () => {
      let cells = (new Array(16))
      let coord1 = getCoordinate(4, 4)
      let coord2 = getCoordinate(7, 4)
      expect(coord1.row).toBe(1)
      expect(coord1.col).toBe(0)
      expect(coord2.row).toBe(1)
      expect(coord2.col).toBe(3)
    })
  })

  describe('mergeLeft', () => {
    describe('merges cells when left arrow is pressed', () => {
      // test('when there is only one element on the left edge, nothing happen', () => {
      //   let cells = (new Array(4)).fill(null)
      //   cells[0] = 2
      //   let result = mergeLeft(modifiedCells)
      //   expect(result).toBe([2, null, null, null])
      // })
      // test('when there is no element on the left, just move cell from right to left', () => {
      //   let cells = (new Array(4)).fill(null)
      //   cells[0] = 2
      //   let result = mergeLeft(modifiedCells)
      //
      // })
    })
  })

  describe('eachPair', () => {
    it('performs operation for each pair', () => {
      let items = [1, 2, 3, 4]
      let result = eachPair(items, (cache) => {
        if(cache.length == 2) {
          return cache[0] + cache[1]
        }
        else {
          return cache[0]
        }
      })
      expect(result).toEqual([3, 7])
    })
    it('performs operation for each pair returning last elements if size is odd', () => {
      let items = [1, 2, 3, 4, 5]
      let result = eachPair(items, (cache) => {
        if(cache.length == 2) {
          return cache[0] + cache[1]
        }
        else {
          return cache[0]
        }
      })
      expect(result).toEqual([3, 7, 5])
    })
  })

  describe('fillNull', () => {
    it('returns original items if already had a proper width', () => {
      let items = [1, 2, 3 ,4]
      let result = fillNull(items, 4)
      expect(result).toEqual(items)
    })
    it('fill null until the items meet the required length', () => {
      let items = [1, 2, 3 ]
      let result = fillNull(items, 4)
      expect(result).toEqual([1, 2, 3, null])
    })
  })

})
