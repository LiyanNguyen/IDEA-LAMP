import { useForm, SubmitHandler } from "react-hook-form";
import {
  HeadingText,
  RequiredText,
  Inputfield,
  RadioGroup,
  BottomButtons,
} from "./components";
import { FormValues } from "./types";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const inputs: Array<keyof FormValues> = [
    "姓",
    "名",
    "氏カタカナ",
    "名カタカナ",
  ];
  return (
    <main className="app__container">
      <HeadingText 内容={"あなたの情報を入力してください"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <HeadingText 内容={"名前"} />
          {inputs.map((title) => (
            <div className="inputField__container" key={title}>
              <RequiredText タイトル={title} />
              <Inputfield
                title={title}
                error={errors[title]}
                register={register}
              />
            </div>
          ))}
        </div>
        <div className="form-section">
          <HeadingText 内容="年齢・性別" />
          <RequiredText タイトル="性別" />
          <RadioGroup register={register} />
          <div className="inputField__container">
            <RequiredText タイトル="年齢" />
            <Inputfield
              title="年齢"
              error={errors["年齢"]}
              register={register}
              pattern={/^(0|[1-9]\d*)(\.\d+)?$/}
              isSmall
            />
          </div>
        </div>
        <BottomButtons disabled={!isValid} />
      </form>
    </main>
  );
};

export default App;
