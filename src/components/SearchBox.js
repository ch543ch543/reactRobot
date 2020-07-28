 import React from 'react';

 const SearchBox = ({searchfield, searchChange}) => {
     return(
         <div className='pa2'>
         <input 
         className='pa3 ba b--green bg-lightest-blue' 
         type='search' 
         placeholder ='search robot' 
         onChange = { searchChange } //everytime the onchange event is triggered, it communicate with the parent (App) with the fn onSearchChange 
         />
         </div> 
     );
 }

 export default SearchBox;