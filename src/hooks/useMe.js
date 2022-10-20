//import { useState , useEffect } from "react";
import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";

const useMe = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    // Other options
  });

  let me;

  if (loading) me = null;
  else me = data.me;

  return { me, loading, error };
};

export default useMe;
