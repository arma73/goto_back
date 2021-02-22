export type TEnv = string | undefined;

export type AllowNull<T> = T | null;

export type NoNullFields<T> = {
    [K in keyof T]: T[K] extends object // eslint-disable-line @typescript-eslint/ban-types
        ? NoNullFields<T[K]>
        : NonNullable<T[K]>
};
