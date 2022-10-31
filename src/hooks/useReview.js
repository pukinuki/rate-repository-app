import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW, {
    onError: (error) => {
      console.log(error);
      console.error(error.graphQLErrors[0].message);
    },
  });
  const navigate = useNavigate();

  const review = async ({ ownerName, repositoryName, rating, text }) => {
    // call the mutate function here with the right arguments
    const reviewResult = await mutate({
      variables: {
        review: { ownerName, repositoryName, rating: Number(rating), text },
      },
    });

    const id = reviewResult.data.createReview.repositoryId;
    if (id) {
      navigate("/SingleRepository", {
        replace: true,
        state: { repositoryId: id },
      });
    }

    return reviewResult;
  };

  return [review, result];
};

export default useReview;
