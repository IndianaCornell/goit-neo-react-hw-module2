const Feedback = ({ feedBack, totalFeedback }) => {
  const total = feedBack.good + feedBack.neutral + feedBack.bad;
  const positive = Math.trunc((feedBack.good / total) * 100);

  return (
    <>
      <ul>
        <li>Good: {feedBack.good}</li>
        <li>Neutral: {feedBack.neutral}</li>
        <li>Bad: {feedBack.bad}</li>
        <li>Total: {totalFeedback}</li>
        {feedBack.good > 0 && <li>Positive: {positive}%</li>}
      </ul>
    </>
  );
};

export default Feedback;
