const startupCells = (new Array(16)).fill(null)

const randomlyAddCell = (cells) => {

  let possiblePositions = cells.reduce((acc, item, index) => {
    if(item === null) {
      acc.push(index)
    }
    return acc
  }, [])

  let randomIndex = Math.floor(Math.random() * possiblePositions.length)
  return cells.map((item, index) => {
    if(index === randomIndex) {
      return 2
    }
    return item
  })
}

const twoDimensionCells = (cells, width = 4) => {
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
