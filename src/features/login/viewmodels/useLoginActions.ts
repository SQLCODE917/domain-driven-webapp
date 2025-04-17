import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  loginAsAdmin,
  loginAsUser,
  loginFailed,
} from "../state/loginPageSlice";

export function useLoginActions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return {
    login: (username: string) => {
      if (username === "admin") {
        dispatch(loginAsAdmin({ username }));
        navigate("/main");
      } else if (username === "user") {
        dispatch(loginAsUser({ username }));
        navigate("/main");
      } else {
        dispatch(loginFailed({ error: "Invalid credentials" }));
      }
    },
  };
}
