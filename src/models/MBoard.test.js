import {
  randomlyAddCell,
  matrixize,
  getCoordinate,
  modifiedCells,
  reverse,
  diagonalFlip,
  mergeLeft,
  mergeRight,
  mergeUp,
  mergeDown,
  eachPair,
  sumIfSame,
  fillNull,
  appendNull,
  prependNull
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

  describe('reverse', () => {
    test('reveres elements in a row', () => {
      let cells = (new Array(4)).fill(null)
      cells[0] = 2
      let result = reverse(cells, 2)
      expect(result).toEqual([null, 2, null, null])
      cells[2] = 2
      result = reverse(cells, 2)
      expect(result).toEqual([null, 2, null, 2])
    })
  })

  describe('diagonalFlip', () => {
    test('flips elemets diagonally', () => {
      let cells = (new Array(4)).fill(null)
      cells[0] = 0
      cells[1] = 2
      cells[2] = 2
      let result = diagonalFlip(cells, 2)
      expect(result).toEqual([0, 2, 2, null])

      let cells2 = (new Array(16)).fill(null)
      cells2[0] = 2
      cells2[3] = 2
      cells2[7] = 2
      let result2 = diagonalFlip(cells2, 4)
      let expected = (new Array(16)).fill(null)
      expected[0] = 2
      expected[12] = 2
      expected[13] = 2
      expect(result2).toEqual(expected)
    })
  })

  describe('mergeLeft', () => {
    describe('merges cells when left arrow is pressed', () => {
      test('when there is only one element on the left edge, nothing happen', () => {
        let cells = (new Array(4)).fill(null)
        cells[0] = 2
        let result = mergeLeft(cells, 2)
        expect(result).toEqual([2, null, null, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[0] = 2
        let result2 = mergeLeft(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[0] = 2
        expect(result2).toEqual(expected)
      })
      test('when there is no element on the left, just move cell from right to left', () => {
        let cells = (new Array(4)).fill(null)
        cells[1] = 2
        let result = mergeLeft(cells, 2)
        expect(result).toEqual([2, null, null, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[3] = 2
        let result2 = mergeLeft(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[0] = 2
        expect(result2).toEqual(expected)

        cells2[5] = 2
        cells2[6] = 2
        cells2[7] = 2
        result2 = mergeLeft(cells2, 4)
        expected = (new Array(16)).fill(null)
        expected[0] = 2
        expected[4] = 4
        expected[5] = 2
        expect(result2).toEqual(expected)
      })
    })
  })

  describe('mergeRight', () => {
    describe('merges cells when right arrow is pressed', () => {
      test('when there is only one element on the right edge, nothing happen', () => {
        let cells = (new Array(4)).fill(null)
        cells[1] = 2
        let result = mergeRight(cells, 2)
        expect(result).toEqual([null, 2, null, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[1] = 2
        let result2 = mergeRight(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[3] = 2
        expect(result2).toEqual(expected)
      })
      test('when there is no element on the right, just move cell from left to right', () => {
        let cells = (new Array(4)).fill(null)
        cells[0] = 2
        let result = mergeRight(cells, 2)
        expect(result).toEqual([null, 2, null, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[0] = 2
        let result2 = mergeRight(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[3] = 2
        expect(result2).toEqual(expected)

        cells2[5] = 2
        cells2[6] = 2
        cells2[7] = 2
        result2 = mergeRight(cells2, 4)
        expected = (new Array(16)).fill(null)
        expected[3] = 2
        expected[6] = 2
        expected[7] = 4
        expect(result2).toEqual(expected)
      })
    })
  })

  describe('mergeUp', () => {
    describe('merges cells when up arrow is pressed', () => {
      test('when there is only one element on the top edge, nothing happen', () => {
        let cells = (new Array(4)).fill(null)
        cells[0] = 2
        let result = mergeUp(cells, 2)
        expect(result).toEqual([2, null, null, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[1] = 2
        let result2 = mergeUp(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[1] = 2
        expect(result2).toEqual(expected)
      })
      test('when there is no element on the top, just move cell from bottom to top', () => {
        let cells = (new Array(4)).fill(null)
        cells[2] = 2
        let result = mergeUp(cells, 2)
        expect(result).toEqual([2, null, null, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[4] = 2
        let result2 = mergeUp(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[0] = 2
        expect(result2).toEqual(expected)
      })
    })
  })

  describe('mergeDown', () => {
    describe('merges cells when down arrow is pressed', () => {
      test('when there is only one element on the bottom edge, nothing happen', () => {
        let cells = (new Array(4)).fill(null)
        cells[2] = 2
        let result = mergeDown(cells, 2)
        expect(result).toEqual([null, null, 2, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[12] = 2
        let result2 = mergeDown(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[12] = 2
        expect(result2).toEqual(expected)
      })
      test('when there is no element on the bottom, just move cell from top to bottom', () => {
        let cells = (new Array(4)).fill(null)
        cells[0] = 2
        let result = mergeDown(cells, 2)
        expect(result).toEqual([null, null, 2, null])

        let cells2 = (new Array(16)).fill(null)
        cells2[8] = 2
        let result2 = mergeDown(cells2, 4)
        let expected = (new Array(16)).fill(null)
        expected[12] = 2
        expect(result2).toEqual(expected)

        cells2[4] = 2
        cells2[12] = 2
        cells2[5] = 2
        result2 = mergeDown(cells2, 4)
        expected = (new Array(16)).fill(null)
        expected[12] = 4
        expected[8] = 2
        expected[13] = 2
        expect(result2).toEqual(expected)
      })
    })
  })

  describe('eachPair', () => {
    let sum = (i1, i2) => {
      if (typeof(i2) !== "undefined") {
        return i1 + i2
      }
      else {
        return i1
      }
    }
    it('performs operation for each pair', () => {
      let items = [1, 2, 3, 4]
      let result = eachPair(items, sum)
      expect(result).toEqual([3, 7])
    })
    it('performs operation for each pair returning last elements if size is odd', () => {
      let items = [1, 2, 3, 4, 5]
      let result = eachPair(items, sum)
      expect(result).toEqual([3, 7, 5])
    })
  })

  describe('sumIfSame', () => {
    it('sums the elements if both are same', () => {
      let a = 10
      let b = 10
      let result = sumIfSame(a, b)
      expect(result).toBe(20)
    })

    it('returns array of both item if they are different', () => {
      let a = 10
      let b = 20
      let result = sumIfSame(a, b)
      expect(result).toEqual([a, b])
    })

    it('returns array of an item and null if only that item is supplied', () => {
      let a = 10
      let result = sumIfSame(a)
      expect(result).toEqual([a, null])
    })
  })

  describe('fillNull', () => {
    it('returns original items if already had a proper width', () => {
      let items = [1, 2, 3 ,4]
      let result = fillNull(items, 4)
      expect(result).toEqual(items)
    })
    it('appends null until the items meet the required length', () => {
      let items = [1, 2, 3 ]
      let result = fillNull(items, 4)
      expect(result).toEqual([1, 2, 3, null])
    })
    it('prepends null until the items meet the required length', () => {
      let items = [1, 2, 3 ]
      let result = fillNull(items, 4, 'front')
      expect(result).toEqual([null, 1, 2, 3])
    })
  })

  describe('appendNull', () => {
    it('appends null until the items meet the required length', () => {
      let items = [1, 2, 3 ]
      let result = appendNull(items, 4)
      expect(result).toEqual([1, 2, 3, null])
    })
  })

  describe('prependNull', () => {
    it('prepends null until the items meet the required length', () => {
      let items = [1, 2, 3 ]
      let result = prependNull(items, 4)
      expect(result).toEqual([null, 1, 2, 3])
    })
  })

})
