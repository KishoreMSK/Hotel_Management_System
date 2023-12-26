import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin(){
    const queryClient = useQueryClient();
    const {isLoading: isDeleting, mutate: deleteCabin} = useMutation({
      mutationFn: (id) => deleteCabinApi(id),
      onSuccess: () => {
          toast.success('Cabin deleted successfully')
          queryClient.invalidateQueries({
            queryKey: ['cabin']
          })
      },
      onError: (err) => toast.error(err)
    })

    return {isDeleting, deleteCabin}
}

