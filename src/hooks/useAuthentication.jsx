import { useState } from "react";

const useAuthentication = (authFunction, verifyPassword = false) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verifyPassword && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await authFunction(email, password);
    alert(response?.error || "Authentication successful!");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
  };
};

export default useAuthentication;
