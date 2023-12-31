import { React } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import HomeFeature from "./components/HomeFeature.js";
import PortfolioPage from "./components/pages/PortfolioPage.js";
import AboutPage from "./components/pages/AboutPage.js";

import ProjectList from "./components/projects/ProjectList.js";

import Wordplay from "./components/projects/project-pages/Wordplay.js";
import FoodPantry from "./components/projects/project-pages/FoodPantry.js";
import Encapsulate from "./components/projects/project-pages/Encapsulate.js";
import StartingPoint from "./components/projects/project-pages/StartingPoint.js";
import DiscGlobe from "./components/projects/project-pages/DiscGlobe.js";
import AccessibleAccess from "./components/projects/project-pages/AccessibleAccess.js";
import Nagano from "./components/projects/project-pages/Nagano.js";

//import Footer from "./components/Footer.js";
import ScrollToTop from "./components/ScrollToTop.js";

export default function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   require('preline/preline');
  // }, []);

  // useEffect(() => {
  //   // @ts-ignore
  //   HSStaticMethods.autoInit();
  // }, [location.pathname]);

  /* function from https://www.codingbeautydev.com/blog/react-scroll-to-top-of-page 
     for the "back to top" link at bottom of project pages to work
  */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="">
      {/* for each page to load at the top instead of in the middle on route change */}
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route index element={<HomeFeature />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/portfolio" element={<PortfolioPage />}>
          <Route path="" element={ <ProjectList />} />

          {/* curent projects */}
          <Route path="wordplay" element={<Wordplay scrollToTop={scrollToTop} />} />
          
          {/* project archive */}
          <Route path="food-pantry" element={<FoodPantry scrollToTop={scrollToTop} />} />
          <Route path="encapsulate" element={<Encapsulate scrollToTop={scrollToTop} />} />
          <Route path="starting" element={<StartingPoint scrollToTop={scrollToTop} />} />
          <Route path="discglobe" element={<DiscGlobe scrollToTop={scrollToTop} />} />
          <Route path="access" element={<AccessibleAccess scrollToTop={scrollToTop} />} />
          <Route path="nagano" element={<Nagano scrollToTop={scrollToTop} />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

function PageNotFound(props) {
  return (
    <main className=" place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* #AE7E6F eee4e1 */}
        <p className="text-base font-semibold text-[#BD9589]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, this page doesn't exist.</p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/" className="rounded-lg bg-[#eee4e1] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:outline hover:outline-2 hover:outline-[#eee4e1] hover:bg-white transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}