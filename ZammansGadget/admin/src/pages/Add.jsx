// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price);
//       formData.append('category', category);
//       formData.append('subCategory', subCategory);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       image1 && formData.append('image1', image1);
//       image2 && formData.append('image2', image2);
//       image3 && formData.append('image3', image3);
//       image4 && formData.append('image4', image4);

//       const response = await axios.post(backendUrl + '/api/product/add', formData, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName('');
//         setDescription('');
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setPrice('');
//         setSoldOut(false);
//         setBestseller(false);
//         setCategory('');
//         setSubCategory('');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">
      
//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Image</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`}>
//               <img
//                 className="w-20"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt=""
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category, Subcategory, Price */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">
        
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2"
//             value={category}
//           >
//             <option value="">None</option>
//             <option value="Mobile Phone">Mobile Phone</option>
//             <option value="Accessories">Accessories</option>
//             <option value="Gadgets">Gadgets</option>
//           </select>
//         </div>

//         <div>
//           <p className="mb-2">Sub category</p>
//           <select
//             onChange={(e) => setSubCategory(e.target.value)}
//             className="w-full px-3 py-2"
//             value={subCategory}
//           >
//             <option value="">None</option>
//             <option value="Used Phones">Used Phones</option>
//             <option value="Stickers">Stickers</option>
//             <option value="Electronics">Electronics</option>
//           </select>
//         </div>

//         <div>
//           <p className="mb-2">Product Price</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 sm:w-[120px]"
//             type="number"
//             placeholder="25"
//           />
//         </div>
//       </div>

//       {/* Bestseller */}
//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((prev) => !prev)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       {/* Sold Out */}
//       <div className="flex gap-2">
//         <input onChange={() => setSoldOut((prev) => !prev)} checked={soldOut} type="checkbox" id="soldout" />
//         <label className="text-red-500 cursor-pointer" htmlFor="soldout">
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button type="submit" className="py-3 mt-4 text-white bg-black w-28">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;


import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [bestseller, setBestseller] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('bestseller', bestseller);
      formData.append('soldOut', soldOut);

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setPrice('');
        setSoldOut(false);
        setBestseller(false);
        setCategory('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">

      {/* Images */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, idx) => (
            <label key={idx} htmlFor={`image${idx + 1}`}>
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
              <input
                onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
                type="file"
                id={`image${idx + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Category and Price */}
      <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">

        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
            value={category}
            required
          >
            <option value="">Select Category</option>
            <option value="Official Phones">Official Phones</option>
            <option value="Unofficial Phones">Unofficial Phones</option>
            <option value="Used Phones">Used Phones</option>
            <option value="Adapter and Power cable">Adapter and Power cable</option>
            <option value="PowerBank">PowerBank</option>
            <option value="Airpods">Airpods</option>
            <option value="Earphones">Earphones</option>
            <option value="Neckband">Neckband</option>
            <option value="Gamming Accesorices">Gamming Accesorices</option>
            <option value="Speakers">Speakers</option>
            <option value="Cover and glass">Cover and glass</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
            required
          />
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      {/* Sold Out */}
      <div className="flex gap-2">
        <input
          onChange={() => setSoldOut((prev) => !prev)}
          checked={soldOut}
          type="checkbox"
          id="soldout"
        />
        <label className="text-red-500 cursor-pointer" htmlFor="soldout">
          Mark as SOLD OUT
        </label>
      </div>

      <button type="submit" className="py-3 mt-4 text-white bg-black w-28">
        ADD
      </button>
    </form>
  );
};

export default Add;

