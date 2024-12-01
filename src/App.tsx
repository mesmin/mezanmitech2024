// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import CompanyDescription from './components/CompanyDescription';
// import AIIntegration from './components/AIIntegration';
// import Solutions from './components/Solutions';
// import Industries from './components/Industries';
// import Training from './components/Training';
// import Pricing from './components/Pricing';
// import ContactForm from './components/ContactForm';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';

// function App() {
//   return (
//     <div className="min-h-screen">
//       {/* Fixed header with social icons */}
//       <Header />
      
//       <main>
//         {/* Full-width hero slider */}
//         <Hero />

//         {/* White background */}
//         <div className="bg-white">
//           <CompanyDescription />
//         </div>

//         {/* Light gray background */}
//         <div className="bg-gray-50">
//           <AIIntegration />
//         </div>

//         {/* White background */}
//         <div className="bg-white">
//           <Solutions />
//         </div>

//         {/* Light blue background */}
//         <div className="bg-primary-50">
//           <Industries />
//         </div>

//         {/* White background */}
//         <div className="bg-white">
//           <Training />
//         </div>

//         {/* Light gray background */}
//         <div className="bg-gray-50">
//           <Pricing />
//         </div>

//         {/* White background */}
//         <div className="bg-white">
//           <ContactForm />
//         </div>

//         {/* Dark background for newsletter */}
//         <Newsletter />
//       </main>

//       {/* Dark background for footer */}
//       <Footer />

//       /* Scroll to top */
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;
// src/App.tsx
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;