import React from 'react';
import image1 from '../images/depositphotos_648029856-stock-photo-happy-health-team-portrait-two.jpg';
import image2 from '../images/Screen-Shot-2018-11-03-at-11.20.50.png';
import image3 from '../images/GettyImages-1331029732-1.webp';
import image4 from '../images/health-package-executive-basic.jpg';
import image5 from '../images/i1rz8b6l77.jpg';
import image6 from '../images/stock-photo-user-friendly-mobile-interface-apps-concept-423034264.jpg';

const Service: React.FC = () => {
  return (
    <>
      <h2 style={{ color: "#0bcc96" }} className='mt-5 text-center fw-bold'>Our Services</h2>
      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="row mt-3">
          {[image1, image2, image3, image4, image5, image6].map((image, index) => (
            <div key={index} className="col-md-4 mt-5 d-flex justify-content-center">
              <div className='rounded d-flex p-3 w-75 flex-column align-items-center' style={{ boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.2)", height: "100%" }}>
                <div className="w-100" style={{ minHeight: "200px", overflow: "hidden" }}>
                  <img id='image' src={image} className='img-fluid rounded w-100 h-100' style={{ objectFit: "cover" }} alt={`Service ${index + 1}`} />
                </div>
                <h6 style={{ color: "#0bcc96" }} className='mt-2 fw-bold'>Service Title {index + 1}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </>
  );
}

export default Service;
