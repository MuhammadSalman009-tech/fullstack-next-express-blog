import Router from 'next/router'
import React, { useEffect } from 'react'

function index() {
    useEffect(() => {
       Router.push("/") 
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default index
