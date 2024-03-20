import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
    padding: 40px;
`;

const Heading = styled.h3`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.5;
`;

const Aboutus = () => {
    return (
        <>
            <Navbar />
            <AboutUsContainer>
                <Heading>At ScanSavvy, we are pioneers in the field of AI-assisted radiology, dedicated to revolutionizing medical imaging and diagnosis. With a team of experts in machine learning and medical imaging, we have developed state-of-the-art solutions for automated detection of bone abnormalities and brain tumors.</Heading>
                <Heading>Our mission is to leverage the power of artificial intelligence to improve healthcare outcomes and enhance patient care. By harnessing the latest advancements in deep learning and computer vision, we strive to provide healthcare professionals with innovative tools that optimize diagnostic accuracy and efficiency.</Heading>
                <Heading>At ScanSavvy, we are driven by a commitment to innovation, excellence, and patient-centric care. With a focus on collaboration and continuous improvement, we aim to empower clinicians with advanced AI technologies that enable early detection, accurate diagnosis, and personalized treatment planning.</Heading>
                <Heading>Partner with us to experience the future of radiology, where AI-driven solutions revolutionize medical imaging and transform patient care. Together, we can make a difference in healthcare delivery and outcomes, advancing towards a healthier and brighter future for all.</Heading>
            </AboutUsContainer>
        </>
    );
}

export default Aboutus;
