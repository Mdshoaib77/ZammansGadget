import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="px-4 mt-40 sm:px-10 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm text-gray-700"
      >

        {/* Logo and Description */}
        <div>
          <Link
            to='/'
            className="text-3xl font-extrabold text-transparent sm:text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text"
          >
            Z<span className="text-black">amman&apos;s</span> <span className="text-blue-600">Gadget</span>
          </Link>
          <p className="mt-5 leading-relaxed text-gray-600 md:w-2/3">
            Your one-stop shop for the latest phone gadgets, mobile essentials & tech accessories. Premium quality, competitive prices, and fast shipping to keep you connected in style.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="mb-5 text-xl font-semibold text-gray-900">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li className="transition hover:text-black">Home</li>
            <li className="transition hover:text-black">About Us</li>
            <li className="transition hover:text-black">Delivery</li>
            <li className="transition hover:text-black">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <p className="mb-5 text-xl font-semibold text-gray-900">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="transition cursor-pointer hover:text-black">01723-220078</li>
            <li className="transition cursor-pointer hover:text-black">zammansgadget.com</li>
          </ul>
        </div>

      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Zamman's Gadget — All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;




// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

//         <div>
//           <Link
//             to='/'
//             className='text-2xl font-extrabold text-transparent sm:text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text'
//           >
//             Z<span className="text-black">amman&apos;s</span> <span className="text-blue-600">Gadget</span>
//           </Link>
//           <p className='w-full mt-5 text-gray-600 md:w-2/3'>
//             Your one-stop destination for the latest phone gadgets, accessories, and mobile essentials. Quality products, great prices, and fast shipping — keeping you connected in style.
//           </p>
//         </div>

//         <div>
//           <p className='mb-5 text-xl font-medium'>COMPANY</p>
//           <ul className='flex flex-col gap-1 text-gray-600'>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-1 text-gray-600'>
//             <li>01723-220078</li>
//             <li>zammansgadget.com</li>
//           </ul>
//         </div>

//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright Zamman's Gadget - All Rights Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer
