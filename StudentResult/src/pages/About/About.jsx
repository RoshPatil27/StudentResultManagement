import {
  AboutSection,
  AboutTitle,
  AboutText,
} from "./About.styles";

export default function About() {
  return (
    <AboutSection>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        This system helps calculate student results accurately and efficiently
        using modern web technologies. It ensures consistency, transparency,
        and ease of use for both students and administrators.
      </AboutText>
    </AboutSection>
  );
}
