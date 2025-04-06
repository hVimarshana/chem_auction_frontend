import React from 'react';
import './ClientFeedback.css'; // Ensure correct path

const feedbacks = [
  {
    message: "This platform is fantastic! It's helped us find the chemicals we need efficiently.",
    name: "John Doe",
    role: "CEO, Chemical Co.",
    image: "https://via.placeholder.com/150"
  },
  {
    message: "A game-changer for our procurement process. Highly recommended.",
    name: "Jane Smith",
    role: "Procurement Manager, Chem Solutions",
    image: "https://via.placeholder.com/150"
  },
  {
    message: "Excellent service and support. We have significantly reduced our costs.",
    name: "Emily Johnson",
    role: "COO, Industrial Chemicals",
    image: "https://via.placeholder.com/150"
  }
];

const ClientFeedback = () => {
  return (
    <section className="client-feedback-section py-10 bg-white sm:py-16 lg:py-24">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
        <div className="feedback-grid grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-card p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="client-image-wrapper mb-4">
                <img
                  className="client-image rounded-full"
                  src={feedback.image}
                  alt={`Client ${feedback.name}`}
                />
              </div>
              <p className="feedback-text text-gray-700">{feedback.message}</p>
              <div className="feedback-author mt-4">
                <h3 className="author-name text-lg font-semibold text-gray-900">
                  {feedback.name}
                </h3>
                <p className="author-role text-gray-500">{feedback.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
