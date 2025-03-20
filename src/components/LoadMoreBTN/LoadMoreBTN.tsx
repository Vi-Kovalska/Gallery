import React from 'react'
import s from './LoadMoreBTN.module.css'
import { PropsLoadMoreBTN } from '../App/App.types'

const LoadMoreBTN = ({changePage, disabled, children}: PropsLoadMoreBTN) => {
  return (
    <button className={s.btnLoadMore} onClick={changePage} disabled={disabled}>{children}</button>
  )
}

export default LoadMoreBTN