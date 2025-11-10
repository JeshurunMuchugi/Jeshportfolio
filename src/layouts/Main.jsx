import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import PageTransition from "../components/common/animations/PageTransition";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative">
      <PageTransition>
        <NavBar />
        <Outlet />
        <div className="bg-[#2A374A]">
          <Footer />
        </div>
        <ScrollToTop />
      </PageTransition>
    </div>
  );
};

export default Main;
