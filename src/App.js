import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { Parallax } from "react-parallax";
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        
      
        <Home />
       
      </Suspense>
    </>
  );
}

export default App;
