//import { useState , useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  //const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    // Other options
  });

  /*const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch("http://192.168.0.166:5000/api/repositories");
    const json = await response.json();
    
    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);*/

  let repositories;

  if (loading) repositories = null;
  else repositories = data.repositories;

  return { repositories, loading, error /*, refetch: fetchRepositories */ };
};

export default useRepositories;
