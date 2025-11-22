export const formFieldsLogin = [
  {
    name: "login",
    label: "логин",
    type: "text",
    rules: {
      required: "введите логин",
      pattern: {
        value: /^[a-z][a-z0-9_-]{1,28}[a-z0-9]$/,
        message: "неверный логин",
      },
    },
  },
  {
    name: "password",
    label: "пароль",
    type: "password",
    rules: {
      required: "введите пароль",
      pattern: {
        value: /^.{8,}$/,
        message: "неверный пароль",
      },
    },
  },
] as const;