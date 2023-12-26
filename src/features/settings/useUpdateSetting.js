import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi} from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSetting(){
  const queryClient = useQueryClient();

    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
          toast.success("settings updated successfully");
          queryClient.invalidateQueries({
            queryKey: ["settings"],
          });
        },
        onError: (err) => {
          console.log('edit error')
          toast.error(err)
        }
      });
      return {updateSetting, isUpdating}
}