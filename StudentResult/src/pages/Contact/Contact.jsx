import {
  ContactSection,
  ContactTitle,
  ContactText,
  ContactEmail,
} from "./Contact.styles";

export default function Contact() {
  return (
    <ContactSection>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactText>
        For any queries or support, please reach out to us at:
      </ContactText>
      <ContactEmail href="mailto:support@studentresultsystem.com">
        support@studentresultsystem.com
      </ContactEmail>
    </ContactSection>
  );
}
