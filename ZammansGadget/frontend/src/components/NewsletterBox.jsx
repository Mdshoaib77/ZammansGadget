// with out white 
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const NewsletterBox = () => {

//   const [status, setStatus] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     formData.append("access_key", "9fcf44a6-7821-4715-bba7-3df1f4bba2f1");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("✅ Thank you for subscribing!");
//         event.target.reset();
//       } else {
//         setStatus("⚠️ Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setStatus("❌ Network error. Please try later.");
//     }
//   };

//   return (
//     <div className="px-4 py-16 sm:px-8 md:px-20">
//       <motion.div 
//         initial={{ opacity: 0, y: 40 }} 
//         whileInView={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="max-w-3xl px-6 py-10 mx-auto text-center bg-transparent backdrop-blur-sm"
//       >
//         <p className="mb-4 text-2xl font-bold text-black md:text-3xl">
//           🎉 Visit our Shop & Get <span className="text-yellow-500">20% OFF</span>
//         </p>
//         <p className="max-w-md mx-auto mb-6 text-sm text-gray-700 sm:text-base">
//           Subscribe now and be the first to hear about new gadgets, exclusive deals, and special offers.
//         </p>

//         <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row">
//           <input 
//             className="w-full px-5 py-3 text-black rounded-full shadow-md outline-none sm:w-2/3 placeholder:text-gray-500 bg-white/90 focus:ring-2 focus:ring-yellow-300" 
//             type="email" 
//             name="email"
//             placeholder="Enter your email" 
//             required 
//           />
//           <button 
//             type="submit" 
//             className="px-8 py-3 font-semibold text-black transition bg-yellow-300 rounded-full hover:bg-yellow-400"
//           >
//             Subscribe Now
//           </button>
//         </form>

//         {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
//       </motion.div>
//     </div>
//   );
// };

// export default NewsletterBox;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterBox = () => {

  const [status, setStatus] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "9fcf44a6-7821-4715-bba7-3df1f4bba2f1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Thank you for subscribing!");
        event.target.reset();
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try later.");
    }
  };

  return (
    <div className="px-4 py-16 bg-white sm:px-8 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl px-6 py-12 mx-auto text-center bg-white border shadow-lg rounded-3xl sm:px-16"
      >
        <p className="mb-4 text-2xl font-bold text-black md:text-3xl">
          🎉 Visit our Shop & Get <span className="text-yellow-500">20% OFF</span>
        </p>
        <p className="max-w-md mx-auto mb-6 text-sm text-gray-600 sm:text-base">
          Subscribe now and be the first to hear about new gadgets, exclusive deals, and special offers.
        </p>

        <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row">
          <input 
            className="w-full px-5 py-3 text-black bg-gray-100 rounded-full shadow-sm outline-none sm:w-2/3 placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300" 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            required 
          />
          <button 
            type="submit" 
            className="px-8 py-3 font-semibold text-black transition bg-yellow-300 rounded-full hover:bg-yellow-400"
          >
            Subscribe Now
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
      </motion.div>
    </div>
  );
};

export default NewsletterBox;




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const NewsletterBox = () => {

//   const [status, setStatus] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     formData.append("access_key", "9fcf44a6-7821-4715-bba7-3df1f4bba2f1"); // Your Web3Forms Access Key

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("✅ Thank you for subscribing!");
//         event.target.reset();
//       } else {
//         setStatus("⚠️ Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setStatus("❌ Network error. Please try later.");
//     }
//   };

//   return (
//     <div className="px-4 py-12 bg-white sm:px-8 md:px-20">
//       <motion.div 
//         initial={{ opacity: 0, y: 40 }} 
//         whileInView={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="max-w-3xl px-6 py-10 mx-auto text-center text-white shadow-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl sm:p-12"
//       >
//         <p className="mb-4 text-2xl font-bold md:text-3xl">
//           🎉 Visit our Shop & Get <span className="text-yellow-300">20% OFF</span>
//         </p>
//         <p className="max-w-md mx-auto mb-6 text-sm text-white/80 sm:text-base">
//           Subscribe now and be the first to know about new gadgets, exclusive deals, and special offers.
//         </p>

//         <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row">
//           <input 
//             className="w-full px-4 py-3 text-gray-700 rounded-full shadow-md outline-none sm:w-2/3 placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300" 
//             type="email" 
//             name="email"
//             placeholder="Enter your email" 
//             required 
//           />
//           <button 
//             type="submit" 
//             className="px-8 py-3 font-semibold text-black transition bg-yellow-300 rounded-full hover:bg-yellow-400"
//           >
//             Subscribe Now
//           </button>
//         </form>

//         {status && <p className="mt-4 text-sm text-white">{status}</p>}
//       </motion.div>
//     </div>
//   );
// };

// export default NewsletterBox;





// import React from 'react';
// import { motion } from 'framer-motion';

// const NewsletterBox = () => {

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }} 
//       whileInView={{ opacity: 1, y: 0 }} 
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="max-w-2xl px-5 py-12 mx-auto text-center text-white shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"
//     >
//       <p className="mb-4 text-2xl font-bold md:text-3xl">🎉 Visit our Shop & Get <span className="text-yellow-300">20% OFF</span></p>
//       <p className="max-w-md mx-auto mb-6 text-white/80">
//         Subscribe to our newsletter and stay updated with exclusive offers and the latest arrivals.
//       </p>

//       <form 
//         onSubmit={onSubmitHandler} 
//         className="flex flex-col items-center justify-center w-full gap-3 sm:flex-row"
//       >
//         <input 
//           className="w-full px-4 py-3 text-gray-700 rounded-full shadow outline-none sm:w-2/3 placeholder:text-gray-500" 
//           type="email" 
//           placeholder="Enter your email" 
//           required 
//         />
//         <button 
//           type="submit" 
//           className="px-8 py-3 font-semibold text-black transition bg-yellow-300 rounded-full hover:bg-yellow-400"
//         >
//           SUBSCRIBE
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default NewsletterBox;



// import React from 'react'

// const NewsletterBox = () => {

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//     }

//   return (
//     <div className='text-center '>
//       <p className='text-2xl font-medium text-gray-800'>Visit our shop now & get 20% off</p>
//       <p className='mt-3 text-gray-400'>
//       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       </p>
//       <form onSubmit={onSubmitHandler} className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2'>
//         <input className='w-full outline-none sm:flex-1' type="email" placeholder='Enter your email' required/>
//         <button type='submit' className='px-10 py-4 text-xs text-white bg-black'>SUBSCRIBE</button>
//       </form>
//     </div>
//   )
// }

// export default NewsletterBox


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const NewsletterBox = () => {

//   const [status, setStatus] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     formData.append("access_key", "9fcf44a6-7821-4715-bba7-3df1f4bba2f1"); // Your Web3Forms Access Key

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("✅ Thank you for subscribing!");
//         event.target.reset();
//       } else {
//         setStatus("⚠️ Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setStatus("❌ Network error. Please try later.");
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 40 }} 
//       whileInView={{ opacity: 1, y: 0 }} 
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="max-w-2xl px-5 py-12 mx-auto text-center text-white shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"
//     >
//       <p className="mb-4 text-2xl font-bold md:text-3xl">
//         🎉 Visit our Shop & Get <span className="text-yellow-300">20% OFF</span>
//       </p>
//       <p className="max-w-md mx-auto mb-6 text-white/80">
//         Subscribe to our newsletter to stay updated with exclusive offers and tech deals!
//       </p>

//       <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center w-full gap-3 sm:flex-row">
//         <input 
//           className="w-full px-4 py-3 text-gray-700 rounded-full shadow outline-none sm:w-2/3 placeholder:text-gray-500" 
//           type="email" 
//           name="email"
//           placeholder="Enter your email" 
//           required 
//         />
//         <button 
//           type="submit" 
//           className="px-8 py-3 font-semibold text-black transition bg-yellow-300 rounded-full hover:bg-yellow-400"
//         >
//           Subscribe Now
//         </button>
//       </form>

//       {status && <p className="mt-4 text-sm text-white">{status}</p>}
//     </motion.div>
//   );
// };

// export default NewsletterBox;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const NewsletterBox = () => {

//   const [status, setStatus] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     formData.append("access_key", "9fcf44a6-7821-4715-bba7-3df1f4bba2f1"); // Your Web3Forms Access Key

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("✅ Thank you for subscribing!");
//         event.target.reset();
//       } else {
//         setStatus("⚠️ Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setStatus("❌ Network error. Please try later.");
//     }
//   };

//   return (
//     <div className="px-4 py-12 bg-white sm:px-8 md:px-20">
//       <motion.div 
//         initial={{ opacity: 0, y: 40 }} 
//         whileInView={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="max-w-3xl px-6 py-10 mx-auto text-center text-white shadow-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl sm:p-12"
//       >
//         <p className="mb-4 text-2xl font-bold md:text-3xl">
//           🎉 Visit our Shop & Get <span className="text-yellow-300">20% OFF</span>
//         </p>
//         <p className="max-w-md mx-auto mb-6 text-sm text-white/80 sm:text-base">
//           Subscribe now and be the first to know about new gadgets, exclusive deals, and special offers.
//         </p>

//         <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row">
//           <input 
//             className="w-full px-4 py-3 text-gray-700 rounded-full shadow-md outline-none sm:w-2/3 placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300" 
//             type="email" 
//             name="email"
//             placeholder="Enter your email" 
//             required 
//           />
//           <button 
//             type="submit" 
//             className="px-8 py-3 font-semibold text-black transition bg-yellow-300 rounded-full hover:bg-yellow-400"
//           >
//             Subscribe Now
//           </button>
//         </form>

//         {status && <p className="mt-4 text-sm text-white">{status}</p>}
//       </motion.div>
//     </div>
//   );
// };

// export default NewsletterBox;

