import { useNavigate } from "react-router-dom";
import Supechat_screen from '../../assets/forbus/chat_app_screen.png'
import LandingPage_Header from "../LandingPage_Header";
import Developers_list from "./Developers_list";
import reatil_logo from '../../assets/computer_vision/retail.jpg';
import healthcare_logo from '../../assets/computer_vision/healthcare.jpg';
import Bank_firms from '../../assets/predicting_analysis_forecasting/bank_firms.jpeg';
import customer_Engaging from '../../assets/forbus/cus_engage.jpeg'
import internal_knowledge from '../../assets/forbus/internal_knowledge.jpeg'
import govt_agencies from '../../assets/forbus/govt_agencies.jpeg'
import health_providers from '../../assets/forbus/providers.jpeg'
import energy_comp from '../../assets/forbus/energy_comp.jpeg'
import R_D from '../../assets/forbus/R_D.jpeg'
import automotive from '../../assets/forbus/automotive.jpeg'
import semiconductor from '../../assets/forbus/semiconductor.jpeg'
import agriculture from '../../assets/forbus/agriculture.jpeg'
import high_compliance from '../../assets/forbus/high.jpeg'
import defence_contractors from '../../assets/forbus/defence.jpeg'
import critical_utilities from '../../assets/forbus/critical.jpeg'
import LandingPage_Footer from "../LandingPage_Footer";
import { useEffect } from "react";
import { changeforbusiness, changeForDevPage } from "../../ReduxStateManagement/user";
import { useDispatch } from "react-redux";

export default function ForBusiness() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(changeforbusiness(true));
    dispatch(changeForDevPage(false))
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <div className="fixed top-0 w-full h-12 bg-white shadow z-50">
          <LandingPage_Header />
        </div>
        
        <div className="flex flex-col md:flex-row mt-16 md:mt-36 p-4 min-h-[50vh] md:px-8 lg:px-16">
          <div className="w-full md:w-3/5 flex flex-col p-4">
            <span className="text-slate-500 text-2xl md:text-4xl max-w-full md:w-[650px] font-semibold">
              Bring your best ideas to life with Superchat for seamless collaboration and productivity
            </span>
            <span className="text-gray-500 py-2 text-lg md:text-xl max-w-full md:w-[550px] font-thin">
              Superchat is your AI-powered assistant, seamlessly integrated into messaging, documents, workflows, and more, with top-tier security and privacy
            </span>
            <div className="relative flex items-center gap-2 mt-6 md:mt-8">
              <p
                className="hover:cursor-pointer text-base md:text-[18px] font-[500] bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Try Superchat
              </p>
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.1684 6C6.89234 6 6.66853 6.22374 6.66853 6.49986C6.66853 6.77592 6.89234 6.99973 7.1684 6.99973H12.2798L2.14921 17.1301C1.95026 17.3291 1.95026 17.6518 2.14921 17.8508C2.34823 18.0497 2.67088 18.0497 2.8699 17.8508L13.0003 7.72053V12.8315C13.0003 13.1075 13.2241 13.3313 13.5001 13.3313C13.7762 13.3313 14 13.1075 14 12.8315V6.49986C14 6.22374 13.7762 6 13.5001 6H7.1684Z"
                  fill="#4A0044"
                />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              src={Supechat_screen}
              className="rounded-lg w-[290px] border-2 border-gray-300 h-auto shadow-xl"
              alt="Superchat Screenshot"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto py-6 md:py-12 px-4 text-center mt-4 md:mt-12">
          <span className="text-slate-700 text-xl md:text-3xl font-medium p-2 w-full md:w-[460px] leading-relaxed">
            Superchat is your always-on AI
          </span>
          <span className="text-slate-700 text-xl md:text-3xl font-medium p-2 w-full md:w-[750px] leading-relaxed">
            assistant for seamless collaboration and productivity
          </span>
        </div>
      </div>

      <Developers_list
        title={'On-Premise AI-Driven Customer Engagement'}
        description={' '}
        logo={customer_Engaging}
        items={[
          {
            title: 'Banking & Financial Services',
            description: 'Deploy advanced chatbots for loan inquiries, account services, and investment advice, all while keeping sensitive financial data in-house',
            logo: Bank_firms
          },
          {
            title: 'Retail',
            description: 'Implement virtual shopping assistants on local store servers to personalize product recommendations without exposing customer purchase histories to external platforms',
            logo: reatil_logo,
          },
          {
            title: 'Health Care',
            description: 'Set up virtual patient intake systems that handle personal health information securely on hospital-owned hardware, accelerating triage without risking data breaches',
            logo: healthcare_logo,
          },
        ]} />

      <Developers_list
        title={'Internal Knowledge Bases & Secure Document Processing'}
        description={' '}
        logo={internal_knowledge}
        items={[
          {
            title: 'Government Agencies',
            description: 'Leverage local language models to summarize classified documents and process internal memos, maintaining confidentiality and strict compliance with national security protocols.',
            logo: govt_agencies
          },
          {
            title: 'Healthcare Providers',
            description: 'Run patient history analysis and medical literature summarization in-house to quickly diagnose patient conditions while maintaining HIPAA-compliant data handling',
            logo: health_providers,
          },
          {
            title: 'Energy Companies:',
            description: 'Analyze proprietary geospatial data, exploration reports, and regulatory filings internally to guide resource allocation and project planning securely.',
            logo: energy_comp,
          },
        ]} />

      <Developers_list
        title={'Proprietary R&D and Product Innovation Labs'}
        description={' '}
        logo={R_D}
        items={[
          {
            title: 'Automotive R&D',
            description: 'Analyze proprietary telemetry, road test data, and advanced driver-assistance logs on-prem to improve engine performance, battery efficiency, and autonomous driving features',
            logo: automotive,
          },
          {
            title: 'Semiconductor Design Firms',
            description: 'Speed up chip design simulations and material performance analyses using on-prem AI models, ensuring trade secrets remain safe.',
            logo: semiconductor,
          },
          {
            title: 'Agricultural Technology (AgTech)',
            description: 'Examine soil composition data, climate models, and crop yield predictions internally to improve proprietary seed engineering and farming techniques',
            logo: agriculture,
          },
        ]} />

      <Developers_list
        title={'High-Compliance Sectors (Finance, Defense, Healthcare)'}
        description={' '}
        logo={high_compliance}
        items={[
          {
            title: 'Financial Institutions',
            description: 'Use local anomaly detection models on transaction data to flag potential fraud instantly, complying with strict regulatory requirements and safeguarding customer confidentiality',
            logo: Bank_firms
          },
          {
            title: 'Defense Contractors',
            description: 'Employ secure on-prem AI to process satellite imagery, radar signals, or classified internal communications, supporting mission-critical decision-making within a secured environment.',
            logo: defence_contractors,
          },
          {
            title: 'Utilities & Critical Infrastructure',
            description: 'Deploy secure AI models onsite for grid monitoring and load balancing, ensuring critical infrastructure data never leaves controlled facilities',
            logo: critical_utilities,
          },
        ]} />

      <div className='w-full h-12 bg-white shadow z-10'>
        <LandingPage_Footer />
      </div>
    </div>
  )
}