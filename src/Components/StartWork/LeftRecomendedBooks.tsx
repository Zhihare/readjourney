import React, { useEffect, useState } from 'react'
import { StartWorkContainer } from './StartWork.styled'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { BLContainer } from '../BookList/Booklist.styled';
import { selectBooks } from '../../redax/Books/booksSelector';
import { useSelector } from 'react-redux';
import BookItem from '../BookList/BookItem';
import Modal from '../Modal/modal';

type Props = {}

const LeftSideRecommended = (props: Props) => {
    const books = useSelector(selectBooks);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [randomBooks, setRandomBooks] = useState<any[]>([]);
    const [randomBooksLoaded, setRandomBooksLoaded] = useState(false);
   

      const handleOpenModal = (itemId: string) => {
        setSelectedItemId(itemId);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedItemId(null);
        document.body.style.overflow = 'unset';
    };
    
    useEffect(() => {
    if (books.length > 0 && !randomBooksLoaded) {
        const shuffledBooks = [...books];
        shuffledBooks.sort(() => Math.random() - 0.5);
        const selectedRandomBooks = shuffledBooks.slice(0, 3);
        setRandomBooks(selectedRandomBooks);
        setRandomBooksLoaded(true);
    }
}, [books, randomBooksLoaded]);
    
    return (
        <StartWorkContainer className='recommended'>
            <h2>Recomended Books</h2>
            <BLContainer>
                {randomBooks.map(({ author, imageUrl, title, _id, totalPages }: { author: string, imageUrl: string, title: string, _id: string, totalPages: number }) => (
                    <li key={_id} onClick={() => handleOpenModal(_id)}>
                        <BookItem imageUrl={imageUrl} title={title} author={author} st='myBook' />
                         <Modal showModal={selectedItemId === _id} closeModal={handleCloseModal} photo={imageUrl} title={title} author={author} id={_id} page={totalPages} />
                    </li>
                ))}
            </BLContainer>
            <NavLink to="/recommended">
                <span className='link'>Home</span>
                <FaArrowRight />
            </NavLink>
        </StartWorkContainer>
    )
}

export default LeftSideRecommended
