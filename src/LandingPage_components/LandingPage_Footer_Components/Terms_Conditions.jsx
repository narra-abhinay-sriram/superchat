import React from 'react';
import LandingPage_Header from '../LandingPage_Header';
import LandingPage_Footer from '../LandingPage_Footer';
import { Link } from 'react-router-dom';

const Terms_Conditions = () => {
  const subHeadingStyle = "text-slate-900";
  
  return (
    <>
<header className='fixed top-0 w-full h-16 bg-white shadow z-10'>
<LandingPage_Header />
      </header>
      
      <div className='mt-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-8'>
      <nav className='bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm'>
          <h1 className={`text-2xl sm:text-3xl font-bold mb-4 text-slate-900`}>Terms and Conditions of Use</h1>
          <p className='text-base sm:text-lg'>
            <b>Effective Date:</b> 9th Nov 2024 
            <br />
            Welcome to the services provided by SuperChat LLC, a Wyoming-based company. These Terms and Conditions ("Terms") govern your access to and use of our services, including any associated software applications and websites (collectively referred to as "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Services.
          </p>
          <h4 className='text-lg sm:text-xl font-semibold mt-4 mb-2 text-slate-800'>Table of Contents</h4>
          <ul className='list-disc space-y-2 pl-4 sm:pl-8'>
            <li><a href='#eligibility' className='text-slate-700 hover:text-black hover:underline transition-colors'>Eligibility</a></li>
            <li><a href='#registration-security' className='text-slate-700 hover:text-black hover:underline transition-colors'>Registration and Account Security</a></li>
            <li><a href='#use-services' className='text-slate-700 hover:text-black hover:underline transition-colors'>Use of Services</a></li>
            <li><a href='#content-ownership' className='text-slate-700 hover:text-black hover:underline transition-colors'>Content Ownership and Responsibility</a></li>
            <li><a href='#accuracy-reliability' className='text-slate-700 hover:text-black hover:underline transition-colors'>Accuracy and Reliability</a></li>
            <li><a href='#payment-billing' className='text-slate-700 hover:text-black hover:underline transition-colors'>Payment and Billing</a></li>
            <li><a href='#termination-suspension' className='text-slate-700 hover:text-black hover:underline transition-colors'>Termination and Suspension</a></li>
            <li><a href='#dispute-resolution' className='text-slate-700 hover:text-black hover:underline transition-colors'>Dispute Resolution</a></li>
            <li><a href='#limitation-liability' className='text-slate-700 hover:text-black hover:underline transition-colors'>Limitation of Liability</a></li>
            <li><a href='#idemnification' className='text-slate-700 hover:text-black hover:underline transition-colors'>Indemnification</a></li>
            <li><a href='#general-pro-visions' className='text-slate-700 hover:text-black hover:underline transition-colors'>General Pro visions</a></li>
          </ul>
        </nav>

        <div className="mt-8 space-y-8">
          <section id='eligibility' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>1.Eligibility</h2>
            <p className='ml-2 sm:ml-4'>
              <b>Minimum Age: </b> 
              You must be at least 13 years old or the minimum age required in your jurisdiction to consent to use the Services. If you are under 18, you must have the permission of a parent or legal guardian to use the Services.
            </p>
          </section>

          <section id='registration-security' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>2.Registration and Account Security</h2>
            <p className='ml-2 sm:ml-4'> 
              To access certain features of our Services, you may need to create an account. You agree to provide accurate and complete information during the registration process and to keep your account information updated. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you create an account on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section id='use-services' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>3.Use of Services</h2>
            <div className='ml-2 sm:ml-4'>
              <p className='mb-4'>
                <b>Permitted Use: </b> 
                You may access and use our Services in compliance with these Terms and all applicable laws. You must adhere to our usage policies and any guidelines we provide.           
              </p>
              <p className='mb-2'>
                <b>Prohibited Use: </b> 
                You agree not to engage in any of the following prohibited activities:        
              </p>
              <ul className='list-disc ml-8 sm:ml-12 text-slate-800'>
                <li>Using the Services for any illegal, harmful, or abusive purposes.</li>
                <li>Infringing upon or violating the rights of others.</li>
                <li>Modifying, copying, leasing, selling, or distributing any part of our Services.</li>
                <li>Attempting to reverse engineer, decompile, or extract source code from our Services.</li>
                <li>Interfering with or disrupting the Services or bypassing any security measures.</li>
                <li>Using the output generated by our Services to create competing products or services.</li>
              </ul>
            </div>
          </section>

          <section id='content-ownership' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>4.Content Ownership and Responsibility</h2>
            <div className='ml-2 sm:ml-4 space-y-4'>
              <p>
                <b>Your Content: </b> 
                You may provide input to our Services ("Input") and receive output based on that input ("Output"). You retain ownership of your Input and Output, and you represent that you have the necessary rights to provide such content.          
              </p>
              <p>
                <b>Our use of Content: </b> 
                We may use your Content to improve our Services, comply with legal obligations, and ensure the safety and security of our platform. If you wish to opt out of having your Content used for model training, you may do so by following the provided instructions.           
              </p>
            </div>
          </section>

          <section id='accuracy-reliability' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>5.Accuracy and Reliability</h2>
            <p className='ml-2 sm:ml-4'> 
              While we strive to provide accurate and reliable output, you acknowledge that the nature of artificial intelligence means that output may not always be accurate or reliable. You agree to evaluate the output for its appropriateness and accuracy before relying on it for any significant decisions.
            </p>
          </section>

          <section id='payment-billing' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>6.Payment and Billing</h2>
            <p className='ml-2 sm:ml-4'> 
              If you purchase any Services, you agree to provide accurate billing information and authorize us to charge your payment method for the agreed-upon fees. You are responsible for any applicable taxes. If payment cannot be processed, we reserve the right to suspend or terminate your access to the Services.           
            </p>
          </section>

          <section id='termination-suspension' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>7.Termination and Suspension</h2>
            <p className='ml-2 sm:ml-4'> 
              You may terminate your use of the Services at any time. We reserve the right to suspend or terminate your access to the Services if we determine that you have violated these Terms or if required to comply with applicable laws.           
            </p>
          </section>

          <section id='dispute-resolution' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>8.Dispute Resolution</h2>
            <p className='ml-2 sm:ml-4'> 
              Any disputes arising from these Terms or your use of the Services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive any right to a jury trial or class action.
            </p>
          </section>

          <section id='limitation-liability' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>9.Limitation of Liability</h2>
            <p className='ml-2 sm:ml-4'> 
              TO THE FULLEST EXTENT PERMITTED BY LAW, SUPERCHAT LLC AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, OR DATA, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL OUR AGGREGATE LIABILITY UNDER THESE TERMS EXCEED THE GREATER OF THE AMOUNT YOU PAID FOR THE SERVICE THAT GAVE RISE TO THE CLAIM DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR ONE HUNDRED DOLLARS ($100). THIS LIMITATION OF LIABILITY SHALL APPLY REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, OR OTHERWISE, AND SHALL SURVIVE TERMINATION OF THESE TERMS.
            </p>
          </section>

          <section id='idemnification' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>10.Indemnification</h2>
            <p className='ml-2 sm:ml-4'> 
              You agree to indemnify, defend, and hold harmless SuperChat LLC, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your use of the Services, your violation of these Terms, or your infringement of any third-party rights.
            </p>
          </section>

          <section id='general-pro-visions' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${subHeadingStyle}`}>11.General Pro visions</h2>
            <div className='ml-2 sm:ml-4 space-y-4'>
              <p>
                <b>Governing Law: </b> 
                These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Wyoming.             
              </p>
              <p>
                <b>Changes to Terms: </b> 
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes, and your continued use of the Services following such changes constitutes your acceptance of the new Terms. If you do not agree to the changes, you must cease using the Services.
              </p>
              <p>
                <b>Severability: </b> 
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.          
              </p>
              <p>
                <b>Entire Agreement: </b> 
                These Terms constitute the entire agreement between you and SuperChat LLC regarding your use of the Services and supersede any prior agreements or understandings, whether written or oral.
              </p>
              <section id='contact' className='scroll-mt-16'>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${subHeadingStyle}`}>12.How to Contact Us</h2>
            <div className='ml-2 sm:ml-4'>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please{' '}
                <Link to={'/contactus'}>
                  <span className="inline-block transition-all duration-300 
                    text-indigo-700 hover:text-[#6F036C] 
                    hover:scale-105 cursor-pointer 
                    hover:underline decoration-[#6F036C]/50">
                    contact us
                  </span>
                </Link>.
              </p>
            </div>
          </section>
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
};

export default Terms_Conditions;