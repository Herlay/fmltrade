import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const terms = [
    {
      title: "Letter of Credit (LC)",
      description:
        "A payment method where the buyer’s bank guarantees payment to the seller upon meeting specific conditions outlined in the agreement.",
      icon: "📜",
    },
    {
      title: "Bank Guarantee (BG)",
      description:
        "A commitment by a bank ensuring the seller will receive payment even if the buyer fails to fulfill the contract terms.",
      icon: "🏦",
    },
    {
      title: "Standby Letter of Credit (SBLC)",
      description:
        "A secondary payment method that acts as a safety net, providing financial assurance to the seller in case of non-performance by the buyer.",
      icon: "🛡️",
    },
    {
      title: "Usance LC",
      description:
        "A deferred payment letter of credit allowing the buyer to make payments at a later date, typically after a specified credit period.",
      icon: "⏳",
    },
    {
      title: "100% Cash",
      description:
        "Full payment is required upfront before the goods or services are provided.",
      icon: "💵",
    },
    {
      title: "Advance Payment",
      description:
        "Partial payment is made before the shipment or service delivery, with the remaining balance payable as agreed.",
      icon: "💰",
    },
  ];

  const toggleActive = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="payment-terms">
      <h2 className="section-title">Payment Terms</h2>
      <p className="section-description">
        We offer a variety of payment options to meet your needs. Please choose
        from the following:
      </p>
      <div className="terms-list">
        {terms.map((term, index) => (
          <div
            key={index}
            className={`term-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleActive(index)}
          >
            <div className="term-header">
              <span className="term-icon">{term.icon}</span>
              <h3>{term.title}</h3>
            </div>
            {activeIndex === index && (
              <div className="term-description">
                <p>{term.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
