import React from 'react'
import { StyledPopup } from './modal.styled';
import { MdOutlineClose } from "react-icons/md";



interface ModalProps {
    closeModal: () => void;
    showModal: boolean;
    modal: number;
}



const ModalAddBook: React.FC<ModalProps> = ({closeModal, showModal, modal }) => {

   
     if (!showModal) {
        return null; 
    }
  return (
  <>
      {modal === 1 ?
        <StyledPopup className='good' open={true} onClose={closeModal} closeOnDocumentClick>
     
          <button className="close" onClick={closeModal}><MdOutlineClose /></button>
          <div />
          <h2 className='bookTrial good'>Good jop</h2>
          <p className='bookTrialDesc good'>Your book is now in
            <span> the library! </span>
            The joy knows no bounds and
            now you can start your training</p>
        </StyledPopup> :
        
        <StyledPopup className='good' open={true} onClose={closeModal} closeOnDocumentClick>
     
          <button className="close" onClick={closeModal}><MdOutlineClose /></button>
          <div />
          <h2 className='bookTrial good'>The book is read</h2>
          <p className='bookTrialDesc good'>It was an
            <span> exciting journey</span>
            , where each page revealed new horizons,
            and the characters became inseparable friends.</p>
        </StyledPopup>
      }
      </>
  );
};


export default ModalAddBook