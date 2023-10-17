import React, { useCallback, useState } from "react";

interface PropertyListingProps {
  price: string; 
  agency: string;
  address: string;
  bed: string;
  bath: string;
  sqft: string;
  alt: string;
  img: string;
  isNew?: boolean
}

const PropertyCard: React.FC<PropertyListingProps> = ({
  price,
  agency,
  address,
  bed,
  bath,
  sqft,
  alt,
  img,
  isNew
}) => {

  const [favButtonToggle, setFavButtonToggle] = useState(false);

  const handleFavButton = useCallback(() => {
    setFavButtonToggle((value) => !value)
  }, [])
  
  const style = { "--width": "585", "--height": "390" }
  return (
    <div className="card">

    <div className="card-banner">

      <figure
        className="img-holder"
        style={style as React.CSSProperties}
      >
        <img src={img} alt={alt} width={585} height={390} className='img-cover' />
      </figure>

        {isNew && (
          <span className="badge label-medium">New</span>
        )}

        <button
          onClick={handleFavButton}
          className={`icon-btn fav-btn ${favButtonToggle && 'active' }`}
          aria-label='add to favorite'
        >
        <span className="material-symbols-rounded" aria-hidden="true">favorite</span>
      </button>

    </div>

    <div className="card-content">

        <span className="title-large">₹{price}</span>

      <h3>
          <a href="#" className='title-small card-title'>{agency}</a>
      </h3>

      <address className="body-medium card-text">
        {address}
      </address>

      <div className="card-meta-list">
        
        <div className="meta-item">
          <span className="material-symbols-rounded meta-icon" aria-hidden="true">bed</span>

            <span className="meta-text label-medium">{bed}</span>  
        </div>

        <div className="meta-item">
          <span className="material-symbols-rounded meta-icon" aria-hidden="true">bathtub</span>

            <span className="meta-text label-medium">{bath}</span>  
        </div>

        <div className="meta-item">
          <span className="material-symbols-rounded meta-icon" aria-hidden="true">straighten</span>

            <span className="meta-text label-medium">{sqft}</span>  
        </div>

      </div>
      
    </div>

    </div>
  )
}

export default PropertyCard