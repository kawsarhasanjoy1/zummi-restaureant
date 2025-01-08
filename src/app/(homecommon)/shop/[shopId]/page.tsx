import ProductDetails from '@/component/ui/ProductDetails/ProductDetails';
import React from 'react';
import product from '../../../../../public/menu.json'

const page = ({params}: {params: any}) => {
    const singleProduct = product?.filter(product => product?._id === params?.shopId)
    return (
        <div>
          {
            singleProduct?.map(product =>   <ProductDetails key={product?._id} product={product}/>)
          }
        </div>
    );
};

export default page;