export const register = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if email already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return { success: false, message: "Email is already registered" };
    }
  
    // Add new user
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    return { success: true };
  };
  
  export const login = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify({ email, token: "fake-jwt-token" }));
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };
  
  export const logout = () => {
    localStorage.removeItem("user");
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem("user") !== null;
  };
  