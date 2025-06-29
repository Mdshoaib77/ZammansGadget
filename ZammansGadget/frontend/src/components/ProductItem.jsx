// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="cursor-pointer"
//     >
//       <Link onClick={() => scrollTo(0, 0)} to={`/product/${id}`} className="block group">
        
//         <div className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl">
          
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: 'spring', stiffness: 200 }}
//             src={image[0]}
//             alt={name}
//             className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
//           />

//           <div className="p-4 text-center">
//             <p className="mb-1 font-semibold text-gray-800 transition group-hover:text-cyan-500">{name}</p>
//             <p className="text-sm text-gray-500">{currency}{price}</p>
//           </div>
//         </div>
        
//       </Link>
//     </motion.div>
//   );
// };

// export default ProductItem;



import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const productImage = Array.isArray(image) && image.length > 0 ? image[0] : image || 'https://via.placeholder.com/400x300';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="cursor-pointer"
    >
      <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`} className="block group">
        <div className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            src={productImage}
            alt={name}
            className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
          />
          <div className="p-4 text-center">
            <p className="mb-1 font-semibold text-gray-800 transition group-hover:text-cyan-500">{name}</p>
            <p className="text-sm text-gray-500">{currency}{price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductItem;




// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import {Link} from 'react-router-dom'

// const ProductItem = ({id,image,name,price}) => {
    
//     const {currency} = useContext(ShopContext);

//   return (
//     <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//       <div className='overflow-hidden '>
//         <img className='transition ease-in-out hover:scale-110' src={image[0]} alt="" />
//       </div>
//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className='text-sm font-medium '>{currency}{price}</p>
//     </Link>
//   )
// }

// export default ProductItem
