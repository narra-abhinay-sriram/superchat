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
    ]}/>

    <Developers_list
    title={'Predictive Analytics and Forecasting APIs'}
    description={'Demand Forecasting & Supply Chain Optimization and Real-Time Risk Scoring, '}
    logo={prediction_logo}
    items={[
        {
            title:'Food & Beverage',
            description:'Forecast perishable inventory requirements to minimize waste and maintain fresh stock locally',
            logo:food_logo
        },
        {
            title:'Banking & Investment Firms',
            description:'Assess credit risk or fraud probabilities on internal transaction streams to expedite lending decisions while maintaining regulatory compliance',
            logo:Bank_firms
        },
        {
            title:'Insurance Companies',
            description:'Evaluate claims risks, policy lapses, and premium optimizations on company-owned hardware for tighter data security',
            logo:insurance_logo,
        }
    ]}
     />
     <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <DataCard key={index} title={section.title} items={section.items} />
        ))}
      </div>
    </div>
    <div className='bottom-0 w-full h-12 bg-white shadow z-10'>
          <LandingPage_Footer />
        </div>