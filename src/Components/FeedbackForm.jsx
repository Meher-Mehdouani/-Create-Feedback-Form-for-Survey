import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  // Initialize state with name, email, feedback, and rating
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '' // New state for rating
  });

  // handleChange handles inputs, textareas, and radio buttons dynamically
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '' // Reset rating after submission
      });
      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
      <nav>
        Tell Us What You Think
      </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>

        {/* Rating Section using Radio Buttons */}
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <label>Rate Us:</label>
          <div>
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} style={{ marginRight: '15px' }}>
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={formData.rating === String(num)}
                  onChange={handleChange}
                  required
                />
                {num}
              </label>
            ))}
          </div>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;