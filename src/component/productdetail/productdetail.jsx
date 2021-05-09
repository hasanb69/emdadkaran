import React from 'react'
import { useParams } from "react-router-dom";
function ProductDetail({data}) {
    const { productId } = useParams();
    const product = data.find(p => p.id === Number(productId));
    if (product) {
        console.log('find')
    }
    else{
        console.log('not found')
    }
    return (
        <div>
            
        </div>
    )
}

export default ProductDetail




