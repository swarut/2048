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
  let modifiedCells = cells.reduce((acc, cell, index) => {
    let cache = acc.cache
    if(cache.length < width) {
      acc.cache = cache.concat(cell)
    }
    else {

    }

  }, {result: [], cache: []})
}

export const eachPair = (items, func) => {
  let result = items.reduce((acc, item, index) => {
    let cache = acc.cache
    if(cache.length < 1) {
      acc.cache = cache.concat(item)
      if(index == items.length - 1) {
        acc.result = acc.result.concat(item)
      }
    }
    else {
      cache.push(item)
      acc.result = acc.result.concat(func(cache))
      acc.cache = []
    }
    return acc
  }, {result: [], cache: []})
  return result.result
}
