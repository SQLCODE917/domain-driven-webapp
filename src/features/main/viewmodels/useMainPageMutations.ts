import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewItem } from "../api/mockAPI";

export function useMainPageMutations() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createNewItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["query1"] });
      queryClient.invalidateQueries({ queryKey: ["query2"] });
    },
  });

  return {
    createItem: mutation.mutate,
    isCreating: mutation.isLoading,
  };
}
