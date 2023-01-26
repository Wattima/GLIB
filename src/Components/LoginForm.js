// LoginForm component
import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import"../App.css"

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Function to handle login button click
  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
   <div class="bg-image" >
    <div  class="d-flex align-items-center justify-content-center">
      <div class="card">
    <form class="p-3 text-center">
      <div class="form-group">
      <label className="fs-1">Username</label>
        <Input
            type="text"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            className="form-control fs-2"
/>
</div>
<div class="form-group">
<label className="fs-1">Password</label>
<Input
type="password"
placeholder="Password"
onChange={e => setPassword(e.target.value)}
className="form-control fs-2"
/>
<Button variantColor="teal" onClick={handleLogin} class="btn btn-info fs-5">
Login
</Button>
</div>
</form>
</div>
</div>
</div>

);
}

export default LoginForm;