export type NullViewModel = {
  isLoading: boolean;
};

export const NULL_OBJECT: NullViewModel = {
  isLoading: false,
};

export type UserViewModel = {
  query1: string[];
  isLoading: boolean;
  refetch1: () => void;
  isCreating: boolean;
  onCreateNew: () => void;
};

export type AdminViewModel = UserViewModel & {
  query2: string[];
  refetch2: () => void;
};

export type ViewModel = UserViewModel | AdminViewModel | NullViewModel;

export function isUserViewModel(
  viewModel: ViewModel,
): viewModel is UserViewModel {
  const userViewModel = viewModel as UserViewModel;
  return (
    userViewModel.isLoading === false &&
    userViewModel.query1 !== undefined &&
    userViewModel.refetch1 !== undefined
  );
}

export function isAdminViewModel(
  viewModel: ViewModel,
): viewModel is AdminViewModel {
  const adminViewModel = viewModel as AdminViewModel;
  return (
    adminViewModel.isLoading === false &&
    adminViewModel.query1 !== undefined &&
    adminViewModel.refetch1 !== undefined &&
    adminViewModel.query2 !== undefined &&
    adminViewModel.refetch2 !== undefined
  );
}

export function isNullViewModel(
  viewModel: ViewModel,
): viewModel is NullViewModel {
  return (
    !isUserViewModel(viewModel) &&
    !isAdminViewModel(viewModel) &&
    viewModel.isLoading === false
  );
}
