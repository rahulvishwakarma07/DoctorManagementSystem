import image1 from '../images/Ellipse 154.png'
import image2 from '../images/Ellipse 154 (1).png'
import image3 from '../images/Ellipse 154 (2).png'

function About() {
    return (
        <>
            <div className="container d-flex justify-content-center flex-column">
                <div className="row d-flex align-items-center ">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={image1} className='img-fluid' />
                    </div>
                    <div className="col-md-5 ">
                        <h2 id='title' style={{color:"#0bcc96"}} className='fw-bold'>Find Trusted Doctor</h2>
                        <p className='mt-3'>Discover a network of highly qualified and trusted medical professionals committed to providing exceptional care. Our platform helps you connect with doctors who have been rigorously vetted for their credentials and experience. With detailed profiles, patient reviews, and ratings, finding a doctor who meets your needs and expectations has never been easier. Whether you need a specialist or a general practitioner, our database ensures that you can make informed decisions for your health and well-being.
                        </p>
                    </div>
                </div>
                <div className="row mt-4 d-flex align-items-center">
                    <div className="col-md-5">
                        <h2 id='title' style={{color:"#0bcc96"}} className='fw-bold'>Easy Appointment</h2>
                        <p className='mt-3'>Scheduling a doctor's appointment has never been simpler. Our user-friendly system allows you to book appointments with just a few clicks. Check real-time availability, choose a convenient time slot, and receive instant confirmation—all from the comfort of your home. Say goodbye to long waiting times and complicated booking procedures. Our easy appointment process ensures you get the care you need when you need it, with minimal hassle and maximum efficiency.</p>
                    </div>
                    <div  className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={image2} className='img-fluid' />
                    </div>
                </div>
                <div className="row mt-4 d-flex align-items-center">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={image3} className='img-fluid' />
                    </div>
                    <div className="col-md-5">
                        <h2 id='title' style={{color:"#0bcc96"}} className='fw-bold'>Choose Best Doctor</h2>
                        <p className='mt-3'>Choosing the right doctor is crucial for receiving the best possible care. Our platform empowers you to make informed choices by providing comprehensive information about each doctor. Compare qualifications, specialties, patient reviews, and more to select the best healthcare provider for your specific needs. Whether you’re seeking a top-rated specialist or a compassionate general practitioner, our resources and tools are designed to help you find a doctor who is perfectly suited to your health requirements and preferences.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;