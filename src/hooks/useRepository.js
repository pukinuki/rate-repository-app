//import { useState , useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId },
    // Other options
  });

  let repository;

  if (loading) repository = null;
  else repository = data.repository;

  return { repository, loading, error };
};

export default useRepository;
