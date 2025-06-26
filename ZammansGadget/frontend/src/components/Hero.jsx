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


import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const rightVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeInOut' } },
};

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen text-[#333] overflow-hidden">
      
      {/* Hero Left Side with White Background */}
      <motion.div
        className="flex items-center justify-center w-full px-6 py-10 bg-white sm:w-1/2 md:px-12 lg:px-20"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        <div className="max-w-xl">
          <p className="mb-3 font-semibold tracking-widest uppercase text-cyan-500">
            New Arrivals
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Cutting-Edge Gadgets for Your Next Adventure
          </h1>

          <p className="mb-10 text-base text-gray-600 md:text-lg">
            Explore the latest technology crafted to simplify your life. Exclusive deals, fast shipping, and guaranteed quality.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/collection"
              className="px-6 py-3 font-semibold text-white transition rounded-full shadow-md bg-cyan-500 hover:bg-cyan-600"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 font-semibold transition border rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Hero Right Side with Image - shrink OFF */}
      <motion.div
        className="relative w-full overflow-hidden transition-transform duration-700 ease-in-out shadow-xl sm:w-1/2 rounded-3xl"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={rightVariants}
      >
        <img
          src={assets.hero_img}
          alt="Gadget Banner"
          className="object-cover w-full h-full"
        />
        {/* Elegant dark gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/70 via-transparent to-black/40"></div>
        {/* Soft glowing border */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/40 shadow-[0_0_30px_10px_rgba(14,116,144,0.4)]"></div>
      </motion.div>
      
    </div>
  );
};

export default Hero;
