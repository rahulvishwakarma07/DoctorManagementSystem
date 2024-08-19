import React from 'react';

const SignupPage: React.FC = () => {
    return (
        <>
            <div style={{height:"100vh",backgroundColor:"#0bcc96"}} className='container-fluid border d-flex justify-content-center align-items-center'>
                <div className='row rounded ' style={{width:"85%", height:"80%", fontFamily: 'Arial, sans-serif' }}>
                    {/* Left Section */}
                    <div className='col-md-5' style={{ backgroundColor: '#E2EFFF', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ textAlign: 'center', color: '#0bcc96', marginBottom: '20px' }}>
                            <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Need webdesign for your business?</h1>
                            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Design Spacee will help you.</h2>
                        </div>
                        <div>
                            <img src="Signup.png" alt="Design Spacee Logo" style={{ maxWidth: '100%' }} />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='col-md-7' style={{backgroundColor:"white", padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Account</h2>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <button style={{ width: '48%', padding: '10px', backgroundColor: '#FFFFFF', border: '1px solid #CCCCCC', borderRadius: '4px', cursor: 'pointer' }}>
                                    Sign up with Google
                                </button>
                                <button style={{ width: '48%', padding: '10px', backgroundColor: '#FFFFFF', border: '1px solid #CCCCCC', borderRadius: '4px', cursor: 'pointer' }}>
                                    Sign up with Facebook
                                </button>
                            </div>

                            <div style={{ textAlign: 'center', color: '#AAAAAA', marginBottom: '20px' }}>
                                <span>— OR —</span>
                            </div>

                            <form>
                                <div style={{ marginBottom: '10px' }}>
                                    <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '10px', border: '1px solid #CCCCCC', borderRadius: '4px' }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', border: '1px solid #CCCCCC', borderRadius: '4px' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', border: '1px solid #CCCCCC', borderRadius: '4px' }} />
                                </div>
                                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0bcc96', color: '#FFFFFF', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                    Create Account
                                </button>
                            </form>

                            <div style={{ textAlign: 'center', marginTop: '20px', color: '#666666' }}>
                                <span>Already have an account? <a href="#" style={{ color: '#0bcc96' }}>Login</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupPage;
