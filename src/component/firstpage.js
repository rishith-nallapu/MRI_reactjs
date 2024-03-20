import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoIcon from './x-rays.png';

const FirstPage = () => {
    return (
        <Container>
            <Nav>
                <LogoContainer>
                    <Logo src={logoIcon} alt="Logo Icon" />
                    <LogoText>ScanSavvy</LogoText>
                </LogoContainer>
                <ButtonContainer>
                    <StyledLink to="/login"><Button>Sign Up</Button></StyledLink>
                    <StyledLink to="/navbar"><Button>Guest</Button></StyledLink>
                </ButtonContainer>
            </Nav>
            <Content>
                <Title>Welcome to ScanSavvy</Title>
                <Description>
                    <ContentBox>
                        <p>
                            At ScanSavvy, we're dedicated to revolutionizing radiology with AI-powered medical image interpretation. Our mission is to assist radiologists in diagnosing conditions more quickly and accurately, ultimately improving patient outcomes.
                        </p>
                        <p>
                            <strong>Vision:</strong> We envision a future where AI enhances radiologists' efficiency and accuracy, optimizing patient care through timely and precise diagnoses.
                        </p>
                        <p>
                            <strong>How It Works:</strong> Our AI system analyzes medical images, detecting anomalies and providing valuable insights to radiologists. Using machine learning algorithms trained on vast datasets, our system highlights key findings and assists in diagnosis.
                        </p>
                        <p>
                            <strong>Key Features:</strong>
                        </p>
                        <ul>
                            <li>Accurate image analysis</li>
                            <li>Decision support for radiologists</li>
                            <li>Seamless integration into existing workflows</li>
                        </ul>
                        <p>
                            <strong>Benefits for Radiologists:</strong>
                        </p>
                        <ul>
                            <li>Enhanced efficiency and productivity</li>
                            <li>Improved diagnostic accuracy</li>
                            <li>Reduced report turnaround times</li>
                        </ul>
                        <p>
                            <strong>Quality and Safety:</strong> We prioritize patient care and safety, adhering to regulatory standards and rigorous testing to ensure accuracy and reliability.
                        </p>
                    </ContentBox>
                </Description>
            </Content>
            <Footer>
                <FooterContent>
                    <FooterSection>
                        <FooterTitle>Contact Us</FooterTitle>
                        <p>Email: info@scansavvy.com</p>
                        <p>Phone: +1 123-456-7890</p>
                    </FooterSection>
                    <FooterSection>
                        <FooterTitle>Follow Us</FooterTitle>
                        <p>Twitter: @scansavvy</p>
                        <p>LinkedIn: ScanSavvy</p>
                    </FooterSection>
                </FooterContent>
            </Footer>
        </Container>
    );
};

const Container = styled.div`
    text-align: center;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 35px; 
    height: 35px; 
    margin:0px 25px; 
    padding:4px;
    border-radius:50%;
    border:2px solid white;
`;

const Nav = styled.nav`
    background-color: #333;
    color: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoText = styled.h2`
    margin: 10px 0; 
`;

const ButtonContainer = styled.div`
    margin-right: 100px;
`;

const Button = styled.button`
    margin-left: 30px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    &:hover{
        background-color:red;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Content = styled.div`
    margin-top: 20px;
    flex-grow: 1; 
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const Description = styled.div`
    text-align: left;
    margin: 0 auto;
    max-width: 800px;
`;

const ContentBox = styled.div`
    background-color: #f2f2f2;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const Footer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    margin-top:30px;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-around;
`;

const FooterSection = styled.div`
    margin: 0 20px;
`;

const FooterTitle = styled.h3`
    margin-bottom: 10px;
`;

export default FirstPage;
