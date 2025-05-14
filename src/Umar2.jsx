import { useState } from "react";

const Umar2 = () => {
const [fullName, setFullName] = useState('');


  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    // Reset the error message as the user starts typing
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that fullName is not empty
    if (fullName.trim() === '') {
      
      return; // Stop the form submission if validation fails
    }

    // Save to localStorage if validation passes
    localStorage.setItem('fullName', fullName);
  
  };
        const [signature, setSignature] = useState('');
        const [agreed, setAgreed] = useState(false);
    
      const [selectedModal, setSelectedModal] = useState(0); // Modal starts at step 0

  const openModal = (modalIndex) => {
    setSelectedModal(modalIndex); // Set the selected modal index
  };

  const closeModal = () => {
    setSelectedModal(null); // Close the modal
  };

  


const goToNextModal = () => {


  // Validation based on the current modal
  if (currentModal === 0) {
    // Validate required fields for the first modal
    if (!formData.fullName || !formData.email || !formData.businessName || !formData.address || !formData.city ) {

      return; // Prevent moving to the next modal
      c
    }
  } 

  // If validation passes, move to the next modal
  if (selectedModal < 2) {
    setSelectedModal(selectedModal + 1); // Move to the next modal
  }
};


  const goToPreviousModal = () => {
    if (selectedModal > 0) {
      setSelectedModal(selectedModal - 1); // Show previous modal
    }
  };


     
                const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: ''
  });
 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  


  return (
    <div>
      {/* Button to open each modal */}
      <button onClick={() => openModal(0)}>Learn More</button>


      {/* Modal 1 */}
      {selectedModal === 0 && (
        <div className="modal">
          <div><div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg w-auto relative max-h-[90vh] overflow-x-auto">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500"
          onClick={closeModal}
        >
          &times; {/* X button to close */}
        </button>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="client ">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6">1. Client Information</h1>
              <form onSubmit={handleSubmit}>
                
                <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          className="Clientinput flex-1"
          placeholder="Full Name*"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
     
                 <input
      type="email"
      className="Clientinput flex-1"
      placeholder="Email*"
      name="email"
      value={formData.email}
      onChange={handleChange }
      required // Added required attribute
    />
 
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <input type="text" className="Clientinput flex-1" placeholder="Date of Birth" required />
                  <input type="text" className="Clientinput flex-1" placeholder="Phone Number" required/>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    className="Clientinput w-full"
                    placeholder="Business Name (if applicable)"
                   
                   onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-4">
                  <input type="text" className="Clientinput w-full" placeholder="Home Address (if different)" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <input type="text" className="Clientinput flex-1" placeholder="City" />
                  <input type="text" className="Clientinput flex-1" placeholder="State/Province" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <input type="text" className="Clientinput flex-1" placeholder="Postal Code" />
                  <input type="text" className="Clientinput flex-1" placeholder="Country" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <input type="text" className="Clientinput flex-1" placeholder="Citizenship Status" />
                  <input type="text" className="Clientinput flex-1" placeholder="Country of Citizenship" />
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Are you a U.S. tax resident?</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="choice" value="yes" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="choice" value="no" />
                      No
                    </label>
                  </div>
                </div>

                <div className="mt-6 font-semibold">
                  <h2 className="font-bold mb-2">Opted Services</h2>
                  <div className="grid sm:grid-cols-1 gap-2">
                    {[
                      "Bookkeeping", "Financial Statements", "Tax Preparation and Filing",
                      "Auditing", "Payroll Processing", "Business Registration",
                      "ITIN Registration (if applicable)", "Net Worth Evaluation"
                    ].map(service => (
                      <label key={service} className="flex items-center gap-2">
                        <input type="checkbox" />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <textarea className="Clientinput w-full h-[100px]" placeholder="If no, please specify your tax residency:" />
                </div>
      <div className="modal">
    
      <button
          type="submit"
          className="Next-button border mt-5 text-[#1445C2] p-2 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-[60px] sm:w-auto md:w-auto lg:w-auto"
       onClick={goToNextModal}
          
        >
          Submit
        </button>
    </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></div>
         
        </div>
      )}

      {/* Modal 2 */}
      {selectedModal === 1 && (
        <div className="modal">
          <div> <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
     <div className="bg-white p-5 rounded-lg w-auto relative max-h-[90vh] overflow-x-auto">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500"
          onClick={closeModal}
        >
          &times; {/* X button to close */}
        </button>
    
      <div className="flex flex-col md:flex-row items-start">
        <div>
          <div className="client gap-7">
            <h1 className="text-[25px] lg:text-[35px] font-bold mb-4 ">2. Privacy Agreement</h1>
            <p className=" text-gray-900">
              Please read the Privacy Agreement below and click proceed.
            </p>

            <div className="rounded  text-sm text-gray-900 space-y-1">
              <p>
                This Privacy Agreement ("Agreement") is entered into between RAHA Financials <br /> ("Raha Financial") and ("<strong className="text-[14px] mb-2">{fullName || 'Not Provided'}</strong>") to govern the collection, use, and protection of personal information provided by the Client.
              </p>

              <h2 className="font-semibold text-[20px]">1. Information Collection:</h2>
              <ul className="list-disc pl-5">
                <li>Full Name</li>
                <li>Contact Information (Address, Phone Number, Email Address)</li>
                <li>Social Security Number or Tax Identification Number</li>
                <li>Financial Records and Documentation</li>
                <li>Any other information required for the provision of accounting and financial services.</li>
              </ul>

              <p>By entering into this Agreement, the Client provides explicit consent for the Company to collect, use, and process their personal information as necessary for the provision of accounting and financial services.</p>

              <h2 className="font-semibold text-[20px]">2. Use of Information:</h2>
              <p>2.1 Purpose: The Company will use the provided personal information solely for the following purposes</p>
              <ul className="pl-5 mt-3">
                <li>Providing accounting and financial services</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Internal record-keeping and business operations</li>
              </ul>
              <p className='mt-3'>2.2 Third-Party Disclosure: The Company will not disclose the Client's personal information to third parties without the Client's explicit consent, except as required by law or in accordance with the terms of this Agreement.</p>
              <p>2.3 Retention: The Company will retain the Client's personal information for as long as necessary to fulfill the purposes outlined in this Agreement or as required by applicable laws and regulations.</p>
              <p className='mt-3'>No third-party disclosure without consent unless required by law. Data retained as per law or business need.</p>

              <h2 className="font-semibold text-[20px]">3. Security Measures:</h2>
              <p>3.1 Security: The Company will implement reasonable security measures to protect the confidentiality, integrity, and availability of the Client's personal information. These measures include, but are not limited to, encryption, access controls, and regular security assessments.</p>
              <p className='mt-3'>3.2 Data Breach Notification: In the event of a data breach or unauthorized access resulting in the compromise of personal information, the Company will promptly notify the Client and take appropriate steps to mitigate any harm.</p>

              <h2 className="font-semibold text-[20px]">4. Client's Rights:</h2>
              <p className='mt-3'>4.1 Access and Correction: The Client has the right to access their personal information held by the Company and to request corrections or updates to inaccurate or incomplete information.</p>
              <p className='mt-3'>4.2 Deletion: The Client may request the deletion of their personal information unless the Company has a legal obligation to retain such data.</p>

              <h2 className="font-semibold text-[20px]">5. Marketing Communications:</h2>
              <p>The Company may use the Client's contact information to send occasional marketing communications about our services. The Client can opt out of receiving these communications at any time.</p>

              <h2 className="font-semibold text-[20px]">6. Changes to this Agreement:</h2>
              <p>The Company reserves the right to modify this Agreement from time to time. Any changes will be communicated to the Client, and continued use of our services will signify acceptance of the updated terms.</p>

              <h2 className="font-semibold text-[20px]">7. Contact Information:</h2>
              <p className='mt-3'>If the Client has any questions, concerns, or requests related to this Agreement or the treatment of their personal information, they can contact: RAHA Financials</p>

              <p className='mt-3'>By signing this Privacy Agreement, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined herein.</p>
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

          <div className="modal flex justify-center lg:justify-center gap-30 lg:gap-100">
     
      <button   className="previous-button border mt-5 text-[#1445C2] p-2 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-full sm:w-auto md:w-auto lg:w-auto" onClick={goToPreviousModal}>Previous</button>
      <button  className="previous-button border mt-5 text-[#1445C2] p-2 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-full sm:w-auto md:w-auto lg:w-auto" onClick={goToNextModal}>Next</button>
    </div>
          </div>
        
        </div>
        
       
      </div>
      </div>
      </div></div>
   
        </div>
      )}

      {/* Modal 3 */}
      {selectedModal === 2 && (
        <div className="modal">
          <div><div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
 <div className="bg-white p-5 rounded-lg w-auto relative max-h-[90vh] overflow-x-auto">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500"
          onClick={closeModal}
        >
          &times; {/* X button to close */}
        </button>

    <div className="flex flex-col md:flex-row">
      <div className="client mt-10 md:mt-15 w-full">
        <h1 className="text-[25px] lg:text-[35px] font-bold  mb-6">3. Engagement Letter</h1>
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
            <textarea
              type="text"
              className='Clientinput w-full h-[150px] text-center it'
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

          <div className="modal flex justify-center lg:justify-center gap-30 lg:gap-100">
      
      <button className="previous-button border mt-5 text-[#1445C2] p-2 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-[80px] sm:w-auto md:w-auto lg:w-auto" onClick={goToPreviousModal}>Previous</button>
      <button className=" border mt-5 text-[#1445C2] p-2 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-[80px] sm:w-auto md:w-auto lg:w-auto" >Submit</button>
    </div>
        </form>
      </div>
    </div>
  </div>
</div></div>

        </div>
      )}
    </div>
  );
};

export default Umar2;
