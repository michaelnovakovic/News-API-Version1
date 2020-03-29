import React from 'react';

const SingleSide = ({item}) => (
    <>  
        <div className="side-content">
            <a href={item.url} rel="noopener noreferrer" target="_blank">
                <h5 className="side-h5">{item.title}</h5>
                <p className="side-p">{item.description}</p>
                <p className="side-p">Written by: {item.source.name}</p>
            </a>
        </div>
    </>
);

export default SingleSide;