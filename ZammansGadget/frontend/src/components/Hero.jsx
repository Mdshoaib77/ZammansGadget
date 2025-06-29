// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const Hero = () => {
//   return (
//     <section className="relative flex items-center w-full min-h-screen px-6 text-white bg-gradient-to-tr from-black via-gray-900 to-gray-800 md:px-20 lg:px-32">

//       <div className="z-10 flex flex-col max-w-xl space-y-6">
//         <p className="font-semibold tracking-wide text-pink-500 uppercase neon-glow">
//           Exclusive Launch
//         </p>

//         <h1 className="font-sans text-5xl font-extrabold leading-tight md:text-6xl neon-glow">
//           Next-Gen Tech Gadgets <br /> For Visionaries
//         </h1>

//         <p className="max-w-lg text-lg font-medium text-gray-300">
//           Experience the future today with innovative devices designed for peak performance and style.
//         </p>

//         <div className="flex gap-6">
//           <Link
//             to="/collection"
//             className="px-8 py-3 font-semibold transition bg-pink-600 rounded-full shadow-lg hover:bg-pink-700 neon-button"
//           >
//             Shop Now
//           </Link>
//           <Link
//             to="/about"
//             className="px-8 py-3 font-semibold transition border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>

//       <div className="relative flex-1 hidden md:block">
//         <div className="absolute inset-0 shadow-xl bg-white/10 backdrop-blur-xl rounded-3xl" />
//         <img
//           src={assets.hero_img}
//           alt="Tech Gadgets"
//           className="relative object-cover w-full h-full shadow-2xl rounded-3xl"
//         />
//       </div>
//     </section>
//   )
// }

// export default Hero





// valo lagbe in sah allah 
// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center px-6 md:px-20 lg:px-32">

//       {/* Left Side Content */}
//       <div className="z-10 flex flex-col justify-center max-w-xl text-white">

//         <p className="mb-3 font-semibold tracking-widest uppercase text-cyan-400">
//           New Arrivals
//         </p>

//         <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl font-sf-pro-display">
//           Cutting-Edge Gadgets for Your Next Adventure
//         </h1>

//         <p className="max-w-lg mb-10 text-lg text-gray-300">
//           Explore the latest technology crafted to simplify your life. Exclusive deals, fast shipping, and guaranteed quality.
//         </p>

//         <div className="flex gap-6">
//           <Link 
//             to="/collection" 
//             className="px-8 py-3 font-semibold text-white transition rounded-full shadow-lg bg-cyan-500 hover:bg-cyan-600"
//           >
//             Shop Now
//           </Link>
//           <Link 
//             to="/about" 
//             className="px-8 py-3 font-semibold transition border rounded-full border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>

//       {/* Right Side Image */}
//       <div className="relative flex-1 hidden md:block">
//         <img 
//           src={assets.hero_img} 
//           alt="High Tech Gadgets" 
//           className="absolute top-0 right-0 object-cover w-full h-full shadow-2xl rounded-3xl"
//         />
//       </div>

//       {/* Overlay for subtle lighting effect */}
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/60 rounded-3xl"></div>

//     </section>
//   )
// }

// export default Hero




// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col border border-gray-400 sm:flex-row'>
//       {/* Hero Left Side */}
//       <div className='flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='text-sm font-medium md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='text-3xl leading-relaxed prata-regular sm:py-3 lg:text-5xl'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='text-sm font-semibold md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero



// import React from 'react';
// import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row w-full min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden">
      
//       {/* Hero Left Side (Updated with gorgeous style) */}
//       <div className="flex items-center justify-center w-full px-6 py-10 sm:w-1/2 md:px-12 lg:px-20">
//         <div className="max-w-xl">
//           <p className="mb-3 font-semibold tracking-widest uppercase text-cyan-400">
//             New Arrivals
//           </p>

//           <h1 className="mb-6 font-sans text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
//             Cutting-Edge Gadgets for Your Next Adventure
//           </h1>

//           <p className="max-w-lg mb-10 text-base text-gray-300 md:text-lg">
//             Explore the latest technology crafted to simplify your life. Exclusive deals, fast shipping, and guaranteed quality.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/collection"
//               className="px-6 py-3 font-semibold text-white transition rounded-full shadow-lg bg-cyan-500 hover:bg-cyan-600"
//             >
//               Shop Now
//             </Link>
//             <Link
//               to="/about"
//               className="px-6 py-3 font-semibold transition border rounded-full text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Hero Right Side */}
//       <div className="relative w-full sm:w-1/2">
//         <img
//           src={assets.hero_img}
//           alt="Gadget Banner"
//           className="object-cover w-full h-full"
//         />
//         {/* Optional Overlay (if needed for darker image effect) */}
//         <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/60"></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row w-full min-h-screen text-[#333] overflow-hidden">
      
//       {/* Hero Left Side with White Background */}
//       <div className="flex items-center justify-center w-full px-6 py-10 bg-white sm:w-1/2 md:px-12 lg:px-20">
//         <div className="max-w-xl">
//           <p className="mb-3 font-semibold tracking-widest uppercase text-cyan-500">
//             New Arrivals
//           </p>

//           <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
//             Cutting-Edge Gadgets for Your Next Adventure
//           </h1>

//           <p className="mb-10 text-base text-gray-600 md:text-lg">
//             Explore the latest technology crafted to simplify your life. Exclusive deals, fast shipping, and guaranteed quality.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/collection"
//               className="px-6 py-3 font-semibold text-white transition rounded-full shadow-md bg-cyan-500 hover:bg-cyan-600"
//             >
//               Shop Now
//             </Link>
//             <Link
//               to="/about"
//               className="px-6 py-3 font-semibold transition border rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Hero Right Side with Image */}
//       <div className="relative w-full sm:w-1/2">
//         <img
//           src={assets.hero_img}
//           alt="Gadget Banner"
//           className="object-cover w-full h-full"
//         />
//       </div>
      
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row w-full min-h-screen text-[#333] overflow-hidden">
      
//       {/* Hero Left Side with White Background */}
//       <div className="flex items-center justify-center w-full px-6 py-10 bg-white sm:w-1/2 md:px-12 lg:px-20">
//         <div className="max-w-xl">
//           <p className="mb-3 font-semibold tracking-widest uppercase text-cyan-500">
//             New Arrivals
//           </p>

//           <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
//             Cutting-Edge Gadgets for Your Next Adventure
//           </h1>

//           <p className="mb-10 text-base text-gray-600 md:text-lg">
//             Explore the latest technology crafted to simplify your life. Exclusive deals, fast shipping, and guaranteed quality.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/collection"
//               className="px-6 py-3 font-semibold text-white transition rounded-full shadow-md bg-cyan-500 hover:bg-cyan-600"
//             >
//               Shop Now
//             </Link>
//             <Link
//               to="/about"
//               className="px-6 py-3 font-semibold transition border rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Hero Right Side with Image - shrink OFF */}
//       <div className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out shadow-xl sm:w-1/2 rounded-3xl">
//         <img
//           src={assets.hero_img}
//           alt="Gadget Banner"
//           className="object-cover w-full h-full"
//         />
//         {/* Elegant dark gradient overlay */}
//         <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/70 via-transparent to-black/40"></div>
//         {/* Soft glowing border */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/40 shadow-[0_0_30px_10px_rgba(14,116,144,0.4)]"></div>
//       </div>
      
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const leftVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const rightVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
//   hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeInOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row w-full min-h-screen text-[#333] overflow-hidden">
      
//       {/* Hero Left Side with White Background */}
//       <motion.div
//         className="flex items-center justify-center w-full px-6 py-10 bg-white sm:w-1/2 md:px-12 lg:px-20"
//         initial="hidden"
//         animate="visible"
//         variants={leftVariants}
//       >
//         <div className="max-w-xl">
//           <p className="mb-3 font-semibold tracking-widest uppercase text-cyan-500">
//             New Arrivals
//           </p>

//           <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
//             Cutting-Edge Gadgets for Your Next Adventure
//           </h1>

//           <p className="mb-10 text-base text-gray-600 md:text-lg">
//             Explore the latest technology crafted to simplify your life. Exclusive deals, fast shipping, and guaranteed quality.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/collection"
//               className="px-6 py-3 font-semibold text-white transition rounded-full shadow-md bg-cyan-500 hover:bg-cyan-600"
//             >
//               Shop Now
//             </Link>
//             <Link
//               to="/about"
//               className="px-6 py-3 font-semibold transition border rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </motion.div>

//       {/* Hero Right Side with Image - shrink OFF */}
//       <motion.div
//         className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out shadow-xl sm:w-1/2 rounded-3xl"
//         initial="hidden"
//         animate="visible"
//         whileHover="hover"
//         variants={rightVariants}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Gadget Banner"
//           className="object-cover w-full h-full"
//         />
//         {/* Elegant dark gradient overlay */}
//         <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/70 via-transparent to-black/40"></div>
//         {/* Soft glowing border */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/40 shadow-[0_0_30px_10px_rgba(14,116,144,0.4)]"></div>
//       </motion.div>
      
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 overflow-hidden text-center bg-white">

//       {/* Image Top */}
//       <motion.div
//         className="w-full max-w-md mb-8"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Banner"
//           className="object-cover w-full h-auto shadow-lg rounded-xl"
//         />
//       </motion.div>

//       {/* Online Support Section */}
//       <motion.div
//         className="space-y-6"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
//           Online Support
//         </h2>

//         <div className="flex justify-center gap-6">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//           >
//             <FaFacebookF size={20} />
//           </a>

//           <a
//             href="https://wa.me/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//           >
//             <FaWhatsapp size={20} />
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full min-h-screen overflow-hidden text-center bg-white">

//       {/* Full Width Image */}
//       <motion.div
//         className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Banner"
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Online Support Section */}
//       <motion.div
//         className="flex flex-col items-center justify-center px-4 py-10 space-y-6"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
//           Online Support
//         </h2>

//         <div className="flex justify-center gap-6">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//           >
//             <FaFacebookF size={20} />
//           </a>

//           <a
//             href="https://wa.me/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//           >
//             <FaWhatsapp size={20} />
//           </a>
//         </div>
//       </motion.div>

//       {/* Support Features Section */}
//       <motion.div
//         className="grid grid-cols-1 gap-8 px-4 pb-10 text-center sm:grid-cols-2 lg:grid-cols-3"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Easy Exchange */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange" />
//           <p className="text-lg font-semibold">Easy Exchange Policy</p>
//           <p className="mt-2 text-gray-500">We offer hassle-free exchange policy</p>
//         </motion.div>

//         {/* 3 Days Return */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Return" />
//           <p className="text-lg font-semibold">3 Days Return Policy</p>
//           <p className="mt-2 text-gray-500">We provide 3 days free return policy</p>
//         </motion.div>

//         {/* Best Customer Support */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Support" />
//           <p className="text-lg font-semibold">Best Customer Support</p>
//           <p className="mt-2 text-gray-500">We provide 24/7 customer support</p>
//         </motion.div>
//       </motion.div>

//     </div>
//   );
// };

// export default Hero;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full min-h-screen overflow-hidden text-center bg-white">

//       {/* Full Width Image */}
//       <motion.div
//         className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Banner"
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Support Features Section */}
//       <motion.div
//         className="grid grid-cols-1 gap-8 px-4 py-10 text-center sm:grid-cols-2 lg:grid-cols-3"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Easy Exchange */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange" />
//           <p className="text-lg font-semibold">Easy Exchange Policy</p>
//           <p className="mt-2 text-gray-500">We offer hassle-free exchange policy</p>
//         </motion.div>

//         {/* 7 Days Replace Policy */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Replace" />
//           <p className="text-lg font-semibold">7 Days Replace Policy</p>
//           <p className="mt-2 text-gray-500">We provide 7 days free replacement policy</p>
//         </motion.div>

//         {/* Online Support with FB & WhatsApp */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 space-y-4 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Support" />
//           <p className="text-lg font-semibold">Online Support</p>

//           <div className="flex justify-center gap-6">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//             >
//               <FaFacebookF size={18} />
//             </a>

//             <a
//               href="https://wa.me/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//             >
//               <FaWhatsapp size={18} />
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>

//     </div>
//   );
// };

// export default Hero;


//3 menu import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full min-h-screen overflow-hidden text-center bg-white">

//       {/* Full Width Image */}
//       <motion.div
//         className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Banner"
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Support Features Section */}
//       <motion.div
//         className="grid grid-cols-1 gap-8 px-4 py-10 text-center sm:grid-cols-2 lg:grid-cols-3"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Online Support with FB & WhatsApp */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 space-y-4 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Support" />
//           <p className="text-lg font-semibold">Online Support</p>

//           <div className="flex justify-center gap-6">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//             >
//               <FaFacebookF size={18} />
//             </a>

//             <a
//               href="https://wa.me/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//             >
//               <FaWhatsapp size={18} />
//             </a>
//           </div>
//         </motion.div>

//         {/* 7 Days Replace Policy */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Replace" />
//           <p className="text-lg font-semibold">7 Days Replace Policy</p>
//           <p className="mt-2 text-gray-500">We provide 7 days free replacement policy</p>
//         </motion.div>

//         {/* Easy Exchange */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }} 
//           transition={{ type: 'spring', stiffness: 300 }}
//           className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
//         >
//           <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange" />
//           <p className="text-lg font-semibold">Easy Exchange Policy</p>
//           <p className="mt-2 text-gray-500">We offer hassle-free exchange policy</p>
//         </motion.div>

//       </motion.div>

//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full min-h-screen overflow-hidden text-center bg-white">

//       {/* Full Width Image */}
//       <motion.div
//         className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Banner"
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Online Support Full Width Section */}
//       <motion.div
//         className="flex flex-col items-center justify-center w-full px-4 py-12 space-y-6 bg-gray-50"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
//           Online Support
//         </h2>

//         <div className="flex justify-center gap-6">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//           >
//             <FaFacebookF size={20} />
//           </a>

//           <a
//             href="https://wa.me/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//           >
//             <FaWhatsapp size={20} />
//           </a>
//         </div>
//       </motion.div>

//     </div>
//   );
// };

// export default Hero;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full min-h-screen overflow-hidden text-center bg-white">

//       {/* Full Width Image */}
//       <motion.div
//         className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <img
//           src={assets.hero_img}
//           alt="Banner"
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Online Support Full Width Section */}
//       <motion.div
//         className="flex flex-col items-center justify-center w-full px-4 py-12 space-y-6 bg-gray-50"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
//           Online Support
//         </h2>

//         <div className="flex justify-center gap-6">
//           <a
//             href="https://www.facebook.com/zamansgadget"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//           >
//             <FaFacebookF size={20} />
//           </a>

//           <a
//             href="https://wa.me/8801723220078"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//           >
//             <FaWhatsapp size={20} />
//           </a>
//         </div>
//       </motion.div>

//     </div>
//   );
// };

// export default Hero;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full min-h-screen overflow-hidden bg-white">
//       {/* Split Header */}
//       <motion.div
//         className="flex flex-col md:flex-row w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Left Big Image */}
//         <div className="w-full h-full md:w-2/3">
//           <img
//             src={assets.hero_img}
//             alt="Hero Banner"
//             className="object-cover w-full h-full"
//           />
//         </div>

//         {/* Right Logos */}
//         <div className="flex flex-col items-center justify-center w-full p-4 space-y-6 md:w-1/3 bg-gray-50">
//           <img
//             src={assets.stripe_logo}
//             alt="Stripe Logo"
//             className="w-40 h-auto"
//           />
//           <img
//             src={assets.razorpay_logo}
//             alt="Razorpay Logo"
//             className="w-40 h-auto"
//           />
//         </div>
//       </motion.div>

//       {/* Online Support Section */}
//       <motion.div
//         className="flex flex-col items-center justify-center w-full px-4 py-12 space-y-6 bg-gray-50"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
//           Online Support
//         </h2>
//         <div className="flex justify-center gap-6">
//           <a
//             href="https://www.facebook.com/zamansgadget"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//           >
//             <FaFacebookF size={20} />
//           </a>
//           <a
//             href="https://wa.me/8801723220078"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//           >
//             <FaWhatsapp size={20} />
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full overflow-hidden bg-white">
//       {/* Header Split Section */}
//       <motion.div
//         className="flex flex-col w-full lg:flex-row"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Left Large Image */}
//         <div className="w-full lg:w-2/3">
//           <img
//             src={assets.hero_img}
//             alt="Hero Banner"
//             className="object-cover w-full h-full max-h-[600px]"
//           />
//         </div>

//         {/* Right Two Images */}
//         <div className="flex flex-col w-full lg:w-1/3">
//           <img
//             src={assets.stripe_logo}
//             alt="Right Top Banner"
//             className="object-cover w-full h-1/2 max-h-[300px] border-b border-gray-200"
//           />
//           <img
//             src={assets.razorpay_logo}
//             alt="Right Bottom Banner"
//             className="object-cover w-full h-1/2 max-h-[300px]"
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* Header Section */}
      <motion.div
        className="flex flex-col w-full gap-4 p-4 lg:flex-row"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Large Image */}
        <div className="w-full lg:w-2/3">
          <img
            src={assets.hero_img}
            alt="Hero Banner"
            className="object-cover w-full h-full max-h-[600px] rounded"
          />
        </div>

        {/* Right Images */}
        <div className="flex flex-col w-full gap-4 lg:w-1/3">
          {/* Large Screen: column */}
          <img
            src={assets.stripe_logo}
            alt="Stripe Logo"
            className="object-cover w-full h-full max-h-[295px] rounded hidden lg:block"
          />
          <img
            src={assets.razorpay_logo}
            alt="Razorpay Logo"
            className="object-cover w-full h-full max-h-[295px] rounded hidden lg:block"
          />

          {/* Small Screen: row */}
          <div className="flex flex-row gap-4 lg:hidden">
            <img
              src={assets.stripe_logo}
              alt="Stripe Logo"
              className="object-cover w-1/2 h-full rounded"
            />
            <img
              src={assets.razorpay_logo}
              alt="Razorpay Logo"
              className="object-cover w-1/2 h-full rounded"
            />
          </div>
        </div>
      </motion.div>

      {/* Online Support Section */}
      <motion.div
        className="flex flex-col items-center justify-center w-full px-4 py-12 mt-8 space-y-6 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
          Online Support
        </h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/zamansgadget"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://wa.me/8801723220078"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
