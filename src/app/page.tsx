import LandingPage from "@/components/Blocks/landing-page/LandingPage";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </>
  );
};

export default Home;
