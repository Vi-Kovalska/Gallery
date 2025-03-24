import React from 'react'
import Modal from 'react-modal';
import s from './ImageModal.module.css'
import { PropsImageModal } from '../App/App.types';

export const ImageModal = ({ image, modalIsOpen, closeModal, handleBackdrop }: PropsImageModal) => {
    Modal.setAppElement('#root');
 
    const customStyles: {
  content: React.CSSProperties;
  overlay: React.CSSProperties;
} = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
        bottom: 'auto',
            marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
        overlay: {
        position: 'fixed',
        top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        backgroundColor: 'rgba(18, 18, 20, 0.897)',
        }
    };
    const { id,  regular , alt_description} = image;
    return (
        <div onClick={(e) => handleBackdrop(e)} >
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            contentLabel="Gallery's card">
                <img key={`${id}${crypto.randomUUID()}`} src={regular} alt={alt_description} className={s.imgModal} />
            </Modal>
        </div>
    )
}

export default ImageModal