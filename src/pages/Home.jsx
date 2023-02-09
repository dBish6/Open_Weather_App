// *Custom Hooks Import*
import useDocumentTitle from "../hooks/useDocumentTitle";

// *Component Imports*
import Header from "../components/Header";
import Dashboard from "../features/dashboard";
import Footer from "../components/Footer";

const Home = (props) => {
  useDocumentTitle(`${props.title} | Open Weather`);

  return (
    <div>
      <Header />

      <Dashboard />

      <Footer />
    </div>
  );
};

export default Home;
