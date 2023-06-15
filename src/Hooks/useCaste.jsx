import { useQuery } from "@tanstack/react-query";


const useCaste = () => {
  
  const {data: caste = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['caste'],
    queryFn: async() => {
      const res = await fetch('http://localhost:4000/caste');
      return res.json();
    }
  }) 
  return [caste, loading, refetch]
};

export default useCaste;