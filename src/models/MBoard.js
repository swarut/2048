export const randomlyAddCell = (cells) => {

  let possiblePositions = cells.reduce((acc, item, index) => {
    if(item === null) {
      acc.push(index)
    }
    return acc
  }, [])

  let randomIndex = Math.floor(Math.random() * possiblePositions.length)
  return cells.map((item, index) => {
    if(index === possiblePositions[randomIndex]) {
      return 2
    }
    return item
  })
}

export const matrixize = (cells, width = 4) => {
  return cells.reduce((acc, item, index) => {
    if((index % width) === 0 ) {
      acc.push([item])
    }
    else {
      let lastIndex = acc.length - 1
      acc[lastIndex].push(item)
    }
    return acc
  }, [])
}

// Return co-ordinate in 2 dimension for an index.
export const getCoordinate = (cellIndex, width = 4) => {
  let row = Math.floor(cellIndex/width)
  let col = cellIndex % width
  return { row, col }
}

export const reverse = (cells, width = 4) => {
  let modifiedCells = cells.reduce((acc, cell, index) => {
    let cache = acc.cache
    if (cache.length < (width - 1)) {
      acc.cache = cache.concat(cell)
    }
    else {
      cache.push(cell)
      acc.result = acc.result.concat(cache.reverse())
      acc.cache = []
    }
    return acc
  }, {result: [], cache: []})
  return modifiedCells.result
}

export const diagonalFlip = (cells, width = 4) => {
  let modifiedCells = cells.reduce((acc, cell, index) => {
    let col = index % width

    if(!acc[col]) {
      acc[col] = [cell]
    }
    else {
      acc[col] = acc[col].concat(cell)
    }

    return acc
  }, [])
  return modifiedCells.reduce((acc, row) => acc.concat(row), [])
}

export const mergeLeft = (cells, width = 4) => {
  let modifiedCells = cells.reduce((acc, cell, index) => {
    let cache = acc.cache

    if(cache.length < (width - 1)) {
      // Keep cell in cache until the total number equals to width.
      acc.cache = cache.concat(cell)
    }
    else {
      // Calculate sum of each pair
      cache.push(cell)
      let merged = eachPair(cache.filter(item => item !== null), sumIfSame)
      //let merged = compress(cache.filter(item => item !== null))
      if(merged.length < width) {
        merged = appendNull(merged, width)
      }
      acc.result = acc.result.concat(merged)
      acc.cache = []
    }
    return acc

  }, {result: [], cache: []})
  return modifiedCells.result
}

export const mergeRight = (cells, width = 4) => {
  let modifiedCells = reverse(cells, width)
  modifiedCells = mergeLeft(modifiedCells, width)
  modifiedCells = reverse(modifiedCells, width)
  return modifiedCells
}

export const mergeUp = (cells, width = 4) => {
  let modifiedCells = diagonalFlip(cells, width)
  modifiedCells = mergeLeft(modifiedCells, width)
  modifiedCells = diagonalFlip(modifiedCells, width)
  return modifiedCells
}

export const mergeDown = (cells, width = 4) => {
  let modifiedCells = diagonalFlip(cells, width)
  modifiedCells = reverse(modifiedCells, width)
  modifiedCells = mergeLeft(modifiedCells, width)
  modifiedCells = reverse(modifiedCells, width)
  modifiedCells = diagonalFlip(modifiedCells, width)
  return modifiedCells
}

export const sumIfSame = (a, b = null) => {
  if((a !== null) && (b !== null) && (a === b)) {
    return a + b
  }
  else if ((a === null) && (b !== null)) {
    return [b, null]
  }
  else {
    return [a, b]
  }
}

export const eachPair = (items, func) => {
  let result = items.reduce((acc, item, index) => {
    let cache = acc.cache
    if(cache.length < 1) {
      acc.cache = cache.concat(item)
      if(index === (items.length - 1)) {
        acc.result = (acc.result.concat(item))
      }
    }
    else {
      cache.push(item)
      let product = func(cache[0], cache[1])
      if(typeof(product) === "number") {
        acc.result = acc.result.concat(product)
        acc.cache = []
      }
      else {
        // If the summation cant be made, keep the rightmost for the next sum.
        // If the list reached the end, concat all result
        // Example case: [4, 2]
        if(index === items.length - 1) {
          acc.result = acc.result.concat(product)
          acc.cache = []
        }
        else {
          acc.result = acc.result.concat(product[0])
          acc.cache = [product[1]]
        }

      }
    }
    return acc
  }, {result: [], cache: []})
  return result.result
}

export const fillNull = (items, width = 4, position = 'back') => {
  if(items.length === width) {
    return items
  }
  else {
    let diff = width - items.length
    if(position === 'back') {
      return items.concat((new Array(diff)).fill(null))
    }
    else {
      return (new Array(diff)).fill(null).concat(items)
    }
  }
}

export const prependNull = (items, width = 4) => {
  return fillNull(items, width, 'front')
}

export const appendNull = (items, width = 4) => {
  return fillNull(items, width, 'back')
}

export const equal = (cells1, cells2) => {
  return cells1.every((value, index) => value === cells2[index])
}

export const isMovable = (cells, width = 4) => {
  // Want to short circuit as soon as the null or duplicate adjacent items
  // are found, the normal for loop will be used here.
  let movable = false
  let carry = { lastRow: [], col: [] }
  for(let i = 0; i < cells.length; i++) {
    if(cells[i] === null) {
      movable = true
      break
    }
    else {
      // Check for row adjacent.
      if(carry.col.length === 0) {
        carry.col.push(cells[i])
      }
      else {
        if(cells[i] === carry.col[carry.col.length - 1]) {
          console.log(`ROW MATCH :: check ${cells[i]} and ${carry.col[carry.col.length - 1]}`)
          movable = true
          break
        }
        else {
          if((i % width) !== (width - 1)){
            carry.col.push(cells[i])
            carry.lastRow.push(cells[i])
          }
          else {
            carry.col.push(cells[i])
            carry.lastRow = []
            carry.lastRow = carry.lastRow.concat(carry.col)
            carry.col = []
          }
        }
      }
      // Check for column adjacent.
      if(carry.lastRow.length !== 0) {
        if(cells[i] == carry.lastRow[i % width]) {
          console.log(`COL MATCH :: check ${cells[i]} and ${carry.lastRow[i % width]}`)
          movable = true
          break
        }
      }

    }
    console.log(`LOOP ${i}, carry.lastRow = ${carry.lastRow}, carry.col = ${carry.col}`)
  }
  return movable
}
