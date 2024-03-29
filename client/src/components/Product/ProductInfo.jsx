import React from 'react';
import { Divider, Rating, Typography } from '@mui/material';
import { formatCurrency } from 'utils';

const ProductInfo = ({ product }) => {
   return (
      <>
         {/* RATING */}
         <Rating readOnly value={4} />

         {/* PRODUCT NAME */}
         <Typography variant='h6'>{product.name}</Typography>

         {/* PRICE */}
         <Typography component={'span'} fontSize={28} fontWeight={600} color='error'>
            {formatCurrency(product.salePrice)}
         </Typography>
         {product.salePercentage !== 0 && (
            <Typography
               component={'span'}
               fontSize={18}
               ml={2}
               sx={{ textDecoration: 'line-through' }}
            >
               {formatCurrency(product.price)}
            </Typography>
         )}

         <Divider sx={{ my: 2 }} />
      </>
   );
};

export default ProductInfo;
