import NavigationBar from "../../components/MainHeader/NavigationBar";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ModulosEducacionais_small from "../../components/ModulosEducacionais_small/ModulosEducacionais_small";
import Parceiros_small from "../../components/Parceiros_small/Parceiros_small";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <NavigationBar />
      <ImageSlider />
      <ModulosEducacionais_small />
      <Parceiros_small />
      <Footer />
    </main>
  );
};

export default Home;
