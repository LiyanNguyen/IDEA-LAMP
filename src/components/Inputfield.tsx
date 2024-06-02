import { FieldError, UseFormRegister, ValidationRule } from "react-hook-form";
import { FormValues } from "../types";

export const Inputfield = ({
  title,
  isSmall,
  error,
  errorMessage = "記号・数字は使用できません",
  register,
  pattern = /^[一-龠ぁ-ゔァ-ヴーa-zA-Z]+$/u,
}: {
  title: keyof FormValues;
  isSmall?: boolean;
  error?: FieldError;
  errorMessage?: string;
  register: UseFormRegister<FormValues>;
  pattern?: ValidationRule<RegExp>;
}) => {
  return (
    <div className="inputField__container">
      <input
        className={`${"inputField__input"} ${
          isSmall ? "inputField__input--small" : ""
        } ${error ? "inputField__input--error" : ""}`}
        type="text"
        id={title.toString()}
        {...register(title, {
          required: true,
          pattern: pattern,
        })}
      />
      {error && <p className="errorMessage">{errorMessage}</p>}
    </div>
  );
};
