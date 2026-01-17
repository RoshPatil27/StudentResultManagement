import styled from "styled-components";

export const ContactSection = styled.section`
  max-width: 800px;
  margin: 60px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #1e293b;
`;

export const ContactText = styled.p`
  font-size: 18px;
  color: #475569;
  margin-bottom: 10px;
`;

export const ContactEmail = styled.a`
  font-size: 18px;
  color: #2563eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
