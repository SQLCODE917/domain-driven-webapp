const mockLogin = async (username: string, password: string) => {
  console.log("Logging in with username:", username, "password:", password);

  return new Promise<{ token: string }>((resolve) => {
    setTimeout(() => resolve({ token: "mock-token" }), 500);
  });
};

export { mockLogin };
