// import { useNavigate } from 'react-router-dom';
// import { FaMobileAlt, FaChargingStation, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate } from 'react-icons/bs';
// import { MdOutlineCable, MdOutlineWatch } from 'react-icons/md';
// import { GiSmartphone, GiNecklaceDisplay } from 'react-icons/gi';

// const FeaturedCategories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
//     { name: 'Unofficial Phones', icon: <BsPhoneFlip size={30} /> },
//     { name: 'Used Phones', icon: <BsPhoneVibrate size={30} /> },
//     { name: 'Adapter and Power cable', icon: <MdOutlineCable size={30} /> },
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
//     { name: 'Airpods', icon: <FaHeadphones size={30} /> },
//     { name: 'Earphones', icon: <GiSmartphone size={30} /> },
//     { name: 'Neckband', icon: <GiNecklaceDisplay size={30} /> },
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
//     { name: 'Cover and glass', icon: <FaGlassWhiskey size={30} /> },
//   ];

//   return (
//     <div className="max-w-6xl px-4 py-10 mx-auto">
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;




import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaChargingStation, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
import { BsPhoneFlip, BsPhoneVibrate } from 'react-icons/bs';
import { MdOutlineCable, MdOutlineWatch } from 'react-icons/md';
import { GiSmartphone, GiNecklaceDisplay } from 'react-icons/gi';

const FeaturedCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
    { name: 'Unofficial Phones', icon: <BsPhoneFlip size={30} /> },
    { name: 'Used Phones', icon: <BsPhoneVibrate size={30} /> },
    { name: 'Adapter and Power cable', icon: <MdOutlineCable size={30} /> },
    { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
    { name: 'Airpods', icon: <FaHeadphones size={30} /> },
    { name: 'Earphones', icon: <GiSmartphone size={30} /> },
    { name: 'Neckband', icon: <GiNecklaceDisplay size={30} /> },
    { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
    { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
    { name: 'Cover and glass', icon: <FaGlassWhiskey size={30} /> },
  ];

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
            className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
          >
            <div className="mb-3 text-cyan-600">{cat.icon}</div>
            <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
