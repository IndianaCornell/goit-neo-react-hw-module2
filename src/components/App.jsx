import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const getSavedFeedback = () => {
    const savedData = localStorage.getItem("feedback");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  };

  let [feedBack, setFeedBack] = useState(getSavedFeedback());

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedBack));
  }, [feedBack]);

  const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad;

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedBack({ good: 0, neutral: 0, bad: 0 });
      return;
    }
    setFeedBack({ ...feedBack, [feedbackType]: feedBack[feedbackType] + 1 });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedBack={feedBack} totalFeedback={totalFeedback} />
      ) : (
        <p>No feedback yet :C</p>
      )}
    </>
  );
}

export default App;
