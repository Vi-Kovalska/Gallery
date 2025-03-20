import React from 'react'
import { PropsErrorMessage } from '../App/App.types'


const ErrorMessage = ({errorMess}: PropsErrorMessage) => {
  return (
    <p>Sorry, there is an error - {errorMess}! Please try again later.</p>
  )
}

export default ErrorMessage