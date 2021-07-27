import React from 'react'
import { Button } from 'reactstrap';

export default function NewsList({filteredNews}) {
    return (
        <div>
        {
            filteredNews?.map(({title, url, author, points, objectID, created_at}) => {
                return(
                <ul key={objectID} className='news'>
                   <li><b>{title}</b></li>
                   <li>Author: {author}</li>
                   <li>Points: {points}</li>
                   <li>Date: {created_at}</li>
                   <Button><a href={url} target="_blank" rel="noreferrer">Read More</a></Button>
                </ul>
                )
              })
        }
    </div>
    )
}
