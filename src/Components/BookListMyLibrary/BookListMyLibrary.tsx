import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redax/store'
import { getOwnBooks, getRecommendBooks } from '../../redax/Books/booksThanks'
import { selectBooks, selectMyLibrary } from '../../redax/Books/booksSelector'
import { useMediaQuery } from 'react-responsive';
import { setLoadpage, setMyBooks } from '../../redax/Books/booksSlice'
import Modal from '../Modal/modal'
import { BLContainer } from '../BookList/Booklist.styled'
import BookItem from '../BookList/BookItem'
import { Nothings } from './BookListMyLibrary.styled'
type Props = {}



const BookListMyLibrary = (props: Props) => {

    const dispatch: AppDispatch = useDispatch();
    const library = useSelector(selectMyLibrary);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);


    const handleOpenModal = (itemId: string) => {
        setSelectedItemId(itemId);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedItemId(null);
        document.body.style.overflow = 'unset';
    };


    
    useEffect(() => {
       dispatch(getOwnBooks({}))
    }, [dispatch]);

    return (
    <>
        {library.length !== 0 ? (
                <BLContainer>
                    {library?.map(({ author, imageUrl, title, _id, totalPages }: { author: string, imageUrl: string, title: string, _id: string, totalPages: number }) => (
                        <li key={_id} onClick={() => handleOpenModal(_id)}>
                            <BookItem imageUrl={imageUrl} title={title} author={author} />
                            <Modal showModal={selectedItemId === _id} closeModal={handleCloseModal} photo={imageUrl} title={title} author={author} id={_id} page={totalPages} />
                        </li>
                    ))}
                </BLContainer>
            ) :
                <Nothings>
                    <div className='round'>
                        <div className='rectangle'></div>
                    </div>
                    <p>To start training, add 
                        <span> some of your books </span>
                         or from the recommended ones</p>
                </Nothings>
            }
    </>
    )
}

export default BookListMyLibrary