import heroBg from '../../assets/hero.png';
import bgPatterns from '../../assets/bg-pattern.png'

import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id='home'>
      <div className="container">

        <div className="hero-content">

          <h1 className="headline-large hero-title">Find a place where you can be yourself.</h1>

          <p className="body-large hero-text">
            If you're looking for a place where you can be yourself, don't give up. Keep searching until you find a place that feels like home.
          </p>

          <form action="./" method="get" className="search-bar">

            <label className="search-item">
              <span className="label-medium label">Want to</span>

              <select name="want-to" className="search-item-field body-medium">
                <option value="buy" selected>Buy</option>
                <option value="sell" >Sell</option>
                <option value="rent" >Rent</option>
              </select>
              
              
              <span className="material-symbols-rounded" aria-hidden="true">real_estate_agent</span>
            </label>

            <label className="search-item">
              <span className="label-medium label">Property Type</span>

              <select name="property type" className="search-item-field body-medium">
                <option value="any" selected>Any</option>
                <option value="houses" >Houses</option>
                <option value="apartments" >Apartments</option>
                <option value="villa" >Villa</option>
                <option value="townhome" >Townhome</option>
                <option value="bungalow" >Bungalow</option>
                <option value="loft" >Loft</option>
              </select>
              
              
              <span className="material-symbols-rounded" aria-hidden="true">gite</span>

            </label>

            <label className="search-item">
              <span className="label-medium label">Location</span>

              <input
                type="text"
                className="search-item-field body-medium"
                name="location"
                placeholder="Street, City, Zip..."
              />
              
              <span className="material-symbols-rounded" aria-hidden="true">location_on</span>
            </label>

            <button type="submit" className="search-btn">
              <span className="material-symbols-rounded" aria-hidden="true">search</span>
              <span className="label-medium">Search</span>
            </button>

          </form>

        </div>

        <img
          src={heroBg}
          alt="hero-banner"
          width={816}
          height={659}
          role='presentation'
          className='hero-banner'
        />

        <img
          src={bgPatterns}
          alt="bg-patterns"
          width={1240}
          height={840}
          role='presentation'
          className='bg-pattern'
        />
      </div>
    </section>
  )
}

export default Hero