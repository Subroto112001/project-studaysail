/**
 * StudySail — Global Script
 * Dynamic Header, Footer, Navigation Active State, Lucide Icons, Socials & Floating Connect Widget
 */

(function () {
  // Determine if current page is inside a subfolder (e.g. /Services/)
  const currentPath = window.location.pathname;
  const isSubfolder =
    currentPath.includes("/Services/") || currentPath.includes("/services/");
  const rootPrefix = isSubfolder ? "../" : "./";
  const servicesPrefix = isSubfolder ? "./" : "./Services/";

  // Brand Colors
  const brandNavy = "#032249";
  const brandGold = "#BD9147";
  const brandGoldDark = "#96742E";

  // Load Lucide Icons dynamically if not already present
  function ensureLucideLoaded(callback) {
    if (window.lucide) {
      if (callback) callback();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://unpkg.com/lucide@latest";
    script.async = true;
    script.onload = () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (callback) callback();
    };
    document.head.appendChild(script);
  }

  // Logo SVG Generator
  function getLogoSvg(size = "normal") {
    const isSmall = size === "small";
    return `
      <div class="flex items-center gap-3">
        <svg class="${isSmall ? "w-9 h-9" : "w-11 h-11"} shrink-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="52" r="46" stroke="#032249" stroke-width="4.5" fill="#FEFCF6"/>
          <path d="M42 22C46 22 52 25 54 30C56 35 52 42 48 44C44 46 36 42 34 36C32 30 36 22 42 22Z" fill="#BD9147" opacity="0.9"/>
          <path d="M68 20C74 20 86 26 88 32C90 38 84 46 80 48C74 50 68 44 68 36C68 28 72 20 68 20Z" fill="#BD9147" opacity="0.9"/>
          <path d="M38 48C42 48 46 54 44 60C42 66 36 72 32 70C28 68 26 58 30 52C34 46 38 48 38 48Z" fill="#BD9147" opacity="0.8"/>
          <path d="M72 52C78 52 86 60 84 66C82 72 74 76 70 72C66 68 66 58 72 52Z" fill="#BD9147" opacity="0.8"/>
          <path d="M30 84C42 81 55 90 70 85C80 81 92 84 98 87C92 89 80 94 68 91C54 88 42 90 30 84Z" fill="#BD9147"/>
          <path d="M26 76C44 73 68 83 94 65C84 81 56 83 26 76Z" fill="#032249"/>
          <path d="M58 24C58 24 64 48 82 66C68 67 56 62 58 24Z" fill="#032249"/>
          <path d="M54 32C54 32 48 48 34 65C44 66 52 61 54 32Z" fill="#032249"/>
        </svg>
        <div class="flex flex-col">
          <div class="flex items-baseline font-display font-bold ${isSmall ? "text-xl" : "text-2xl"} tracking-tight leading-none">
            <span class="text-[#032249]">Study</span><span class="text-[#BD9147]">Sail</span>
          </div>
          <div class="text-[8px] sm:text-[9px] font-bold tracking-[0.18em] text-[#032249] uppercase mt-1 flex items-center gap-1">
            <span class="w-2 h-px bg-[#BD9147]"></span>
            <span>DREAM. APPLY AND ACHIEVE</span>
            <span class="w-2 h-px bg-[#BD9147]"></span>
          </div>
        </div>
      </div>
    `;
  }

  // Determine current active page
  function getActiveNavKey() {
    const p = window.location.pathname.toLowerCase();
    if (p.includes("success-stories") || p.includes("stories"))
      return "success";
    if (p.includes("scholarship")) return "scholarship";
    if (
      p.includes("/services/") ||
      p.includes("service.html") ||
      p.includes("service")
    )
      return "service";
    if (p.includes("about")) return "about";
    if (p.includes("contact")) return "contact";
    if (p.endsWith("/") || p.includes("index.html") || p === "") return "home";
    return "";
  }

  // Render Header
  function renderGlobalHeader() {
    const root = document.getElementById("global-header-root");
    if (!root) return;

    const active = getActiveNavKey();

    const linkClass = (key) => {
      const isActive = active === key;
      if (isActive) {
        return "text-[#BD9147] font-bold border-b-2 border-[#BD9147] pb-1";
      }
      return "text-[#032249] hover:text-[#BD9147] transition-colors font-medium pb-1";
    };

    root.innerHTML = `  
      <!-- Main Header Bar -->
      <header class="sticky top-0 z-50 bg-[#FEFCF6]/95 backdrop-blur-md border-b border-[#032249]/10 transition-all duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
          
          <!-- Brand Logo -->
          <a href="${rootPrefix}index.html" class="flex items-center gap-3 no-underline group" aria-label="StudySail Home">
        <img src="${rootPrefix}assets/Image/logo.png" alt="StudySail Logo" class="w-[100px] h-[60px] shrink-0">
          </a>

          <!-- Desktop Navigation with Mega Menus -->
          <nav class="hidden lg:flex items-center gap-7 text-sm text-[#032249]" aria-label="Main Navigation">
            <a href="${rootPrefix}index.html" class="${linkClass("home")}">Home</a>
            
            <!-- Dedicated Scholarship Mega Menu -->
            <div class="relative nav-item py-4 group">
              <a href="${rootPrefix}Scholarship.html" class="flex items-center gap-1.5 ${linkClass("scholarship")}">
                <span>Scholarships</span>
                <i data-lucide="chevron-down" class="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200"></i>
              </a>

              <!-- Mega Menu Dropdown Container with padding bridge -->
              <div class="absolute top-full -left-20 xl:-left-12 pt-3 w-[680px] max-w-[92vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                <div class="bg-white border border-[#032249]/15 rounded-[10px] p-6 shadow-2xl">
                  
                  <!-- Mega Menu Header -->
                  <div class="flex items-center justify-between pb-4 mb-4 border-b border-[#032249]/10">
                    <div class="flex items-center gap-2.5">
                      <div class="w-8 h-8 rounded-full bg-[#FAF7EC] flex items-center justify-center text-[#BD9147]">
                        <i data-lucide="award" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h4 class="font-display font-bold text-sm text-[#032249]">Global Scholarship Programs</h4>
                        <p class="text-[11px] text-[#5F6B79]">Fully funded government & university awards for Bangladeshi applicants</p>
                      </div>
                    </div>
                    <a href="${rootPrefix}Scholarship.html" class="text-xs font-bold text-[#96742E] hover:text-[#032249] flex items-center gap-1">
                      <span>View Full Directory</span>
                      <i data-lucide="arrow-right" class="w-3 h-3"></i>
                    </a>
                  </div>

                  <!-- 2-Column Grid -->
                  <div class="grid grid-cols-2 gap-x-6 gap-y-1.5 text-left">
                    
                    <!-- Column 1: European Govt Scholarships -->
                    <div class="space-y-1.5">
                      <div class="text-[10px] font-bold text-[#BD9147] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <i data-lucide="globe" class="w-3 h-3 text-[#BD9147]"></i> European Govt Awards
                      </div>
                      
                      <a href="${servicesPrefix}si-scholarship-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">SE</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">SI Scholarship (Sweden)</p>
                          <p class="text-[10px] text-[#5F6B79]">SEK 12,000/mo + 100% Tuition</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}stipendium-hungaricum-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">HU</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Stipendium Hungaricum</p>
                          <p class="text-[10px] text-[#5F6B79]">Free Tuition + Dorm + BD Nominee</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}czech-republic-scholarship-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">CZ</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Czech Republic Govt</p>
                          <p class="text-[10px] text-[#5F6B79]">Full Tuition + Monthly Allowance</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}erasmus-and-other-scholarships.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">EU</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Erasmus Mundus & Others</p>
                          <p class="text-[10px] text-[#5F6B79]">Joint EU Master & Travel Grants</p>
                        </div>
                      </a>
                    </div>

                    <!-- Column 2: Prestigious Global Awards -->
                    <div class="space-y-1.5 border-l border-[#032249]/10 pl-6">
                      <div class="text-[10px] font-bold text-[#BD9147] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <i data-lucide="sparkles" class="w-3 h-3 text-[#BD9147]"></i> UK, USA & Asia Awards
                      </div>

                      <a href="${servicesPrefix}chinese-csc-scholarship-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">CN</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Chinese CSC Scholarship</p>
                          <p class="text-[10px] text-[#5F6B79]">RMB 3,500/mo + Free Housing</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}chevening-scholarship-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">UK</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Chevening Scholarship (UK)</p>
                          <p class="text-[10px] text-[#5F6B79]">Full UK Tuition + Living Stipend</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}fulbright-scholarship-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">US</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Fulbright USA & Graduate RA</p>
                          <p class="text-[10px] text-[#5F6B79]">100% Tuition Waiver + RA Salary</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}mext-scholarship-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">JP</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">MEXT Scholarship (Japan)</p>
                          <p class="text-[10px] text-[#5F6B79]">¥144,000/mo + Airfare + No Fees</p>
                        </div>
                      </a>
                    </div>

                  </div>

                  <!-- Minimal footer CTA line -->
                  <div class="mt-4 pt-4 border-t border-[#032249]/10 flex items-center justify-between">
                    <p class="text-[11px] text-[#5F6B79]">Not sure which scholarship fits your profile?</p>
                    <a href="${rootPrefix}Contact.html" class="text-xs font-bold text-[#96742E] hover:text-[#032249] flex items-center gap-1">
                      <span>Book Free Audit</span>
                      <i data-lucide="arrow-right" class="w-3 h-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dedicated Services Mega Menu -->
            <div class="relative nav-item py-4 group">
              <a href="${rootPrefix}Service.html" class="flex items-center gap-1.5 ${linkClass("service")}">
                <span>Services</span>
                <i data-lucide="chevron-down" class="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200"></i>
              </a>

              <!-- Mega Menu Dropdown Container with padding bridge -->
              <div class="absolute top-full -left-48 xl:-left-36 pt-3 w-[680px] max-w-[92vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                <div class="bg-white border border-[#032249]/15 rounded-[10px] p-6 shadow-2xl">
                  
                  <!-- Mega Menu Header -->
                  <div class="flex items-center justify-between pb-4 mb-4 border-b border-[#032249]/10">
                    <div class="flex items-center gap-2.5">
                      <div class="w-8 h-8 rounded-full bg-[#FAF7EC] flex items-center justify-center text-[#BD9147]">
                        <i data-lucide="compass" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h4 class="font-display font-bold text-sm text-[#032249]">Admissions & Coaching Modules</h4>
                        <p class="text-[11px] text-[#5F6B79]">Live 1-on-1 screen-share guidance from shortlisting to visa issuance</p>
                      </div>
                    </div>
                    <a href="${rootPrefix}Service.html" class="text-xs font-bold text-[#96742E] hover:text-[#032249] flex items-center gap-1">
                      <span>View All 8 Services</span>
                      <i data-lucide="arrow-right" class="w-3 h-3"></i>
                    </a>
                  </div>

                  <!-- 2-Column Grid -->
                  <div class="grid grid-cols-2 gap-x-6 gap-y-1.5 text-left">
                    
                    <!-- Column 1: Core Admissions Prep -->
                    <div class="space-y-1.5">
                      <div class="text-[10px] font-bold text-[#BD9147] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <i data-lucide="file-edit" class="w-3 h-3 text-[#BD9147]"></i> Application Essentials
                      </div>

                      <a href="${servicesPrefix}university-course-selection.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">01</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">University & Course Selection</p>
                          <p class="text-[10px] text-[#5F6B79]">Targeted shortlists tailored to grades</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}application-assistance.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">02</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Application Assistance</p>
                          <p class="text-[10px] text-[#5F6B79]">Live screen-share portal submission</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}sop-lor-guidance.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">03</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">SOP & LOR Writing Sprints</p>
                          <p class="text-[10px] text-[#5F6B79]">Authentic motivation essays & referee kits</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}one-to-one-counselling-mentorship.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">04</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">1-on-1 Virtual Mentorship</p>
                          <p class="text-[10px] text-[#5F6B79]">Dedicated video sessions via Meet/Zoom</p>
                        </div>
                      </a>
                    </div>

                    <!-- Column 2: Outreach & Specialized Admissions -->
                    <div class="space-y-1.5 border-l border-[#032249]/10 pl-6">
                      <div class="text-[10px] font-bold text-[#BD9147] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <i data-lucide="shield-check" class="w-3 h-3 text-[#BD9147]"></i> Research & Visa Support
                      </div>

                      <a href="${servicesPrefix}usa-email-application-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">05</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">USA Email & RA Outreach</p>
                          <p class="text-[10px] text-[#5F6B79]">Cold emailing US professors for waivers</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}australia-email-application-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">06</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Australia RTP & Supervisor</p>
                          <p class="text-[10px] text-[#5F6B79]">Research proposals & Go8 matching</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}common-app-application-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">07</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Common App (Undergrad)</p>
                          <p class="text-[10px] text-[#5F6B79]">US college essays & activities list</p>
                        </div>
                      </a>

                      <a href="${servicesPrefix}visa-application-support.html" class="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EC] transition-colors">
                        <span class="text-[10px] font-bold bg-[#FAF7EC] group-hover/item:bg-[#BD9147] group-hover/item:text-white text-[#96742E] px-1.5 py-0.5 rounded mt-0.5 transition-colors">08</span>
                        <div>
                          <p class="text-xs font-bold text-[#032249] group-hover/item:text-[#BD9147] transition-colors">Visa & Mock Interview</p>
                          <p class="text-[10px] text-[#5F6B79]">Financial verification & embassy mock</p>
                        </div>
                      </a>
                    </div>

                  </div>

                  <!-- Minimal footer CTA line -->
                  <div class="mt-4 pt-4 border-t border-[#032249]/10 flex items-center justify-between">
                    <p class="text-[11px] text-[#5F6B79]">Ready to start your application, self-directed?</p>
                    <a href="${rootPrefix}Contact.html" class="text-xs font-bold text-[#96742E] hover:text-[#032249] flex items-center gap-1">
                      <span>Schedule Strategy Call</span>
                      <i data-lucide="arrow-right" class="w-3 h-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          
            <!-- About Us -->
            <a href="${rootPrefix}About.html" class="${linkClass("about")}">About Us</a>
            
            <!-- Contact -->
            <a href="${rootPrefix}Contact.html" class="${linkClass("contact")}">Contact</a>
          </nav>

          <!-- Book Online Consultation Button (desktop only) & Mobile Toggle -->
          <div class="flex items-center gap-3">
            <a href="${rootPrefix}Contact.html" class="book-btn hidden lg:inline-flex bg-[#BD9147] hover:bg-[#96742E] text-[#032249] hover:text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-[#BD9147] transition-all shadow-sm items-center gap-2">
              <i data-lucide="calendar" class="w-4 h-4"></i>
              <span>Book Online Meeting</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
            
            <button id="mobile-menu-toggle" class="lg:hidden p-2 text-[#032249] rounded-lg hover:bg-[#F3EEDD] focus:outline-none" aria-label="Toggle menu">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>

        </div>

        <!-- Mobile Nav Menu -->
        <div id="mobile-nav-drawer" class="hidden lg:hidden bg-[#FEFCF6] border-b border-[#032249]/10 px-6 py-5 shadow-xl max-h-[80vh] overflow-y-auto">
          <div class="flex flex-col text-sm font-semibold text-[#032249]">

            <a href="${rootPrefix}index.html" class="py-3 flex items-center gap-3 border-b border-black/5 ${active === "home" ? "text-[#BD9147]" : ""}">
              <i data-lucide="home" class="w-[18px] h-[18px] ${active === "home" ? "text-[#BD9147]" : "text-[#032249]/60"}"></i>
              <span>Home</span>
            </a>

            <!-- Scholarships Accordion -->
            <div class="border-b border-black/5">
              <button id="mobile-toggle-scholarship" type="button" class="w-full py-3 flex items-center justify-between ${active === "scholarship" ? "text-[#BD9147]" : ""}">
                <span class="flex items-center gap-3">
                  <i data-lucide="award" class="w-[18px] h-[18px] ${active === "scholarship" ? "text-[#BD9147]" : "text-[#032249]/60"}"></i>
                  <span>Scholarships</span>
                </span>
                <i data-lucide="chevron-down" id="mobile-chevron-scholarship" class="w-4 h-4 text-[#032249]/50 transition-transform duration-200"></i>
              </button>
              <div id="mobile-accordion-scholarship" class="hidden flex-col pb-3 pl-8">
                <a href="${servicesPrefix}si-scholarship-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>SI Scholarship (Sweden)</span>
                </a>
                <a href="${servicesPrefix}stipendium-hungaricum-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>Stipendium Hungaricum</span>
                </a>
                <a href="${servicesPrefix}czech-republic-scholarship-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>Czech Republic Govt</span>
                </a>
                <a href="${servicesPrefix}erasmus-and-other-scholarships.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>Erasmus Mundus & Others</span>
                </a>
                <a href="${servicesPrefix}chinese-csc-scholarship-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>Chinese CSC Scholarship</span>
                </a>
                <a href="${servicesPrefix}chevening-scholarship-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>Chevening Scholarship (UK)</span>
                </a>
                <a href="${servicesPrefix}fulbright-scholarship-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>Fulbright USA & Graduate RA</span>
                </a>
                <a href="${servicesPrefix}mext-scholarship-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="graduation-cap" class="w-4 h-4 text-[#BD9147]"></i><span>MEXT Scholarship (Japan)</span>
                </a>
                <a href="${rootPrefix}Scholarship.html" class="pt-2 mt-1 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-[#96742E]">
                  <i data-lucide="arrow-right" class="w-4 h-4"></i><span>View Full Directory</span>
                </a>
              </div>
            </div>

            <!-- Services Accordion -->
            <div class="border-b border-black/5">
              <button id="mobile-toggle-service" type="button" class="w-full py-3 flex items-center justify-between ${active === "service" ? "text-[#BD9147]" : ""}">
                <span class="flex items-center gap-3">
                  <i data-lucide="compass" class="w-[18px] h-[18px] ${active === "service" ? "text-[#BD9147]" : "text-[#032249]/60"}"></i>
                  <span>Services</span>
                </span>
                <i data-lucide="chevron-down" id="mobile-chevron-service" class="w-4 h-4 text-[#032249]/50 transition-transform duration-200"></i>
              </button>
              <div id="mobile-accordion-service" class="hidden flex-col pb-3 pl-8">
                <a href="${servicesPrefix}university-course-selection.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="file-edit" class="w-4 h-4 text-[#BD9147]"></i><span>University & Course Selection</span>
                </a>
                <a href="${servicesPrefix}application-assistance.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="file-edit" class="w-4 h-4 text-[#BD9147]"></i><span>Application Assistance</span>
                </a>
                <a href="${servicesPrefix}sop-lor-guidance.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="file-edit" class="w-4 h-4 text-[#BD9147]"></i><span>SOP & LOR Writing Sprints</span>
                </a>
                <a href="${servicesPrefix}one-to-one-counselling-mentorship.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="file-edit" class="w-4 h-4 text-[#BD9147]"></i><span>1-on-1 Virtual Mentorship</span>
                </a>
                <a href="${servicesPrefix}usa-email-application-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="shield-check" class="w-4 h-4 text-[#BD9147]"></i><span>USA Email & RA Outreach</span>
                </a>
                <a href="${servicesPrefix}australia-email-application-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="shield-check" class="w-4 h-4 text-[#BD9147]"></i><span>Australia RTP & Supervisor</span>
                </a>
                <a href="${servicesPrefix}common-app-application-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="shield-check" class="w-4 h-4 text-[#BD9147]"></i><span>Common App (Undergrad)</span>
                </a>
                <a href="${servicesPrefix}visa-application-support.html" class="py-2 flex items-center gap-2.5 text-xs font-medium text-[#032249]/80">
                  <i data-lucide="shield-check" class="w-4 h-4 text-[#BD9147]"></i><span>Visa & Mock Interview</span>
                </a>
                <a href="${rootPrefix}Service.html" class="pt-2 mt-1 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-[#96742E]">
                  <i data-lucide="arrow-right" class="w-4 h-4"></i><span>View All Services</span>
                </a>
              </div>
            </div>

            <a href="${rootPrefix}Success-Stories.html" class="py-3 flex items-center gap-3 border-b border-black/5 ${active === "success" ? "text-[#BD9147]" : ""}">
              <i data-lucide="star" class="w-[18px] h-[18px] ${active === "success" ? "text-[#BD9147]" : "text-[#032249]/60"}"></i>
              <span>Success Stories</span>
            </a>
            <a href="${rootPrefix}About.html" class="py-3 flex items-center gap-3 border-b border-black/5 ${active === "about" ? "text-[#BD9147]" : ""}">
              <i data-lucide="info" class="w-[18px] h-[18px] ${active === "about" ? "text-[#BD9147]" : "text-[#032249]/60"}"></i>
              <span>About Us</span>
            </a>
            <a href="${rootPrefix}Contact.html" class="py-3 flex items-center gap-3 ${active === "contact" ? "text-[#BD9147]" : ""}">
              <i data-lucide="phone" class="w-[18px] h-[18px] ${active === "contact" ? "text-[#BD9147]" : "text-[#032249]/60"}"></i>
              <span>Contact</span>
            </a>

            <!-- Social Links in Mobile Menu -->
            <div class="pt-4 mt-2 border-t border-black/5 flex items-center gap-4">
              <a href="https://wa.me/8801786825273?text=Hello%20StudySail%2C%20I%20would%20like%20to%20book%20a%20free%20online%20consultation." target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                <span>WhatsApp</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61593811200768" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                <span>Facebook</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200">
                <span>LinkedIn</span>
              </a>
            </div>

            <div class="pt-3">
              <a href="${rootPrefix}Contact.html" class="flex items-center justify-center gap-2 w-full bg-[#BD9147] hover:bg-[#96742E] text-[#032249] hover:text-white font-bold py-3 rounded-full text-center transition-colors">
                <i data-lucide="video" class="w-4 h-4"></i>
                <span>Book Online Meeting</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    `;

    // Add mobile menu toggle logic
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const drawer = document.getElementById("mobile-nav-drawer");
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener("click", () => {
        drawer.classList.toggle("hidden");
        if (window.lucide) window.lucide.createIcons();
      });
    }

    // Accordion logic for mobile Scholarships & Services dropdowns
    const setupMobileAccordion = (toggleId, panelId, chevronId) => {
      const toggle = document.getElementById(toggleId);
      const panel = document.getElementById(panelId);
      const chevron = document.getElementById(chevronId);
      if (toggle && panel) {
        toggle.addEventListener("click", () => {
          const isOpen = panel.classList.contains("flex");
          panel.classList.toggle("hidden");
          panel.classList.toggle("flex");
          if (chevron) chevron.classList.toggle("rotate-180", !isOpen);
        });
      }
    };
    setupMobileAccordion(
      "mobile-toggle-scholarship",
      "mobile-accordion-scholarship",
      "mobile-chevron-scholarship",
    );
    setupMobileAccordion(
      "mobile-toggle-service",
      "mobile-accordion-service",
      "mobile-chevron-service",
    );

    if (window.lucide) window.lucide.createIcons();
  }

  // Render Global Floating WhatsApp & Social Connect Widget
  function renderFloatingConnectWidget() {
    let container = document.getElementById("floating-connect-widget");
    if (!container) {
      container = document.createElement("div");
      container.id = "floating-connect-widget";
      document.body.appendChild(container);
    }

    container.innerHTML = `
      <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        
        <!-- Social Mini Badges -->
        <div id="social-expandable" class="hidden flex-col gap-2 transition-all duration-300">
          <a href="https://www.facebook.com/profile.php?id=61593811200768" target="_blank" rel="noopener noreferrer" 
             class="flex items-center gap-2 bg-[#1877F2] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform" 
             title="Follow us on Facebook">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.356 5 15.657 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/></svg>
            <span>Facebook Page</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             class="flex items-center gap-2 bg-[#0A66C2] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform" 
             title="Connect on LinkedIn">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            <span>LinkedIn Network</span>
          </a>
          <a href="${rootPrefix}Contact.html" 
             class="flex items-center gap-2 bg-[#032249] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform" 
             title="Book Google Meet / Zoom">
            <i data-lucide="video" class="w-4 h-4 text-[#BD9147]"></i>
            <span>Schedule Video Call</span>
          </a>
        </div>

        <!-- Primary WhatsApp Float Button -->
        <div class="flex items-center gap-2">
          <button id="toggle-social-links" class="bg-white border border-black/15 text-[#032249] p-3 rounded-full shadow-lg hover:bg-[#FAF7EC] transition-all" title="Toggle Social Options">
            <i data-lucide="share-2" class="w-5 h-5 text-[#032249]"></i>
          </button>
          
          <a href="https://wa.me/8801786825273?text=Hello%20StudySail%2C%20I%20would%20like%20to%20book%20a%20free%20online%20consultation." 
             target="_blank" 
             rel="noopener noreferrer" 
             class="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-all group"
             title="Direct WhatsApp Consultation (Phone & Desktop)">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.178 1.564 5.926l-1.664 6.074 6.223-1.633c1.7 1.002 3.69 1.633 5.877 1.633 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/></svg>
            <span class="hidden sm:inline">WhatsApp Chat</span>
          </a>
        </div>

      </div>
    `;

    const toggleBtn = document.getElementById("toggle-social-links");
    const expandable = document.getElementById("social-expandable");
    if (toggleBtn && expandable) {
      toggleBtn.addEventListener("click", () => {
        expandable.classList.toggle("hidden");
        expandable.classList.toggle("flex");
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Render Footer
  function renderGlobalFooter() {
    const root = document.getElementById("global-footer-root");
    if (!root) return;

    root.innerHTML = `
      <footer class="bg-[#03152F] text-white pt-20 pb-12 border-t border-[#BD9147]/20">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            <!-- Brand Column -->
            <div class="lg:col-span-2">
              <div class="mb-5">
              
          <!-- Brand Logo -->
          <a href="${rootPrefix}index.html" class="flex items-center gap-3 no-underline group" aria-label="StudySail Home">
        <img src="${rootPrefix}assets/Image/darklogo.png" alt="StudySail Logo" class="w-[110px] h-[80px] shrink-0">
          </a>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed max-w-sm mb-6">
                Your Global Education Partner. StudySail coaches Bangladeshi and international students through 100% online mentorship, honest admissions, full scholarships, and visa protocols — without commission-driven university pushing.
              </p>
              
  

              <!-- Social Links -->
              <div class="flex items-center gap-3">
                <a href="https://wa.me/8801786825273?text=Hello%20StudySail%2C%20I%20would%20like%20to%20book%20a%20free%20online%20consultation."
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors" 
                   title="Chat on WhatsApp">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.178 1.564 5.926l-1.664 6.074 6.223-1.633c1.7 1.002 3.69 1.633 5.877 1.633 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61593811200768" target="_blank" rel="noopener noreferrer" 
                   class="w-9 h-9 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center transition-colors" 
                   title="Facebook Page">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.356 5 15.657 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   class="w-9 h-9 rounded-full bg-[#0A66C2] hover:bg-sky-600 text-white flex items-center justify-center transition-colors" 
                   title="LinkedIn Profile">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
              </div>
            </div>

            <!-- Dedicated Scholarships Links -->
            <div>
              <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#BD9147] mb-5 flex items-center gap-2">
                <i data-lucide="award" class="w-4 h-4"></i> Scholarships
              </h4>
              <ul class="space-y-2.5 text-xs text-gray-300">
                <li><a href="${servicesPrefix}si-scholarship-support.html" class="hover:text-[#BD9147] transition-colors">SI Scholarship (Sweden)</a></li>
                <li><a href="${servicesPrefix}stipendium-hungaricum-support.html" class="hover:text-[#BD9147] transition-colors">Stipendium Hungaricum</a></li>
                <li><a href="${servicesPrefix}chinese-csc-scholarship-support.html" class="hover:text-[#BD9147] transition-colors">Chinese CSC Scholarship</a></li>
                <li><a href="${servicesPrefix}chevening-scholarship-support.html" class="hover:text-[#BD9147] transition-colors">Chevening Scholarship (UK)</a></li>
                <li><a href="${servicesPrefix}czech-republic-scholarship-support.html" class="hover:text-[#BD9147] transition-colors">Czech Republic Scholarship</a></li>
                <li><a href="${servicesPrefix}fulbright-scholarship-support.html" class="hover:text-[#BD9147] transition-colors">Fulbright Scholarship (USA)</a></li>
                <li><a href="${servicesPrefix}mext-scholarship-support.html" class="hover:text-[#BD9147] transition-colors">MEXT Scholarship (Japan)</a></li>
                <li><a href="${servicesPrefix}erasmus-and-other-scholarships.html" class="hover:text-[#BD9147] transition-colors">Erasmus & Other Awards</a></li>
                <li><a href="${rootPrefix}Scholarship.html" class="text-[#BD9147] font-bold hover:underline mt-1 inline-flex items-center gap-1">View Scholarships Hub <i data-lucide="arrow-right" class="w-3 h-3"></i></a></li>
              </ul>
            </div>

            <!-- Consultancy Services Links -->
            <div>
              <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#BD9147] mb-5 flex items-center gap-2">
                <i data-lucide="compass" class="w-4 h-4"></i> Services
              </h4>
              <ul class="space-y-2.5 text-xs text-gray-300">
                <li><a href="${servicesPrefix}usa-email-application-support.html" class="hover:text-[#BD9147] transition-colors">USA Email & RA Outreach</a></li>
                <li><a href="${servicesPrefix}australia-email-application-support.html" class="hover:text-[#BD9147] transition-colors">Australia Supervisor Outreach</a></li>
                <li><a href="${servicesPrefix}common-app-application-support.html" class="hover:text-[#BD9147] transition-colors">Common App Support</a></li>
                <li><a href="${servicesPrefix}one-to-one-counselling-mentorship.html" class="hover:text-[#BD9147] transition-colors">1-on-1 Mentorship</a></li>
                <li><a href="${servicesPrefix}university-course-selection.html" class="hover:text-[#BD9147] transition-colors">Course & University Selection</a></li>
                <li><a href="${servicesPrefix}application-assistance.html" class="hover:text-[#BD9147] transition-colors">Application Assistance</a></li>
                <li><a href="${servicesPrefix}sop-lor-guidance.html" class="hover:text-[#BD9147] transition-colors">SOP & LOR Coaching</a></li>
                <li><a href="${servicesPrefix}visa-application-support.html" class="hover:text-[#BD9147] transition-colors">Visa Application Support</a></li>
                <li><a href="${rootPrefix}Service.html" class="text-[#BD9147] font-bold hover:underline mt-1 inline-flex items-center gap-1">View All Services <i data-lucide="arrow-right" class="w-3 h-3"></i></a></li>
              </ul>
            </div>

            <!-- Online Consultation & Connect -->
            <div>
              <h4 class="font-display font-bold text-sm tracking-wider uppercase text-[#BD9147] mb-5 flex items-center gap-2">
                <i data-lucide="video" class="w-4 h-4"></i> Online Meeting
              </h4>
              <ul class="space-y-3 text-xs text-gray-300">
                <li class="flex items-start gap-2">
                  <i data-lucide="globe" class="w-4 h-4 text-[#BD9147] shrink-0 mt-0.5"></i>
                  <span>100% Online Consulting (Google Meet & Zoom)</span>
                </li>
                <li class="flex items-start gap-2">
                  <i data-lucide="clock" class="w-4 h-4 text-[#BD9147] shrink-0 mt-0.5"></i>
                  <span>Everyday: 10:00 AM – 10:00 PM BST</span>
                </li>
                <li class="flex items-start gap-2">
                  <i data-lucide="message-square" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                  <a href="https://wa.me/8801786825273?text=Hello%20StudySail%2C%20I%20would%20like%20to%20book%20a%20free%20online%20consultation." target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">
                    WhatsApp: +880 1786-825273
                  </a>
                </li>
                <li class="flex items-start gap-2">
                  <i data-lucide="mail" class="w-4 h-4 text-[#BD9147] shrink-0 mt-0.5"></i>
                  <a href="mailto:hello@studysail.com" class="hover:text-white">hello@studysail.com</a>
                </li>
              </ul>
              <a href="${rootPrefix}Contact.html" class="mt-5 flex items-center justify-center gap-2 text-center bg-[#BD9147] hover:bg-[#96742E] text-[#032249] hover:text-white font-bold text-xs py-2.5 rounded-full transition-colors">
                <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                <span>Schedule Free Session</span>
              </a>
            </div>

          </div>

          <!-- Bottom Bar -->
          <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 StudySail. All rights reserved.</p>
            <a href="https://skbarman.com" class="hover:text-[#BD9147] transition-colors">Developed by Subroto Kumar Barman</a>
          </div>

        </div>
      </footer>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // Auto initialize on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    ensureLucideLoaded(() => {
      renderGlobalHeader();
      renderGlobalFooter();
      renderFloatingConnectWidget();
    });
  });
})();
