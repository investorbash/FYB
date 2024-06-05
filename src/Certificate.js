// Certificate.js
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const Certificate = ({
    nickname,
    socialMediaHandle,
    dob,
    relationshipStatus,
    bestColor,
    stateOfOrigin,
    hobbies,
    classCrush,
    favoriteCourse,
    toughestLevel,
    hardestCourse,
    favoriteQuote,
    whatWillUMiss,
    user_image
}) => {
    const certificateRef = useRef();

    const handleDownloadImage = async () => {
        const element = certificateRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = data;
        link.download = `${nickname}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='container'>
            
            {/* ________ */}

            <div className='box' ref={certificateRef} style={{ backgroundColor: bestColor || 'yellow', textAlign: 'center', border: '1px solid #000' }} >
                <h1>FINAL YEAR BRETHREN</h1>
                <h3 style={{fontFamily: 'Satisfy', fontWeight: '400', fontStyle: 'normal',}}>PERSONALTY OF THE DAY</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', padding: '20px', backgroundColor:  bestColor ||'yellow', textAlign: 'center'}}>
                    <div className='content' style={{ flex: '1 1 45%'}} >
                        <div>
                            <img src={user_image} alt="User"  style={{ width: '100%', height: '100%', borderRadius: '5%'}} />  
                            <br />
                            <hr />
                            <h1 style={{fontFamily: 'LXGW WenKai Mono TC', fontWeight: '400', fontStyle: 'normal',}}>CLASS '24</h1>
                        </div>
                    </div>
                    <div className='content' style={{ flex: '1 1 45%'}} >
                        <p style={{fontWeight: '1.2em',}}><strong>Nickname:</strong> {nickname}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Snap Handle(s):</strong> {socialMediaHandle}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Date of Birth:</strong> {dob}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Relationship Status:</strong> {relationshipStatus}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>State of Origin:</strong> {stateOfOrigin}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Hobbies:</strong> {hobbies}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Class Crush:</strong> {classCrush}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Favorite Course:</strong> {favoriteCourse}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Toughest Level:</strong> {toughestLevel}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Hardest Course:</strong> {hardestCourse}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>Favorite Quote:</strong> {favoriteQuote}</p>
                        <p style={{fontWeight: '1.2em',}}><strong>What Will You Miss:</strong> {whatWillUMiss}</p>
                        <br />
                        <hr />
                    </div>
                </div>
            </div>
            <br />
            <button onClick={handleDownloadImage}>Download as Image</button>
        </div>
    );
};

export default Certificate;
