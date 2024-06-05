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
        <div>
            <div className='container' ref={certificateRef} style={{ padding: '20px', border: '1px solid #000', textAlign: 'center', backgroundColor:  bestColor ||'yellow' }}>
                <h1>FINAL YEAR BRETHREN</h1>
                <h3>PERSONALTY OF THE DAY</h3>
                <div className='row'>
                    <div className="col-sm-6 col-md-6 w-50 h-50" >
                        <img src={user_image} alt="User"  style={{ width: '100%', height: '100%', borderRadius: '5%'}} />  
                        {/* style={{ width: '150px', height: '150px', borderRadius: '50%' }} */}
                    </div>
                    <div className="col-sm-6 col-md-6">
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
