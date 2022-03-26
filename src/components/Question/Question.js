import React from 'react';
import './Question.css'

const Question = () => {
  return (
    <div className='question-container'>
      <div className='q-1'>
      <h1>How React Works?</h1>
      <p>ReactJs one of the most popular JavaScript libraries for mobile and web application development.React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.</p>
      </div>
      <div className='q-2'>
        <h1>Props vs State Difference</h1>
        <p>Props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable.</p><br></br>
        <p>State is a JavaScript object which contains data that influence how the component looks at a certain point in time. The second part is what makes the state different compared to props. State is just a snapshot of the app in a time.</p>
      </div>
    </div>
  );
};

export default Question;