import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { Box, TextField, Button, Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);

    if (result.success) {
      navigate("/dashboard"); // Redirect after login
    } else {
      setError(result.message);
    }
  };

  return (
    <Box p={4} maxWidth="400px" mx="auto" textAlign="center">
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        Employer Login
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleLogin}>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>

      {/* Register Link */}
      <Typography mt={2}>
        Don't have an account?{" "}
        <Button onClick={() => navigate("/register")}>Register</Button>
      </Typography>
    </Box>
  );
};

export default Login;
