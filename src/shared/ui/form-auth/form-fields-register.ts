export const formFieldsRegister = [
  {
    name: "fullname",
    label: "фио",
    type: "text",
    rules: {
      pattern: {
        value: /^[а-яёА-ЯЁ\s-]{1,90}$/,
        message: "некорректное фио",
      },
    },
  },
  {
    name: "group",
    label: "группа",
    type: "text",
    rules: {
      pattern: {
        value: /^[ЁёА-я]{4}-\d{2}-\d{2}$/,
        message: "некорректная группа",
      },
    },
  },
  {
    name: "email",
    label: "почта",
    type: "text",
    rules: {
      required: "введите почту",
      pattern: {
        value: /^[a-z][a-z0-9_-]{1,30}[a-z0-9]$/,
        message: "некорректная почта",
      },
    },
  },
  {
    name: "login",
    label: "логин",
    type: "text",
    rules: {
      required: "введите логин",
      pattern: {
        value: /^[a-z][a-z0-9_-]{1,30}[a-z0-9]$/,
        message: "некорректный логин",
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
        message: "введите пароль от 8 символов",
      },
    },
  },
] as const;