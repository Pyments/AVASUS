
import MainHeader from "../components/MainHeader";
import ImageSlider from "../components/ImageSlider";
import ModulosEducacionais_small from "../components/ModulosEducacionais_small";
import Parceiros_small from "../components/Parceiros_small";
import Footer from "../components/Footer";

const Home = () => {
   return (
    <main>
      <MainHeader />
      <ImageSlider />
      <ModulosEducacionais_small />
      <Parceiros_small />  
      <Footer />
    </main>
  );
};

export default Home;
