import React, { useState } from 'react';
import './Gallery.css';

// 1. Photos import
import photo1 from '../assets/img1.jpeg';
import photo2 from '../assets/img2.jpeg';
import photo3 from '../assets/img3.jpeg';
import photo4 from '../assets/img4.jpeg';
import photo5 from '../assets/img5.jpeg';
import photo6 from '../assets/img6.jpeg';
import photo7 from '../assets/img7.jpeg';
import photo8 from '../assets/img8.jpeg';
import photo9 from '../assets/img9.jpeg';
import photo10 from '../assets/img10.jpeg';
import photo11 from '../assets/img11.jpeg';

const Gallery = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [inputPass, setInputPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [selectedImg, setSelectedImg] = useState(null);

    // Password check karne ka function
    const handleLogin = (e) => {
        e.preventDefault();
        
        // Yahan "1234" ki jagah apna password rakh lein
        if (inputPass === "9761") {
            setIsAuthenticated(true);
            setErrorMsg("");
        } else {
            setErrorMsg("Wrong Password! Please try again.");
            setInputPass(""); // Input box ko khali kar dega
        }
    };

    // AGAR PASSWORD SAHI NAHI HUA, TOH YE SUNDAR LOGIN PAGE DIKHEGA
    if (!isAuthenticated) {
        return (
            <div className="login-page">
                <div className="login-box">
                    <h2>🔒 Protected Gallery</h2>
                    <p>Please enter the password to view photos</p>
                    
                    <form onSubmit={handleLogin}>
                        <input 
                            type="password" 
                            placeholder="Enter password..." 
                            value={inputPass}
                            onChange={(e) => setInputPass(e.target.value)}
                            className="login-input"
                        />
                        <button type="submit" className="login-btn">Enter</button>
                    </form>

                    {/* Agar password galat hua toh yahan error dikhegi */}
                    {errorMsg && <p className="error-text">{errorMsg}</p>}
                </div>
            </div>
        );
    }

    // AGAR PASSWORD SAHI HUA, TOH YE ASLI GALLERY DIKHEGI
    return (
        <div className="gallery-container">
            <h2>Gallery</h2>
            
            <div className="gallery-grid">
                <div className="gallery-card" onClick={() => setSelectedImg(photo1)}>
                    <img src={photo1} alt="Gallery 1" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo2)}>
                    <img src={photo2} alt="Gallery 2" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo3)}>
                    <img src={photo3} alt="Gallery 3" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo4)}>
                    <img src={photo4} alt="Gallery 4" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo5)}>
                    <img src={photo5} alt="Gallery 5" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo6)}>
                    <img src={photo6} alt="Gallery 6" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo7)}>
                    <img src={photo7} alt="Gallery 7" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo8)}>
                    <img src={photo8} alt="Gallery 8" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo9)}>
                    <img src={photo9} alt="Gallery 9" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo10)}>
                    <img src={photo10} alt="Gallery 10" className='gallery-frame'/>
                </div>
                <div className="gallery-card" onClick={() => setSelectedImg(photo11)}>
                    <img src={photo11} alt="Gallery 11" className='gallery-frame'/>
                </div>
            </div>

            {/* Full-Screen Modal */}
            {selectedImg && (
                <div className="modal" onClick={() => setSelectedImg(null)}>
                    <span className="close-btn">&times;</span>
                    <img src={selectedImg} alt="Full Screen" className="modal-img" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default Gallery;