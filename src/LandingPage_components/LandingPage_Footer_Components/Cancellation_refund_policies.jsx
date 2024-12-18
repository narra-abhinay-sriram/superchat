import React from 'react'
import LandingPage_Header from '../LandingPage_Header';
import LandingPage_Footer from '../LandingPage_Footer';
import { Link } from 'react-router-dom';
export default function Cancellation_refund_policies() {
  const subHeadingStyle = "text-slate-900";

  return (
    <>
    <header className='fixed top-0 w-full h-16 bg-white shadow z-10'>
<LandingPage_Header />
      </header>
      
      <div className=' mt-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-8'>
        <nav className='bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm'>
          <h1 className={`text-2xl sm:text-3xl font-bold mb-4 text-slate-900`}>Cancellation and Refund Policy</h1>
          <p className='text-base sm:text-lg'>
            <b>Effective Date:</b> 9th Nov 2024 
            <br />
            Thank you for using the services provided by SuperChat LLC. This Cancellation and Refund Policy outlines the terms under which you may cancel your use of our Services and our policy regarding refunds.          </p>
          <h4 className='text-lg sm:text-xl font-semibold mt-4 mb-2 text-slate-800'>Table of Contents</h4>
          <ul className='list-disc space-y-2 pl-4 sm:pl-8'>
            <li><a href='#cancellation' className='text-slate-700 hover:text-black hover:underline transition-colors'>Cancellation of Services</a></li>
            <li><a href='#no-refunds' className='text-slate-700 hover:text-black hover:underline transition-colors'>No Refunds</a></li>
            <li><a href='#changes-to-policy' className='text-slate-700 hover:text-black hover:underline transition-colors'>Changes to the Policy</a></li>
            <li><a href='#contact-info' className='text-slate-700 hover:text-black hover:underline transition-colors'>Contact Information</a></li>
            
          </ul>
        </nav>

        <div className="mt-8 space-y-8">
          <section id='cancellation' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>Cancellation of Services</h2>
            <p className='ml-2 sm:ml-4'>
            You may cancel your subscription to our Services at any time. To cancel, you must follow the cancellation procedures outlined in your account settings or contact our customer support team. Upon cancellation, you will retain access to the Services until the end of your current billing cycle.            </p>
          </section>

          

          <section id='no-refunds' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>No Refunds</h2>
            <div className='ml-2 sm:ml-4'>
              <p className='mb-4'>
              All payments made for our Services are final and non-refundable. This includes, but is not limited to, subscription fees, service credits, and any other fees associated with the use of our Services. By using our Services, you acknowledge and agree that:             
             </p>
              
              <ul className='list-disc ml-8 sm:ml-12 text-slate-800'>
                <li>You will not receive a refund for any unused portion of your subscription or for any service credits purchased.</li>
                <li>No exceptions will be made to this policy, regardless of the circumstances surrounding your cancellation or the reason for your request.</li>
                
              </ul>
            </div>
          </section>

          <section id='changes-to-policy' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>Changes to the Policy</h2>
            <div className='ml-2 sm:ml-4 space-y-4'>
              
              <p>
              SuperChat LLC reserves the right to modify this Cancellation and Refund Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website. Your continued use of the Services after any changes constitutes your acceptance of the new policy.              
              </p>
            </div>
          </section>

          <section id='contact-info' className='scroll-mt-16'>
            <div className='ml-2 sm:ml-4 space-y-4'>
              
              <p>
                <b>Contact Information: </b> 
                <Link to={'/contactus'}>
                  <span className="inline-block transition-all duration-300 
                    text-gray-700 hover:text-[#6F036C] 
                    hover:scale-105 cursor-pointer 
                    hover:underline decoration-[#6F036C]/50">click here {"->"}
                    Contact Us
                  </span>
                </Link>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center py-12 mt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 ">
            Thank you for choosing SuperChat LLC!
          </h2>
        </div>
      </div>
      
      <LandingPage_Footer />
    </>
  );
}
