export type PropsErrorMessage = {
  errorMess: string,
}
export type ImageData = {
    id: string,
     created_at: string,
    urls: {
      small: string,
        regular: string,
    }
    alt_description: string,
}

export type OpenModal = {
    openModal: (args: Omit<ImageData, 'urls'> & { regular: string }) => void;
};

export type ModalImageData = {
  id: string;
  regular: string;
    alt_description: string;
  created_at: string;
};

export type PropsImageGallery = {
    images: ImageData[],
    openModal: (args: ImageData) => void;
}

export type PropsImageCard = {
    data: ImageData,
openModal: (args: ImageData) => void;}

export type PropsImageModal = {
    image: ModalImageData,
    modalIsOpen: boolean,
    closeModal: () => void,
    handleBackdrop: (e: React.MouseEvent<HTMLDivElement>)=> void,
}
export type PropsLoader = {
  color?: string,
  size?: number,
}

export type PropsSearchBar = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

export type Children = {
    children: React.ReactNode,
}
export type Theme = 'light' | 'dark';
export type ContextValue = {
     theme: Theme,
    toggleTheme: ()=> void,
}

export type PropsFetchImagesFromAPI = {
  query: string,
  page: number
}
export type Data = {
      results:ImageData[],
      total: number,
      total_pages: number
    }
export type PropsLoadMoreBTN = {
  changePage: ()=> void,
  disabled: boolean,
  children: React.ReactNode,
  className?: string,
}