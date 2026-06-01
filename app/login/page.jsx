"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");

  async function handleLogin() {
    await supabase.auth.signInWithOtp({
      email,
    });
    alert("Check your email!");
  }

  return (
    <div className="p-8 text-center">
      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="p-2"
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
