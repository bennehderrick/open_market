import React from 'react';

import './search.styles.scss';

export const Search =()=> {
    return (
        <div className='container'>
           <form action="" method="GET" class="SearchBox">
  <div class="Field Field--is-search">
    <input 
      type="search"
      name="search"
      placeholder="Product name or SKU number"
      class="SearchBox-query"/>

    <button
      type="submit"
      class="Btn SearchBox-submitBtn">Search</button>
  </div>
</form>

        </div>
    );
}