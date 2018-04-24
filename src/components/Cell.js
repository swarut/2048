import React from 'react'

class Cell extends React.Component {

  render() {
    return (
      <div className='item item1'>
        <div className='cell'>
          {this.props.value}
        </div>
      </div>
    )
  }
}

export default Cell
