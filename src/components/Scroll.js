import React from 'react';

const Scroll = (prop) => {
    return( 
        <div style = {{overflowY:'scroll', border:'1px solid transparent', height: '600px'}}>
            {prop.children} 
        </div>    
    )}

export default Scroll; 