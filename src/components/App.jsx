//import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

import { Wrapper } from './App.styled';
import { useState } from 'react';

//export class App extends Component {
  //state = {
   // good: 0,
    //neutral: 0,
    //bad: 0,
  //};

  
const listButtons = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good , setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

  //Прибираємо this, ми позакласом, тому методів НЕМАЄ!, тому або function or const
  
  const handleIncrement = stateName => {
    if (stateName === 'good') setGood(prev => prev + 1);
    if (stateName === 'neutral') setNeutral(prev => prev + 1);
    if (stateName === 'bad') setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const  countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return(
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={listButtons}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }


  