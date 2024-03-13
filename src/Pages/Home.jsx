import Banner from "../Components/Banner";
import Chooes from "../Components/Chooes";
import Container from "../Components/Container";
import Features from "../Components/Features";
import Services from "../Components/Services";
import Stastistic from "../Components/Stastistic";
import TopDeliveryMan from "../Components/TopDeliveryMan";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <Features />
        <Chooes/>
      </Container>
      <Services/>
      <Container>
        <TopDeliveryMan/>
      </Container>
      <Stastistic/>
    </div>
  );
};

export default Home;
