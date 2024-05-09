import React from 'react'
import { StyledPopup } from './modal.styled';
import { ButtonLogout } from '../BurgerMenu/BurgerMenu.styled';
import { MdOutlineClose } from "react-icons/md";
import { AppDispatch } from '../../redax/store';
import { useDispatch } from 'react-redux';
import { addRecommendedBook, getOwnBooks } from '../../redax/Books/booksThanks';



interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
    photo: string;
    title: string;
    author: string;
    id: string;
    page: number;
}



const Modal: React.FC<ModalProps> = ({ showModal, closeModal, photo, author, title, id, page }) => {
    const dispatch: AppDispatch = useDispatch();

    const onClick = (bookId: string) => {
        dispatch(addRecommendedBook(bookId));
        console.log('Book added')
       
    }




     if (!showModal) {
        return null; 
    }
  return (
   <StyledPopup open={true} onClose={closeModal} closeOnDocumentClick>
     
              <button className="close" onClick={closeModal}><MdOutlineClose /></button>
              <img src={photo} alt={title} />
              <h2 className='bookTrial'>{title}</h2>
              <p className='bookTrialDesc'>{author}</p>
              <p className='booksPage'>{page}</p>
              <ButtonLogout onClick={()=> onClick(id)}>Add to library</ButtonLogout>

    </StyledPopup>
  );
};


export default Modal