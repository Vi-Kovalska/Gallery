import './App.css'
import clsx from "clsx";
import toast from 'react-hot-toast'
import { themeContext } from '../Providers/ThemeProvider/ThemeProvider'

import { fetchImagesFromAPI } from '../services/api'

import React, { useContext, useEffect, useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBTN from '../LoadMoreBTN/LoadMoreBTN'
import ImageModal from '../ImageModal/ImageModal';
import { Data, ImageData, ModalImageData, OpenModal, PropsImageModal } from './App.types';

function App() {
 const context = useContext(themeContext);
if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
 
  const { theme, toggleTheme } = context;
  const [collection, setCollection] = useState<ImageData[]>([]);
  const [newQuery, setNewQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalElements, setTotalElements] = useState<number>(1);
  const [isLoad, setIsLoad] = useState <boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMess, setErrorMess] = useState<string>('');
  useEffect((): void => {
  if (!newQuery) return;
    const asyncWrapper = async () => {
      try {
        setIsError(false);
        setIsLoad(true);
        const response = await fetchImagesFromAPI({ query: newQuery, page });
        const { results, total }: Data = response;
        
        if (results.length === 0) {
          toast.error('There are no images for your request. Please try again!');
        }
        setCollection((prev: ImageData[]) => [...prev, ...results]);
        setTotalElements(total);
      } catch (error: unknown) {
         setIsError(true);
        if (error instanceof Error) {
          setErrorMess(error.message)
        } else {
          setErrorMess("An unexpected error occurred")
        }
        setCollection([]);
}finally {
    setIsLoad(false);
  }

    }
    asyncWrapper();
    }
    , [newQuery, page])
 
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("query") as HTMLInputElement;
   
    if (!input) return;

        const newTopic = input.value.trim().toLowerCase();
        if (newTopic === '') {
          toast.error('The search field cannot be empty!');
          return;
        }

    setNewQuery(newTopic);
    setCollection([]);
    setPage(1);
  }

  const PER_PAGE = 10;
  const totalPages = Math.ceil(totalElements / PER_PAGE);
  const changePage = () =>  {
if (page >= totalPages) {
           return toast.error('Out of articles!');
          }
        return setPage(prev => prev + 1)
  }
  // Modal region
  const [modalIsOpen, setModalIsOpen] = useState <boolean>(false);
  const [dataForModalImg, setDataForModalImg] = useState <ModalImageData | null>(null);

  const openModal = ({ id, alt_description, urls, created_at }: ImageData): void => {
    setModalIsOpen(true);
    
    setDataForModalImg({ id, regular: urls.regular, alt_description, created_at });
  }
 
  const closeModal =(): void=> {
    setModalIsOpen(false);
  }

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.target === e.currentTarget) {
          closeModal();
      }   
    }
    
  return (
    <>
       <div className={clsx(theme === 'light' ? 'light' : 'dark')}>
      <SearchBar onSubmit={onSubmit} />
        {collection.length > 0 && <ImageGallery images={collection} openModal={openModal} />}
        {modalIsOpen && dataForModalImg && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleBackdrop={handleBackdrop} image={dataForModalImg} openModal={openModal}  />}
     {isLoad && <Loader />}
      {isError && <ErrorMessage errorMess={errorMess} />}
        {collection.length > 0 && <LoadMoreBTN changePage={changePage} disabled={isLoad}>Load more</LoadMoreBTN>}
      </div>
    </>
  )
}

export default App