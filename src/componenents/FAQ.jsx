import React, { useState } from "react";

const qs = [
  {
    q: "Do you offer installation services?",
    a: "We can refer certified installers in your area upon request.",
  },
  {
    q: "What is your return policy?",
    a: "Returns are accepted within 30 days in original packaging (project demo policy).",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, international shipping is available (demo text).",
  },
  {
    q: "Are smart lights compatible with Alexa/Google?",
    a: "Yes, most of our smart lights support common voice assistants.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div className="container my-5" id="faq">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Section Header */}
          <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {qs.map((item, idx) => (
              <div className="accordion-item mb-2" key={idx}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${open === idx ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => setOpen(open === idx ? null : idx)}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${open === idx ? "show" : ""}`}
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
