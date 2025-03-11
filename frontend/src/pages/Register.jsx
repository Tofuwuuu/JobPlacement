import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { Box, TextField, Button, Typography } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const result = register(email, password);
    if (result.success) {
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <Box p={4} maxWidth="400px" mx="auto" textAlign="center">
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        Employer Registration
      </Typography>

      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="green">{success}</Typography>}

      <form onSubmit={handleRegister}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>

      <Typography mt={2}>
        Already have an account? <Button onClick={() => navigate("/login")}>Login</Button>
      </Typography>
    </Box>
  );
};

export default Register;
