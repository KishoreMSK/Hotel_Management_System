import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCabin(){
  const queryClient = useQueryClient();

    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
          console.log('edit success');
          toast.success("Cabin edited successfully");
          queryClient.invalidateQueries({
            queryKey: ["cabin"],
          });
        },
        onError: (err) => {
          console.log('edit error')
          toast.error(err)
        }
      });
      return {editCabin, isEditing}
}