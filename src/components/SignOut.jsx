import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const SignOut = () => {
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  useEffect(() => {
    authStorage.removeAccessToken();
    client.resetStore();
    navigate("/SignIn", { replace: true });
  }, []);
};

export default SignOut;
