import './video.css';

const Video = () => {
  return ( 
    <section className="section video">
      <div className="container">

        <div className="video-card">
          <button className="play-btn" aria-label='play video'>
            <span className="material-symbols-rounded" aria-hidden="true">play_arrow</span>
          </button>
        </div>

      </div>
    </section>
   );
}
 
export default Video;