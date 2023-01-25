// LoginForm component
import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Function to handle login button click
  const handleLogin = () => {
    onLogin(username, password);
  };
  return (
    <>
        <Input
            type="text"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
/>
<Input
type="password"
placeholder="Password"
onChange={e => setPassword(e.target.value)}
/>
<Button variantColor="teal" onClick={handleLogin}>
Login
</Button>
</>
);
}
export default LoginForm;