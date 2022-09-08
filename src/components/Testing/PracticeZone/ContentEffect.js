import {useState} from 'react';

export default function ContentEffect() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>  res.json())
    .then(data => data.map())
    
    return(
        <ul>
            
        </ul>
    )
}