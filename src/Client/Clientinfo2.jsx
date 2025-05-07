import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Clientinfo2() {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  
  useEffect(() => {
    const name = localStorage.getItem('fullName');
    const business = localStorage.getItem('businessName');
  
    if (name) setFullName(name);
    if (business) setBusinessName(business);
  }, []);

  const navigate = useNavigate();

  // Handle 'Previous' button click
  const handlePrevious = () => {
    navigate(-1); // Ye previous page pe le jayega
  };

  // Handle 'Next' button click
  const handleNext = () => {
    navigate('/Clientinfo3'); // Ye /Clientinfo2 route pe le jayega
  };




  return (
    <>
      <div className='text-center mt-15'>
        <h1 className='sm:text-[60px] text-5xl lg:text-[95px] tracking-tighter font-semibold '>Client<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px]  tracking-[-0.06em]'> Information</span></h1>
      </div>
      <div className=' lg:ml-20 mt-15'>
      <h2 className="point font-semibold">1. Client Information</h2>
      </div>
    
      <div className="  flex flex-col md:flex-row items-start">
        <div>
        <div className="client lg:ml-25 mt-5 gap-7">
          <h1 className="text-[25px] lg:text-[35px] font-bold mb-4 text-center">2. Privacy Agreement</h1>
          <p className="text-center text-gray-900">
            Please read the Privacy Agreement below and click proceed.
          </p>

          <div className=" rounded p-4 text-sm text-gray-900 space-y-1">
            <p>
              This Privacy Agreement ("Agreement") is entered into between RAHA Financials <br /> ("<strong className="text-[14px] mb-2">{businessName || 'Not Provided'}</strong>") and ("<strong className="text-[14px] mb-2">{fullName || 'Not Provided'}</strong>") to govern the collection, use, and protection of personal information provided by the Client.
            </p>

            <h2 className="font-semibold text-[20px]">1. Information Collection:</h2>
            <ul className="list-disc pl-5">
              <li>Full Name</li>
              <li>Contact Information (Address, Phone Number, Email Address)</li>
              <li>Social Security Number or Tax Identification Number</li>
              <li>Financial Records and Documentation</li>
              <li>Any other information required for the provision of accounting and financial services.</li>
            </ul>

            <p>
              By entering into this Agreement, the Client provides explicit consent for the Company to collect, use, and process their personal information as necessary for the provision of accounting and financial services.
            </p>

            <h2 className="font-semibold text-[20px]">2. Use of Information:</h2>
            <p>2.1 Purpose: The Company will use the provided personal information solely for the following purposes</p>
            <ul className="pl-5 mt-3">
              <li>Providing accounting and financial services</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Internal record-keeping and business operations</li>
            </ul>
            <p className='mt-3'>2.2 Third-Party Disclosure: The Company will not disclose the Client's personal information to third parties without the Client's explicit consent, except as required by law or in accordance with the terms of this Agreement.
            </p>
            <p>2.3 Retention: The Company will retain the Client's personal information for as long as necessary to fulfill the purposes outlined in this Agreement or as required by applicable laws and regulations.</p>
            <p className='mt-3'>
              No third-party disclosure without consent unless required by law. Data retained as per law or business need.
            </p>

            <h2 className="font-semibold text-[20px]">3. Security Measures:</h2>
            <p>3.1 Security: The Company will implement reasonable security measures to protect the confidentiality, integrity, and availability of the Client's personal information. These measures include, but are not limited to, encryption, access controls, and regular security assessments.
            </p>
            <p className='mt-3'>3.2 Data Breach Notification: In the event of a data breach or unauthorized access resulting in the compromise of personal information, the Company will promptly notify the Client and take appropriate steps to mitigate any harm.
            </p>
            <h2 className="font-semibold text-[20px]">4. Client's Rights:</h2>
            <p className='mt-3'>4.1 Access and Correction: The Client has the right to access their personal information held by the Company and to request corrections or updates to inaccurate or incomplete information.
            </p>
            <p className='mt-3'>4.2 Deletion: The Client may request the deletion of their personal information unless the Company has a legal obligation to retain such data.
            </p>

            <h2 className="font-semibold text-[20px]">5. Marketing Communications:</h2>
            <p>
              The Company may use the Client's contact information to send occasional marketing communications about our services. The Client can opt out of receiving these communications at any time.

            </p>

            <h2 className="font-semibold text-[20px]">6. Changes to this Agreement:</h2>
            <p>
              The Company reserves the right to modify this Agreement from time to time. Any changes will be communicated to the Client, and continued use of our services will signify acceptance of the updated terms.

            </p>

            <h2 className="font-semibold text-[20px]">7. Contact Information:</h2>
            <p className='mt-3'>f the Client has any questions, concerns, or requests related to this Agreement or the treatment of their personal information, they can contact:
            </p>
            <p className='mt-3'>
              I[RAHA Financials]
            </p>

            <p className='mt-3'>
              By signing this Privacy Agreement, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined herein.
            </p>
          </div>

          <div className="flex w-full">
            <input
              type="text"
             
              className='Clientinput w-full border border-black'
              
              placeholder="Full Name"
            />
          </div>


          <div className="mt-4 flex items-center gap-3">
            <input
              type="checkbox"
              
         
              className="w-4 h-4"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to the Privacy Agreement
            </label>
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
    
        </div>
        <div className=' lg:ml-20 lg:mt-15 mt-5'>
        <h2 className="point font-semibold">3. Engagement Letter</h2>
      </div>
        </div>
        <div class="button-container ml-10 mt-10">
  <button class="section-btn">Client Information</button>
  <button class="section-btn">Privacy Agreement</button>
  <button class="section-btn">Engagement Letter</button>
</div>
      </div>
    </>
  );
}
