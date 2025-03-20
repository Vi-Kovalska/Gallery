import React from 'react'
import s from './LoadMoreBTN.module.css'
const LoadMoreBTN = ({changePage, disabled, children}) => {
  return (
    <button className={s.btnLoadMore} onClick={changePage} disabled={disabled}>{children}</button>
  )
}

export default LoadMoreBTN