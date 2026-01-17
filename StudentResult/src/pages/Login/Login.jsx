import { useState } from "react";
import { loginUser } from "../../services/authApi";
import {
  Container,
  Card,
  Title,
  Input,
  Button,
  FooterText,
  Select
} from "./Login.styles";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(form);

    localStorage.setItem("user_role", res.data.role);
    localStorage.setItem("user_name", res.data.user_name);

    alert("Login successful");
    window.location.href = "/home";
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <Select name="role" onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </Select>

          <Button type="submit">Login</Button>
        </form>

        <FooterText>Student Result Management System</FooterText>
      </Card>
    </Container>
  );
}
