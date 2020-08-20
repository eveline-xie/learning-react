import React from 'react'
import Navigation from './Navigation';

function Header(){
    return(
       <header className="border-b font-bold p-3 flex justify-between item-center">
           <span className="text-2xl">
                Wonderland
           </span>
           <Navigation></Navigation>
       </header>
    )
}

export default Header;