import { useMutation, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [login, result] = useMutation(AUTHENTICATE, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message);
    },
  });
  const navigate = useNavigate();
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const loginResult = await login({
      variables: {
        credentials: { username, password },
      },
    });

    const token = loginResult.data.authenticate.accessToken;
    if (token) {
      await authStorage.setAccessToken(token);
      client.resetStore();
      navigate("/", { replace: true });
    }

    return loginResult;
  };

  return [signIn, result];
};

export default useSignIn;
