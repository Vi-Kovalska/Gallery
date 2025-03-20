import { ClipLoader } from "react-spinners";
import React from 'react'
import { PropsLoader } from "../App/App.types";

const Loader: React.FC<PropsLoader> =  ({color="#36d7b7", size=50}) => {
  return (
    <ClipLoader color={color} size={size} />
  )
}

export default Loader