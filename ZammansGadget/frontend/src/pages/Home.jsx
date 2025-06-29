// import React from 'react'
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <LatestCollection/>
//       <BestSeller/>
//       <OurPolicy/>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Home
// import React from 'react';
// import Hero from '../components/Hero';
// import LatestCollection from '../components/LatestCollection';
// import BestSeller from '../components/BestSeller';
// import OurPolicy from '../components/OurPolicy';
// import NewsletterBox from '../components/NewsletterBox';
// import FeaturedCategories from '../components/FeaturedCategories'; // import kora hocche

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <FeaturedCategories /> {/* Featured Categories Add korlam */}
//       <LatestCollection />
//       <BestSeller />
//       <OurPolicy />
//       <NewsletterBox />
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
