import React from 'react'
import { StartWorkContainer } from './StartWork.styled'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { BLContainer } from '../BookList/Booklist.styled';
import { selectBooks } from '../../redax/Books/booksSelector';
import { useSelector } from 'react-redux';
import BookItem from '../BookList/BookItem';

type Props = {}

const LeftSideRecommended = (props: Props) => {
    const books = useSelector(selectBooks);
    
     const getRandomBooks = () => {
        const shuffledBooks = [...books];
        shuffledBooks.sort(() => Math.random() - 0.5);
        return shuffledBooks.slice(0, 3);
    };
    
    const randomBooks = getRandomBooks();
    
    return (
        <StartWorkContainer className='recommended'>
            <h2>Recomended Books</h2>
            <BLContainer>
                {randomBooks.map(({ author, imageUrl, title, _id, totalPages }: { author: string, imageUrl: string, title: string, _id: string, totalPages: number }) => (
                    <li key={_id}>
                        <BookItem imageUrl={imageUrl} title={title} author={author} st='myBook' />
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
