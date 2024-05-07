import React, { useEffect } from 'react'
import {BLContainer } from './Booklist.styled'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redax/store'
import { getRecommendBooks } from '../../redax/Books/booksThanks'
import { selectBooks } from '../../redax/Books/booksSelector'
import { useMediaQuery } from 'react-responsive';
import { setLoadpage } from '../../redax/Books/booksSlice'
type Props = {}



const BookList = (props: Props) => {

    const dispatch: AppDispatch = useDispatch();
    const books = useSelector(selectBooks);

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
           {books[0].map(({ author, imageUrl, title, _id }:{author: string, imageUrl: string, title: string, _id: string}) => (
            <li key={_id}>
            <img src={imageUrl} alt={title} />
            <h4>{title.length > 15 ? title.slice(0, 15) + "..." : title}</h4>
            <p>{author}</p>
            </li>
  ))}     
    </BLContainer>
  )
}

export default BookList