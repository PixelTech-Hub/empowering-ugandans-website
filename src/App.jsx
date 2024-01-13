import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import SuccessStories from "./components/SuccessStories";


const App = () => {

  return (
    <div className="relative mx-0">
      <Header />
      <Banner />
      <Services />
      <SuccessStories />
      {/* <Footer /> */}
    </div>
  )
}
export default App;