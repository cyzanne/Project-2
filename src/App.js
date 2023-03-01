import React from 'react';
import './Js/script.js';
// import ReactDOM from 'react-dom';
import './styles.css';
import './App.css';
import homeImg from './image/homeimg.png';
import homeimg2 from './image/homeimg2.png';
import homeimg3 from './image/homeimg3.png';
import aboutus from './image/aboutus.jpg';
import abouticon1 from './image/abouticon1.png';
import abouticon2 from './image/abouticon2.png';
import abouticon3 from './image/abouticon3.png';
import frappuccino from './image/frappuccino.png';
import macchiato from './image/macchiato.png';
import icedcoffee from './image/icedcoffee.png';
import mocha from './image/mocha.png';
import cappuccino from './image/cappuccino.png';
import espresso from './image/espresso.png';
import abner from './image/abner.jpg';
import Pic2 from './image/Pic2.jpg';
import pic3 from './image/pic3.jpg';
import Pic4 from './image/Pic4.jpg';

function App() {
  return (
    <React.Fragment>

      <header className="header">
        <div id="menu-btn" className="fas fa-bars"></div>

        <a href="#" className="logo">
          Dev Coffee<i className="fas fa-mug-hot"></i>
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>fresh coffee in the morning</h3>
            <a href="#" className="btn">
              buy now
            </a>
          </div>

          <div className="image">
          <div>
          <img src={homeImg} alt="Home Image" />
         </div>
          </div>
        </div>

        <div className="image-slider">
          <img src={homeimg2}alt="" />
          <img src={homeimg3} alt="" />
        </div>
      </section>
      <section className="about" id="about">
        <h1 className="heading">about us <span>why choose us</span></h1>

        <div className="row">
            <div className="image">
                <img src={aboutus} alt=""/>
            </div>

            <div className="content">
                <h3 className="title">what's make our coffee special!</h3>
                <p>Dev Coffee is a standout among coffee shops due to its meticulously crafted beverages, warm and welcoming atmosphere, and exceptional customer service. Using only the highest quality coffee beans, their skilled baristas take the time to create each drink to perfection, resulting in a consistently delicious and satisfying experience.</p>
                <div className="icons-container">
                    <div className="icons">
                        <img src={abouticon1} alt="" />
                        <h3>quality coffee</h3>
                    </div>
                    <div className="icons">
                        <img src={abouticon2} alt="" />
                        <h3>our branches</h3>
                    </div>
                    <div className="icons">
                        <img src={abouticon3}alt="" />
                        <h3>free delivery</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="menu" id="menu">
        <h1 className="heading">our menu</h1>

        <div className="box-container">
            <a href="#" className="box">
                <img src={frappuccino} alt=""/>
                <div className="content">
                    <h3>Frappuccino</h3>
                    <p>A blended coffee drink made with espresso, milk, and ice, often topped with whipped cream.</p>
                    <span>₱175.00</span>
                    <div>
                    <button> <span className='btnorder'>Order now</span></button>
                    </div>
                    
                </div>
            </a>

            <a href="#" className="box">
                <img src={macchiato} alt=""/>
                <div className="content">
                    <h3>Macchiato</h3>
                    <p>An espresso with a small amount of steamed milk and foam, served in a small glass</p>
                    <span>₱125.00</span>
                    <div>
                    <button> <span className='btnorder'>Order now</span></button>
                    </div>
                </div>
            </a>

            <a href="#" className="box">
                <img src={icedcoffee} alt=""/>
                <div className="content">
                    <h3>Iced Coffee</h3>
                    <p>A refreshing coffee made with cold water and served over ice.</p>
                    <span>₱145.00</span>
                    <div>
                    <button> <span className='btnorder'>Order now</span></button>
                    </div>
                </div>
            </a>

            <a href="#" className="box">
                <img src={mocha} alt=""/>
                <div className="content">
                    <h3>Mocha</h3>
                    <p>A latte with added chocolate syrup and powder, topped with whipped cream.</p>
                    <span>₱145.00</span>
                    <div>
                    <button> <span className='btnorder'>Order now</span></button>
                    </div>
                </div>
            </a>

            <a href="#" className="box">
                <img src={espresso} alt=""/>
                <div className="content">
                    <h3>Espresso</h3>
                    <p>A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.</p>
                    <span>₱120.00</span>
                    <div>
                    <button> <span className='btnorder'>Order now</span></button>
                    </div>
                </div>
            </a>
            
            <a href="#" className="box">
                <img src={cappuccino} alt=""/>
                <div className="content">
                    <h3>Cappuccino</h3>
                    <p>A popular Italian coffee made with equal parts espresso, steamed milk, and frothed milk.</p>
                    <span>₱125.00</span>
                    <div>
                    <button> <span className='btnorder'>Order now</span></button>
                    </div>
                </div>
            </a>
        </div>
            </section>

            <section className="review" id="review">
        <h1 className="heading">reviews</h1>

        <div className="swiper review-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide box">
                    <img src={abner}alt=""/>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p> I really like the atmosphere, good coffee, and nice interior. This is a good place to study or chill with friends. The drinks and foods were all tasty and worthwhile. If you’re up for a fresh place with beautiful architecture then this is a must to visit.</p>
                    <h3>Abner Nercua</h3>
                    <span>satisfied client</span>
                </div>

                <div className="swiper-slide box">
                    <img src={Pic2} alt=""/>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Will go again.I only popped in to get take-away cappuccinos, but I was struck by how friendly the service was. The cappuccinos were wonderful too! And very well priced.</p>
                    <h3>Rei</h3>
                    <span>satisfied client</span>
                </div>

                <div className="swiper-slide box">
                    <img src={pic3} alt=""/>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p> Dev Coffee is located near other great eating places so definitely a great place to end a meal! The atmosphere was great along with the customer service. Dev Coffee is one of the top roasters in the nation so the coffee is expectedly awesome!</p>
                    <h3>Deon</h3>
                    <span>satisfied client</span>
                </div>
                <div className="swiper-slide box">
                    <img src={Pic4} alt=""/>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Great coffee shop! Staff is always helpful and friendly and the coffee is great, especially the cold brew. The outdoor seating is perfect when the weather’s nice.</p>
                    <h3>Dom</h3>
                    <span>satisfied client</span>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
    

    <section className="contact" id="contact-form">
  <h1 className="heading">Contact <span>Delivery</span></h1>
  <form action="">
    <input type="text" placeholder="Name" className="box" />
    <input type="email" placeholder="Email" className="box" />
    <input type="number" placeholder="Number" className="box" />
    <textarea name="" placeholder="Message" className="box" id="" cols="30" rows="10"></textarea>
    <input type="submit" value="Place Order" className="btn" />
  </form>
</section>

<section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>our branches</h3>
      <a href="#"><i className="fas fa-arrow-right"></i> Cavite</a>
      <a href="#"><i className="fas fa-arrow-right"></i> Alabang</a>
      <a href="#"><i className="fas fa-arrow-right"></i> Cebu</a>
    </div>

    <div className="box">
      <h3>links</h3>
      <a href="#home"><i className="fas fa-arrow-right"></i> Home</a>
      <a href="#about"><i className="fas fa-arrow-right"></i> About</a>
      <a href="#menu"><i className="fas fa-arrow-right"></i> Menu</a>
      <a href="#review"><i className="fas fa-arrow-right"></i> Review</a>
      <a href="#Contact"><i className="fas fa-arrow-right"></i> Contact</a>
    </div>

    <div className="box">
      <h3>contact info</h3>
      <a href="#"><i className="fas fa-phone"></i>09369960852</a>
      <a href="#"><i className="fas fa-envelope"></i>devcoffeecode@gmail.com</a>
    </div>

    <div className="box">
      <h3>contact info</h3>
      <a href="#"><i className="fab fa-facebook-f"></i> facebook</a>
      <a href="#"><i className="fab fa-twitter"></i> twitter</a>
      <a href="#"><i className="fab fa-instagram"></i> instagram</a>
    </div>
  </div>
  <div className="credit"> 2023 all rights reserved</div>
</section>
    </React.Fragment>
  );
}

export default App;