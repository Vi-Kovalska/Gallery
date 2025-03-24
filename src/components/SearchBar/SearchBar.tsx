import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import s from './SearchBar.module.css'
import clsx from "clsx";
import { themeContext } from '../Providers/ThemeProvider/ThemeProvider';
import { PropsSearchBar } from '../App/App.types';


const SearchBar = ({ onSubmit }: PropsSearchBar) => {
 const context = useContext(themeContext);
if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
 
  const { theme, toggleTheme } = context;

  return (
    <header className={s[clsx(theme === 'light' ? 'light' : 'dark')]}>
      <button onClick={toggleTheme} className={s.btnHeader}>{theme}</button>
      <form onSubmit={onSubmit} className={s.formSearch}>       
        <input className={s.inputQuery} name='query'  type="text" autoComplete="off" autoFocus placeholder="Search images and photos" />
         <button type="submit" className={s.btnHeader}>Search</button>
      </form>
      </header>
  )
}

export default SearchBar