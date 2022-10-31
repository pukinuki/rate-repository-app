//import { useState , useEffect } from "react";
import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";

const useMyReviews = () => {
  const { data, error, loading, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true },
    // Other options
  });

  let reviews;

  if (loading) reviews = null;
  else reviews = data.me;

  return { reviews, loading, error, refetch };
};

export default useMyReviews;
