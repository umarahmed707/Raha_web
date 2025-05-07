import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Clientinfo3() {
  const navigate = useNavigate();

  // Handle 'Previous' button click
  const handlePrevious = () => {
    navigate(-1); // Ye previous page pe le jayega
  };


  return (
    <div >
   <div >    
       <div className='text-center mt-15'>
        <h1 className='sm:text-[60px] text-5xl lg:text-[95px] tracking-tighter font-semibold '>Client<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px]  tracking-[-0.06em]'> Information</span></h1>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div>
        <div className="ml-0 sm:ml-20 mt-10">
                        <h2 className="point font-semibold">1. Client Information</h2>
                        <h2 className="point font-semibold mt-4">2. Privacy Agreement</h2>
                    </div>
    <div className="client p-6 ml-25 mt-15">
      <h1 className="text-[25px] lg:text-[35px] font-bold text-center">3. Engagement Letter</h1>
      <div className="space-y-2 text-sm leading-relaxed">
        <p>Please read the Engagement Letter below and click proceed.</p>
        <p>This Engagement Letter ("Agreement") outlines the terms and conditions under which RAHA Financials ("the Company") will provide accounting and financial services to [Client's Name] ("the Client").</p>
        
        <h2 className="font-semibold text-lg">1. Scope of Services:</h2>
        <p>
        The Company agrees to provide the Client with comprehensive accounting and financial services, which may include but are not limited to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Financial statements</li>
          <li>Tax Preparation and Filing</li>
        </ul>

        <h2 className="font-semibold text-lg">2. Terms and Conditions:</h2>
       
            <p>2.1 Fees: The Client agrees to compensate the Company for services rendered based on mutually agreed-upon fee arrangements. Details regarding fees, payment terms, and billing frequency are specified in a separate fee agreement.</p>
       <p>2.2 Confidentiality: The Company is committed to maintaining the confidentiality of all client information and financial records. We will not disclose any client information to third parties without the Client's explicit consent unless required by law.</p>
       <p>2.3 Conflict of Interest: The Client acknowledges that the Company may have relationships with other clients or entities that could present potential conflicts of interest. The Company will promptly disclose any such conflicts and work with the Client to resolve them in an ethical and professional manner.</p>
       <p>2.4 Independence: The Company will maintain its independence and exercise professional judgment in providing services to the Client. The Client understands and agrees that the Company will not perform services that compromise its independence or violate ethical standards.</p>
       <p>2.5 Term: This engagement shall commence on [start date] and will continue until terminated by either party with at least 30 days' written notice. In the event of termination, the Client agrees to compensate the Company for services rendered up to the termination date.</p>
       <p>2.6 Governing Law: This Agreement shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from or related to this Agreement shall be resolved through arbitration in accordance with the rules of [Arbitration Authority], and the decision of the arbitrator shall be binding and final.</p>

        <h2 className="font-semibold text-lg">3. Deliverables:</h2>
        <p>The Company will provide the Client with regular reports, financial statements, and other deliverables as specified in our service agreement or as requested by the Client.</p>

        <h2 className="font-semibold text-lg">4. Client Responsibilities:</h2>
        <p>The Client agrees to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide accurate documentation</li>
          <li>Respond promptly to requests</li>
          <li>Abide by laws</li>
          <li>Cooperate with the Company</li>
        </ul>

        <h2 className="font-semibold text-lg">5. Limitation of Liability:</h2>
        <p>The Client acknowledges that the Company's liability for any errors, omissions, or other professional misconduct is limited to the fees paid by the Client for the services rendered.</p>

        <h2 className="font-semibold text-lg">6. Amendments:</h2>
        <p>This Agreement may be amended or modified only in writing and signed by both parties.</p>
        <p>Please indicate your agreement to the terms and conditions of this Engagement Letter by signing and returning it.</p>
        <h2 className="font-semibold text-lg">Privacy Agreement:</h2>
       <p>Please note that this Engagement Letter is subject to our Privacy Agreement, which governs the collection, use, and protection of personal information provided by the Client. By signing this Engagement Letter, you also acknowledge your acceptance of the Privacy Agreement.</p>
       <p>We appreciate the opportunity to serve your accounting and financial needs. If you have any questions or require further clarification, please do not hesitate to contact us.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            required
          />
          <label>I agree to the Engagement Letter</label>
        </div>
      
        <div className="mt-6 flex justify-between gap-10">
      <button
        onClick={handlePrevious}
        className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        className={`px-6 py-2 rounded text-white transition 
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
      </form>
    </div>
    </div>
    <div className='flex flex-col mt-5 ml-10 lg:ml-15'>
          <button className="text-gray-600 text-1xl w-[350px] border text-start font-bold py-4 px-6 mt-5 rounded-xl bg-gradient-to-b from-[#ffffff] to-[#DADADA]  hover:from-[#1445C2] hover:to-[#587EDB] hover:text-white">
            Client Information
          </button>
          <button className="text-gray-600 text-1xl border w-[350px] text-start font-bold py-4 px-6 mt-5 rounded-xl bg-gradient-to-b from-[#ffffff] to-[#DADADA]  hover:from-[#1445C2] hover:to-[#587EDB] hover:text-white">
          Privacy Agreement
          </button>
          <button className="text-gray-600 text-1xl border w-[350px] text-start font-bold py-4 px-6 mt-5 rounded-xl bg-gradient-to-b from-[#ffffff] to-[#DADADA]  hover:from-[#1445C2] hover:to-[#587EDB] hover:text-white">
          Engagement Letter
          </button>

        </div>

        </div>
    </div>
    </div>
  )
}
