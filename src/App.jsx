
import './App.css'
import Hero from './componenents/Hero'
import Navbar from './componenents/Navbar'
import Img1 from './assets/banner/banner1.webp'
import Img2 from './assets/banner/banner2.jpeg'
import Banner from './componenents/banner/Banner'
import Tabs from './componenents/tabs/Tabs'
import Offers from './componenents/Offers'
import Banner2 from './componenents/banner/Banner2'
import Testimonials from './componenents/testimonial/Testimonials'
import Gallery from './componenents/Gallery'
import Equipments from './componenents/Equipments'
import About from './componenents/About'
import FAQ from './componenents/FAQ'
import Contact from './componenents/Contact'
import SiteMap from './componenents/SiteMap'
import Feedback from './componenents/Feedback'
import DownloadDescription from './componenents/DownloadDescription'
import Ticker from './componenents/Ticker'
import Footer from './componenents/Footer'




const BannerData = {
  image: Img1,
  title: "Why Lighting Matters",
  subtitle: "Proper lighting isn’t just about brightness — it shapes how you feel, how you work, and how you enjoy every moment at home and beyond.",
  link: "#"
};

const Banner2Data = {
  image: Img2,
  title: "Brighten Your World with Smarter Lighting",
  subtitle: "Discover modern lighting solutions that blend style, efficiency, and innovation to illuminate every space — from cozy homes to vibrant outdoor areas.",
  link: "#"
};


function App() {
  

  return (
    <div className="container-fluid p-0 overflow-hidden">
      <Navbar />
      <Hero />
      <Equipments />
      <Banner {...BannerData}/>
      <Tabs />
      <Banner {...Banner2Data}/>
      <Offers />
      <Testimonials />
      <Banner2 />
      <Gallery />
      <About />
      <FAQ />
      <Contact />
      <SiteMap />
      <Feedback />
      <DownloadDescription />
      <Footer />
      <Ticker />
    </div>
  )
}

export default App
