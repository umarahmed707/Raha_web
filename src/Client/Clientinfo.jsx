import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Clientinfo() {
    const [fullName, setFullName] = useState('');
    const [businessName, setBusinessName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save to localStorage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('businessName', businessName);

        // Navigate to next page
        navigate('/Clientinfo2');
    };

    return (
        <div className="px-4 py-8">
            <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl lg:text-[95px] tracking-tighter font-semibold">
                    Client<span className="bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent tracking-[-0.06em]"> Information</span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    <div className="client lg:ml-[70px]">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-6">1. Client Information</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    className="Clientinput flex-1"
                                    placeholder="Full Name*"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    className="Clientinput flex-1"
                                    placeholder="Email*"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <input type="text" className="Clientinput flex-1" placeholder="Date of Birth" />
                                <input type="text" className="Clientinput flex-1" placeholder="Phone Number" />
                            </div>
                            <div className="mt-4">
                                <input
                                    type="text"
                                    className="Clientinput w-full"
                                    placeholder="Business Name (if applicable)"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
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

                            <button type="submit" className="text-white font-bold py-3 px-6 mt-6 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-white hover:to-[#DADADA] hover:text-gray-600 border">
                                Next
                            </button>
                        </form>
                    </div>

                    <div className="ml-0 sm:ml-10 mt-10">
                        <h2 className="point font-semibold">2. Privacy Agreement</h2>
                        <h2 className="point font-semibold mt-4">3. Engagement Letter</h2>
                    </div>
                </div>

                {/* Right Sidebar Buttons */}
                <div className="button-container">
                    <button className="section-btn bg-gradient-to-b from-[#1445C2] to-[#587EDB]">Client Information</button>
                    <button className="section-btn">Privacy Agreement</button>
                    <button className="section-btn">Engagement Letter</button>
                </div>
            </div>
        </div>
    );
}



// import React from 'react';

// export default function Clientinfo() {
//     return (
//         <div className="px-4 py-8">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h1 className="text-4xl sm:text-5xl lg:text-[95px] tracking-tighter font-semibold">
//                     Client<span className="bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent tracking-[-0.06em]"> Information</span>
//                 </h1>
//             </div>

//             {/* Main Content */}
//             <div className="flex flex-col lg:flex-row ">
//                 {/* Left Column */} 
//                 <div className="flex-1">
//                     <div className="client lg:ml-[70px]  ">
//                         <h1 className="text-2xl sm:text-3xl font-bold mb-6">1. Client Information</h1>
//                         <form>
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <input type="text" className="Clientinput flex-1" placeholder="Full Name*" />
//                                 <input type="email" className="Clientinput flex-1" placeholder="Email*" />
//                             </div>
//                             <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                                 <input type="text" className="Clientinput flex-1" placeholder="Date of Birth" />
//                                 <input type="text" className="Clientinput flex-1" placeholder="Phone Number" />
//                             </div>
//                             <div className="mt-4">
//                                 <input type="text" className="Clientinput w-full" placeholder="Business Name (if applicable)" />
//                             </div>
//                             <div className="mt-4">
//                                 <input type="text" className="Clientinput w-full" placeholder="Home Address (if different)" />
//                             </div>
//                             <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                                 <input type="text" className="Clientinput flex-1" placeholder="City" />
//                                 <input type="text" className="Clientinput flex-1" placeholder="State/Province" />
//                             </div>
//                             <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                                 <input type="text" className="Clientinput flex-1" placeholder="Postal Code" />
//                                 <input type="text" className="Clientinput flex-1" placeholder="Country" />
//                             </div>
//                             <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                                 <input type="text" className="Clientinput flex-1" placeholder="Citizenship Status" />
//                                 <input type="text" className="Clientinput flex-1" placeholder="Country of Citizenship" />
//                             </div>

//                             {/* Radio Button Group */}
//                             <div className="mt-6">
//                                 <h3 className="font-semibold mb-2">Are you a U.S. tax resident?</h3>
//                                 <div className="flex flex-col sm:flex-row gap-4">
//                                     <label className="flex items-center gap-2">
//                                         <input type="radio" name="choice" value="yes" />
//                                         Yes
//                                     </label>
//                                     <label className="flex items-center gap-2">
//                                         <input type="radio" name="choice" value="no" />
//                                         No
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Checkbox Group */}
//                             <div className="mt-6 font-semibold">
//                                 <h2 className="font-bold mb-2">Opted Services</h2>
//                                 <div className="grid sm:grid-cols-1 gap-2">
//                                     {[
//                                         "Bookkeeping", "Financial Statements", "Tax Preparation and Filing",
//                                         "Auditing", "Payroll Processing", "Business Registration",
//                                         "ITIN Registration (if applicable)", "Net Worth Evaluation"
//                                     ].map(service => (
//                                         <label key={service} className="flex items-center gap-2">
//                                             <input type="checkbox" />
//                                             {service}
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Textarea */}
//                             <div className="mt-4">
//                                 <textarea className="Clientinput w-full h-[100px]" placeholder="If no, please specify your tax residency:" />
//                             </div>

//                             {/* Submit Button */}
//                             <button type="submit" className="text-white font-bold py-3 px-6 mt-6 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-white hover:to-[#DADADA] hover:text-gray-600 border">
//                                 Next
//                             </button>
//                         </form>
//                     </div>

//                     {/* Step Indicators */}
//                     <div className="ml-0 sm:ml-10 mt-10">
//                         <h2 className="point font-semibold">2. Privacy Agreement</h2>
//                         <h2 className="point font-semibold mt-4">3. Engagement Letter</h2>
//                     </div>
//                 </div>

//                 {/* Right Sidebar Buttons */}
//                 <div class="button-container">
//   <button class="section-btn">Client Information</button>
//   <button class="section-btn">Privacy Agreement</button>
//   <button class="section-btn">Engagement Letter</button>
// </div>

//             </div>
//         </div>
//     );
// }
