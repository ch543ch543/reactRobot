import React from 'react';

const Card = ({ name, email, id }) => {
    //const { name, email, id } = props;
    return(
        <div className ='bg-light-gray dib br3 ma2 grow shadow-5 w-23 h-40'>
                <img alt='robot' src = {`https://robohash.org/${id}?200X200`} />
            <div>
                <h2>{ name }</h2> 
                <p>{ email }</p>
            </div>  
        </div>    

    );
}

export default Card;