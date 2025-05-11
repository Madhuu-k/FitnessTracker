import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    img: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80',
    title: 'Log Your Workouts Effortlessly.',
    desc: 'Easily record your workouts and track your progress over time.'
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Track Your Steps with Precision.',
    desc: 'Monitor your daily activity and stay motivated to reach your goals.'
  },
  {
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    title: 'Monitor Your Caloric Intake Effectively.',
    desc: 'Keep an eye on your nutrition and make informed dietary choices.'
  }
];

const FeaturesSection = () => (
  <section className="features-section">
    <h2>Unlock Your Fitness Journey with Rodyn .</h2>
    <p>Rodyn offers a comprehensive suite of features to help you stay on track with your fitness goals. From logging workouts to monitoring your daily steps, we provide the tools you need for success.</p>
    <div className="features-cards">
      {features.map((feature, idx) => (
        <div className="feature-card" key={idx}>
          <img src={feature.img} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection; 