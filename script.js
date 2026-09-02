/**
 * StudySail — Core JavaScript Application
 * Your Global Education Partner | Educational Consultancy & Scholarships Platform
 */

// Global App State & Data
const StudySail = {
  activeScholarshipFilter: "all",
  searchQuery: "",

  // All 8 Dedicated Scholarships with in-depth criteria, benefits, requirements, and writing scopes
  scholarships: [
    {
      id: "si-scholarship",
      code: "SS-09",
      title: "SI Scholarship Complete Support",
      country: "Sweden",
      region: "Europe",
      level: "Master’s Degree",
      fundingType: "Fully Funded",
      deadline: "February (Annual Cycle)",
      provider: "Swedish Institute / Government of Sweden",
      badge: "Full Tuition + 12,000 SEK/mo",
      summary:
        "Complete guidance for the Swedish Institute Scholarship for Global Professionals — eligibility review, application strategy, motivation letter, and Europass CV guidance from start to finish.",
      scope: [
        "Profile and work experience eligibility audit (min. 3,000 certified hours)",
        "Eligible Swedish Master’s degree program selection (Universityadmissions.se)",
        "Strategy for SI portal submission and university application alignment",
        "Official required document preparation and proof of work/leadership forms",
        "Step-by-step assistance until final nomination & award announcement",
      ],
      writingIncluded: [
        "SI Motivation Letter / Statement tailoring",
        "Europass Format CV guidance and line-by-line review",
        "Proof of Work & Leadership letter optimization",
        "Responses to SI-specific leadership and sustainability prompts",
      ],
      benefits: [
        "Full tuition fee coverage directly paid to Swedish University",
        "Monthly living allowance of SEK 12,000 for the entire study duration",
        "Travel grant of SEK 15,000 for flight expenses",
        "Comprehensive health and accident insurance during study",
        "Exclusive membership to the SI Network for Future Global Leaders",
      ],
      eligibility: [
        "Citizen of an eligible SI country (e.g. Bangladesh)",
        "Minimum 3,000 hours of demonstrated work experience / leadership roles",
        "Admitted to an eligible English-taught Master’s program in Sweden",
        "Clear demonstration of leadership qualities and contribution to UN SDGs",
      ],
    },
    {
      id: "stipendium-hungaricum",
      code: "SS-10",
      title: "Stipendium Hungaricum Complete Support",
      country: "Hungary",
      region: "Europe",
      level: "BSc / MSc / PhD",
      fundingType: "Fully Funded",
      deadline: "January 15 (Annual Cycle)",
      provider: "Tempus Public Foundation / Hungarian Government",
      badge: "Free Tuition + Dormitory + Monthly Stipend",
      summary:
        "Full guidance for the Hungarian Government scholarship via DreamApply and the Bangladesh Ministry of Education nomination pathway, including study plan and entrance exam coaching.",
      scope: [
        "Profile assessment against Hungarian higher education admission guidelines",
        "Priority 1 & Priority 2 university and degree program selection",
        "Dual-portal application assistance: Sending Partner + DreamApply Hungary",
        "Guidance on medical certificates, apostille/attestation and entrance exams",
        "Visa protocol & Hungarian consulate interview preparation",
      ],
      writingIncluded: [
        "Motivation Letter / Statement of Purpose targeted to university professors",
        "Academic Study Plan for Master’s & Research Outline for PhD",
        "Europass CV review & formatting",
        "Recommender briefing sheets for academic referees",
      ],
      benefits: [
        "100% Tuition-free education for Bachelor’s, Master’s or PhD degrees",
        "Monthly stipend: HUF 43,700/mo (BSc/MSc) or HUF 140,000/mo (PhD)",
        "Free dormitory accommodation or HUF 40,000/mo housing allowance",
        "Comprehensive national health insurance under Hungarian law",
        "Free transit within Schengen area student visa",
      ],
      eligibility: [
        "Nominated by Bangladesh Ministry of Education (Sending Partner)",
        "Academic excellence matching target Hungarian university thresholds",
        "English proficiency (IELTS/TOEFL or English Medium Instruction certificate)",
        "Clean medical health clearance",
      ],
    },
    {
      id: "chinese-csc-scholarship",
      code: "SS-11",
      title: "Chinese CSC Scholarship Complete Support",
      country: "China",
      region: "Asia",
      level: "BSc / MSc / PhD",
      fundingType: "Fully Funded",
      deadline: "January – April (Varies by Univ)",
      provider: "China Scholarship Council (CSC) / Chinese Government",
      badge: "Full Tuition + Accom + 3,000–3,500 RMB/mo",
      summary:
        "Comprehensive CSC Type A & Type B support: professor outreach for pre-admission acceptance letters, university system filing, police clearance verification, and physical exam formalities.",
      scope: [
        "CSC Category (Type A Bilateral vs Type B University Program) strategy",
        "Outreach to Chinese professors and lab directors for Pre-Acceptance Letters",
        "Campus China CSC portal & Chinese university application submissions",
        "Police Clearance Certificate (PCC) and Foreigner Physical Examination guidance",
        "Step-by-step follow-up through Chinese Embassy and university admissions",
      ],
      writingIncluded: [
        "Detailed Study Plan / Research Proposal (800–1,500 words)",
        "Statement of Purpose & Personal Statement",
        "Academic CV formatted for Chinese scholarship boards",
        "Professor cold email templates tailored to research specializations",
      ],
      benefits: [
        "Full tuition fee exemption at top Chinese universities",
        "Free on-campus university accommodation or monthly housing subsidy",
        "Monthly living stipend: CNY 2,500 (BSc), CNY 3,000 (MSc), CNY 3,500 (PhD)",
        "Comprehensive Medical Insurance for Foreign Students in China",
        "Access to state-of-the-art Chinese research labs and national institutes",
      ],
      eligibility: [
        "Non-Chinese citizen in good physical and mental health",
        "Age limits: Under 25 for Bachelor’s, Under 35 for Master’s, Under 40 for PhD",
        "Strong academic record (minimum 75%+ or 3.2+ CGPA recommended)",
        "English or Chinese proficiency depending on the instruction medium",
      ],
    },
    {
      id: "chevening-scholarship",
      code: "SS-12",
      title: "Chevening Scholarship Complete Support",
      country: "United Kingdom",
      region: "UK",
      level: "1-Year Master’s Degree",
      fundingType: "Fully Funded",
      deadline: "Early November (Annual Cycle)",
      provider: "Foreign, Commonwealth & Development Office (FCDO)",
      badge: "Full UK Tuition + Flights + Monthly Stipend",
      summary:
        "High-stakes coaching for the UK’s most prestigious scholarship — intensive iterative crafting of all 4 mandatory Chevening essays, university choices, referee briefings, and panel mock interviews.",
      scope: [
        "Comprehensive eligibility check (work hour verification & degree check)",
        "Selection of 3 eligible UK Master’s courses without overlapping weaknesses",
        "In-depth review of all 4 Chevening 500-word core leadership essays",
        "Guidance on two professional/academic reference letters",
        "British High Commission interview shortlist preparation & recorded mock sessions",
      ],
      writingIncluded: [
        "Leadership & Influencing Essay (500 words — STAR methodology)",
        "Relationship Building & Networking Essay (500 words)",
        "Studying in the UK Course Justification Essay (500 words)",
        "Career Plan & Long-term Impact Essay (500 words)",
        "British-standard academic and professional CV review",
      ],
      benefits: [
        "Full payment of UK university tuition fees (including top tier universities)",
        "Monthly living stipend covering UK rent, meals, and utilities",
        "Economy class return airfare to the United Kingdom from Dhaka",
        "Arrival allowance + Departure allowance + UK Student Visa fee waiver",
        "Lifelong membership in the prestigious global Chevening Alumni Network",
      ],
      eligibility: [
        "Citizen of Chevening-eligible country and commitment to return for 2+ years",
        "Undergraduate degree equivalent to an upper second-class 2:1 honours degree",
        "Minimum 2 years of work experience (equivalent to 2,800 hours)",
        "Apply to 3 different eligible UK university courses by the deadline",
      ],
    },
    {
      id: "czech-republic-scholarship",
      code: "SS-13",
      title: "Czech Republic Scholarship Complete Support",
      country: "Czech Republic",
      region: "Europe",
      level: "Master’s & Doctoral",
      fundingType: "Fully Funded",
      deadline: "September 30 (Annual Cycle)",
      provider: "Government of the Czech Republic (MEYS & MFA)",
      badge: "Tuition + 14,000–15,000 CZK/mo",
      summary:
        "Complete guidance for the Government Scholarship of the Czech Republic in priority fields (Economics, Agriculture, Informatics, Energy, Environment) with nostrification and entrance test prep.",
      scope: [
        "Profile and field-of-study alignment against priority sectors",
        "Registration and submission on the official Czech Republic Scholarship portal",
        "Guidance on Czech Nostrification (Diploma Equivalence Assessment)",
        "University specific application handling and test scheduling",
        "Support through Czech Embassy interview in New Delhi / consular procedures",
      ],
      writingIncluded: [
        "Motivation Statement for Czech Government Committee",
        "Detailed Study Plan / Research Proposal for target faculty",
        "Academic Curriculum Vitae aligned with Czech university standards",
        "Answers to statutory scholarship questions and intent statements",
      ],
      benefits: [
        "Full tuition waiver at top Czech public universities (CTU, Charles Univ, etc.)",
        "Monthly stipend: CZK 14,000 (Master’s) or CZK 15,000 (Doctorate)",
        "Subsidized student dormitory accommodation & student dining card",
        "Reimbursement of necessary health care and medical services",
        "Schengen area access throughout your degree",
      ],
      eligibility: [
        "Citizens of designated developing countries (including Bangladesh)",
        "Completed Bachelor’s degree for Master’s, or Master’s degree for PhD",
        "Proficiency in English for English-medium programs",
        "Passed online testing and field-specific entrance evaluation",
      ],
    },
    {
      id: "fulbright-scholarship",
      code: "SS-14",
      title: "Fulbright Scholarship Complete Support",
      country: "United States",
      region: "North America",
      level: "Master’s & PhD",
      fundingType: "Fully Funded",
      deadline: "May – June (Annual Cycle)",
      provider: "U.S. Department of State / US Embassy Dhaka",
      badge: "Full US Tuition + Stipend + Flights + J-1 Visa",
      summary:
        "Complete guidance for the flagship Fulbright Foreign Student Program — personal statement narrative development, study objectives, GRE/TOEFL timeline, and intensive interview preparation.",
      scope: [
        "Eligibility assessment and evaluation of academic credentials",
        "U.S. university placement strategy & field-of-study alignment",
        "Personal Statement vs Study Objectives strategic distinction guidance",
        "Guidance on 3 academic/professional recommendation letters",
        "US Embassy Dhaka interview shortlist training & panel mock interviews",
      ],
      writingIncluded: [
        "Personal Statement (compelling authentic narrative of personal journey)",
        "Study / Research Objectives (rigorous academic goals and US program relevance)",
        "U.S.-style Résumé / Curriculum Vitae",
        "Supplementary essays, writing samples and research abstracts",
      ],
      benefits: [
        "Full tuition and required academic fees at top U.S. institutions",
        "Monthly living stipend adjusted for the specific U.S. city of study",
        "Round-trip international airfare between Dhaka and the United States",
        "Accident & Sickness Program for Exchanges (ASPE) health benefit plan",
        "Fulbright Gateway orientations, enrichment seminars, and global network",
      ],
      eligibility: [
        "Bangladeshi citizen residing in Bangladesh at the time of application",
        "Strong undergraduate degree with stellar academic records",
        "Minimum 2 years of professional experience post-graduation",
        "Commitment to return to Bangladesh upon completion of the fellowship",
      ],
    },
    {
      id: "mext-scholarship",
      code: "SS-15",
      title: "MEXT Scholarship Complete Support",
      country: "Japan",
      region: "Asia",
      level: "Undergraduate / Research / Master’s / PhD",
      fundingType: "Fully Funded",
      deadline: "May (Embassy) / Dec (Univ)",
      provider: "Japanese Ministry of Education (MEXT), Govt of Japan",
      badge: "Full Tuition + 143,000–145,000 JPY/mo + Flights",
      summary:
        "Step-by-step support for Japanese Government (MEXT) Embassy & University recommendation tracks, including Field of Study research plans, professor lab outreach, and embassy exams coaching.",
      scope: [
        "Track triage: Embassy Track vs University Recommendation Track",
        "Identification of Japanese professors, laboratories, and research groups",
        "Outreach strategy for Provisional Acceptance Letters after preliminary pass",
        "Preparation guidance for Embassy screening, written exams & interviews",
        "Visa issuance (Letter of Guarantee) and Tokyo orientation handover",
      ],
      writingIncluded: [
        "Field of Study and Research Plan (detailed past research & proposal in Japan)",
        "Statement of Purpose / Motivation Letter",
        "Academic CV formatted for Japanese academic standards",
        "Professor cold emails & lab inquiry communication templates",
      ],
      benefits: [
        "100% Exemption from entrance examination and tuition fees",
        "Monthly allowance: JPY 143,000 (MSc) to JPY 145,000 (PhD)",
        "Round-trip international economy flight tickets from Dhaka to Tokyo",
        "6 months of intensive Japanese language preparatory education if needed",
        "Direct connection with world-leading Japanese research institutions",
      ],
      eligibility: [
        "Bangladeshi nationality with willingness to study in Japan",
        "Under 35 years of age for Research / Master’s / PhD candidates",
        "Strong academic background in STEM, Social Sciences, or Humanities",
        "Pass embassy written screening (English and Japanese proficiency tests)",
      ],
    },
    {
      id: "erasmus-and-other-scholarships",
      code: "SS-16",
      title: "Erasmus & Other Scholarships On Demand",
      country: "Europe / Global",
      region: "Global",
      level: "Master’s / Joint Degrees",
      fundingType: "Fully Funded",
      deadline: "December – March (Varies)",
      provider: "European Commission (Erasmus Mundus EMJMD) & Global Funds",
      badge: "€1,400/mo Stipend + Full Multi-Country Tuition",
      summary:
        "Tailored guidance for Erasmus Mundus Joint Master Degrees (studying in 2–3 EU countries) plus DAAD Germany, Swiss Govt, Eiffel France, and other global elite scholarship programs.",
      scope: [
        "Catalogue matching across 100+ Erasmus Mundus Joint Master Degrees",
        "Multi-institution admission alignment across partner European universities",
        "Application packaging for DAAD (Germany), Eiffel (France), Holland Scholarship, etc.",
        "Schengen visa mobility & residency documentation planning",
        "Interview and video-statement preparation for consortium panels",
      ],
      writingIncluded: [
        "Consortium-tailored Motivation Letter / Statement of Purpose",
        "Academic CV (Europass & Harvard formats)",
        "Scholarship essays, diversity statements, and research summaries",
        "Academic writing samples and portfolio descriptions",
      ],
      benefits: [
        "Full tuition fee coverage across multiple top European universities",
        "Monthly living allowance up to €1,400/month for 24 months",
        "Travel and installation grant up to €3,000–€4,000 per year",
        "Worldwide comprehensive health insurance package",
        "Double or Multiple Joint Master’s Degrees from European institutions",
      ],
      eligibility: [
        "Bachelor’s degree or equivalent in a relevant discipline",
        "Demonstrated high academic standing and global mindset",
        "Proficiency in English (IELTS 6.5+ or TOEFL iBT 90+)",
        "Application to a maximum of 3 Erasmus Mundus programs per cycle",
      ],
    },
  ],

  // All 8 Core Educational Consultancy Services
  services: [
    {
      id: "university-course-selection",
      code: "SS-01",
      title: "University & Course Selection",
      category: "Selection & Strategy",
      badge: "Profile Evaluation & 8-10 Shortlist",
      summary:
        "A shortlist you can defend in a visa interview matched to your grades, your budget, and the career you actually want — without commission-driven university pushing.",
      scope: [
        "Comprehensive profile evaluation (academics, IELTS/GRE, budget, work experience)",
        "8–10 university shortlist categorized into Ambitious, Balanced, and Safe",
        "Tuition fee, living expense, and post-study work visa rights breakdown",
        "Intake timing and application deadline backwards map",
      ],
      whoFor: [
        "Students unsure whether to target UK, USA, Canada, Australia, or Europe",
        "Applicants with study gaps, backlog histories, or non-traditional CGPA",
        'Anyone handed a "partner university only" list by traditional commission agents',
      ],
      deliverables: [
        "Profile Evaluation Report",
        "Categorized Shortlist Matrix (8-10 Universities)",
        "Total Cost of Attendance (COA) Sheet",
        "Deadlines & Intake Action Roadmap",
      ],
    },
    {
      id: "application-assistance",
      code: "SS-02",
      title: "Application Assistance",
      category: "Application Filing",
      badge: "Direct Portal Guidance & Pre-check",
      summary:
        "You keep your own portal logins and press submit yourself. We make sure nothing is missing, mislabelled, or late across direct portals, UCAS, and uni-assist.",
      scope: [
        "Screen-by-screen guidance for each university portal and admission system",
        "Comprehensive document checklist (attestations, translations, transcripts)",
        "Pre-submission forensic review of every form field and file upload",
        "Offer condition management, CAS/I-20 tracking, and deposit planning",
      ],
      whoFor: [
        "First-time applicants navigating complex university portal requirements",
        "Students applying to multiple universities or different destination countries",
        "Anyone who insists on owning and securing their own application accounts",
      ],
      deliverables: [
        "Portal Walkthrough Checklists",
        "Document Formatting & Attestation Matrix",
        "Pre-Submission Audit Sheet",
        "Offer Letter & Deposit Timeline Tracker",
      ],
    },
    {
      id: "sop-lor-guidance",
      code: "SS-03",
      title: "SOP & LOR Guidance",
      category: "Academic Writing",
      badge: "3 Draft Cycles & Referee Packs",
      summary:
        "No ghost-written templates that trigger AI filters or consulate rejection. A proven 4-paragraph framework, line-by-line feedback, and referee briefing packs.",
      scope: [
        "1-on-1 story excavation interview to pull out unique authentic details",
        "4-paragraph SOP framework: Motivation, Academic Evidence, Program Fit, and Career Plan",
        "Up to 3 intensive rounds of line-by-line annotations and phrasing feedback",
        "Plagiarism and AI-detection check before submission",
        "Customized briefing packs for your university professors or workplace managers",
      ],
      whoFor: [
        "Students whose initial drafts read like a chronological CV in paragraph form",
        "Applicants needing to explain academic gaps, low semesters, or career pivots",
        "Candidates needing specific, high-impact recommendation letters from busy referees",
      ],
      deliverables: [
        "Customized Story Outline & Prompts",
        "Annotated Drafts (Up to 3 iterative revisions)",
        "Referee Briefing One-Pager",
        "Authenticity & Plagiarism Verification",
      ],
    },
    {
      id: "visa-application-support",
      code: "SS-04",
      title: "Visa Application Support",
      category: "Visa & Compliance",
      badge: "Financial Audit & Mock Interviews",
      summary:
        "Most refusals come from money trails and weak interview answers, not weak academic profiles. We prepare both to strict immigration caseworker standards.",
      scope: [
        "Country-specific visa checklist (UK Student Route, US F-1, Canada Study Permit, Australia Subclass 500, German Blocked Account)",
        "Rigorous financial document stress-test (bank statements, source of funds, sponsor affidavits, bank solvency certificates)",
        "Recorded mock visa interviews with questions actually asked at Dhaka consulates",
        "Refusal-risk audit report flagged in writing before you submit your file",
      ],
      whoFor: [
        "Students preparing for US Embassy F-1 or Australia Genuine Student (GS) interviews",
        "Applicants relying on parent sponsors, property sales, or education bank loans",
        "Students with previous visa refusals needing an airtight case re-evaluation",
      ],
      deliverables: [
        "Caseworker-Standard Document Order Sheet",
        "Financial Source-of-Funds Validation",
        "2 Rounds of Recorded Mock Interviews + Feedback",
        "Pre-Filing Refusal Risk Report",
      ],
    },
    {
      id: "usa-email-application-support",
      code: "SS-05",
      title: "USA Email & Application Support",
      category: "Research & Faculty",
      badge: "25 US Universities & RA Outreach",
      summary:
        "Targeted faculty shortlisting and professional cold outreach for Master’s (RA-targeted) and PhD programs in the USA, supported until the final decision stage.",
      scope: [
        "Shortlist up to 25 accredited universities in the United States",
        "Identify professors with active research grants, open RA positions, and matching interests",
        "Draft tailored, high-converting professional cold emails to selected faculty",
        "Manage reply tracking, follow-ups, and Zoom interview scheduling guidance",
        "Full support continuing until the last possible stage of the admission cycle",
      ],
      whoFor: [
        "Master’s applicants seeking Research Assistantships (RA) or Graduate Assistantships",
        "Direct PhD applicants looking for fully funded research advisor endorsements",
        "Students who want a structured, disciplined email outreach campaign",
      ],
      deliverables: [
        "Targeted Faculty & Lab Database (25 Universities)",
        "Personalized Professor Outreach Email Templates",
        "Follow-Up & Response Strategy Log",
        "Faculty Interview Preparation Session",
      ],
    },
    {
      id: "australia-email-application-support",
      code: "SS-06",
      title: "Australia Email & Application Support",
      category: "Research & Faculty",
      badge: "25 Aus Universities & Supervisor Match",
      summary:
        "Shortlisting and supervisor outreach for Master of Research (MRes) and PhD programs across Australian Group of Eight (Go8) and leading universities.",
      scope: [
        "Shortlist up to 25 Australian universities based on research priorities",
        "Identify prospective primary supervisors with open HDR (Higher Degree by Research) capacity",
        "Prepare tailored Expressions of Interest (EOI) and research alignment pitches",
        "Coordinate supervisor correspondence, referee checks, and official EOI submissions",
        "End-to-end guidance through scholarship ranking rounds (RTP / university awards)",
      ],
      whoFor: [
        "Applicants targeting Australian MRes, Master by Research, or PhD programs",
        "Candidates seeking Research Training Program (RTP) full funding scholarships",
        "Students who need help navigating Australian supervisor formal consent requirements",
      ],
      deliverables: [
        "25 Australian Universities & Supervisor Roster",
        "Expression of Interest (EOI) Communication Pack",
        "Supervisor Email Campaign Management",
        "Formal Application Submission Support",
      ],
    },
    {
      id: "common-app-application-support",
      code: "SS-07",
      title: "Common App Application Support",
      category: "Undergraduate",
      badge: "Profile Setup & Supplemental Essays",
      summary:
        "Complete undergraduate / Bachelor’s application support for US universities — Common App profile setup, personal statement, supplemental essays, and activities formatting.",
      scope: [
        "University list balancing across Early Decision (ED), Early Action (EA), and Regular Decision (RD)",
        "Common App profile configuration and university addition",
        "Full guidance on the 650-word Common App Personal Essay",
        "Supplemental essay drafting for target universities",
        "Activities list and honors section strategic framing (character limits optimization)",
        "Counselor and teacher recommendation workflow coordination",
      ],
      whoFor: [
        "HSC, A-Level, or IB students targeting undergraduate admissions in the USA",
        "Applicants seeking merit-based and need-based institutional scholarships",
        "Families looking for structured guidance across 10-15 US college applications",
      ],
      deliverables: [
        "ED/EA/RD Application Strategy Map",
        "Optimized 10-Item Activities & Honors Sheet",
        "Common App Personal Essay Final Review",
        "Supplemental Essays Review (Up to 8 Universities)",
      ],
    },
    {
      id: "one-to-one-counselling-mentorship",
      code: "SS-08",
      title: "One-to-One Counselling & Mentorship",
      category: "Mentorship",
      badge: "Dedicated 1-on-1 Direct Guidance",
      summary:
        "Personalized guidance for students who prefer to manage their own applications end-to-end — from initial profile assessment to offer letter selection and departure.",
      scope: [
        "Deep-dive 1-on-1 profile and career goal assessment session",
        "Customized study abroad timeline, testing strategy (IELTS/GRE), and budget model",
        "Independent review of student-selected universities and scholarship options",
        "Ongoing on-demand mentorship sessions throughout the application journey",
        "Document review, final checklist audit, and pre-departure life coaching",
      ],
      whoFor: [
        "Self-motivated students who want professional coaching while maintaining full autonomy",
        "Candidates with specific edge cases, career switches, or family relocation goals",
        "Students who want honest, unbiased second opinions on offers received",
      ],
      deliverables: [
        "Personalized Study Abroad Master Plan",
        "Dedicated 1-on-1 Consultation Sessions",
        "Application & Document Review Feedback",
        "Pre-Departure Orientation & Checklist",
      ],
    },
  ],

  // Destinations data
  destinations: [
    {
      code: "GB",
      name: "United Kingdom",
      desc: "BSc, MSc, PhD, Foundation",
      badge: "1-Year Master’s · 2-Year PSW",
    },
    {
      code: "US",
      name: "United States",
      desc: "BS, MS, PhD, STEM, OPT",
      badge: "STEM 3-Year OPT · Top Research",
    },
    {
      code: "CA",
      name: "Canada",
      desc: "Diplomas, Degrees, PGWP",
      badge: "Up to 3-Year PGWP · PR Pathways",
    },
    {
      code: "AU",
      name: "Australia",
      desc: "Go8, Regional, PSW",
      badge: "Go8 Excellence · High Wages",
    },
    {
      code: "DE",
      name: "Germany",
      desc: "Public Universities, Blocked Acct.",
      badge: "No Tuition in Public Univs",
    },
    {
      code: "IE",
      name: "Ireland",
      desc: "Tech Hubs, 1-Year Master’s",
      badge: "European Silicon Valley · 2-Yr PSW",
    },
  ],

  // Initialize
  init() {
    this.renderHeader();
    this.renderFooter();
    this.renderScholarships();
    this.renderServices();
    this.renderDestinations();
    this.setupEventListeners();
    this.handleHashChange();
  },

  // Render SVG Logo Matching image.png
  getLogoSvg(size = "normal") {
    const isSmall = size === "small";
    return `
      <div class="flex items-center gap-3">
        <svg class="${isSmall ? "w-9 h-9" : "w-11 h-11"}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Globe Outer Ring -->
          <circle cx="60" cy="52" r="46" stroke="#062047" stroke-width="4.5" fill="#FEFCF6"/>
          <!-- Globe Continents (Warm Gold) -->
          <path d="M42 22C46 22 52 25 54 30C56 35 52 42 48 44C44 46 36 42 34 36C32 30 36 22 42 22Z" fill="#C59B4B" opacity="0.9"/>
          <path d="M68 20C74 20 86 26 88 32C90 38 84 46 80 48C74 50 68 44 68 36C68 28 72 20 68 20Z" fill="#C59B4B" opacity="0.9"/>
          <path d="M38 48C42 48 46 54 44 60C42 66 36 72 32 70C28 68 26 58 30 52C34 46 38 48 38 48Z" fill="#C59B4B" opacity="0.8"/>
          <path d="M72 52C78 52 86 60 84 66C82 72 74 76 70 72C66 68 66 58 72 52Z" fill="#C59B4B" opacity="0.8"/>
          <!-- Wave under hull (Gold) -->
          <path d="M30 84C42 81 55 90 70 85C80 81 92 84 98 87C92 89 80 94 68 91C54 88 42 90 30 84Z" fill="#C59B4B"/>
          <!-- Sailboat Hull (Navy) -->
          <path d="M26 76C44 73 68 83 94 65C84 81 56 83 26 76Z" fill="#062047"/>
          <!-- Main Sail (Navy & White curved) -->
          <path d="M58 24C58 24 64 48 82 66C68 67 56 62 58 24Z" fill="#062047"/>
          <path d="M54 32C54 32 48 48 34 65C44 66 52 61 54 32Z" fill="#062047"/>
        </svg>
        <div class="flex flex-col">
          <div class="flex items-baseline font-display font-bold ${isSmall ? "text-xl" : "text-2xl"} tracking-tight leading-none">
            <span class="text-[#062047]">Study</span><span class="text-[#C59B4B]">Sail</span>
          </div>
          <div class="text-[8px] sm:text-[9px] font-bold tracking-[0.18em] text-[#062047] uppercase mt-1 flex items-center gap-1">
            <span class="w-2 h-px bg-[#C59B4B]"></span>
            <span>DREAM. APPLY AND ACHIEVE</span>
            <span class="w-2 h-px bg-[#C59B4B]"></span>
          </div>
        </div>
      </div>
    `;
  },

  // Render Header
  renderHeader() {
    const root = document.getElementById("global-header-root");
    if (!root) return;

    root.innerHTML = `
      <header class="sticky top-0 z-50 bg-[#FEFCF6]/95 backdrop-blur-md border-b border-[#062047]/10 transition-all duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
          
          <!-- Brand Logo -->
          <a href="#top" class="flex items-center gap-3 no-underline group" aria-label="StudySail Home">
            ${this.getLogoSvg()}
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-[#062047]" aria-label="Main Navigation">
            <a href="#top" class="hover:text-[#C59B4B] transition-colors py-2 font-semibold">Home</a>
            
            <!-- Services Dropdown -->
            <div class="relative nav-item py-2">
              <a href="#services-hub" class="flex items-center gap-1 hover:text-[#C59B4B] transition-colors font-semibold">
                Services <span class="text-xs opacity-70">▾</span>
              </a>
              <div class="absolute top-full left-0 w-80 bg-white border border-[#062047]/10 rounded-2xl p-4 shadow-xl nav-dropdown-menu">
                <div class="text-[10px] font-bold text-[#C59B4B] tracking-widest uppercase mb-2 px-3">Consultancy Tracks</div>
                <div class="space-y-1">
                  ${this.services
                    .slice(0, 6)
                    .map(
                      (s) => `
                    <a href="#service-${s.id}" onclick="StudySail.openServiceModal('${s.id}')" class="block px-3 py-2 rounded-xl text-xs font-semibold text-[#062047] hover:bg-[#FAF7EC] hover:text-[#C59B4B] transition-colors">
                      <span class="text-[10px] text-[#96742E] font-bold mr-1">${s.code}</span> ${s.title}
                    </a>
                  `,
                    )
                    .join("")}
                  <div class="dashed-x my-2"></div>
                  <a href="#services-hub" class="block px-3 py-1.5 text-center text-xs font-bold text-[#062047] bg-[#F3EEDD] hover:bg-[#C59B4B] hover:text-[#062047] rounded-lg transition-colors">
                    Explore All 8 Services →
                  </a>
                </div>
              </div>
            </div>

            <!-- Scholarships Dropdown -->
            <div class="relative nav-item py-2">
              <a href="#scholarships-hub" class="flex items-center gap-1 hover:text-[#C59B4B] transition-colors font-semibold">
                Scholarships <span class="text-xs opacity-70">▾</span>
              </a>
              <div class="absolute top-full left-0 w-84 bg-white border border-[#062047]/10 rounded-2xl p-4 shadow-xl nav-dropdown-menu">
                <div class="text-[10px] font-bold text-[#C59B4B] tracking-widest uppercase mb-2 px-3">Named Full Scholarships</div>
                <div class="space-y-1">
                  ${this.scholarships
                    .slice(0, 6)
                    .map(
                      (s) => `
                    <a href="#scholarship-${s.id}" onclick="StudySail.openScholarshipModal('${s.id}')" class="block px-3 py-2 rounded-xl text-xs font-semibold text-[#062047] hover:bg-[#FAF7EC] hover:text-[#C59B4B] transition-colors">
                      <span class="text-[10px] text-[#96742E] font-bold mr-1">${s.code}</span> ${s.title}
                    </a>
                  `,
                    )
                    .join("")}
                  <div class="dashed-x my-2"></div>
                  <a href="#scholarships-hub" class="block px-3 py-1.5 text-center text-xs font-bold text-[#062047] bg-[#F3EEDD] hover:bg-[#C59B4B] hover:text-[#062047] rounded-lg transition-colors">
                    View Dedicated Scholarships Hub →
                  </a>
                </div>
              </div>
            </div>

            <a href="#destinations" class="hover:text-[#C59B4B] transition-colors font-semibold">Destinations</a>
            <a href="#about" class="hover:text-[#C59B4B] transition-colors font-semibold">About</a>
            <a href="#contact" class="hover:text-[#C59B4B] transition-colors font-semibold">Contact</a>
          </nav>

          <!-- Action Button & Mobile Toggle -->
          <div class="flex items-center gap-3">
            <button onclick="StudySail.openConsultationModal()" class="hidden sm:inline-flex items-center gap-2 bg-[#C59B4B] hover:bg-[#96742E] text-[#062047] hover:text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-[#C59B4B] transition-all shadow-sm">
              <span>Book Free Consultation</span>
              <span>→</span>
            </button>
            <button onclick="StudySail.toggleMobileMenu()" class="lg:hidden p-2 text-[#062047] rounded-lg hover:bg-[#F3EEDD] focus:outline-none" aria-label="Toggle menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
          </div>

        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-nav-drawer" class="hidden lg:hidden bg-[#FEFCF6] border-b border-[#062047]/10 px-6 py-6 shadow-2xl transition-all">
          <div class="flex flex-col gap-4 text-base font-semibold text-[#062047]">
            <a href="#top" onclick="StudySail.toggleMobileMenu()" class="py-1">Home</a>
            <a href="#scholarships-hub" onclick="StudySail.toggleMobileMenu()" class="py-1 text-[#C59B4B]">🎓 Scholarships Hub (All 8 Programs)</a>
            <a href="#services-hub" onclick="StudySail.toggleMobileMenu()" class="py-1">📋 Consultancy Services</a>
            <a href="#destinations" onclick="StudySail.toggleMobileMenu()" class="py-1">🌍 Destinations</a>
            <a href="#about" onclick="StudySail.toggleMobileMenu()" class="py-1">📖 About StudySail</a>
            <a href="#contact" onclick="StudySail.toggleMobileMenu()" class="py-1">📍 Dhaka Office & Contact</a>
            <div class="pt-2">
              <button onclick="StudySail.toggleMobileMenu(); StudySail.openConsultationModal();" class="w-full bg-[#C59B4B] hover:bg-[#96742E] text-[#062047] hover:text-white font-bold py-3 rounded-full text-center transition-colors">
                Book Free Consultation ➔
              </button>
            </div>
          </div>
        </div>
      </header>
    `;
  },

  // Render Footer
  renderFooter() {
    const root = document.getElementById("global-footer-root");
    if (!root) return;

    root.innerHTML = `
      <footer class="bg-[#03152F] text-white pt-20 pb-12 border-t border-[#C59B4B]/20">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            <!-- Brand Column -->
            <div class="lg:col-span-2">
              <div class="mb-5">
                <div class="flex items-center gap-3">
                  <svg class="w-10 h-10" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="52" r="46" stroke="#C59B4B" stroke-width="4.5" fill="#062047"/>
                    <path d="M42 22C46 22 52 25 54 30C56 35 52 42 48 44C44 46 36 42 34 36C32 30 36 22 42 22Z" fill="#C59B4B" opacity="0.9"/>
                    <path d="M68 20C74 20 86 26 88 32C90 38 84 46 80 48C74 50 68 44 68 36C68 28 72 20 68 20Z" fill="#C59B4B" opacity="0.9"/>
                    <path d="M30 84C42 81 55 90 70 85C80 81 92 84 98 87C92 89 80 94 68 91C54 88 42 90 30 84Z" fill="#C59B4B"/>
                    <path d="M26 76C44 73 68 83 94 65C84 81 56 83 26 76Z" fill="#FAF7EC"/>
                    <path d="M58 24C58 24 64 48 82 66C68 67 56 62 58 24Z" fill="#FAF7EC"/>
                    <path d="M54 32C54 32 48 48 34 65C44 66 52 61 54 32Z" fill="#FAF7EC"/>
                  </svg>
                  <div>
                    <span class="font-display font-bold text-2xl text-white">Study</span><span class="font-display font-bold text-2xl text-[#C59B4B]">Sail</span>
                    <div class="text-[8px] font-bold tracking-[0.16em] text-[#C59B4B] uppercase">DREAM. APPLY AND ACHIEVE</div>
                  </div>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                Your Global Education Partner. StudySail coaches Bangladeshi students through honest admissions, full scholarships, and visa protocols — without commission-driven university pushing.
              </p>
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold tracking-widest text-[#C59B4B] uppercase">Dhaka Office:</span>
                <span class="text-xs text-gray-300">Level 4, Banani, Dhaka 1213, Bangladesh</span>
              </div>
            </div>

            <!-- Scholarships Links -->
            <div>
              <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#C59B4B] mb-5">Dedicated Scholarships</h4>
              <ul class="space-y-2.5 text-xs text-gray-300">
                ${this.scholarships
                  .slice(0, 5)
                  .map(
                    (s) => `
                  <li><a href="#scholarship-${s.id}" onclick="StudySail.openScholarshipModal('${s.id}')" class="hover:text-[#C59B4B] transition-colors">${s.title}</a></li>
                `,
                  )
                  .join("")}
                <li><a href="#scholarships-hub" class="text-[#C59B4B] font-bold hover:underline">View All 8 Scholarships →</a></li>
              </ul>
            </div>

            <!-- Consultancy Services Links -->
            <div>
              <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#C59B4B] mb-5">Consultancy Services</h4>
              <ul class="space-y-2.5 text-xs text-gray-300">
                ${this.services
                  .slice(0, 5)
                  .map(
                    (s) => `
                  <li><a href="#service-${s.id}" onclick="StudySail.openServiceModal('${s.id}')" class="hover:text-[#C59B4B] transition-colors">${s.title}</a></li>
                `,
                  )
                  .join("")}
                <li><a href="#services-hub" class="text-[#C59B4B] font-bold hover:underline">View All 8 Services →</a></li>
              </ul>
            </div>

            <!-- Contact & Office -->
            <div>
              <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#C59B4B] mb-5">Connect & Consultation</h4>
              <ul class="space-y-3 text-xs text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-[#C59B4B]">📍</span> Banani, Dhaka 1213
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#C59B4B]">🕒</span> Sat–Thu: 10:00 AM – 7:00 PM
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#C59B4B]">💬</span> WhatsApp: +880 1700-000000
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#C59B4B]">✉️</span> hello@studysail.com
                </li>
              </ul>
              <button onclick="StudySail.openConsultationModal()" class="mt-5 w-full bg-[#C59B4B] hover:bg-[#96742E] text-[#062047] hover:text-white font-bold text-xs py-2.5 rounded-full transition-colors">
                Book Free Consultation
              </button>
            </div>

          </div>

          <!-- Bottom Bar -->
          <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 StudySail. All rights reserved. Dream. Apply and Achieve.</p>
            <div class="flex items-center gap-6">
              <a href="#about" class="hover:text-white transition-colors">About Us</a>
              <a href="#scholarships-hub" class="hover:text-white transition-colors">Scholarships</a>
              <a href="#services-hub" class="hover:text-white transition-colors">Services</a>
              <a href="#contact" class="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

        </div>
      </footer>
    `;
  },

  // Render Scholarships Grid with Filter
  renderScholarships() {
    const container = document.getElementById("scholarships-grid-container");
    if (!container) return;

    const filtered = this.scholarships.filter((s) => {
      const matchRegion =
        this.activeScholarshipFilter === "all" ||
        s.region.toLowerCase() === this.activeScholarshipFilter.toLowerCase();
      const matchSearch =
        !this.searchQuery ||
        s.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        s.country.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        s.summary.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchRegion && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-[#062047]/10 p-8">
          <p class="text-lg font-bold text-[#062047] mb-2">No scholarships matched your filter</p>
          <p class="text-sm text-[#5F6B79] mb-4">Try selecting "All Regions" or clearing your search keywords.</p>
          <button onclick="StudySail.resetScholarshipFilter()" class="btn-primary text-xs">Reset Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map(
        (s) => `
      <article class="lift flex flex-col bg-white border border-[#062047]/10 rounded-2xl overflow-hidden shadow-sm hover:border-[#C59B4B] transition-all">
        <!-- Top header bar -->
        <div class="bg-[#FAF7EC] border-b border-[#062047]/5 px-6 pt-6 pb-4">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="inline-flex items-center bg-[#C59B4B]/20 text-[#96742E] rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-widest uppercase">
              ${s.code} · ${s.country}
            </span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#062047]/5 text-[#062047] uppercase">
              ${s.fundingType}
            </span>
          </div>
          <h3 class="font-display font-bold text-xl text-[#062047] leading-snug">
            ${s.title}
          </h3>
          <p class="text-xs font-semibold text-[#96742E] mt-1">${s.provider}</p>
        </div>

        <!-- Body content -->
        <div class="p-6 flex flex-col flex-grow">
          <p class="text-sm text-[#5F6B79] leading-relaxed mb-5">${s.summary}</p>
          
          <div class="bg-[#FAF7EC] rounded-xl p-3.5 mb-5 border border-[#062047]/5">
            <div class="text-[11px] font-bold text-[#062047] uppercase tracking-wider mb-1">⭐ Key Award Benefits:</div>
            <div class="text-xs font-semibold text-[#96742E]">${s.badge}</div>
          </div>

          <div class="dashed-x mb-4"></div>

          <div class="mb-6">
            <div class="text-xs font-bold text-[#062047] uppercase tracking-wider mb-2">Service Scope:</div>
            <ul class="space-y-2 list-none p-0 m-0">
              ${s.scope
                .slice(0, 3)
                .map(
                  (item) => `
                <li class="flex items-start gap-2 text-xs text-[#062047]">
                  <span class="text-[#96742E] font-bold mt-0.5">✓</span>
                  <span>${item}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>

          <div class="mt-auto pt-2 flex items-center justify-between gap-3">
            <button onclick="StudySail.openScholarshipModal('${s.id}')" class="w-full bg-[#062047] hover:bg-[#03152F] text-white font-semibold text-xs py-3 px-4 rounded-full text-center transition-colors">
              View Dedicated Info & Scope →
            </button>
          </div>
        </div>
      </article>
    `,
      )
      .join("");
  },

  // Render Core Consultancy Services Grid
  renderServices() {
    const container = document.getElementById("services-grid-container");
    if (!container) return;

    container.innerHTML = this.services
      .map(
        (s) => `
      <article class="lift flex flex-col bg-white border border-[#062047]/10 rounded-2xl overflow-hidden shadow-sm hover:border-[#C59B4B] transition-all">
        <div class="bg-[#FAF7EC] border-b border-[#062047]/5 px-6 pt-6 pb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold tracking-widest text-[#96742E] uppercase">${s.code}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#C59B4B]/15 text-[#96742E] uppercase">${s.category}</span>
          </div>
          <h3 class="font-display font-bold text-xl text-[#062047] leading-snug">
            ${s.title}
          </h3>
        </div>

        <div class="p-6 flex flex-col flex-grow">
          <p class="text-sm text-[#5F6B79] leading-relaxed mb-5">${s.summary}</p>
          
          <div class="dashed-x mb-4"></div>

          <div class="mb-6">
            <div class="text-xs font-bold text-[#062047] uppercase tracking-wider mb-2">What's Included:</div>
            <ul class="space-y-2 list-none p-0 m-0">
              ${s.scope
                .slice(0, 3)
                .map(
                  (item) => `
                <li class="flex items-start gap-2 text-xs text-[#062047]">
                  <span class="text-[#96742E] font-bold mt-0.5">✓</span>
                  <span>${item}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>

          <div class="mt-auto pt-2">
            <button onclick="StudySail.openServiceModal('${s.id}')" class="w-full bg-[#FAF7EC] hover:bg-[#C59B4B] text-[#062047] font-semibold text-xs py-3 px-4 rounded-full border border-[#062047]/10 text-center transition-colors">
              Read Deliverables & Process →
            </button>
          </div>
        </div>
      </article>
    `,
      )
      .join("");
  },

  // Render Destinations
  renderDestinations() {
    const container = document.getElementById("destinations-grid-container");
    if (!container) return;

    container.innerHTML = this.destinations
      .map(
        (d) => `
      <div class="border border-[#062047]/15 rounded-2xl p-6 flex items-center space-x-4 bg-transparent hover:bg-white transition relative shadow-sm">
        <div class="text-3xl font-display font-bold text-[#C59B4B] w-12 shrink-0">${d.code}</div>
        <div>
          <div class="font-bold text-[#062047] text-lg">${d.name}</div>
          <div class="text-xs text-[#5F6B79] mb-1">${d.desc}</div>
          <div class="text-[10px] font-bold text-[#96742E] uppercase">${d.badge}</div>
        </div>
      </div>
    `,
      )
      .join("");
  },

  // Open Scholarship Modal Detail View
  openScholarshipModal(scholarshipId) {
    const s = this.scholarships.find((item) => item.id === scholarshipId);
    if (!s) return;

    const modal = document.getElementById("detail-modal");
    const content = document.getElementById("modal-content-container");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="p-8 sm:p-10">
        
        <!-- Header badge & title -->
        <div class="flex items-center justify-between gap-4 mb-4">
          <span class="inline-flex items-center bg-[#C59B4B]/20 text-[#96742E] rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase">
            ${s.code} · ${s.country} · ${s.level}
          </span>
          <button onclick="StudySail.closeModal()" class="text-gray-400 hover:text-[#062047] text-2xl font-bold p-1 leading-none">&times;</button>
        </div>

        <h2 class="font-display font-bold text-2xl sm:text-4xl text-[#062047] mb-2 leading-tight">
          ${s.title}
        </h2>
        <p class="text-sm font-semibold text-[#96742E] mb-6">${s.provider} | Deadline: ${s.deadline}</p>

        <p class="text-base text-[#5F6B79] leading-relaxed mb-8 bg-[#FAF7EC] p-5 rounded-2xl border border-[#062047]/5">
          ${s.summary}
        </p>

        <!-- Two column details: Scope & Writing -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          
          <div class="bg-white border border-[#062047]/10 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-lg">📋</span>
              <h3 class="font-display font-bold text-base text-[#062047]">Service Scope</h3>
            </div>
            <ul class="space-y-3 list-none p-0 m-0">
              ${s.scope
                .map(
                  (item) => `
                <li class="flex items-start gap-2.5 text-xs text-[#062047] leading-relaxed">
                  <span class="text-[#96742E] font-bold mt-0.5">✓</span>
                  <span>${item}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>

          <div class="bg-white border border-[#062047]/10 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-lg">✍️</span>
              <h3 class="font-display font-bold text-base text-[#062047]">Writing Services Included</h3>
            </div>
            <ul class="space-y-3 list-none p-0 m-0">
              ${s.writingIncluded
                .map(
                  (item) => `
                <li class="flex items-start gap-2.5 text-xs text-[#062047] leading-relaxed">
                  <span class="text-[#96742E] font-bold mt-0.5">✓</span>
                  <span>${item}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>

        </div>

        <!-- Benefits & Eligibility -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          
          <div class="bg-[#FEFCF6] border border-[#062047]/10 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-lg">💰</span>
              <h3 class="font-display font-bold text-base text-[#062047]">Full Award Benefits</h3>
            </div>
            <ul class="space-y-2.5 list-none p-0 m-0">
              ${s.benefits
                .map(
                  (b) => `
                <li class="flex items-start gap-2 text-xs text-[#062047]">
                  <span class="text-[#C59B4B] font-bold">•</span>
                  <span>${b}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>

          <div class="bg-[#FEFCF6] border border-[#062047]/10 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-lg">🎯</span>
              <h3 class="font-display font-bold text-base text-[#062047]">Eligibility Criteria</h3>
            </div>
            <ul class="space-y-2.5 list-none p-0 m-0">
              ${s.eligibility
                .map(
                  (e) => `
                <li class="flex items-start gap-2 text-xs text-[#062047]">
                  <span class="text-[#C59B4B] font-bold">•</span>
                  <span>${e}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>

        </div>

        <!-- Next Action Card -->
        <div class="bg-[#F3EEDD] border border-[#062047]/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 class="font-display font-bold text-lg text-[#062047] mb-1">Ready to apply for ${s.title}?</h4>
            <p class="text-xs text-[#5F6B79]">Book a 1-on-1 free consultation with our senior scholarship advisor.</p>
          </div>
          <button onclick="StudySail.closeModal(); StudySail.openConsultationModal('Scholarship: ${s.title}');" class="btn-primary text-xs sm:text-sm whitespace-nowrap shrink-0">
            Book Free Consultation →
          </button>
        </div>

      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  // Open Service Modal Detail View
  openServiceModal(serviceId) {
    const s = this.services.find((item) => item.id === serviceId);
    if (!s) return;

    const modal = document.getElementById("detail-modal");
    const content = document.getElementById("modal-content-container");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="p-8 sm:p-10">
        <div class="flex items-center justify-between gap-4 mb-4">
          <span class="inline-flex items-center bg-[#C59B4B]/20 text-[#96742E] rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase">
            ${s.code} · ${s.category}
          </span>
          <button onclick="StudySail.closeModal()" class="text-gray-400 hover:text-[#062047] text-2xl font-bold p-1 leading-none">&times;</button>
        </div>

        <h2 class="font-display font-bold text-2xl sm:text-4xl text-[#062047] mb-2 leading-tight">
          ${s.title}
        </h2>
        <p class="text-sm font-semibold text-[#96742E] mb-6">${s.badge}</p>

        <p class="text-base text-[#5F6B79] leading-relaxed mb-8 bg-[#FAF7EC] p-5 rounded-2xl border border-[#062047]/5">
          ${s.summary}
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white border border-[#062047]/10 rounded-2xl p-6 shadow-sm">
            <h3 class="font-display font-bold text-base text-[#062047] mb-4">Service Scope & Inclusions</h3>
            <ul class="space-y-3 list-none p-0 m-0">
              ${s.scope
                .map(
                  (item) => `
                <li class="flex items-start gap-2.5 text-xs text-[#062047] leading-relaxed">
                  <span class="text-[#96742E] font-bold mt-0.5">✓</span>
                  <span>${item}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>

          <div class="bg-white border border-[#062047]/10 rounded-2xl p-6 shadow-sm">
            <h3 class="font-display font-bold text-base text-[#062047] mb-4">Concrete Deliverables</h3>
            <ul class="space-y-3 list-none p-0 m-0">
              ${s.deliverables
                .map(
                  (item) => `
                <li class="flex items-start gap-2.5 text-xs text-[#062047] leading-relaxed">
                  <span class="text-[#96742E] font-bold mt-0.5">✓</span>
                  <span>${item}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>
        </div>

        <div class="bg-[#FEFCF6] border border-[#062047]/10 rounded-2xl p-6 mb-8 shadow-sm">
          <h3 class="font-display font-bold text-base text-[#062047] mb-3">Who this track is for</h3>
          <ul class="space-y-2 list-none p-0 m-0">
            ${s.whoFor
              .map(
                (item) => `
              <li class="flex items-start gap-2 text-xs text-[#5F6B79]">
                <span class="text-[#C59B4B] font-bold">•</span>
                <span>${item}</span>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>

        <div class="bg-[#F3EEDD] border border-[#062047]/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 class="font-display font-bold text-lg text-[#062047] mb-1">Get Started with ${s.title}</h4>
            <p class="text-xs text-[#5F6B79]">Start with an honest evaluation of your profile and budget.</p>
          </div>
          <button onclick="StudySail.closeModal(); StudySail.openConsultationModal('Service: ${s.title}');" class="btn-primary text-xs sm:text-sm whitespace-nowrap shrink-0">
            Book Free Consultation →
          </button>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  // Close Modal
  closeModal() {
    const modals = document.querySelectorAll(".modal-overlay");
    modals.forEach((m) => m.classList.remove("active"));
    document.body.style.overflow = "auto";
  },

  // Open Consultation Booking Modal
  openConsultationModal(prefillContext = "") {
    const modal = document.getElementById("consultation-modal");
    if (!modal) return;

    if (prefillContext) {
      const notesInput = document.getElementById("consult-notes");
      if (notesInput) {
        notesInput.value = `Interested in: ${prefillContext}`;
      }
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  // Toggle Mobile Menu Drawer
  toggleMobileMenu() {
    const drawer = document.getElementById("mobile-nav-drawer");
    if (drawer) {
      drawer.classList.toggle("hidden");
    }
  },

  // Filter Scholarships by Region
  filterScholarships(region) {
    this.activeScholarshipFilter = region;

    // Update button states
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
      if (btn.dataset.region === region) {
        btn.classList.add("bg-[#062047]", "text-white");
        btn.classList.remove("bg-white", "text-[#062047]");
      } else {
        btn.classList.remove("bg-[#062047]", "text-white");
        btn.classList.add("bg-white", "text-[#062047]");
      }
    });

    this.renderScholarships();
  },

  // Search Scholarships
  searchScholarships(query) {
    this.searchQuery = query.trim();
    this.renderScholarships();
  },

  // Reset Scholarship Filter
  resetScholarshipFilter() {
    this.activeScholarshipFilter = "all";
    this.searchQuery = "";
    const searchInput = document.getElementById("scholarship-search-input");
    if (searchInput) searchInput.value = "";
    this.filterScholarships("all");
  },

  // Handle Form Submission (Generates WhatsApp message link or Direct confirmation)
  handleConsultationSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("consult-name")?.value || "Student";
    const email = document.getElementById("consult-email")?.value || "";
    const phone = document.getElementById("consult-phone")?.value || "";
    const destination =
      document.getElementById("consult-dest")?.value || "Not Sure";
    const scholarship =
      document.getElementById("consult-scholarship")?.value || "General";
    const notes = document.getElementById("consult-notes")?.value || "";

    const message = `Hello StudySail Dhaka! I would like to book a free consultation session.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Target Destination:* ${destination}\n*Target Scholarship/Service:* ${scholarship}\n*Details:* ${notes}`;

    const whatsappUrl = `https://wa.me/8801700000000?text=${encodeURIComponent(message)}`;

    // Show confirmation in modal
    const container = document.getElementById("consultation-form-inner");
    if (container) {
      container.innerHTML = `
        <div class="text-center py-10 px-4">
          <div class="w-16 h-16 bg-[#C59B4B]/20 text-[#C59B4B] rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold">✓</div>
          <h3 class="font-display font-bold text-2xl text-[#062047] mb-3">Consultation Request Prepared!</h3>
          <p class="text-sm text-[#5F6B79] max-w-md mx-auto mb-6">
            Thank you, ${name}. You can instantly send your request details to our Dhaka office counselors on WhatsApp:
          </p>
          <a href="${whatsappUrl}" target="_blank" class="btn-primary inline-flex items-center gap-2 mb-4">
            <span>💬 Continue via WhatsApp</span>
            <span>➔</span>
          </a>
          <div>
            <button onclick="StudySail.closeModal()" class="text-xs text-gray-500 hover:text-[#062047] underline mt-3">Close</button>
          </div>
        </div>
      `;
    }
  },

  // Handle Direct Contact Form on the page
  handlePageContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("contact-name")?.value || "";
    const email = document.getElementById("contact-email")?.value || "";
    const dest = document.getElementById("contact-dest")?.value || "";
    const msg = document.getElementById("contact-msg")?.value || "";

    const text = `Hello StudySail! My name is ${name} (${email}). I'm interested in studying in ${dest}. My query: ${msg}`;
    window.open(
      `https://wa.me/8801700000000?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  },

  // Setup Event Listeners
  setupEventListeners() {
    // Close modal on click outside
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        this.closeModal();
      }
    });

    // Close on Escape key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });

    // Hash change routing
    window.addEventListener("hashchange", () => this.handleHashChange());
  },

  // Handle hash changes for direct URLs (e.g. #scholarship-si-scholarship)
  handleHashChange() {
    const hash = window.location.hash;
    if (!hash) return;

    if (hash.startsWith("#scholarship-")) {
      const id = hash.replace("#scholarship-", "");
      this.openScholarshipModal(id);
    } else if (hash.startsWith("#service-")) {
      const id = hash.replace("#service-", "");
      this.openServiceModal(id);
    }
  },
};

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  StudySail.init();
});
