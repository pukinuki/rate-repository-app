import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { SIGNUP } from "../graphql/mutations";

const useSignIn = () => {
  const [login, result] = useMutation(SIGNUP, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message);
    },
  });
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const signUpResult = await login({
      variables: {
        user: { username, password },
      },
    });

    const id = signUpResult.data.createUser.id;
    if (id) {
      navigate("/", { replace: true });
    }

    return signUpResult;
  };

  return [signIn, result];
};

export default useSignIn;
