import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 20px;
`;

const ServiceItem = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesContainer>
        <ServiceItem>
          <Title>1) AI-Assisted Bone Abnormality Detection</Title>
          <Description>
            Our advanced AI system utilizes convolutional neural networks (CNN) to accurately detect bone abnormalities from medical images.
            The AI algorithm analyzes X-rays and MRI scans, identifying fractures, dislocations, and bone diseases with high precision.
            With AI assistance, our bone abnormality detection service provides rapid and reliable diagnosis, facilitating timely treatment and patient care.
          </Description>
        </ServiceItem>
        <ServiceItem>
          <Title>2) AI-Based Brain Tumor Detection</Title>
          <Description>
            Using cutting-edge CNN technology, our AI-powered system can detect brain tumors from MRI scans with exceptional accuracy.
            The AI algorithm identifies tumor regions within the brain, enabling early detection and intervention for improved patient outcomes.
            Our brain tumor detection service offers efficient and reliable diagnostic support, aiding clinicians in treatment planning and monitoring.
          </Description>
        </ServiceItem>
        <ServiceItem>
          <Title>3) Automated Bounding Box Generation</Title>
          <Description>
            Our AI-driven platform automatically generates bounded boxes around detected abnormalities, highlighting areas of concern for further review.
            The bounding box overlay provides visual guidance to radiologists and clinicians, facilitating precise localization and analysis of abnormalities.
            With automated bounding box generation, our service enhances diagnostic efficiency and accuracy, streamlining the interpretation process for healthcare professionals.
          </Description>
        </ServiceItem>
      </ServicesContainer>
    </>
  );
}

export default Services;
