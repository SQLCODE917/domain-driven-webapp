import { useMainPageInputs } from "../viewmodels/useMainPageInputs";
import { useMainPageViewModel } from "../viewmodels/useMainPageViewModel";
import {
  AdminViewModel,
  UserViewModel,
  isNullViewModel,
  isUserViewModel,
  isAdminViewModel,
} from "../types/mainTypes";

const MainPage = () => {
  const inputs = useMainPageInputs();
  const viewModel = useMainPageViewModel(inputs);

  if (isNullViewModel(viewModel)) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Main Page</h1>
      {isUserViewModel(viewModel) &&
        ((VM: UserViewModel) => {
          return (
            <div className="mb-4">
              <h2 className="font-bold">Data 1</h2>
              <ul>
                {VM.query1.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })(viewModel)}
      {isAdminViewModel(viewModel) &&
        ((VM: AdminViewModel) => {
          return (
            <div className="mb-4">
              <h2 className="font-bold">Data 2</h2>
              <ul>
                {VM.query2.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })(viewModel)}
      {isUserViewModel(viewModel) &&
        ((VM: UserViewModel) => {
          return (
            <button
              className="bg-green-500 text-white px-4 py-2"
              onClick={VM.onCreateNew}
              disabled={VM.isCreating}
            >
              {VM.isCreating ? "Creating..." : "Create New"}
            </button>
          );
        })(viewModel)}
    </div>
  );
};

export default MainPage;
