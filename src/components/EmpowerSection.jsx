import React from 'react';
import './EmpowerSection.css';

const empowers = [
  {
    icon: '📦',
    title: 'Sync Your Wearables for Real-Time Insights.',
    desc: 'Connect your Google Fit to receive instant feedback on your performance.'
  },
  {
    icon: '📦',
    title: 'Personalized Recommendations Tailored Just for You.',
    desc: 'Our app analyzes your data to provide customized fitness tips.'
  },
  {
    icon: '📦',
    title: 'Comprehensive Progress Reports to Keep You Motivated.',
    desc: 'Stay on track with detailed insights into your progress.'
  }
];

const EmpowerSection = () => (
  <section className="empower-section">
    <h2>Discover How Our App Empowers Your Fitness Journey.</h2>
    <p>Our fitness tracker app seamlessly integrates with your favorite wearable devices, allowing you to monitor your activity in real-time. From logging workouts to tracking your diet, we provide the tools you need to achieve your health goals.</p>
    <div className="empower-cards">
      {empowers.map((emp, idx) => (
        <div className="empower-card" key={idx}>
          <div className="empower-icon">{emp.icon}</div>
          <h3>{emp.title}</h3>
          <p>{emp.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EmpowerSection; 