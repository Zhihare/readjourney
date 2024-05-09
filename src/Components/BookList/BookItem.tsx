import React from 'react'

type ItemProps = {
    imageUrl: string,
    title: string,
    author: string,
    st: string
}

const BookItem: React.FC<ItemProps> = ({ imageUrl, author, title, st }) => {
    return (
        <>
                    <img src={imageUrl} alt={title} />
            <h4 id={st}>{st === "myBook" ? (title.length < 10 ? title : title.slice(0, 10) + "...") :
                (title.length < 15 ? title : title.slice(0, 15) + "...")}
            </h4>
                    <p id={st}>{st === "myBook" ? (author.length < 10 ? author : author.slice(0, 10) + "...") :
                (author.length < 30 ? author : author.slice(0, 30) + "...")}</p>
        </>
    )
}

export default BookItem