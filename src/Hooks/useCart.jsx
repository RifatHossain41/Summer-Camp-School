
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
   const { user } = useAuth();
   const token = localStorage.getItem('camp-access-token')

   const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/carts?email=${user?.email}`, {headers: {
        authorization: `bearer ${token}`
      }})
      console.log(res)
      return res.json();
    }
   })

   return [cart, refetch]
}

export default useCart;