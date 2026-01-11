import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { colors } from "@/shared/ui/colors";

import { formFieldsLogin } from "./form-fields-login";
import { formFieldsRegister } from "./form-fields-register";
import { Error } from "../form/error/error";
import { Button } from "../button/button";
import styles from "./form-auth.module.scss";

type FormType = {
  [_ in (typeof formFieldsLogin | typeof formFieldsRegister)[number]["name"]]: string;
};

const formStyleConfig = {
  login: {
    formFields: formFieldsLogin,
    textColor: colors.black,
    underlineFocusColor: colors.red,
    errorColor: "red" as keyof typeof colors,
    submitButton: {
      text: "войти",
      width: "8vw",
      padding: "0.3vw",
      color: "black" as keyof typeof colors,
      hoverColor: "red" as keyof typeof colors,
    },
  },
  register: {
    formFields: formFieldsRegister,
    textColor: colors.white,
    underlineFocusColor: colors.grayMid,
    errorColor: "grayMid" as keyof typeof colors,
    submitButton: {
      text: "зарегистрироваться",
      width: "16vw",
      padding: "0.4vw",
      color: "white" as keyof typeof colors,
      hoverColor: "grayMid" as keyof typeof colors,
    }
  }
};

export const Form = ({ type }: { type: "login" | "register" }) => {
  const formStyle = formStyleConfig[type];

  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm<FormType>({
    mode: "onChange",
  });

  const onSubmit = useCallback(() => {
    // TODO: add submit action
  }, []);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      {formStyle.formFields.map((field) => (
        <div
          className={styles.inputWrapper}
          key={field.name}
          style={{
            "--text-color": formStyle.textColor,
            "--underline-color": formStyle.textColor,
            "--underline-focus-color": formStyle.underlineFocusColor,
          } as React.CSSProperties}
        >
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            type={field.type}
            autoComplete="off"
            {...register(field.name, field.rules)}
          />
          {errors[field.name]?.message &&
            <Error
              message={errors[field.name]?.message}
              color={formStyle.errorColor}
              gridColumn="2"
              gridRow="2"
            />
          }
        </div>
      ))}
      {(isValid && isDirty) && (
        <Button
          color={formStyle.submitButton.color}
          hoverColor={formStyle.submitButton.hoverColor}
          width={formStyle.submitButton.width}
          padding={formStyle.submitButton.padding}
          type="submit"
        >
          {formStyle.submitButton.text}
        </Button>
      )}
    </form>
  );
};
