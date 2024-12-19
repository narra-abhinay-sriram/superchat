import { useNavigate } from "react-router-dom";
import Supechat_screen from '../../assets/Chat_screen.png'
import LandingPage_Header from "../LandingPage_Header";
import Developers_list from "./Developers_list";
import natural_language_logo from '../../assets/fordevelopers/natural_language.jpg'
import legal_logo from '../../assets/fordevelopers/legal.jpg';
import media_logo from '../../assets/fordevelopers/media.jpg';
import education_logo from '../../assets/fordevelopers/education.jpg';
import telecommunication_logo from '../../assets/fordevelopers/telecommunication.jpg';
import hospital_logo from '../../assets/fordevelopers/hospital.jpg';
import manufacturing_logo from '../../assets/fordevelopers/manufacturing.jpg';
import computer_vision_logo from '../../assets/computer_vision/computer_vision.jpg'
import reatil_logo from '../../assets/computer_vision/retail.jpg';
import agriculture_logo from '../../assets/computer_vision/agriculture.jpg';
import security_logo from '../../assets/computer_vision/security.jpg';
import logistics_logo from '../../assets/computer_vision/logistics.jpg';
import construction_logo from '../../assets/computer_vision/construction.jpg';
import healthcare_logo from '../../assets/computer_vision/healthcare.jpg';
import speech_audio_logo from '../../assets/speech_audio/speech_audio.jpg';
import contact_centre_logo from '../../assets/speech_audio/call_centre.jpg';
import ai_manufacture_logo from '../../assets/speech_audio/ai_manufac.jpg';
import laws_firms_logo from '../../assets/speech_audio/laws_firms.jpg';
import manufacturing_training_logo from '../../assets/speech_audio/man_traning.jpg';
import telemedicine_logo from '../../assets/speech_audio/telemedicine.jpg';
import reccomendation_sys_logo from '../../assets/recommendation_sys/recommendation.jpg';
import consulting_logo from '../../assets/recommendation_sys/consulting_firms.jpg';
import corporate_logo from '../../assets/recommendation_sys/corporate_tran.jpg';
import propriearity_logo from '../../assets/recommendation_sys/proprity_data.jpg';
import subscription_logo from '../../assets/recommendation_sys/subscription.jpg';
import universities_logo from '../../assets/recommendation_sys/universities.jpg';
import Bnak_logo from '../../assets/recommendation_sys/bank.jpg';


export default function For_developers() {
    const navigate=useNavigate()
  return (
<div className="bg-gray-200">
    <div className="flex flex-col ">
       <div className='fixed top-0 w-full h-12 bg-white shadow z-10'>
          <LandingPage_Header />
        </div>

 <div className="flex flex-row mt-36 p-2 min-h-screen">
         
  <div className="w-2/5 flex flex-col p-10 ">
        <span className="text-slate-500 text-6xl w-[550px] font-semibold left-10">Empowering every developer with AI</span>
        <span className="text-gray-500 p-4 text-xl w-[550px] font-thin left-10">Leverage AI models to craft innovative applications and streamline development workflows with versatile tools.</span>

     <div className="absolute  flex items-center gap-2 top-[450px] ml-3 ">
      <p 
          className=" hover:cursor-pointer  text-[18px] font-[500] bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent"
          onClick={()=>{
          navigate("/signup")
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

     </div >

     <div className="w-3/5 ">
        <img src={Supechat_screen} className=" rounded-lg   h-[420px] ml- shadow-xl"  />
     </div>

 </div>
 </div>
 <div className=" flex flex-col justify-center items-center mx-auto">
    <span className="text-slate-700 text-6xl font-medium p-2" >
        Start Building
    </span>
    <span className=" p-4 text-gray-500 text-md ">
    Start developing with powerful AI models and tools now.
    </span>
 </div >
    <Developers_list
     title={'Natural Language Processing APIs'}
     description={'Text Summarization & Abstractive Question Answering and Sentiment Analysis & Topic Classification'}
     logo={natural_language_logo}
     items={[
        {
            title:'Legal',
            description:'Summarize long legal documents and court transcripts for faster case preparation',
            logo:legal_logo
         },
         {
            title:'Media & Journalism',
            description:'Provide real-time summaries of breaking news articles for internal editorial teams',
            logo:media_logo,
        },
        {
            title:'Education',
            description:'Create study guides from large textbook datasets managed on local school servers',
            logo:education_logo,
        },
        {
            title:'Telecommunications',
            description:'Classify customer feedback on internal service channels, directing issues to the right teams',
            logo:telecommunication_logo,
        },
        {
            title:'Hospitality',
            description:'Evaluate guest feedback stored on-prem to improve services without sending data offsite',
            logo:hospital_logo,
        },
        {
            title:'Manufacturing',
            description:'Analyze internal safety reports and employee suggestions to improve workplace conditions',
            logo:manufacturing_logo,
        },
    ]}/>

    <Developers_list
    title={'Computer Vision APIs'}
    description={'Object Detection & Image Classification and Video Analytics'}
    logo={computer_vision_logo}
    items={[
        {
            title:'Retail',
            description:'Identify product defects on conveyor belts or verify stock levels on store shelves using local camera feeds',
            logo:reatil_logo
        },
        {
            title:'Agriculture',
            description:'Detect crop diseases in images of fields captured by on-site drones, ensuring data remains farm-owned',
            logo:agriculture_logo,
        },
        {
            title:'Security',
            description:'Deploy facial recognition at secure access points within corporate campuses without relying on external cloud databases',
            logo:security_logo

        },
        {
            title:'Logistics & Warehousing',
            description:'Track pallet movements and detect misplaced goods on premises to maintain inventory accuracy',
            logo:logistics_logo
        },
        {
            title:'Construction',
            description:'Monitor safety compliance on construction sites, ensuring no video data leaves the organization’s private network',
            logo:construction_logo,

        },
        {
            title:'Healthcare',
            description:' Analyze patient movement within a hospital ward to prevent falls or improve staff allocation securely',
            logo:healthcare_logo,
        }
    ]} />

    <Developers_list
    title={'Speech and Audio Processing APIs'}
    description={'Speech-to-Text & Text-to-Speech Services and Language Translation & Transcription Services'}
    logo={speech_audio_logo}
    items={[
        {
            title:'Contact Centers (Telecom)',
            description:'Transcribe and analyze support calls locally, improving customer service workflows while maintaining confidentiality',
            logo:contact_centre_logo
        },
        {
            title:'Healthcare',
            description:'Convert doctor’s voice notes into text-based patient records, ensuring patient privacy by keeping data on hospital servers',
            logo:healthcare_logo
        },
        {
            title:'Manufacturing Training',
            description:' Provide voice-guided instructions for machine operators, converting safety manuals into audio prompts stored on-prem',
            logo:manufacturing_training_logo
        },
        {
            title:'International Law Firms',
            description:' Translate internal case files between languages for multinational clients without external translation services',
            logo:laws_firms_logo,
        },
        {
            title:'Global Manufacturing Plants',
            description:'Transcribe and translate safety briefings and technical instructions for multilingual workforces on-site',
            logo:ai_manufacture_logo,
        },
        {
            title:'Telemedicine',
            description:' Offer immediate translation for patient-doctor consultations in multinational healthcare networks, all hosted internally',
            logo:telemedicine_logo
        }
    ]}
    />
    <Developers_list
    title={'Recommendation Systems and Personalization APIs'}
    description={'Internal Resource Recommendations and Privacy-Preserving E-Commerce or Service Recommendations'}
    logo={reccomendation_sys_logo}
    items={[
        {
            title:'Corporate Training',
            description:'Suggest personalized training modules to employees based on their role and previous course completions, all managed internally',
            logo:corporate_logo
        },
        {
            title:'Consulting Firms',
            description:'Recommend relevant internal research papers, project lessons, and methodology guides for consultants',
            logo:consulting_logo
        },
        {
            title:'Universities',
            description:'Direct students to appropriate scholarly articles, courses, or departmental events using secure, on-prem recommendation engines',
            logo:universities_logo
        },
        {
            title:'Retailers with Proprietary Data',
            description:'Suggest products to customers shopping in a private showroom environment, ensuring purchase histories remain confidential',
            logo:propriearity_logo
        },
        {
            title:'Banking & Wealth Management',
            description:'Recommend investment products or saving plans internally, safeguarding account details from external servers',
            logo:Bnak_logo
        },
        {
            title:'Subscription-Based Businesses',
            description:'Tailor premium content or service bundles to clients’ preferences without sending user profiles to third parties',
            logo:subscription_logo
        }
    ]}

     />

</div>
  )
}
