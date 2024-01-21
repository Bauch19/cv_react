import Home from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Portafolio from "./Portafolio";

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/aboutme', component: <AboutMe />, exact: true },
  { path: '/experience', component: <Experience />, exact: true },
  { path: '/portafolio', component: <Portafolio />, exact: true },
];

export default routes;