import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const signupUser = (data) => {
  const { role } = data;

  if (role === "student") {
    const { name, email, password, roll_no, class_name } = data;
    return API.post("/auth/signup/student", {
      name,
      email,
      password,
      roll_no,
      class_name,
    });
  }

  if (role === "teacher") {
    const { name, email, password, subject, employee_id } = data;
    return API.post("/auth/signup/teacher", {
      name,
      email,
      password,
      subject,
      employee_id,
    });
  }

  if (role === "admin") {
    const { name, email, password, admin_code } = data;
    return API.post("/auth/signup/admin", {
      name,
      email,
      password,
      admin_code,
    });
  }
};

export const loginUser = (data) =>
  API.post("/auth/login", data);
