import React from 'react'
import s from './ImageCard.module.css'
import { PropsImageCard } from '../App/App.types'

const ImageCard = ({ data, openModal}: PropsImageCard) => {
   
  return (
  <>
     <div><img  id={data.id} src={data.urls.small} alt={data.alt_description} width={300} height={200} onClick={()=> openModal({id: data.id, regular: data.urls.regular, alt_description:data.alt_description, created_at: data.created_at} )}/></div>
     
    </>
      )
}

export default ImageCard