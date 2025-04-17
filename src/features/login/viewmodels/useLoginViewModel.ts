import { useState } from "react";
import { mockLogin } from "../api/mockLogin";
import { useLoginActions } from "../viewmodels/useLoginActions";

export function useLoginViewModel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLoginActions();

  const onLogin = async () => {
    await mockLogin(username, password);
    login(username);
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    onLogin,
  };
}
