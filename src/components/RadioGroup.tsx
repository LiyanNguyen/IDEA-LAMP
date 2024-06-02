import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../types";

export const RadioGroup = ({
  register,
}: {
  register: UseFormRegister<FormValues>;
}) => {
  const 選択肢 = ["男性", "女性", "無回答・その他"];
  return (
    <div className="radio-group__container">
      {選択肢.map((option) => (
        <div className="radio-option__container" key={option}>
          <input
            type="radio"
            value={option}
            id={option}
            {...register("性別", { required: true })}
          />
          <label className="radio-option__label" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
