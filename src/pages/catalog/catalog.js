import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import "./catalog.css";
import pic1 from "../../assets/crops/maize.jpg"
import pic2 from "../../assets/crops/soyabean.jpg"
import pic3 from "../../assets/crops/ginger.jpg"
import pic3a from "../../assets/crops/ginger2.jpg"
import pic4 from "../../assets/crops/unprocessed.jpg"
import pic5 from "../../assets/crops/processed2.jpg"
import pic6 from "../../assets/crops/sesam.jpeg"
import pic7 from "../../assets/crops/kernelShell.jpg"
import pic8 from "../../assets/crops/kernelNut.jpg"
import pic9 from "../../assets/crops/whiteMaize.jpg"
import pic10 from "../../assets/crops/sorgh.jpg"
import pic11 from "../../assets/crops/shea.jpg"
import pic12 from "../../assets/crops/crude.jpeg"
import pic16 from "../../assets/crops/hibiscus.jpg"
import pic17 from "../../assets/crops/cashewShell.jpg"
import pic18 from "../../assets/crops/cashewKarnel.jpg"


import pic13 from "../../assets/crops/rice.jpg"
import pic14 from "../../assets/crops/oil.jpeg"
import pic15 from "../../assets/crops/sugar.jpeg"

import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import Payment from '../payment/payment';

const Catalog = () => {
  const previewContainerRef = useRef(null);

  useEffect(() => {
    const preveiwContainer = previewContainerRef.current;
    if (!preveiwContainer) return;

    const previewBoxes = preveiwContainer.querySelectorAll('.preview');

    const products = document.querySelectorAll('.products-container .product');
    products.forEach(product => {
      product.onclick = () => {
        const name = product.getAttribute('data-name');
        preveiwContainer.style.display = 'flex';

        previewBoxes.forEach(preview => {
          const target = preview.getAttribute('data-target');
          if (name === target) {
            preview.classList.add('active');
          } else {
            preview.classList.remove('active');
          }
        });
      };
    });


    previewBoxes.forEach(preview => {
      const closeBtn = preview.querySelector('.close-icon');
      if (closeBtn) {
        closeBtn.onclick = () => {
          preview.classList.remove('active');
          preveiwContainer.style.display = 'none';
        };
      }
    });

    return () => {
      products.forEach(product => (product.onclick = null));
      previewBoxes.forEach(preview => {
        const closeBtn = preview.querySelector('.close-icon');
        if (closeBtn) closeBtn.onclick = null;
      });
    };
  }, []);

  return (
    <div>
        <Navbar/>
      <div className="container">
        <h3 className="title">FML TRADING SOURCE AND EXPORT PRODUCTS CATALOG</h3>

        <div className="products-container">
          <div className="product" data-name="p-1">
            <img src={pic1} alt="img"/>
            <h3>Yellow Maize(Corn)</h3>
          </div>

          <div className="product" data-name="p-9">
          <img src={pic9} alt="img"/>
          <h3>WHITE MAIZE (Corn)</h3>
          </div>

          <div className="product" data-name="p-2">
          <img src={pic2} alt="img"/>
          <h3>SOYA BEANS</h3>
          </div>

          <div className="product" data-name="p-3">
          <img src={pic3} alt="img"/>
          <h3>DRY SPLIT GINGER</h3>
          </div>

          <div className="product" data-name="p-4">
          <img src={pic4} alt="img"/>
          <h3>UNPROCESSED TEAK WOOD</h3>
          </div>

          <div className="product" data-name="p-5">
          <img src={pic5} alt="img"/>
          <h3>PROCESSED TEAK WOOD</h3>
          </div>
        
          <div className="product" data-name="p-6">
          <img src={pic6} alt="img"/>
          <h3>SESAME SEED</h3>
          </div>

          <div className="product" data-name="p-7">
          <img src={pic7} alt="img"/>
          <h3>PALM KERNEL SHELL</h3>
          </div>
          
          <div className="product" data-name="p-8">
          <img src={pic8} alt="img"/>
          <h3>PALM KERNEL NUTS</h3>
          </div>

          <div className="product" data-name="p-10">
          <img src={pic10} alt="img"/>
          <h3>SORGHUM</h3>
          </div>
          
          <div className="product" data-name="p-11">
          <img src={pic11} alt="img"/>
          <h3>SHEA BUTTER</h3>
          </div>

          <div className="product" data-name="p-12">
          <img src={pic12} alt="img"/>
          <h3>CRUDE PALM OIL</h3>
          </div>
        
          <div className="product" data-name="p-16">
          <img src={pic16} alt="img"/>
          <h3>HIBISCUS FLOWER</h3>
          </div>

          <div className="product" data-name="p-17">
          <img src={pic17} alt="img"/>
          <h3>CASHEW NUT SHELL</h3>
          </div>
      
          <div className="product" data-name="p-18">
          <img src={pic18} alt="img"/>
          <h3>CASHEW KERNEL</h3>
          </div>
      </div>

      <div ref={previewContainerRef} className="products-preview">
        <div className="preview" data-target="p-1">
          <FaTimes className="close-icon" size={40} />
          <img src={pic1} alt="img"/>
          <h3>Speculations Yellow Maize(Corn) from West Africa</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1.   Moisture Content: 12-14% max</i>
            <i className="fas fa-star-half-alt">2.   Purity: 98-99% minimum</i>
            <i className="fas fa-star-half-alt">3.   Foreign Matter: 1-2% max</i>
            <i className="fas fa-star-half-alt">4.   Broken Kemels: 2-3% max</i>
            <i className="fas fa-star-half-alt">5.   Aflatoxin: 20 ppb (parts per billons) </i>
            <i className="fas fa-star-half-alt">6.  Damaged Kernels: 3-5% max</i>
            <i className="fas fa-star-half-alt">7.  Insect Damaged Kernels: 1-2% max</i>
            <i className="fas fa-star-half-alt">8.  Protein</i>
            <i className="fas fa-star-half-alt">9.  Crude Fiber: 2-3% max</i>
            <i className="fas fa-star-half-alt">10. Oil Content: -3-5% </i>
            <i className="fas fa-star-half-alt">11. Color: Yellow</i>
            <i className="fas fa-star-half-alt">12. Odor: Fresh, free from sour or usty odors</i>
            <i className="fas fa-star-half-alt">13. Packing: Typically in 50kg or 100kg bags</i>
            <i className="fas fa-star-half-alt">14. Payment Terms - Cash or Bank Instrument</i>
            <i className="fas fa-star-half-alt">15. Origin - West Africa</i>
            <i className="fas fa-star-half-alt">16. Quantity - 10,000mt+</i>
            <i className="fas fa-star-half-alt">17. Loading Port - West African Pots</i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-9">
        <FaTimes className="close-icon" size={40} />
          <img src={pic9} alt="img"/>
          <h3>SPECIFICATIONS FOR WHITE MAIZE</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 12-14%</i>
            <i className="fas fa-star-half-alt">2. Crude Protein,8-10%</i>
            <i className="fas fa-star-half-alt">3.  Crude Fat,3-5%</i>
            <i className="fas fa-star-half-alt">4. Crude Fiber,2-3%</i>
            <i className="fas fa-star-half-alt">5. Starch Content,60-70%</i>
            <i className="fas fa-star-half-alt">6. Ash Content,Max 1.5%</i>
            <i className="fas fa-star-half-alt">7. Color,White</i>
            <i className="fas fa-star-half-alt">8. Test Weight,72-78 kg/hl  </i>
            <i className="fas fa-star-half-alt">9.Impurities,Max 2% (other seeds, dirt, etc.)</i>
            <i className="fas fa-star-half-alt">10.Shelf Life,6-12 months (if stored properly)</i>
            <i className="fas fa-star-half-alt">11. Quantity:5000mt  </i>
            <i className="fas fa-star-half-alt">12. Payment Terms: Cash or bank instrument  </i>
            <i className="fas fa-star-half-alt">13. Origin:Nigeria,Brazil,South Africa </i>
            <i className="fas fa-star-half-alt">14. Loading port: Togo, Nigeria</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-2">
        <FaTimes className="close-icon" size={40} />
          <img src={pic2} alt="img"/>
          <h3>SPECIFICATIONS FOR SOYA BEANS</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1.   2024 Crop</i>
            <i className="fas fa-star-half-alt">2.   Protein: 38% min on dry basis</i>
            <i className="fas fa-star-half-alt">3.   Green/black/blue/damaged /dead/foreign seeds: 1% max </i>
            <i className="fas fa-star-half-alt">4.   Moisture: 10% max</i>
            <i className="fas fa-star-half-alt">5.   Grade: Grade A </i>
            <i className="fas fa-star-half-alt">6.   Leaf /twigs: 0.5% max</i>
            <i className="fas fa-star-half-alt">7.   Soil /stone: 1.5% max</i>
            <i className="fas fa-star-half-alt">8.   Insects: 0.0% dead or alive, weevil free.</i>
            <i className="fas fa-star-half-alt">9.   Origin:Nigeria,Niger,Burkina faso </i>
            <i className="fas fa-star-half-alt">10.  Loading port: Nigeria and Togo port. </i>
            <i className="fas fa-star-half-alt">11.  MOQ: 5000mt </i>
            <i className="fas fa-star-half-alt">12.  Incoterms: fob </i>
            <i className="fas fa-star-half-alt">13.  PACKING: new 50kgs pp bags</i>
            <i className="fas fa-star-half-alt">   1*20 feet container loads 22mts, 1*40 feet container loads 28mts.</i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-3">
        <FaTimes className="close-icon" size={40} />
          <img src={pic3a} alt="img"/>
          <h3>SPECIFICATIONS FOR DRY SPLIT GINGER</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1.   Origin: Nigeria</i>
            <i className="fas fa-star-half-alt">2.   Product Type: Dry Split Ginger </i>
            <i className="fas fa-star-half-alt">3.  Quantity: 1000mt+</i>
            <i className="fas fa-star-half-alt">4.   Trial Order: two containers.</i>
            <i className="fas fa-star-half-alt">5.   Trade Process: CIF</i>
            <i className="fas fa-star-half-alt">6.   Payment Method:Fully cash backed 100% irrevocable,divisible,transferable and confirmable L/C at sight</i>
            <i className="fas fa-star-half-alt">7.   Shipping Time: 15 to 25 days after confirmation of L/C </i>
            <i className="fas fa-star-half-alt">8.  Loading Port: Lagos, Nigeria</i>
            <i className="fas fa-star-half-alt">9.   Type: FAQ & ASTA</i>
            <i className="fas fa-star-half-alt">10.  Impurities: Maximum of 2% </i>
            <i className="fas fa-star-half-alt">11.  Moisture Content: Maximum of 10%</i>
            <i className="fas fa-star-half-alt">12. Drying Process: Sun-dried </i>
            <i className="fas fa-star-half-alt">13.  Inspection: SGS</i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-4">
        <FaTimes className="close-icon" size={40} />
          <img src={pic4} alt="img"/>
          <h3>SPECIFICATIONS FOR UNPROCESSED TEAK WOOD</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Species,Tectona grandis</i>
            <i className="fas fa-star-half-alt">2.  Moisture Content,15-25% (freshly cut)  </i>
            <i className="fas fa-star-half-alt">3.  Density,600-800 kg/m³ (varies with moisture content) </i>
            <i className="fas fa-star-half-alt">4.   Color,Light golden to dark brown</i>
            <i className="fas fa-star-half-alt">5.   Grain Pattern,Straight with a fine, even texture </i>
            <i className="fas fa-star-half-alt">6.   Durability,Highly durable (Class 1), resistant to decay and pests</i>
            <i className="fas fa-star-half-alt">7.  Natural Oil Content,High; contributes to natural resistance to water and pests</i>
            <i className="fas fa-star-half-alt">8.   Dimensions,Various; commonly available in logs (lengths vary)</i>
            <i className="fas fa-star-half-alt">9.  Bark Thickness,Approximately 1-3 cm, varies by log size </i>
            <i className="fas fa-star-half-alt">10. Defects,May contain knots, splits, or irregularities depending on the tree</i>
            <i className="fas fa-star-half-alt">11. Payment Terms:Cash or Bank instrument </i>
            <i className="fas fa-star-half-alt">12.  Origin:Ghana,Benin,India, Indonesia </i>
            <i className="fas fa-star-half-alt">13. Loading port: Nigeria,Togo </i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-5">
        <FaTimes className="close-icon" size={40} />
          <img src={pic5} alt="img"/>
          <h3>SPECIFICATIONS FOR PROCESSED TEAK WOOD</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Species,Tectona grandis</i>
            <i className="fas fa-star-half-alt">2.  Moisture Content,10-15% (air-dried)  </i>
            <i className="fas fa-star-half-alt">3.  Density,600-800 kg/m³ (depending on moisture content) </i>
            <i className="fas fa-star-half-alt">4.  Color,Ranges from golden brown to dark brown</i>
            <i className="fas fa-star-half-alt">5.  Grain Pattern,Straight, with a fine, even texture </i>
            <i className="fas fa-star-half-alt">6.  Durability,Highly durable (Class 1), resistant to decay and pests </i>
            <i className="fas fa-star-half-alt">6.  Workability,Good; can be machined and finished well</i>
            <i className="fas fa-star-half-alt">7.  Oil Content,High natural oil content, contributing to water resistance(lengths vary)</i>
            <i className="fas fa-star-half-alt">8.  Dimensions,Standard sizes: 1” x 6”, 1” x 8”, 1” x 12”, etc. (thickness x width)</i>
            <i className="fas fa-star-half-alt">9. Finish,Can be left natural or finished with oil, varnish, or lacquer</i>
            <i className="fas fa-star-half-alt">10. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">11. Payment Terms: Cash or Bank instruments</i>
            <i className="fas fa-star-half-alt">12. Origin:Ghana,Benin  </i>
            <i className="fas fa-star-half-alt">13. Loading port:Togo,Nigeria  </i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-6">
        <FaTimes className="close-icon" size={40} />
          <img src={pic6} alt="img"/>
          <h3>SPECIFICATIONS FOR SESAME SEED</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1. Origin : West Africa</i>
            <i className="fas fa-star-half-alt">2. Crop: 2023/24 season</i>
            <i className="fas fa-star-half-alt">3. Grade: Grade A and B.</i>
            <i className="fas fa-star-half-alt">4.  Grade: Grade A and B.</i>
            <i className="fas fa-star-half-alt">5. FFA (as oleic acid) : 2% max</i>
            <i className="fas fa-star-half-alt">6. Oil content : Up to 50%</i>
            <i className="fas fa-star-half-alt">7. Damaged : 0.5% max.</i>
            <i className="fas fa-star-half-alt">8. Admixture: 1% max.</i>
            <i className="fas fa-star-half-alt">9. Purity: 98%</i>
            <i className="fas fa-star-half-alt">10. Foreign matter: 0.00%. </i>
            <i className="fas fa-star-half-alt">11. Free from extraneous odor. </i>
            <i className="fas fa-star-half-alt">12. Natural smell and taste only. </i>
            <i className="fas fa-star-half-alt">13. Dried under the sun.</i>
            <i className="fas fa-star-half-alt">14. MOQ : 5000mt</i>
            <i className="fas fa-star-half-alt">15. Origin : Nigeria and Togo  </i>
            <i className="fas fa-star-half-alt">16.  Loading Port : Nigeria and Togo port </i>
            <i className="fas fa-star-half-alt">17.  Inco terms : fob only </i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-7">
        <FaTimes className="close-icon" size={40} />
          <img src={pic7} alt="img"/>
          <h3>SPECIFICATIONS FOR PALM KERNEL SHELLS</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 12%</i>
            <i className="fas fa-star-half-alt">2. Ash Content,3-5%</i>
            <i className="fas fa-star-half-alt">3.  Bulk Density,400-600 kg/m³</i>
            <i className="fas fa-star-half-alt">4. Size,1-3 cm in diameter (irregular shapes)</i>
            <i className="fas fa-star-half-alt">5. Color,Dark brown to black</i>
            <i className="fas fa-star-half-alt">6. Energy Value,Approximately 4,000-4,500 kcal/kg</i>
            <i className="fas fa-star-half-alt">7. Impurities,Max 5% (other materials like dirt or other seeds)</i>
            <i className="fas fa-star-half-alt">8. Impurities,Max 5% (other materials like dirt or other seeds)</i>
            <i className="fas fa-star-half-alt">9. Odor,Mild, characteristic of biomass </i>
            <i className="fas fa-star-half-alt">10. Quantity:5000mt </i>
            <i className="fas fa-star-half-alt">11. Payment Terms: Cash or bank instruments </i>
            <i className="fas fa-star-half-alt">12. Origin:Nigeria,Thailand,Indonesia  </i>
            <i className="fas fa-star-half-alt">13. Loading port: Nigeria, Togo</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>
      
        <div className="preview" data-target="p-8">
        <FaTimes className="close-icon" size={40} />
          <img src={pic8} alt="img"/>
          <h3>SPECIFICATIONS FOR PALM KERNEL NUTS</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 7-10%</i>
            <i className="fas fa-star-half-alt">2. Oil Content,45-50%</i>
            <i className="fas fa-star-half-alt">3.  Crude Protein,5-7%</i>
            <i className="fas fa-star-half-alt">4. Crude Fiber,10-15%</i>
            <i className="fas fa-star-half-alt">5. Ash Content,2-5%</i>
            <i className="fas fa-star-half-alt">6. Bulk Density,550-650 kg/m³</i>
            <i className="fas fa-star-half-alt">7. ISize,Typically 1-2 cm in diameter</i>
            <i className="fas fa-star-half-alt">8. Color,Dark brown to black</i>
            <i className="fas fa-star-half-alt">9. Impurities,Max 3% (other seeds, dirt, etc.)</i>
            <i className="fas fa-star-half-alt">10. Shelf Life,6 months to 1 year (if stored properly) </i>
            <i className="fas fa-star-half-alt">11. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">12. Payment Terms: Cash or bank instrument  </i>
            <i className="fas fa-star-half-alt">13. Origin:Nigeria,Thailand</i>
            <i className="fas fa-star-half-alt">14. Loading port: Togo, Nigeria</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>
       
        <div className="preview" data-target="p-10">
        <FaTimes className="close-icon" size={40} />
          <img src={pic10} alt="img"/>
          <h3>SPECIFICATIONS FOR SORGHUM </h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 12-14%</i>
            <i className="fas fa-star-half-alt">2. Oil Content,45-50%</i>
            <i className="fas fa-star-half-alt">3.  Crude Protein,8-12%</i>
            <i className="fas fa-star-half-alt">4. Crude Fiber,2-4%</i>
            <i className="fas fa-star-half-alt">7. Starch Content,60-70%</i>
            <i className="fas fa-star-half-alt">8. Ash Content,Max 1.5%</i>
            <i className="fas fa-star-half-alt">9. ISize,Typically 1-2 cm in diameteColor,Ranges from white to red, yellow, or brownr</i>
            <i className="fas fa-star-half-alt">10.Test Weight,68-72 kg/hl</i>
            <i className="fas fa-star-half-alt">11. Impurities,Max 1-2% (other seeds, dirt, etc.)</i>
            <i className="fas fa-star-half-alt">12. Shelf Life,6-12 months (if stored properly) </i>
            <i className="fas fa-star-half-alt">13. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">14. Payment Terms: Cash or bank instrument  </i>
            <i className="fas fa-star-half-alt">15. Origin:Nigeria,India,Australia </i>
            <i className="fas fa-star-half-alt">16. Loading port: Togo, Nigeria</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

          <div className="preview" data-target="p-11">
        <FaTimes className="close-icon" size={40} />
          <img src={pic11} alt="img"/>
          <h3>SPECIFICATIONS FOR SHEA BUTTER </h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Color,Creamy white to pale yellow</i>
            <i className="fas fa-star-half-alt">2. Odor,Characteristic nutty aroma </i>
            <i className="fas fa-star-half-alt">3. Moisture Content,Max 0.05% </i>
            <i className="fas fa-star-half-alt">4. Free Fatty Acids,Max 5%</i>
            <i className="fas fa-star-half-alt">7. Peroxide Value,Max 10 meq/kg</i>
            <i className="fas fa-star-half-alt">8. Melting Point,31-39°C (88-102°F)</i>
            <i className="fas fa-star-half-alt">9. Iodine Value,55-70 g I₂/100g</i>
            <i className="fas fa-star-half-alt">10. Saponification Value,170-190 mg KOH/g </i>
            <i className="fas fa-star-half-alt">11. Unsaponifiable Matter,5-17%</i>
            <i className="fas fa-star-half-alt">12. Fatty Acid Composition,- Oleic Acid: 40-55%</i>
            <i className="fas fa-star-half-alt">13. - Stearic Acid: 35-45% </i>
            <i className="fas fa-star-half-alt">14. - Linoleic Acid: 3-8% </i>
            <i className="fas fa-star-half-alt">15. - Palmitic Acid: 2-7%</i>
            <i className="fas fa-star-half-alt">16. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">17. Payment Terms: Cash or bank Instruments</i>
            <i className="fas fa-star-half-alt">18. Origin:Ghana,Nigeria,Burkina faso,Mali</i>
            <i className="fas fa-star-half-alt">19. Loading port: Togo, Nigeria</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

          <div className="preview" data-target="p-12">
        <FaTimes className="close-icon" size={40} />
          <img src={pic12} alt="img"/>
          <h3>SPECIFICATIONS FOR CURDE PALM OIL </h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">	•	FFA (Free Fatty Acid): 5% max (as Palmitic Acid)</i>
            <i className="fas fa-star-half-alt">	•	Moisture & Impurities: 0.5% max</i>
            <i className="fas fa-star-half-alt">	•	Iodine Value: 14 - 22 (Wijs)</i>
            <i className="fas fa-star-half-alt">	•	Peroxide Value: 10 meq/kg max</i>
            <i className="fas fa-star-half-alt">	•	Color: Golden Yellow to Light Brown</i>
            <i className="fas fa-star-half-alt">	•	Odor: Characteristic of Palm Kernel Oil, Free from Foreign Odors</i>
            <i className="fas fa-star-half-alt">	•	Melting Point: 20 -</i>
            <i className="fas fa-star-half-alt">	•	Origin: West Africa </i>
            <i className="fas fa-star-half-alt">	•	Loading Port: West Africa Ports </i>
            <i className="fas fa-star-half-alt">Quantity:5000mt </i>
            <i className="fas fa-star-half-alt">Payment terms : Cash or bank instruments</i>
            <i className="fas fa-star-half-alt">	•	Packaging: Bulk or Drums as per Buyer Requirement</i>
            <i className="fas fa-star-half-alt">	•	Shelf Life: 12 Months from Production Date</i>
            <i className="fas fa-star-half-alt">	•	Incoterms: FOB (Free on Board) at specified loading port</i>
            <i className="fas fa-star-half-alt">	•	Minimum Order Quantity: 20 MT (Metric Tons)</i>
            <i className="fas fa-star-half-alt">•	Lead Time: 2-3 weeks after contract confirmation</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-13">
        <FaTimes className="close-icon" size={40} />
          <img src={pic13} alt="img"/>
          <h3>SPECIFICATIONS FOR RICE</h3>
          <div className="stars">
       
            <i className="fas fa-star-half-alt">1. Commodity: White Rice (5% Broken)</i>
            <i className="fas fa-star-half-alt">2. Origin: india, Thailand, Pakistan  </i>
            <i className="fas fa-star-half-alt">3. Broken Percentage: Max 5%</i>
            <i className="fas fa-star-half-alt">4. Moisture Content: Max 14%</i>
            <i className="fas fa-star-half-alt">5. Foreign Matter: Max 0.1%</i>
            <i className="fas fa-star-half-alt">6. Damaged Kernels: Max 0.5%</i>
            <i className="fas fa-star-half-alt">7. Chalky Grains: Max 4-5%</i>
            <i className="fas fa-star-half-alt">8. Red & Red Streaked: Max 0.5%</i>
            <i className="fas fa-star-half-alt">9. Paddy Grains: Max 0.2%</i>
            <i className="fas fa-star-half-alt">10. Average Grain Length: Specify as per buyer requirements (usually 6.0 mm for long-grain rice)</i>
            <i className="fas fa-star-half-alt">11. Color:	White, clean, and free from any yellow or off-color grains</i>
            <i className="fas fa-star-half-alt">12. Aroma and Taste:	Free from off odors and foreign tastes</i>
            <i className="fas fa-star-half-alt">13. Packing: 	25kg or 50kg woven polypropylene (PP) bags, or as per customer requirements</i>
            <i className="fas fa-star-half-alt">14. Loading Ports: India ports, Thailand port, Pakistan Ports</i>
            <i className="fas fa-star-half-alt">15. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">15. Payment Terms: Cash and Bank instruments</i>
            <i className="fas fa-star-half-alt">16. Quality Standards: Meets international quality standards (e.g., ISO, CODEX, and relevant food safety standards)</i>
            <i className="fas fa-star-half-alt">17. Usage:Suitable for human consumption, especially in various culinary applications</i>
            <i className="fas fa-star-half-alt">18. Payment Terms: Standard payment terms (e.g., LC, TT)</i>
            <i className="fas fa-star-half-alt">19. Delivery Terms: As per contract terms (e.g., FOB, CIF, CFR)</i>
            <i className="fas fa-star-half-alt">20. Inspection:	Inspection by SGS, Bureau Veritas, or an equivalent agency at the loading port to confirm quality and quantity</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

          <div className="preview" data-target="p-14">
        <FaTimes className="close-icon" size={40} />
          <img src={pic14} alt="img"/>
          <h3>SPECIFICATIONS FOR VEGETABLE OIL</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>NO AVAILABLE SPECIFICATIONS</center></i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

          <div className="preview" data-target="p-15">
        <FaTimes className="close-icon" size={40} />
          <img src={pic15} alt="img"/>
          <h3>SPECIFICATIONS FOR SUGAR</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>NO AVAILABLE SPECIFICATIONS</center></i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>
       
        <div className="preview" data-target="p-16">
        <FaTimes className="close-icon" size={40} />
          <img src={pic16} alt="img"/>
          <h3>SPECIFICATIONS FOR SUGAR</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1. Origin: Nigeria /Cameroun and Bokina Faso</i>
            <i className="fas fa-star-half-alt">2. Grade: A</i>
            <i className="fas fa-star-half-alt">3. Type: Dried flower</i>
            <i className="fas fa-star-half-alt">4. Color: Dark red</i>
            <i className="fas fa-star-half-alt">5. Form: Raw material</i>
            <i className="fas fa-star-half-alt">6. Moisture - 9%</i>
            <i className="fas fa-star-half-alt">7. Admixture - 2%</i>
            <i className="fas fa-star-half-alt"><b>Payment Terms:Cash or bank instrument.</b></i>
            <i className="fas fa-star-half-alt"> <b>Packaging options:</b> </i>
            <i className="fas fa-star-half-alt">  20 kg/30 kg pp bags </i>
            <i className="fas fa-star-half-alt"> <b>Minimum Order:-</b></i>
            <i className="fas fa-star-half-alt"> 5 x 40"FCL </i>
            <i className="fas fa-star-half-alt"> <b>Monthly Supply Ability:</b></i>
            <i className="fas fa-star-half-alt">1000 tons monthly. </i>
            <i className="fas fa-star-half-alt"><b>Latest Shipping Time:</b> </i>
            <i className="fas fa-star-half-alt">21 days.</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

          <div className="preview" data-target="p-17">
        <FaTimes className="close-icon" size={40} />
          <img src={pic17} alt="img"/>
          <h3>SPECIFICATIONS FOR CASHEW NUT SHELL</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">Impurities - 3%</i>
            <i className="fas fa-star-half-alt">Humidity: 10% - 12%</i>
            <i className="fas fa-star-half-alt">Quantity: 5000mt</i>
            <i className="fas fa-star-half-alt">Origin: west Africa</i>
            <i className="fas fa-star-half-alt">Package: 50kg jute bags</i>
            <i className="fas fa-star-half-alt">Payment terms: cash or bank instrument.</i>
         
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-18">
        <FaTimes className="close-icon" size={40} />
          <img src={pic18} alt="img"/>
          <h3>SPECIFICATIONS FOR CASHEW KERNEL</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">Origin: Benin/Togo</i>
            <i className="fas fa-star-half-alt">Grade: WW 210, WW 320, WW240, LP, WS, W450, LBW, SW320, SW, WB, SS </i>
            <i className="fas fa-star-half-alt"><b>1. Grade: W240, W320</b></i>
            <i className="fas fa-star-half-alt">– Moisture: 5% Max</i>
            <i className="fas fa-star-half-alt">– Broken: 5% Max</i>
            <i className="fas fa-star-half-alt">– Melasma: 3% Max</i>
            <i className="fas fa-star-half-alt">– Mould and fungus: 0%</i>
            <i className="fas fa-star-half-alt">– Admixture: 1% Max</i>
            <i className="fas fa-star-half-alt">– Silk sell: 3% Max</i>
            <i className="fas fa-star-half-alt">– Dent rate: 3% Max </i>
            <i className="fas fa-star-half-alt"><b>2. Grade: WS</b></i>
            <i className="fas fa-star-half-alt">– Moisture: 5% max</i>
            <i className="fas fa-star-half-alt">– Foreign matter : 1%max</i>
            <i className="fas fa-star-half-alt">– Broken: vertical broken</i>
            <i className="fas fa-star-half-alt">– Live insect and larvas: Negative</i>
            <i className="fas fa-star-half-alt">– Coliforms, salmonella: Negative</i>
            <i className="fas fa-star-half-alt"><b>3. Grade: LP</b></i>
            <i className="fas fa-star-half-alt">– Moisture: 5% Max</i>
            <i className="fas fa-star-half-alt">– Melasma: 3% Max</i>
            <i className="fas fa-star-half-alt">– Admixture: 1% Max</i>
            <i className="fas fa-star-half-alt">Live insect and larvas: Negative</i>
            <i className="fas fa-star-half-alt">– Coliforms, salmonella: Negative </i>
            <i className="fas fa-star-half-alt"><b>Other Details :</b></i>
            <i className="fas fa-star-half-alt">Packing: Vacuum plastic bags and cartons</i>
            <i className="fas fa-star-half-alt">Port loading: Benin/Togo.</i>
            <i className="fas fa-star-half-alt">Incoterms: CIF/CNF/FOB</i>
         
           
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>
      </div>

      <div className="container">
          <h3 className="title">FML TRADING SOURCE AND IMPORT PRODUCTS CATALOG</h3>

        <div className="products-container">
          <div className="product" data-name="p-13">
            <img src={pic13} alt="img"/>
            <h3>RICE</h3>
          </div>
          
          <div className="product" data-name="p-14">
            <img src={pic14} alt="img"/>
            <h3>VEGETABLE OIL</h3>
          </div>

          <div className="product" data-name="p-15">
            <img src={pic15} alt="img"/>
            <h3>SUGAR</h3>
          </div>
        </div> 
        </div>
</div>

<Payment/>
      <Footer/>
    </div>
  );
};

export default Catalog;
