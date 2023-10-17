import './feature.css';

interface FeatureProps {
  banner: string;
  headline: string;
  featureText: string;
  featureList?: {
    list1: string;
    list2: string;
    list3: string;
    list4: string;
  }
}

const Feature = ({
  banner,
  headline,
  featureText,
  featureList
}: FeatureProps) => {

  // Check if featureList is defined before using Object.values
  const featureListValues = featureList ? Object.values(featureList) : [];

  return ( 
    <section className="section feature" aria-labelledby="feature-label">
      <div className="container">

        <figure className="feature-banner">
          <img
            src={banner}
            width={1020}
            height={690}
            alt="feature-banner"
            className="img-cover"
          />
        </figure>

        <div className="feature-content">

          <h2 className="headline-medium" id="feature-label">
            {headline}
          </h2>

          <p className="body-large feature-text">
            {featureText}
          </p>
          
          <ul className="feature-list">

            {featureListValues.map((item, index) => (
              <li className="feature-item" key={index}>
                <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                <span className="body-medium">{item}</span>
              </li>
            ))}

          </ul>
          
        </div>
      </div>
    </section>
  );
}
 
export default Feature;