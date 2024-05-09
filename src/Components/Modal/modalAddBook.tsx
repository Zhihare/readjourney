import React from 'react'
import { StyledPopup } from './modal.styled';
import { MdOutlineClose } from "react-icons/md";



interface ModalProps {
    closeModal: () => void;
    showModal: boolean;
}



const ModalAddBook: React.FC<ModalProps> = ({closeModal, showModal}) => {

   
     if (!showModal) {
        return null; 
    }
  return (
   <StyledPopup className='good' open={true} onClose={closeModal} closeOnDocumentClick>
     
              <button className="close" onClick={closeModal}><MdOutlineClose /></button>
              <div/>
              <h2 className='bookTrial good'>Good jop</h2>
          <p className='bookTrialDesc good'>Your book is now in
              <span> the library! </span>
              The joy knows no bounds and
              now you can start your training</p>


    </StyledPopup>
  );
};


export default ModalAddBook