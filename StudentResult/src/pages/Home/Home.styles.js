import styled from "styled-components";

/* Hero Section */
export const HeroSection = styled.section`
  background: linear-gradient(135deg, #2563eb, #1e40af);
  padding: 70px 20px;
  text-align: center;
  color: #ffffff;
`;

export const HeroTitle = styled.h2`
  font-size: 34px;
  margin: 0;
  font-weight: 600;
`;

/* Form Section */
export const FormSection = styled.section`
  max-width: 520px;
  margin: 50px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
`;

/* Inputs */
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 14px;
  font-size: 16px;
  border: 1px solid #cbd5f5;
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

/* Button */
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #2563eb;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #1e40af;
  }
`;

/* Result */
export const ResultBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #eef2ff;
  border-radius: 6px;
  font-size: 16px;
`;
