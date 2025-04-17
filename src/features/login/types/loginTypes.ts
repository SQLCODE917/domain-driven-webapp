export type LoginState =
  | { status: "unauthenticated" }
  | { status: "admin"; username: string }
  | { status: "user"; username: string }
  | { status: "error"; error: string };

export const isAdminState = (
  state: LoginState,
): state is { status: "admin"; username: string } => state.status === "admin";

export const isUserState = (
  state: LoginState,
): state is { status: "user"; username: string } => state.status === "user";

export const isErrorState = (
  state: LoginState,
): state is { status: "error"; error: string } => state.status === "error";

export const isUnauthenticatedState = (
  state: LoginState,
): state is { status: "unauthenticated" } => state.status === "unauthenticated";
