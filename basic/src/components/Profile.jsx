import React from 'react';

export const Profile = ({url, des, name, job}) => {
    console.log(url)
    return (
        <div className='profile'>
            {url === undefined
            ? <h1>none!</h1>
            : <>
                <img className='photo' 
                src={url}
                alt={des}
                />
                <h1>{name}</h1>
                <p>{job}</p>
                </>
            }
    
            </div>
    )
};