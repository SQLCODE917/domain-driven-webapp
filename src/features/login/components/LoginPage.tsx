import { useLoginViewModel } from "../viewmodels/useLoginViewModel";

const LoginPage = () => {
  const vm = useLoginViewModel();

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Login</h1>
      <input
        className="border p-2 mb-2 block"
        value={vm.username}
        onChange={(e) => vm.setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="border p-2 mb-2 block"
        value={vm.password}
        onChange={(e) => vm.setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={vm.onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
