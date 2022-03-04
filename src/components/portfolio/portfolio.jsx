import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desgning</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
            alt=""
          />
          <h3>banking App</h3>
        </div>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
          alt=""
        />
        <h3>banking App</h3>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
          alt=""
        />
        <h3>banking App</h3>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
          alt=""
        />
        <h3>banking App</h3>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
          alt=""
        />
        <h3>banking App</h3>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
          alt=""
        />
        <h3>banking App</h3>
      </div>
    </div>
  );
}
