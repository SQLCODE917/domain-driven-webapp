// We'll get to these later
export type Subset<T extends U, U> = U;
export type NoNullFields<Ob> = {
  [K in keyof Ob]: NonNullable<Ob[K]> extends object
    ? NoNullFields<NonNullable<Ob[K]>>
    : NonNullable<Ob[K]>;
};
