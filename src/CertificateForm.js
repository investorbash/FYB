// CertificateForm.js
import React, { useState } from 'react';
import Certificate from './Certificate';

const CertificateForm = () => {
    const [formData, setFormData] = useState({
        nickname: '',
        socialMediaHandle: '',
        dob: '',
        relationshipStatus: '',
        bestColor: '',
        stateOfOrigin: '',
        hobbies: '',
        classCrush: '',
        favoriteCourse: '',
        toughestLevel: '',
        hardestCourse: '',
        favoriteQuote: '',
        whatWillUMiss: '',
        user_image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    user_image: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate certificate after form submission
        setFormData({ ...formData });
    };

    return (
        <div>
            <h1>Final Year Brethren</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nickname: </label>
                    <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Snap Handle(s): </label>
                    <input type="text" name="socialMediaHandle" value={formData.socialMediaHandle} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Date of Birth: </label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Relationship Status: </label>
                    <input type="text" name="relationshipStatus" value={formData.relationshipStatus} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Best Color: </label>
                    <input type="color" name="bestColor" value={formData.bestColor} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>State of Origin: </label>
                    <input type="text" name="stateOfOrigin" value={formData.stateOfOrigin} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Hobbies: </label>
                    <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Class Crush: </label>
                    <input type="text" name="classCrush" value={formData.classCrush} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Favorite Course: </label>
                    <input type="text" name="favoriteCourse" value={formData.favoriteCourse} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Toughest Level: </label>
                    <input type="text" name="toughestLevel" value={formData.toughestLevel} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Hardest Course: </label>
                    <input type="text" name="hardestCourse" value={formData.hardestCourse} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>Favorite Quote: </label>
                    <input type="text" name="favoriteQuote" value={formData.favoriteQuote} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>What Will You Miss: </label>
                    <input type="text" name="whatWillUMiss" value={formData.whatWillUMiss} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <label>User Image: </label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} required />
                </div>
                <br />
                {/* <button type="submit">Generate Certificate</button> */}
            </form>

            {formData.nickname && (
                <Certificate {...formData} />
            )}
        </div>
    );
};

export default CertificateForm;
