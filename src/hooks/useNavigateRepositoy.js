import { useNavigate } from "react-router-native";

const useNavigateRepository = () => {
  const navigate = useNavigate();

  return { navigate };
};

export default useNavigateRepository;
