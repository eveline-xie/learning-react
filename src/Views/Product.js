import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HTTPRequests';


function Product(){
    const { id } = useParams()
    const url = `https://5f3de6d313a9640016a681b3.mockapi.io/products/${id}`;
    

    let content = null

   
    let product = useAxiosGet(url)

    //check if error
    if(product.error){
        content = <p>
            There was an error, please try again later
        </p>
    }

    // check if page is loading
    if(product.loading){
        content = <div>
            <Loader />
        </div>
    }

    if(product.data){
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images}
                        alt={product.data.name}
                    />
                </div>
                <div className="text-xl font-bold mb-3">
                    ${product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>

            </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product;