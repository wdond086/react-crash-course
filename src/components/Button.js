import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  return (
    <button className='btn' style={{backgroundColor: color}}>{ text }</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Click',
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button
