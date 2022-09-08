 import {useEffect, useState} from 'react';
 import ContentEffect from './ContentEffect'

export default function Effect() {
    const [display, setDisplay] = useState(false);
    return (
        <div className='p-2 min-vh-100 shadow-none'>
            <button 
            className='btn btn-info'
            onClick={() => setDisplay(!display)}>
                Toggle
            </button>
            {display && <ContentEffect />}
        </div>
    )
}