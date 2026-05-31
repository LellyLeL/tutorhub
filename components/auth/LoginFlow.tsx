"use client";

import { useState } from "react";
import { RolePicker } from "./RolePicker";
import { LoginForm } from "./LoginForm";

type Role = "student" | "tutor" | null;

export function LoginFlow() {
  const [role, setRole] = useState<Role>(null);

  if (!role) {
    return (
      <RolePicker
        title="Who are you?"
        subtitle="Choose how you want to sign in"
        onSelect={setRole}
      />
    );
  }

  if (role) {
    return <LoginForm role={role} onBack={() => setRole(null)} />;
  }

}