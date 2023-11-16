

import { propertyListings } from '../../constants/constant';
import './Property.css';
import PropertyCard from './PropertyCard';

const Property = () => {

  return (
    <section id='rent' className='section property' aria-labelledby='property-label'>
      <div className="container">

        <div className="title-wrapper">

          <div>
            <h2 className="section-title headline-small">Best home in your city</h2>

            <p className="section-text body-large">
            Discover your dream home or sell your property with ease. Explore our listings for home rentals and property sales today!
            </p>

          </div>
          
          <button className="btn btn-outline">
            <span className="label-medium">Explore more</span>
          </button>


        </div>

        <div className="property-list">

          {propertyListings.map((property) => (
            <PropertyCard
              key={property.address}
              address={property.address}
              img={property.img}
              agency={property.agency}
              alt={property.alt}
              bath={property.bath}
              bed={property.bed}
              price={property.price}
              sqft={property.sqft}
              isNew={property.isNew}
            />
          ))}  

        </div>
      </div>
    </section>
  )
}

export default Property