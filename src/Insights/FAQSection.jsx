import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the best way to contact Raha Financials for inquiries?",
    answer:
      "If you have any inquiries or need assistance regarding your financial matters, the best way to reach out to Raha Financials is by calling their dedicated customer service team. You can easily get in touch with them at the toll-free number 1-800-555-0199. Their knowledgeable representatives are available to help you with any questions you may have, ensuring that you receive the support you need in a timely manner.",
  },
  {
    question: "What services does Raha Financials offer to help manage my investments?",
    answer:
      "Raha Financials offers a comprehensive range of services to help manage your investments effectively. These include in-depth portfolio analysis to evaluate performance, strategic investment planning tailored to your goals, and continuous tracking to ensure your portfolio stays aligned with market conditions and your evolving financial objectives.",
  },
  {
    question: "What investment management services are provided by Raha Financials?",
    answer:
      "They provide personalized investment portfolios designed to match your financial goals and risk tolerance. Their services include thorough risk assessments to help protect your assets while seeking growth opportunities. Raha Financials also offers strategic asset allocation to ensure diversification and optimal performance across your investments.",
  },
  {
    question: "How can Raha Financials assist in retirement planning?",
    answer:
      "Raha Financials assists in retirement planning by creating customized strategies based on your age, income, lifestyle goals, and financial situation. Their advisors help you set clear retirement objectives, estimate future needs, and build a tax-efficient investment plan to ensure long-term financial security during your retirement years.",
  },
  {
    question: "What are the fees associated with Raha Financials' investment services?",
    answer:
      "The fees associated with Raha Financials' investment services typically include management fees for overseeing your portfolio, advisory charges for personalized financial guidance, and in some cases, performance-based commissions. These fees vary depending on the level of service and the complexity of your investment strategy.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // All closed initially

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h2 className="lg:text-[50px] text-[35px] font-bold text-center mb-8">
        Your Questions, <span className="text-blue-600">Answered</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-100 ${
                isOpen ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-bold flex justify-between items-center"
              >
                {faq.question}
                <span>{isOpen ? '▲' : '▼'}</span>
              </button>
              {isOpen && (
                <div className="px-6 pb-4 pt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
