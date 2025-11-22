import { Controller } from "react-hook-form";

import { Text } from "../../text/text";
import { Error } from "../error/error";

import styles from "./editabale-field.module.scss";

type EditableFieldProps = {
  label: string,
  name: string,
  control: any,
  type?: string,
  rules?: object,
  errorMessage?: string,
};

export const EditableField = ({
  label,
  name,
  control,
  type,
  rules,
  errorMessage,
}: EditableFieldProps ) => {
  return (
    <div
      className={styles.editableRow}
    >
      <Text size="1vw">{label}</Text>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({field}) => (
          <>
            <input
              {...field}
              type={type}
              id={name}
              className={styles.input}
              autoComplete="off"
            />
            {errorMessage && <Error message={errorMessage} className={styles.error}/>}
          </>
        )}
      />
    </div>
  );
};
