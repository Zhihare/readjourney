import React, { useEffect, useState } from 'react'
import {BLContainer } from './Booklist.styled'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redax/store'
import { getRecommendBooks } from '../../redax/Books/booksThanks'
import { selectBooks } from '../../redax/Books/booksSelector'
import { useMediaQuery } from 'react-responsive';
import { setLoadpage } from '../../redax/Books/booksSlice'
import Modal from '../Modal/modal'
import BookItem from './BookItem'
type Props = {}



const BookList = (props: Props) => {

    const dispatch: AppDispatch = useDispatch();
    const books = useSelector(selectBooks);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);


      const handleOpenModal = (itemId: string) => {
        setSelectedItemId(itemId);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedItemId(null);
        document.body.style.overflow = 'unset';
    };


const isMobile = useMediaQuery({
    query: '(max-width: 700px)'
  });

 const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1400px)'
  });
    

    
    useEffect(() => {
    dispatch(setLoadpage(1));
    if (isMobile) {
     dispatch(getRecommendBooks({limit:2}));
    } else if (isTablet) {
      dispatch(getRecommendBooks({limit:8}));
    } else {
      dispatch(getRecommendBooks({}));
    }
  }, [dispatch, isMobile, isTablet]);

    return (
        <BLContainer>
            {books?.map(({ author, imageUrl, title, _id, totalPages }: { author: string, imageUrl: string, title: string, _id: string, totalPages: number }) => (
                <li key={_id} onClick={() => handleOpenModal(_id)}>
                    <BookItem imageUrl={imageUrl} title={title} author={author} />
                    <Modal showModal={selectedItemId === _id} closeModal={handleCloseModal} photo={imageUrl} title={title} author={author} id={_id} page={totalPages} />
                </li>
            ))}
        </BLContainer>
  )
}

export default BookList