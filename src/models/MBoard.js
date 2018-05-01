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
    if((index % width) == 0 ) {
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

export const mergeLeft = (cells, width = 4) => {
  let sumIfSame = (a, b = null) => {
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

  let modifiedCells = cells.reduce((acc, cell, index) => {
    let cache = acc.cache

    if(cache.length < (width - 1)) {
      // Keep cell in cache until the total number equals to width.
      acc.cache = cache.concat(cell)
    }
    else {
      // Calculate sum of each pair
      cache.push(cell)
      let merged = eachPair(cache, sumIfSame)
      merged = merged.filter(item => item !== null)
      console.log("merged", merged)
      if(merged.length < width) {
        merged = fillNull(merged, width)
      }
      acc.result = acc.result.concat(merged)
      acc.cache = []
    }
    console.log("Processing cell", cell, acc)
    return acc

  }, {result: [], cache: []})
  return modifiedCells.result
}

export const eachPair = (items, func) => {
  let result = items.reduce((acc, item, index) => {
    let cache = acc.cache
    if(cache.length < 1) {
      acc.cache = cache.concat(item)
      if(index == items.length - 1) {
        acc.result = (acc.result.concat(item))
      }
    }
    else {
      cache.push(item)
      acc.result = acc.result.concat(func(cache[0], cache[1]))
      acc.cache = []
    }
    return acc
  }, {result: [], cache: []})
  return result.result
}

export const fillNull = (items, width = 4) => {
  if(items.length === width) {
    return items
  }
  else {
    let diff = width - items.length
    return items.concat((new Array(diff)).fill(null))
  }
}
