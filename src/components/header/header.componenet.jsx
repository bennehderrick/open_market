import React from 'react';

import './header.styles.scss';
import { Search } from '../search/search.component';

import { Nav } from '../nav/nav.component';

export const Header = () => {
    return(
        <div>
            <header class="header">
                <div class="navigation">
                    <div class="header">
                        <h1 class="title">Open market</h1>
                    </div>
                    <ul class="nav">
                        <li class="item Contact"><a href="#">Contact</a></li>
                        <li class="item about"><a href="#">About</a></li>
                        <li class="item home"><a href="#">Home</a></li>
                    </ul>
                </div>
            </header>
             <Search />
              </div>
        
    )
}