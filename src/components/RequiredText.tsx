export const RequiredText = ({ タイトル }: { タイトル: string }) => {
  return (
    <label htmlFor={タイトル} className="required-text__container">
      <p className="required-text__title">{タイトル}</p>
      <p className="required-text__mandatory">必須</p>
    </label>
  );
};
