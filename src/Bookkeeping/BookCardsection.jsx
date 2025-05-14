import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom';

export default function BookCardsection() {
  return (
    <div><div className="mx-4 sm:mx-10 gap-10 lg:mx-20  flex flex-col lg:flex-row justify-between ">
     
      <div className="text-center lg:text-left w-full lg:w-1/3" data-aos="fade-right">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
          Why do you need
        </h1>
        <h2 className="text-3xl sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
        Bookkeeping?
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
        Ensures your financial records are up-to-date, error-free, and compliant with all regulations.
        </p>
    
         <Link to="/Consultationform">
    <button className="rounded-lg py-2 px-2 sm:py-4 mt-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-[48%] sm:w-auto"  data-aos="fade-up"
          data-aos-delay="700">
      Request Consultation
    </button>
    </Link>
      </div>
    
      
      <div className="flex flex-col w-full lg:w-1/1 gap-6  lg:my-10">
      
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Transaction Recording"
              parah="Raha Financials accounting experts help you record all business transactions, including income, expenses,intuit bookkeeping, invoices, sales, and asset purchases. With our top-notch record keeping, you can always access accurate data for informed decision-making."
            />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Reconciliation"
              parah="Our reconciliation process consists of comparing your firm’s bank statements with its internal records to ensure they align. This process helps in identifying and correcting errors, Netsuite bookkeeping, preventing fraud, and maintaining accurate financial information. We help by identifying differences and making necessary adjustments to match bank statements and report any said changes to you in writing."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="Categorization"
              parah="Our categorization involves classifying transactions into specific accounts which is essential for accurate financial reporting. We help our clients by creating accurate and reliable financial statements like income statements, balance sheets, and cash flow statements. With the help of our intuit certified bookkeeping service, quickbooks profit and loss statement, and categorization, you can track income, expenses, assets, liabilities, and equity accurately."
            />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Financial Reporting"
              parah="At Raha Financials, we create financial statements with h&r bookkeeping that summarize a business's financial position. Our mint bookkeeping reports offer valuable insights for decision-makers, investors, creditors, and tax authorities. Our Xero certified bookkeepers offer Income statements, balance sheets, and cash flow statements to track your standings financially."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
