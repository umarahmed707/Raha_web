import React, { useState } from 'react';

const Model3 = ({ isOpen, closeModal, goToPreviousModal }) => {
  if (!isOpen) return null; // If the modal is not open, return nothing

  const [fullName, setFullName] = useState('');
  const [signature, setSignature] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white p-5 rounded-lg w-auto  max-h-[90vh] overflow-x-auto">
    <button
      className="absolute top-2 right-2 text-xl font-bold text-gray-500"
      onClick={closeModal} // Close the modal when this button is clicked
    >
      &times; {/* X button to close */}
    </button>

    <div className="flex flex-col md:flex-row">
      <div className="client p-6 mt-10 md:mt-15 w-full">
        <h1 className="text-[25px] lg:text-[35px] font-bold text-center mb-6">3. Engagement Letter</h1>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>Please read the Engagement Letter below and click proceed.</p>
          <p>This Engagement Letter ("Agreement") outlines the terms and conditions under which RAHA Financials ("the Company") will provide accounting and financial services to [Client's Name] ("the Client").</p>

          <h2 className="font-semibold text-lg mt-4">1. Scope of Services:</h2>
          <p>The Company agrees to provide the Client with comprehensive accounting and financial services, which may include but are not limited to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Financial statements</li>
            <li>Tax Preparation and Filing</li>
          </ul>

          <h2 className="font-semibold text-lg mt-4">2. Terms and Conditions:</h2>
          <p>2.1 Fees: The Client agrees to compensate the Company for services rendered based on mutually agreed-upon fee arrangements. Details regarding fees, payment terms, and billing frequency are specified in a separate fee agreement.</p>
          <p>2.2 Confidentiality: The Company is committed to maintaining the confidentiality of all client information and financial records. We will not disclose any client information to third parties without the Client's explicit consent unless required by law.</p>
          <p>2.3 Conflict of Interest: The Client acknowledges that the Company may have relationships with other clients or entities that could present potential conflicts of interest. The Company will promptly disclose any such conflicts and work with the Client to resolve them in an ethical and professional manner.</p>
          <p>2.4 Independence: The Company will maintain its independence and exercise professional judgment in providing services to the Client. The Client understands and agrees that the Company will not perform services that compromise its independence or violate ethical standards.</p>
          <p>2.5 Term: This engagement shall commence on [start date] and will continue until terminated by either party with at least 30 days' written notice. In the event of termination, the Client agrees to compensate the Company for services rendered up to the termination date.</p>
          <p>2.6 Governing Law: This Agreement shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from or related to this Agreement shall be resolved through arbitration in accordance with the rules of [Arbitration Authority], and the decision of the arbitrator shall be binding and final.</p>

          <h2 className="font-semibold text-lg mt-4">3. Deliverables:</h2>
          <p>The Company will provide the Client with regular reports, financial statements, and other deliverables as specified in our service agreement or as requested by the Client.</p>

          <h2 className="font-semibold text-lg mt-4">4. Client Responsibilities:</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Provide accurate documentation</li>
            <li>Respond promptly to requests</li>
            <li>Abide by laws</li>
            <li>Cooperate with the Company</li>
          </ul>

          <h2 className="font-semibold text-lg mt-4">5. Limitation of Liability:</h2>
          <p>The Client acknowledges that the Company's liability for any errors, omissions, or other professional misconduct is limited to the fees paid by the Client for the services rendered.</p>

          <h2 className="font-semibold text-lg mt-4">6. Amendments:</h2>
          <p>This Agreement may be amended or modified only in writing and signed by both parties.</p>
          <p>Please indicate your agreement to the terms and conditions of this Engagement Letter by signing and returning it.</p>

          <h2 className="font-semibold text-lg mt-4">Privacy Agreement:</h2>
          <p>Please note that this Engagement Letter is subject to our Privacy Agreement, which governs the collection, use, and protection of personal information provided by the Client. By signing this Engagement Letter, you also acknowledge your acceptance of the Privacy Agreement.</p>
          <p>We appreciate the opportunity to serve your accounting and financial needs. If you have any questions or require further clarification, please do not hesitate to contact us.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <input
              type="text"
              className='Clientinput w-full'
              placeholder='Full Name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="text"
              className='Clientinput w-full h-[150px] text-center'
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder='Signature'
              required
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
            />
            <label>I agree to the Engagement Letter</label>
          </div>

           <div className="modal">
      <h2>Modal 3</h2>
      <button onClick={goToPreviousModal}>Previous</button>
    </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default Model3;
