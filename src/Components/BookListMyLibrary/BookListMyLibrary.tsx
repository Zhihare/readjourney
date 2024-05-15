import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redax/store'
import { deleteBook, getOwnBooks } from '../../redax/Books/booksThanks'
import { selectMyLibrary } from '../../redax/Books/booksSelector'
import { BLContainer } from '../BookList/Booklist.styled'
import BookItem from '../BookList/BookItem'
import { Nothings } from './BookListMyLibrary.styled'
import { RiDeleteBin5Line } from "react-icons/ri";
import img from '../../img/bookSmall.png'
import { NavLink } from 'react-router-dom';

type Props = {}

const BookListMyLibrary = (props: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const library = useSelector(selectMyLibrary);

    const handleDeleteBook = (id: string) => {
             
        dispatch(deleteBook(id))
            .then(() => {
                dispatch(getOwnBooks({}));
            })
            .catch((error) => {
                console.error('Error deleting book:', error);
            });
    }

    useEffect(() => {
       dispatch(getOwnBooks({}))
    }, [dispatch]);

    return (
    <>
        {library.length !== 0 ? (
            <BLContainer>
                {library?.map(({ author, imageUrl, title, _id, totalPages }: { author: string, imageUrl: string, title: string, _id: string, totalPages: number }) => (
                   
                    <li key={_id}>
                         <NavLink to={`/reading/${_id}`} key={_id}>
                            <BookItem imageUrl={imageUrl ? imageUrl : img} title={title} author={author} st='myBook'/> 
                        </NavLink>   
                        <button className='delete'
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleDeleteBook(_id);
                                }}
                            ><RiDeleteBin5Line /></button>
                    </li>
                    
                ))}
            </BLContainer>
        ) : (
            <Nothings>
                <div className='round'>📚
                </div>
                <p>To start training, add 
                    <span> some of your books </span>
                    or from the recommended ones
                </p>
            </Nothings>
        )}
    </>
    )
}

export default BookListMyLibrary
