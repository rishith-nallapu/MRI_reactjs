import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

const AppContainer = createGlobalStyle`
  body {
    background: linear-gradient(to right, #08203e, #557c93);
    background-size: cover;
  }
`;

const RegistrationFormWrapper = styled.div`
  background-color: #f2f3f4;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid black;
  border-radius: 8px;
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobileNumber: '',
    email: '',
    password: '',
    otp: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerateOTP = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/send-otp', {
        mobileNumber: formData.mobileNumber,
        email: formData.email,
      });
      console.log('OTP sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/verify-otp', {
        email: formData.email,
        otp: formData.otp,
      });

      if (response.data.success) {
        // Redirect to the login page on successful OTP verification
        window.location.href = '/navbar';
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Error during OTP verification. Please try again.');
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/register2', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <AppContainer />
      <RegistrationFormWrapper>
        <h2>Client Registration</h2>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <Label>Username:</Label>
            <Input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </FormSection>

          <FormSection>
            <Label>Mobile Number:</Label>
            <Input
              type="tel"
              name="mobileNumber"
              pattern="[0-9]{10}"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </FormSection>

          <FormSection>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormSection>

          <FormSection>
            <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormSection>

          <FormSection>
            <Label>OTP:</Label>
            <Input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              required
            />
            <Button type="button" onClick={handleGenerateOTP}>
              Generate OTP
            </Button>
          </FormSection>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </RegistrationFormWrapper>
    </>
  );
};

export default Signup;
