import { useState } from "react";
import "./App.css";
import Options from "./Options/Options";
import Section from "./Section/Section"; 
import Statistics from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const totalPositiveFeedback = totalFeedback > 0 ? ((feedback.good / totalFeedback) * 100).toFixed(2) + "%" : "0%";

  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <Options
          options={Object.keys(feedback)}
          onAddFeedback={handleFeedback}
        />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistics" className="container">
          <Statistics
            feedback={feedback}
            total={totalFeedback}
            positiveFeedback={totalPositiveFeedback}
          />
        </Section>
      ) : (
        <Notification message={"There is no feedback."} />
      )}
    </div>
  );
};

export default App;
