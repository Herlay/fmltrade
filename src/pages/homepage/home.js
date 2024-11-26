import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Navbar from "../../components/nav/nav";
import { useRef } from "react";

import { useTypewriter } from "react-simple-typewriter";

import Offer1 from "../../assets/commodity.png";
import Offer2 from "../../assets/research.png";
import Offer3 from "../../assets/growth.png";
import Offer4 from "../../assets/trade.png";
import Offer5 from "../../assets/transportation.png";
import Offer6 from "../../assets/export.png";

import choose1 from "../../assets/analytics.png"
import choose2 from "../../assets/distribution.png"
import choose3 from "../../assets/pin.png"
import choose4 from "../../assets/investment.png"
import choose6 from "../../assets/trade1.png"

import caro1 from "../../assets/crops/maize.jpg"
import caro2 from "../../assets/crops/sheaNut.jpg"
import caro3 from "../../assets/crops/hibiscus.jpg"
import caro4 from "../../assets/crops/ginger.jpg"
import caro5 from "../../assets/crops/soyabean.jpg"
import caro6 from "../../assets/crops/unprocessed.jpg"
import caro7 from "../../assets/crops/sesame.jpg"
import caro8 from "../../assets/crops/kernelShell.jpg"

import ex1 from "../../assets/crops/rice.jpg"
import ex2 from "../../assets/crops/oil.jpeg"
import ex3 from "../../assets/crops/sugar.jpeg"

import Footer from "../../components/footer/footer";
import Slide from "../../components/slider/slider";

const Home = () => { 

  const catalogCarouselRef = useRef(null);
  
  const scrollCatalogCarousel = (direction) => {
    if (catalogCarouselRef.current) {
      const scrollAmount = catalogCarouselRef.current.offsetWidth; 
      catalogCarouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount, 
        behavior: "smooth",
      });
    }
  };
  
  const handleInfiniteScroll = () => {
    if (catalogCarouselRef.current) {
      const scrollWidth = catalogCarouselRef.current.scrollWidth;  
      const clientWidth = catalogCarouselRef.current.clientWidth;  
      const scrollLeft = catalogCarouselRef.current.scrollLeft;  
  
      if (scrollLeft + clientWidth >= scrollWidth) {
        catalogCarouselRef.current.scrollLeft = 0;
      }
    }
  };
  
  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollCatalogCarousel("next"); 
      handleInfiniteScroll(); 
    }, 3000);  

    return () => clearInterval(autoScroll);
  }, []);
  


  return (
    <section>
      <Navbar />

      <div className="homeFlyerContainer flex-center wrap">
    <Slide/>
      </div>

     
      <div className="catSection">
        <h1>WHAT WE OFFER</h1>
        <div className="categoryContainer flex-center gap-20 wrap">
          <div className="categoryCard grid">
            <div className="catImgContainer">
              <img src={Offer1} alt="Currency Wallet" className="catImg" />
            </div>
            <h2 className="cath2">Agricultural Products Sourcing</h2>
          </div>

          <div className="categoryCard grid">
            <div className="catImgContainer">
              <img src={Offer2} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Marketing and Research</h2>
          </div>

          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer6} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Import/Export</h2>
          </div>
         
          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer3} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Business Development</h2>
          </div>

          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer4} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Trade Finance</h2>
          </div>
      
          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer5} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Logistics</h2>
          </div>
        </div>
      </div>



      <p className="catalogP">FML TRADING SOURCE AND EXPORT PRODUCTS</p>
      
      <div className="catalog-carousel-container">
        <button
          className="carousel-button prev"
          onClick={() => scrollCatalogCarousel("prev")}
        >
          &#10094;
        </button>
        <div className="carousel" ref={catalogCarouselRef}>
          <div className="carousel-track">
            <div className="catalogCard">
              <img src={caro1} alt="Catalog Item 1" className="catalogImg" />
              <h2>YELLOW MAIZE(CORN)</h2>
              <p>Yellow Corn Maize(corn) from West Africa</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
           </div>
            
            <div className="catalogCard">
              <img src={caro2} alt="Catalog Item 2" className="catalogImg" />
              <h2>SHEA NUT</h2>
              <p>Processing - Sund-dried</p>
              <p>Oil Content - 45 to 51%</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link>
            </div>

            <div className="catalogCard">
              <img src={caro3} alt="Catalog Item 3" className="catalogImg" />
              <h2>HIBISCUS FLOWER</h2>
              <p>Form - Raw Material</p>
              <p>Grade- A</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link>
            </div>

            <div className="catalogCard">
              <img src={caro4} alt="Catalog Item 3" className="catalogImg" />
              <h2>DRY SPLIT GINGER</h2>
              <p>Origin - Nigeria</p>
              <p>Product Type - Dry Split Ginger</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro5} alt="Catalog Item 3" className="catalogImg" />
              <h2>SOYA BEANS</h2>
              <p>Protein - 38% min on dry basis</p>
              <p>Oil - 21% min</p> 
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro6} alt="Catalog Item 3" className="catalogImg" />
              <h2>UNPROCESSED TEAK WOOD</h2>
              <p>Parameter,Typical Value/Range</p>
              <p>Species,Tectona grandis</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro7} alt="Catalog Item 3" className="catalogImg" />
              <h2>SESAME SEED</h2>
              <p>Packing Size - 50kg bags</p>
              <p>Origin- West Africa</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro8} alt="Catalog Item 4" className="catalogImg" />
              <h2>PALM KERNEL SHELLS</h2>
              <p>Color,Dark brown to black</p>
              <p>Origin:Nigeria,Thailand,Indonesia </p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

    
      </div>
        </div>
        <button
          className="carousel-button next"
          onClick={() => scrollCatalogCarousel("next")}
        >
          &#10095;
        </button>
      </div>
      

      <p className="catalogP">FML TRADING SOURCE AND IMPORT PRODUCTS</p>
      <div className="choosecategoryContainer flex-center gap-20 wrap">

<div className="choosecategoryCard grid">
    <div className="exportcatImgContainer">
    <a href="./catalog">  <img src={ex1} alt="Global Sourcing Expertise" className="export"/></a>
    </div>
    <h1>RICE</h1>
  
</div>

<div className="choosecategoryCard grid">
    <div className="exportcatImgContainer">
       <a href="./catalog"> <img src={ex2} alt="Global Sourcing Expertise" className="export"/></a>
    </div>
    <h1>VEGETABLE OIL</h1>
  
</div>

<div className="choosecategoryCard grid">
    <div className="exportcatImgContainer">
    <a href="./catalog">  <img src={ex3} alt="Global Sourcing Expertise" className="export"/></a>
    </div>
    <h1>SUGAR</h1>
  
</div>




</div>



<h1 className="choose">WHY CHOOSE US </h1>
<div className="choosecategoryContainer flex-center gap-20 wrap">

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose3} alt="Global Sourcing Expertise" className="choosecatImg"/>
        </div>
        <h1>Global Sourcing Expertise</h1>
        <p>At FML Trading, we excel in sourcing premium agricultural products from trusted suppliers worldwide. Our deep market knowledge ensures you get quality products with ease and reliability.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose1} alt="Innovative Market Research" className="choosecatImg"/>
        </div>
        <h1>Innovative Market Research</h1>
        <p>Our team conducts thorough market analysis to provide insights that drive business growth. We equip you with the data you need to make informed strategic decisions.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose4} alt="Business Development Support" className="choosecatImg"/>
        </div>
        <h1>Business Development Support</h1>
        <p>We’re dedicated to helping your business expand, offering tailored strategies and solutions that maximize your market potential and growth opportunities.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose6} alt="Reliable Trade Finance" className="choosecatImg"/>
        </div>
        <h1>Reliable Trade Finance</h1>
        <p>Our trade finance solutions provide secure, flexible funding options, including bank instruments, to help you scale operations and meet financial needs with confidence.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose2} alt="Efficient Logistics" className="choosecatImg"/>
        </div>
        <h1>Efficient Logistics</h1>
        <p>With our efficient logistics solutions, we ensure that your products move seamlessly across borders, reducing transit times and optimizing costs for a hassle-free experience.</p>
    </div>
  

</div>


      <Footer/>

    </section>
  );
};

export default Home;
