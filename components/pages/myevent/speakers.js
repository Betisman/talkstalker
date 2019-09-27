import React from 'react';

const Speakers = () => {
  return (
    <div className="speakersInfo info">
      <h2>Speakers</h2>
      <div className="speakers">
        <div className="card">
          <figure>
            <img src="/static/img/feliun.jpg" alt="feliun" />
            <div className="stars">
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
            </div>
          </figure>
          <div className="speakerDetail">
            <h3>Felipe</h3>
          </div>
        </div>
       
        <div className="card">
          <figure>
            <img src="/static/img/ulises.webp" alt="ulises" />
            <div className="stars">
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
            </div>
          </figure>
          <div className="speakerDetail">
            <h3>Ulises</h3>
          </div>
        </div>

        <div className="card">
          <figure>
            <img src="/static/img/vipp.jpg" alt="ulises" />
            <div className="stars">
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
              <img src="/static/svg/star.svg" alt="star" />
            </div>
          </figure>
          <div className="speakerDetail">
            <h3>victor</h3>
          </div>
        </div>
        
      </div>
     
    </div>
  );
};

export default Speakers;