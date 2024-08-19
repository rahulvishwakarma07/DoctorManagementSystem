function Contact() {
    return <>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 220 1440 300">
        <path fill="#0bcc96" fill-opacity="1" d="M0,192L120,213.3C240,235,480,277,720,256C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
        <div className="container ">
            <h1 className="text-center fw-bold " style={{ color: "#0bcc96" }}>Contact Us</h1>
            <h5 className="text-center mt-3" >Get In Touch</h5>
            <form className="container">
                <div className="row mt-3  d-flex justify-content-center">
                    <div className="col-md-5 ">
                        <div className="p-3 ">
                            <label className="mt-3" style={{ fontSize: "18px" }}>First Name</label>
                            <input className="mt-3 form-control" style={{ outline: "none", border: "2px solid #0bcc96" }} placeholder="Enter First Name" />
                        </div>
                        <div className="p-3">
                            <label className="mt-3" style={{ fontSize: "18px" }}>Email</label>
                            <input className="mt-3 form-control" style={{ outline: "none", border: "2px solid #0bcc96" }} placeholder="Enter Email Name" />
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="p-3">
                            <label className="mt-3" style={{ fontSize: "18px" }}>Last Name</label>
                            <input className="mt-3 form-control" style={{ outline: "none", border: "2px solid #0bcc96" }} placeholder="Enter Last Name" />
                        </div>
                        <div className="p-3">
                            <label className="mt-3" style={{ fontSize: "18px" }}>Phone number</label>
                            <input className="mt-3 form-control" style={{ outline: "none", border: "2px solid #0bcc96" }} placeholder="Enter Phone Number" />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 p-4">
                        <label style={{ fontSize: "18px" }} className="">Choose a topic</label>
                        <select className="mt-3 form-control" style={{ border: "2px solid #0bcc96", outline: "none" }}>
                            <option className="">Select one...</option>
                            <option>Dieases</option>
                            <option>Application</option>
                            <option>Security</option>
                        </select>

                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 p-4">
                        <label style={{ fontSize: "18px" }} className="">Message</label>
                        <textarea placeholder=" Type Your Message..." className="mt-3 form-control" rows={5} style={{ border: "2px solid #0bcc96", outline: "none" }}>

                        </textarea>

                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 mb-4">
                    <button className="fw-bold" style={{ width: "250px", border: "none", color: "#fff", fontSize: "18px", height: "50px", borderRadius: "5px", backgroundColor: "#0bcc96" }}>Submit</button>
                </div>
            </form>
        </div >
    </>
}

export default Contact;