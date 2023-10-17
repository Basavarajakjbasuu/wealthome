
import './story.css';

import { avatarList, storyList } from '../../constants/constant';

const Story = () => {
  return ( 
    <section className="section story">
      <div className="container">

        <div className="title-wrapper">

          <div>
            <p className="section-subtitle title-medium">Our Customers</p>

            <h2 className="section-title headline-medium">We Help 1000+ Family Find Their True Home</h2> 
            
            <ul className="avatar-list">

              {avatarList.map((avatar) => (
                <li key={avatar.key} className="avatar">
                  <img
                    src={avatar.image}
                    alt="john smith"
                    width={120}
                    height={80}
                    loading='lazy'
                    className='img-cover'
                  />
                </li>
              ))}

              <li className="avatar">
                <div className="overlay-content">
                  <span className="label-medium">99+</span>
                </div>
              </li>
            </ul>
          </div>

          <a href="#" className='btn btn-outline'>
            <span className="label-medium">View All Stories</span>
            <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
          </a>
          
        </div>
        
        <ul className="story-list" >
          
          {storyList.map((story) => (
            <li
              key={story.key}
              className="story-card"
              style={{ "backgroundImage": `url(${story.storyImage})` }}
            >
            
              <a href="#" className="overlay-content">
                <div>
                  <h3 className="title-small">{story.name}</h3>  

                  <div className="rating-wrapper">
                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                    <span className="material-symbols-rounded" aria-hidden="true">star</span>

                    <data className="title-small rating-text" value='5.0'>5.0</data>
                  </div>
                </div>

                <figure className="card-avatar">
                  <img
                    src={story.image}
                    width="56"
                    height="56"
                    loading='lazy'
                    alt={story.name}
                    className='img-cover'
                  />
                </figure>
              </a>

            </li>
          ))}

        </ul>

      </div>
    </section>
  );
}
 
export default Story;