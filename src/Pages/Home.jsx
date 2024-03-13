import Banner from "../Components/Banner";
import Chooes from "../Components/Chooes";
import Container from "../Components/Container";
import Features from "../Components/Features";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <Features />
        <Chooes/>
      </Container>
      <Services/>
    </div>
  );
};

export default Home;
