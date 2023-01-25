import Greek from '../../Assets/greek salad.jpg';
import Bruschetta from '../../Assets/bruschetta.jpg';
import Lemon from '../../Assets/lemon dessert.jpg';

const Home = () => {
  return (
    <>
      <section className="banner">
        <div>
          <h1>Little Lemon <br/><span>Chicago</span></h1>
          <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>
      </section>
      <section className="articles">
        <article>
          <h2>Greek Salad</h2>
          <img
            src={Greek}
            alt="Greek Salad"
          />
          <p>
          The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.<br />
          <span>$12.99</span>
          </p>
          <a href="/">Order a Delivery</a>
        </article>
        <article>
          <h2>Bruschetta</h2>
          <img
            src={Bruschetta}
            alt="Bruschetta"
          />
          <p>
          Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create Bruschetta.<br/>
            <span>$7.99</span>
          </p>
          <a href="/">Order a Delivery</a>
        </article>
        <article>
          <h2>Lemon Dessert</h2>
          <img
            src={Lemon}
            alt="Openning hours"
          />
          <p>
          Lemons are sour and tart, but they go magically well with sweetness and bring out the flavor of most spices and flavorings. Whether comforting and warm or light and fresh, lemon desserts are a treat everyone will love.<br />
          <span>$5.00</span>
          </p>
          <a href="/">Order a Delivery</a>
        </article>
      </section>
    </>
  );
};

export default Home;
