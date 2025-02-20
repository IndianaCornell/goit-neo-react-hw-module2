import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <>
      <button
        className={clsx(css.optionsButton)}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={clsx(css.optionsButton)}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={clsx(css.optionsButton)}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={clsx(css.optionsButton)}
          onClick={() => updateFeedback("reset")}
        >
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
