import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HTTPRequests';

function Home(){
    const url = 'https://5f3de6d313a9640016a681b3.mockapi.io/products?page=2&limit=10';
    
    let products = useAxiosGet(url)

    let content = null

    //check if error
    if(products.error){
        content = <p>
            There was an error, please try again later
        </p>
    }

    // check if page is loading
    if(products.loading){
        content = <p>
            <Loader />
        </p>
    }

    if(products.data){
        content = 
        products.data.map((product) =>
            <div key={product.id} className="p-3">
                <ProductCard 
                    product = {product}
                />
            </div>
        )
    }


    return(
        <div>
            <h1 className="text-xl font-bold p-3">
                Happy Shopping
            </h1>
            {content}
            
        </div>
    )
}

export default Home;