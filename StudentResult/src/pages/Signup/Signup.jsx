import { useState } from "react";
import { signupUser } from "../../services/authApi";
import {
  Container,
  Card,
  Title,
  Input,
  Select,
  Button,
  FormGroup,
} from "./Signup.styles";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    roll_no: "",
    class_name: "",
    subject: "",
    employee_id: "",
    admin_code: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupUser(form);
    alert("Signup successful");
    window.location.href = "/home";
  };

  return (
    <Container>
      <Card>
        <Title>Create Account</Title>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input name="name" placeholder="Name" required onChange={handleChange} />
            <Input name="email" type="email" placeholder="Email" required onChange={handleChange} />
            <Input name="password" type="password" placeholder="Password" required onChange={handleChange} />

            <Select name="role" value={form.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </Select>

{form.role === "student" && (
  <>
    <Input
      name="roll_no"
      placeholder="Roll Number"
      required
      onChange={handleChange}
    />
    <Input
      name="class_name"
      placeholder="Class Name"
      required
      onChange={handleChange}
    />
  </>
)}

{form.role === "teacher" && (
  <>
    <Input
      name="subject"
      placeholder="Subject"
      required
      onChange={handleChange}
    />
    <Input
      name="employee_id"
      placeholder="Employee ID"
      required
      onChange={handleChange}
    />
  </>
)}

{form.role === "admin" && (
  <Input
    name="admin_code"
    placeholder="Admin Code"
    required
    onChange={handleChange}
  />
)}


            <Button type="submit">Signup</Button>
          </FormGroup>
        </form>
      </Card>
    </Container>
  );
}
