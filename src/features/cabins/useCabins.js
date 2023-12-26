import { useQuery } from "@tanstack/react-query";
import getCabins from "../../services/apiCabins";

export default function useCabins(){
    const {data: cabins, isLoading} = useQuery({
        queryKey: ['cabin'], //should be an array
        queryFn: getCabins,
      })
    return {cabins, isLoading}
}