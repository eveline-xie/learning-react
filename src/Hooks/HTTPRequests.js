import React, {useEffect, useState} from 'react'
import axios from 'axios';

export function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    });

     // useEffect() --> only fetch data when there's change to url
    useEffect(() => {
        //page is loading 
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response =>{
                setRequest({
                    //page finished loading
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}

