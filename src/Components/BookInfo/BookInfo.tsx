import React from 'react'
import { useSelector } from 'react-redux'
import { selectBookInfo } from '../../redax/Books/booksSelector'
import img from '../../img/bookSmall.png'
import { BIC, BookInfodetail } from './BookInfo.styled'
import icons from '../../img/symbol-defs.svg';

type Props = {

}

const BookInfo = (props: Props) => {
    const { progress } = useSelector(selectBookInfo);
    
    const isActive = progress && progress.some((item: any) => item.status === 'active');

      const book = useSelector(selectBookInfo); 

    return (
        <BIC>        
                {book ? (
                    <BookInfodetail>
                    <img src={book.imageUrl? book.imageUrl: img} alt={book.title} />
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    <button>
                        {!isActive ?
                            <svg>
                                <use href={icons + '#icon-block-1'}></use>
                            </svg> :
                            <div></div>}
                        </button>
                    </BookInfodetail>)
                    :
                    <></>}
    
        </BIC>
    )
}

export default BookInfo
