import { useNavigate } from 'react-router-dom'
import logo from '../images/image 16.png'
import image1 from '../images/pexels-totalshape-2383010.jpg'

function Header() {

    const navigate = useNavigate();

    return (
        <>
            {/* <div className="container-fluid" style={{ backgroundColor: "#0bcc96" }}>
                <div className="row p-2">
                    <div className="col-md-4  d-flex align-items-center justify-content-center">
                        <img src={logo} className='img-fluid' />
                        <h3 className='text-white mt-2 ms-2 fw-bold'>Health<span style={{ color: "#007e85" }}>Care</span> Hub</h3>
                    </div>
                    <div className="col-md-5 text-white d-flex justify-content-evenly align-items-center">
                        <div className="navbar-item">Home</div>
                        <div className="navbar-item">About</div>
                        <div className="navbar-item">Service</div>
                        <div className="navbar-item">Contact Us</div>
                    </div>
                    <div className="col-md-3  d-flex justify-content-evenly align-items-center">
                        <span id='signup' className='text-white fw-bold' >Signup</span>
                        <div className="dropdown">
                            <button style={{ backgroundColor: "#007e85" }} className="btn btn-light text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Login
                            </button>
                            <ul className="dropdown-menu dropdown-menu-custom" aria-labelledby="dropdownMenuButton1">
                                <li><a onClick={() => navigate("/user")} className="text-center dropdown-item" href="#">User</a></li>
                                <li><a className="text-center dropdown-item" href="#">Doctor</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div> */}
            <nav style={{ backgroundColor: "#0bcc96" }} className="navbar navbar-expand-lg p-2 navbar-light ">
                <div className="container-fluid">
                    <img src={logo} className='ms-5 img-fluid' />
                    <h3 className='text-white mt-2 ms-2 fw-bold'>Health<span style={{ color: "#007e85" }}>Care</span> Hub</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "100px" }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-75 d-flex align-items-center justify-content-evenly">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" >Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center justify-content-around w-25">
                            <div className="dropdown">
                                <button style={{ backgroundColor: "#007e85" }} className="btn btn-light text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </button>
                                <ul className="dropdown-menu dropdown-menu-custom" aria-labelledby="dropdownMenuButton1">
                                    <li><a onClick={() => navigate("/user")} className="text-center dropdown-item" href="#">User</a></li>
                                    <li><a className="text-center dropdown-item" href="#">Doctor</a></li>
                                </ul>

                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <section id="hero" className="d-flex align-items-center">
                <div className="container text-center position-relative">
                    <h1 >24/7 Care is available</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti.</h2>
                    <button id='get'>Get Started</button>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0bcc96" fill-opacity="1" d="M0,192L40,176C80,160,160,128,240,138.7C320,149,400,203,480,218.7C560,235,640,213,720,213.3C800,213,880,235,960,234.7C1040,235,1120,213,1200,186.7C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
        </>
    )
}

export default Header