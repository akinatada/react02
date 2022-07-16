import { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = getData?.(language).then((response) =>
            setBookData(response)
        );
    }, [language, getData]);

    return (
        <ul>
            {bookData === null ? (
                <p>now loading...</p>
            ) : (
            bookData.data.items.slice(0, 5).map((x, index) => (
                <li key={index}>{x.volumeInfo.title} / {x.volumeInfo.publishedDate} / {x.volumeInfo.authors} /<img src={x.volumeInfo.imageLinks.smallThumbnail} /></li>
            ))
        )}
        
        </ul>
    );
};

