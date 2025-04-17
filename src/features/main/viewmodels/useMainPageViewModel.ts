import { ViewModel } from "../types/mainTypes";
import { useMainPageMutations } from "./useMainPageMutations";
import { NULL_OBJECT, UserViewModel, AdminViewModel } from "../types/mainTypes";

export function useMainPageViewModel(input: {
  isAdmin: boolean;
  query1: {
    data?: string[];
    isLoading: boolean;
    isSuccess: boolean;
    refetch: () => void;
  };
  query2: {
    data?: string[];
    isLoading: boolean;
    isSuccess: boolean;
    refetch: () => void;
  };
}): ViewModel {
  const { isAdmin, query1, query2 } = input;
  const mutation = useMainPageMutations();

  if (isAdmin) {
    const isSuccess = query1.isSuccess && query2.isSuccess;

    if (!isSuccess) {
      return NULL_OBJECT;
    } else {
      return {
        query1: query1.data!,
        query2: query2.data!,
        isLoading: query1.isLoading || query2.isLoading,
        refetch1: query1.refetch,
        refetch2: query2.refetch,
        isCreating: mutation.isCreating,
        onCreateNew: () => mutation.createItem(),
      } satisfies AdminViewModel;
    }
  } else {
    if (!query1.isSuccess) {
      return NULL_OBJECT;
    } else {
      return {
        query1: query1.data!,
        isLoading: query1.isLoading,
        refetch1: query1.refetch,
        isCreating: mutation.isCreating,
        onCreateNew: () => mutation.createItem(),
      } satisfies UserViewModel;
    }
  }
}
