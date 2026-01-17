import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #2563eb, #1e40af);
`;

export const Card = styled.div`
  width: 360px;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #1e293b;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #1e40af;
  }
`;

export const FooterText = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  color: #475569;
`;
