const Feedback = ({ feedBack, totalFeedback, positive }) => {
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
