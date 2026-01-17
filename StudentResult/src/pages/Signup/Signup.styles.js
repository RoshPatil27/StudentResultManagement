import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f6f8;
`;

export const Card = styled.div`
  width: 380px;
  padding: 2rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #1f2937;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  background: #fff;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const Button = styled.button`
  margin-top: 12px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #1e40af;
  }
`;
