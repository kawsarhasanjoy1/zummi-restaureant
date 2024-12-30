import ProductDetails from '@/component/ui/ProductDetails/ProductDetails';
import React from 'react';
import product from '../../../../../public/menu.json'

const page = ({params}: {params: any}) => {
    const singleProduct = product?.filter(product => product?._id === params?.shopId)
    console.log(singleProduct)
    return (
        <div>
          {
            singleProduct?.map(product =>   <ProductDetails product={product}/>)
          }
        </div>
    );
};

export default page;