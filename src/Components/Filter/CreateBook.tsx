import React, {useState } from 'react'
import { AppDispatch } from '../../redax/store';
import { useDispatch } from 'react-redux';
import { FilterFormCont } from './Filter.styled';
import { ButtonLogout } from '../BurgerMenu/BurgerMenu.styled';
import { addBook, getOwnBooks } from '../../redax/Books/booksThanks';
import ModalAddBook from '../Modal/modalAddBook';

type Props = {}

const CreateBook = (props: Props) => {

    const [bookTitle, setBookTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [page, setPage] = useState<number | null>(null);
    const [showModal, setModal] = useState(false)
    const dispatch: AppDispatch = useDispatch();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(addBook({ title: bookTitle, author: author, totalPages: page }));
      await dispatch(getOwnBooks({}));
      setBookTitle('');
      setAuthor('');
      setPage(null);
      handleOpenModal();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };
    

    const handleOpenModal = () => {
        setModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setModal(false);
        document.body.style.overflow = 'unset';
    };


    
  return (
      <FilterFormCont onSubmit={handleSubmit}>
          <h3>Create your library</h3>
      <div>
              <input 
                  id='bookTitle'
                type="text"
                value={bookTitle}
                placeholder='Enter text'
                onChange={(event) => setBookTitle(event.target.value)}
            />
        <label>
              Book Title:
        </label>
          </div>

          <div>
              <input 
                  id='authorMyLibrary'
                  type="text"
                  value={author}
                  placeholder='Enter text'
                onChange={(event) => setAuthor(event.target.value)}
                />
        <label>
        The author:
        </label>
          </div>
          
             <div>
              <input 
                  id='page'
                  type="number"
                  value={page?page:''}
                  placeholder='0'
                onChange={(event) => setPage(Number(event.target.value))}
                />
        <label>
        The author:
        </label>
        </div>
          <ButtonLogout disabled={(page&&bookTitle&&author)?false:true} className='toApply' type="submit" >Add book</ButtonLogout>
          <ModalAddBook showModal={showModal} closeModal={handleCloseModal} />
    </FilterFormCont>
  );
};

export default CreateBook