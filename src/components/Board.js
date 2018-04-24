import React from 'react'
import { connect } from 'react-redux'
import { start } from '../actions/index'

class Board extends React.Component {
  render() {
    return (
      <div className='board'>
        <div className='item item1'>
          <div className='cell'>
            1
          </div>
        </div>
        <div className='item item2'>
          <div className='cell'>
            2
          </div>
        </div>
        <div className='item item3'>
          <div className='cell'>
            3
          </div>
        </div>
        <div className='item item4'>
          <div className='cell'>
            4
          </div>
        </div>
        <div className='item item1'>
          <div className='cell'>
            5
          </div>
        </div>
        <div className='item item2'>
          <div className='cell'>
            6
          </div>
        </div>
        <div className='item item3'>
          <div className='cell'>
            7
          </div>
        </div>
        <div className='item item4'>
          <div className='cell'>
            8
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
