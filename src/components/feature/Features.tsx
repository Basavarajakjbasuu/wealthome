import { featureSections } from "../../constants/constant";
import Feature from "./Feature";

const Features = () => {
  return ( 
    <>
    
      {featureSections.map((feature) => (
        <Feature
          key={feature.headline}
          banner={feature.image}
          headline={feature.headline}
          featureText={feature.featureText}
          featureList={feature.featureList}
          featureOrder={feature.featureOrder}
        />
      ))}
    
    </>
  );
}
 
export default Features;