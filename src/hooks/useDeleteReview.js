import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message);
    },
  });

  const deleteReview = async ({ deleteReviewId }) => {
    // call the mutate function here with the right arguments
    console.log(deleteReviewId);
    return await mutate({
      variables: {
        deleteReviewId,
      },
    });
  };

  return [deleteReview, result];
};

export default useDeleteReview;
