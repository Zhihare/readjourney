import React from 'react'

type ItemProps = {
    imageUrl: string,
    title: string,
    author: string,
}

const BookItem: React.FC<ItemProps> = ({ imageUrl, author, title }) => {
    return (
        <>
                    <img src={imageUrl} alt={title} />
                    <h4>{title.length > 15 ? title.slice(0, 15) + "..." : title}</h4>
                    <p>{author}</p>
        </>
    )
}

export default BookItem