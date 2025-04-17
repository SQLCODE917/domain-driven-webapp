import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchData1, fetchData2 } from "../api/mockApi";
import { isAdminState } from "../../login/types/loginTypes";
import { RootState } from "../../../app/store";

export function useMainPageInputs() {
  const loginState = useSelector((state: RootState) => state.loginPage);
  const isAdmin = isAdminState(loginState);

  const query1 = useQuery({ queryKey: ["query1"], queryFn: fetchData1 });
  const query2 = useQuery({
    queryKey: ["query2"],
    queryFn: fetchData2,
    enabled: isAdmin,
  });

  return {
    isAdmin,
    query1,
    query2,
  };
}
