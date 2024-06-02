export const BottomButtons = ({ disabled }: { disabled: boolean }) => {
  return (
    <div className="bottom-buttons__container">
      <button
        disabled={disabled}
        type="submit"
        className={`button next-button ${disabled ? "disabled" : ""}`}
      >
        次へ
      </button>
      <button type="button" className="button back-button">
        戻る
      </button>
    </div>
  );
};
