/* ========================================
   Al-Marjeia - Vanilla JavaScript
   Complete migration from React
   ======================================== */

// --- Language Management ---
const LanguageManager = {
  current: "en",
  translations: {
    ar: {
      logo: "المرجعية",

      // pages titles
      indexTitle: "المرجعية - حيث تلتقي الرؤية بالتميز",
      aboutTitle: "عن المرجعية | قصتنا، رؤيتنا ورسالتنا",
      servicesTitle: "خدمات المرجعية | حلول العلاقات العامة الشاملة",
      portfolioTitle: "أعمال المرجعية | نتائج ملموسة وتجارب لا تُنسى",
      contactTitle: "اتصل بمرجعية | ابدأ رحلتك معنا",

      // Header & Navigation
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      portfolio: "أعمالنا",
      contact: "اتصل بنا",
      getInTouch: "تواصل معنا",

      /* ========================================
   index.html Translations
   ======================================== */

      // Hero Section
      heroTitleLine1: "حيث تتقابل الرؤية",
      heroTitleLine2: "لإدارة <span class='highlight'>العلاقات العامة</span>",
      heroSubtitle:
        "تقدم المرجعية حلول اتصال استراتيجية، وإدارة فعالة للفعاليات، وابتكارات رقمية تحول العلامات التجارية وتخلق تأثيراً دائمًا في الشرق الأوسط وما بعده.",
      exploreServices: "اكتشف خدماتنا",
      viewOurWork: "شاهد أعمالنا",

      // Why Choose Us Section
      whyChooseUs: "لماذا تختار المرجعية",
      whyChooseUsTitle: "تميز يقدم نتائج ملموسة",
      whyChooseUsSubtitle:
        "نحن نجمع بين التفكير الاستراتيجي والتنفيذ المثالي لتقديم نتائج قابلة للقياس ترفع من مستوى علامتك التجارية وتدفع نمو الأعمال.",
      feature1Title: "استراتيجيات مدعومة بالبيانات",
      feature1Desc:
        "تستند قراراتنا إلى تحليل شامل للسوق والبيانات في الوقت الفعلي، مما يضمن أقصى عائد على الاستثمار لكل حملة.",
      feature2Title: "فريق من الخبراء",
      feature2Desc:
        "فريق متنوع من متخصصي العلاقات العامة والخبراء الرقميين ومديري الفعاليات يتمتعون بخبرة إقليمية عميقة ورؤية عالمية.",
      feature3Title: "نهج مبتكر",
      feature3Desc:
        "نمزج الإبداع مع التكنولوجيا لتقديم حلول متطورة تبرز في المشهد التنافسي اليوم.",

      //Latest Projects Section
      latestProjects: "أحدث المشاريع",
      latestProjectsTitle: "قصص نجاح حديثة",
      latestProjectsSubtitle:
        "استكشف بعض حملاتنا الأخيرة التي حققت نتائج استثنائية وخلقت تأثيراً دائمًا لعملائنا.",
      viewAllProjects: "عرض جميع المشاريع",
      /* ========================================
   services.html Translations
   ======================================== */

      // Services Page Hero Section
      servicesHeroAlt: "خدمات المرجعية - حلول العلاقات العامة الشاملة",
      servicesHeroTitle: "تميز متكامل في الاتصالات",
      servicesHeroSubtitle:
        "من العلاقات العامة الاستراتيجية إلى إدارة الفعاليات الغامرة والحلول الرقمية المتطورة، نقدم خدمات شاملة مصممة لرفع مستوى علامتك التجارية وتحقيق نتائج قابلة للقياس.",

      // Services Section
      whatWeDo: "ما نقدمه",
      ourServices: "خدماتنا",
      servicesSubtitle:
        "حلول شاملة مصممة خصيصًا لرفع مستوى علامتك التجارية وتحقيق نتائج استثنائية في كل نقطة اتصال.",
      publicRelations: "العلاقات العامة",
      prDescription:
        "علاقات إعلامية استراتيجية، وإدارة الأزمات، ورواية قصص العلامة التجارية التي تشكل الرأي العام وتبني سمعة دائمة.",
      mediaRelations: "العلاقات الإعلامية",
      crisisCommunications: "اتصالات الأزمات",
      pressReleases: "البيانات الصحفية",
      eventManagement: "إدارة الفعاليات",
      eventDescription:
        "تنفيذ فعاليات متكاملة من المفهوم إلى الإكمال، لخلق تجارب لا تنسى تجذب وتلهم.",
      corporateEvents: "الفعاليات المؤسسية",
      conferences: "المؤتمرات",
      productLaunches: "إطلاق المنتجات",
      digitalServices: "الخدمات الرقمية",
      digitalDescription:
        "حلول رقمية متطورة تحول وجودك على الإنترنت وتدفع نموًا تجاريًا قابلًا للقياس.",
      webDevelopment: "تطوير الويب",
      digitalStrategy: "الإستراتيجية الرقمية",
      uxuiDesign: "تصميم واجهة المستخدم",
      socialMedia: "وسائل التواصل الاجتماعي",
      socialDescription:
        "إدارة إستراتيجية لوسائل التواصل الاجتماعي تبني المجتمعات، وتدفع المشاركة، وتضخم صوت علامتك التجارية.",
      contentStrategy: "إستراتيجية المحتوى",
      communityManagement: "إدارة المجتمع",
      analytics: "التحليلات",
      motorsport: "رياضة السيارات",
      motorsportDescription:
        "اتصالات رياضة ميكانيكية متخصصة وإدارة فعاليات، تقديم تجارب عالية الطاقة لعشاق السباق.",
      raceEvents: "فعاليات السباق",
      sponsorship: "الرعاية",
      brandActivation: "تفعيل العلامة التجارية",
      learnMore: "المزيد",

      // Timeline Section
      ourProcess: "عمليتنا",
      successJourney: "رحلة <span class='highlight'>نجاحك</span>",
      timelineSubtitle:
        "خطوات سير عمل متكاملة لضمان نجاح مشروعك من المفهوم إلى الإكمال.",
      consultation: "استشارة",
      consultationDesc: "فهم رؤيتك ومتطلباتك",
      planning: "تخطيط",
      planningDesc: "خارطة طريق إستراتيجية ومفاهيم إبداعية",
      execution: "تنفيذ",
      executionDesc: "تنفيذ وإدارة مثالية",
      monitoring: "مراقبة",
      monitoringDesc: "تتبع وتحسين في الوقت الحقيقي",
      evaluation: "تقييم",
      evaluationDesc: "قياس النجاح والتأثير",

      /* ========================================
   services.html Translations
   ======================================== */

      // About Page Hero Section
      aboutHeroAlt: "المرجعية - فريقنا ورؤيتنا",
      aboutHeroTitle: "تشكيل السرديات، وبناء الإرث",
      aboutHeroSubtitle:
        "اكتشف القصة وراء المرجعية، حيث تلتقي البصيرة الثقافية بالتميز العالمي في العلاقات العامة. نحن أكثر من مجرد وكالة – نحن شركاء استراتيجيون في صياغة قصص مؤثرة تتردد صداها في الشرق الأوسط وما بعده.",

      // About Section
      aboutAlMarjeia: "المرجعية",
      relationsManagement: "حيث تلتقي الرؤية بالتميز",
      aboutText1:
        "تتبوأ شركة (المرجعية) مكانة رائدة في قطاع العلاقات العامة بالمملكة العربية السعودية، حيث نمزج ببراعة بين المعايير العالمية في الاتصال وبين الفهم العميق للثقافة المحلية",
      aboutText2:
        "نحن لا نقدم خدمات علاقات عامة فحسب، بل نحن شركاء استراتيجيون وصناع قصص، نأخذ على عاتقنا بناء سرديات وطنية وعلامات تجارية ذات ثقل، مرتكزين في ذلك على المصداقية والاحترافية.",
      contactWithUs: "تواصل معنا",
      ourStory: "قصتنا",
      ourStoryText:
        "عندما أطلقنا (المرجعية)، لم يكن هدفنا أن نكون الشركة الأكبر حجمًا، بل الشركة الأكثر جدارة بالثقة. لذا، ارتكزت رحلة نمونا على فهم نبض السوق السعودي، وتبني الابتكار، والالتزام بمبادئ التواصل الأصيل. ولا يزال وعدنا لعملائنا ثابتًا: صياغة قصص مؤثرة وتحقيق نتائج مستدامة تتردد أصداؤها طويلًا.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نكون 'المرجعية' الأولى، والوكالة الأكثر تأثيرًا وموثوقية في قطاع العلاقات العامة بالمملكة والمنطقة، من خلال بناء جسور متينة بين العلامات التجارية وجمهورها عبر قصص ملهمة وحملات إبداعية.",
      missionTitle: "رسالتنا",
      missionText:
        "العمل كحليف استراتيجي لعملائنا، لتمكينهم من بناء علاقات حقيقية ومثمرة مع جمهورهم، مدعومة بحملات مصممة خصيصًا لتحدث أثرًا ملموسًا وتصنع فارقًا حقيقيًا.",

      /* ========================================
   protfolio.html Translations
   ======================================== */

      // Portfolio Page Hero Section
      portfolioHeroAlt: "محفظة المرجعية - مشاريعنا المميزة",
      portfolioHeroTitle: "حيث تتحول الرؤية إلى تأثير",
      portfolioHeroSubtitle:
        "استكشف محفظتنا من الحملات والفعاليات الناجحة التي حولت العلامات التجارية، وجذبت الجماهير، وخلقت تأثيراً دائمًا عبر الصناعات المتنوعة في الشرق الأوسط.",

      // Portfolio Section
      ourWork: "أعمالنا",
      featuredProjects: "مشاريع مميزة",
      globalTechSummit: "قمة التكنولوجيا العالمية 2023",
      globalTechDescription:
        "مؤتمر تكنولوجيا دولي لمدة ثلاثة أيام يجمع أكثر من 2000 قائد صناعي من حول العالم.",
      greenInitiativeTitle: "حملة التوعية بالمبادرة الخضراء السعودية",
      greenInitiativeDescription:
        "حملة وطنية بيئية تروج لأهداف المبادرة الخضراء السعودية، وصلت إلى 12 مليون سعودي وحشدت أكثر من 1000 متطوع مجتمعي.",
      digitalTransformation: "مبادرة التحول الرقمي",
      digitalTransformationDescription:
        "تحديث رقمي كامل لمقدم خدمات مالية رائد، زاد المشاركة بنسبة 300٪.",
      championshipRacing: "سلسلة السباقات للبطولة",
      championshipRacingDescription:
        "إدارة فعاليات واتصالات متكاملة لبطولة السباق الرئيسية في المنطقة.",
      socialImpact: "حملة التأثير الاجتماعي",
      socialImpactDescription:
        "حملة اجتماعية فيروسية وصلت لأكثر من 10 مليون مستخدم للتوعية البيئية والاستدامة.",
      viewProject: "عرض المشروع",

      // Testimonials Section
      testimonials: "آراء العملاء",
      whatOurClientsSay: "ماذا يقول عملاؤنا",
      testimonialsSubtitle:
        "موثوق به من قبل العلامات التجارية الرائدة في الشرق الأوسط وما بعده. إليك ما يقولونه عن العمل معنا.",

      testimonial1Text:
        "حولت المرجعية إطلاق علامتنا التجارية إلى ظاهرة على مستوى البلاد. نهجهم الاستراتيجي وتنفيذهم المثالي تجاوز كل التوقعات.",
      testimonial1Name: "فهد القاسم",
      testimonial1Position: "الرئيس التنفيذي، مجموعة القاسم القابضة",

      testimonial2Text:
        "جعلنا فريق المرجعية القمة التقنية تجربة لا تُنسى. محترفون، مبتكرون، وملتزمون بعمق.",
      testimonial2Name: "نورة المنصور",
      testimonial2Position: "مديرة التسويق، تيك فيجن العربية",

      testimonial3Text:
        "من الفكرة إلى خط النهاية، قدمت المرجعية فعاليات رياضية استحوذت على قلوب عشاق السباق في جميع أنحاء المنطقة.",
      testimonial3Name: "سعود الفارسي",
      testimonial3Position: "المؤسس، سباق الصحراء",

      testimonial4Text:
        "أحدثت خبرتهم في التحول الرقمي ثورة في وجودنا الإلكتروني. النتائج تتحدث عن نفسها - زيادة 300٪ في المشاركة.",
      testimonial4Name: "ليلى الحربي",
      testimonial4Position: "مديرة التسويق، شركاء الخليج المالي",

      testimonial5Text:
        "حملة التواصل الاجتماعي التي أنشأوها لقضيتنا البيئية وصلت للملايين وقادت تغييراً حقيقياً. عمل مؤثر حقاً.",
      testimonial5Name: "خالد العتيبي",
      testimonial5Position: "المدير، مبادرة الصحراء الخضراء",

      testimonial6Text:
        "في اتصالات الأزمات، أثبتت المرجعية أنها لا تقدر بثمن. إرشادهم الاستراتيجي حمى سمعتنا خلال الأوقات الصعبة.",
      testimonial6Name: "محمد الزهراني",
      testimonial6Position: "نائب رئيس الاتصالات، حلول الطاقة العربية",

      /* ========================================
   contact.html Translations
   ======================================== */

      // Contact Section
      contactHeroAlt: "اتصل بالمرجعية - لنخلق معًا",
      contactHeroTitle: "لنبدأ قصتك الناجحة",
      contactHeroSubtitle:
        "مستعد لرفع مستوى علامتك التجارية؟ تواصل مع فريق الخبراء لدينا لمناقشة كيفية تعاوننا لتحقيق أهدافك التواصلية وخلق شيء استثنائي معًا.",
      letsCreate: "لنخلق شيئًا استثنائيًا",
      contactSubtitle:
        "جاهز لرفع مستوى علامتك التجارية؟ تواصل معنا ولنتناقش حول كيفية مساعدتك في تحقيق أهدافك.",
      address: "العنوان",
      addressValue:
        "مبنى السلام، الطابق 12، طريق الملك فهد، الرياض، المملكة العربية السعودية",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      workingHours: "ساعات العمل",
      workingHoursValue: "الأحد - الخميس، 9:00 ص - 6:00 م",
      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      companyName: "اسم الشركة",
      serviceInterest: "الخدمة المطلوبة",
      selectService: "اختر خدمة",
      other: "أخرى",
      message: "الرسالة",
      messagePlaceholder: "أخبرنا عن مشروعك...",
      sendMessage: "إرسال الرسالة",
      messageSent: "تم إرسال الرسالة!",
      messageSentText: "شكرًا لتواصلك. سنعود إليك خلال 24 ساعة.",

      /* ========================================
   Footer Section Translations
   ======================================== */

      // Footer
      footerDescription:
        "اتصالات إستراتيجية، وفعاليات مثالية، وابتكارات رقمية تحول العلامات التجارية وتخلق تأثيرًا دائمًا.",
      stayUpdated: "ابقَ على اطلاع",
      subscribeNewsletter: "اشترك في نشرتنا الإخبارية للحصول على رؤى وتحديثات.",
      yourEmail: "بريدك الإلكتروني",
      company: "روابط مهمة",
      ourTeam: "فريقنا",
      careers: "الوظائف",
      allRightsReserved: "جميع الحقوق محفوظة.",

      // Validation
      requiredField: "هذا الحقل مطلوب",
      sending: "جاري الإرسال...",
      thankYouSubscribe: "شكراً على الاشتراك!",
    },

    en: {
      logo: "Al-Marjeia",

      // pages titles
      indexTitle: "Al-Marjeia - Where Vision Meets Excellence",
      aboutTitle: "About Al-Marjeia | Our Story, Vision & Mission",
      servicesTitle: "Al-Marjeia Services | Comprehensive PR Solutions",
      portfolioTitle:
        "Al-Marjeia Portfolio | Tangible Results & Memorable Work",
      contactTitle: "Contact Al-Marjeia | Start Your Journey With Us",

      // Header & Navigation
      home: "Home",
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      getInTouch: "Get in Touch",

      /* ========================================
   index.html Translations
   ======================================== */

      // Hero Section
      heroTitleLine1: "Where Vision Meets",
      heroTitleLine2:
        " For Public <span class='highlight'>Relations Management</span>",
      heroSubtitle:
        "Al-Marjeia delivers strategic communications, effective event management, and digital innovation that transform brands and create lasting impact across the Middle East.",
      exploreServices: "Explore Our Services",
      viewOurWork: "View Our Work",

      // Why Choose Us Section
      whyChooseUs: "Why Choose Al-Marjeia",
      whyChooseUsTitle: "Excellence That Delivers Measurable Results",
      whyChooseUsSubtitle:
        "We combine strategic thinking with flawless execution to deliver measurable results that elevate your brand and drive business growth.",
      feature1Title: "Data-Driven Strategies",
      feature1Desc:
        "Our decisions are informed by comprehensive market analysis and real-time data to maximize ROI for every campaign.",
      feature2Title: "Experienced Team",
      feature2Desc:
        "A diverse team of PR specialists, digital experts, and event managers with regional experience and a global perspective.",
      feature3Title: "Innovative Approach",
      feature3Desc:
        "We blend creativity with technology to deliver standout solutions in a competitive landscape.",

      //Latest Projects Section
      latestProjects: "Latest Projects",
      latestProjectsTitle: "Recent Success Stories",
      latestProjectsSubtitle:
        "Explore some of our recent campaigns that delivered exceptional results and created lasting impact for our clients.",
      viewAllProjects: "View All Projects",

      /* ========================================
   services.html Translations
   ======================================== */

      // Services Page Hero Section
      servicesHeroAlt: "Al-Marjeia Services - Comprehensive PR Solutions",
      servicesHeroTitle: "Integrated Excellence in Communications",
      servicesHeroSubtitle:
        "From strategic PR to immersive events and advanced digital solutions, we provide end-to-end services designed to elevate your brand and deliver measurable outcomes.",

      // Services Section
      whatWeDo: "What We Do",
      ourServices: "Our Services",
      servicesSubtitle:
        "Comprehensive solutions tailored to elevate your brand and achieve remarkable results at every touchpoint.",
      publicRelations: "Public Relations",
      prDescription:
        "Strategic media relations, crisis management, and brand storytelling that shape public perception and build lasting reputations.",
      mediaRelations: "Media Relations",
      crisisCommunications: "Crisis Communications",
      pressReleases: "Press Releases",
      eventManagement: "Event Management",
      eventDescription:
        "End-to-end event delivery from concept to execution, creating memorable experiences that engage and inspire.",
      corporateEvents: "Corporate Events",
      conferences: "Conferences",
      productLaunches: "Product Launches",
      digitalServices: "Digital Services",
      digitalDescription:
        "Advanced digital solutions that transform your online presence and drive measurable business growth.",
      webDevelopment: "Web Development",
      digitalStrategy: "Digital Strategy",
      uxuiDesign: "UX/UI Design",
      socialMedia: "Social Media",
      socialDescription:
        "Strategic social media management that builds communities, drives engagement, and amplifies your brand voice.",
      contentStrategy: "Content Strategy",
      communityManagement: "Community Management",
      analytics: "Analytics",
      motorsport: "Motorsport",
      motorsportDescription:
        "Specialized motorsport communications and event management delivering high-energy experiences for racing fans.",
      raceEvents: "Race Events",
      sponsorship: "Sponsorship",
      brandActivation: "Brand Activation",
      learnMore: "Learn More",

      // Timeline Section
      ourProcess: "Our Process",
      successJourney: "Your <span class='highlight'>Success Journey</span>",
      timelineSubtitle:
        "A structured workflow to ensure your project's success from concept to completion.",
      consultation: "Consultation",
      consultationDesc: "Understanding your vision and requirements",
      planning: "Planning",
      planningDesc: "Strategic roadmap and creative concepts",
      execution: "Execution",
      executionDesc: "Flawless implementation and management",
      monitoring: "Monitoring",
      monitoringDesc: "Real-time tracking and optimization",
      evaluation: "Evaluation",
      evaluationDesc: "Measuring impact and outcomes",

      /* ========================================
   About Page Translations
   ======================================== */
      aboutHeroAlt: "Al-Marjeia - Our Team & Vision",
      aboutHeroTitle: "Shaping Narratives, Building Legacies",
      aboutHeroSubtitle:
        "Discover the story behind Al-Marjeia, where cultural insight meets global PR excellence. We partner with clients to craft impactful narratives across the Middle East.",

      aboutAlMarjeia: "Al-Marjeia",
      relationsManagement: "Where Vision Meets Excellence",
      aboutText1:
        "Al-Marjeia is a leading PR firm in Saudi Arabia, blending global communication standards with deep local cultural understanding.",
      aboutText2:
        "We are not just a PR agency — we are strategic partners and storytellers committed to building influential brands with credibility and professionalism.",
      contactWithUs: "Contact Us",
      ourStory: "Our Story",
      ourStoryText:
        "When we launched Al-Marjeia, our goal was not to be the biggest, but the most trusted. Our growth is rooted in market insight, innovation, and true communication.",
      visionTitle: "Our Vision",
      visionText:
        "To be the leading and most trusted PR agency in the Kingdom and the region, building strong connections between brands and their audiences.",
      missionTitle: "Our Mission",
      missionText:
        "To act as strategic partners for our clients, enabling meaningful relationships with audiences through bespoke campaigns that create real impact.",

      /* ========================================
   Portfolio Translations
   ======================================== */
      portfolioHeroAlt: "Al-Marjeia Portfolio - Our Featured Projects",
      portfolioHeroTitle: "Where Vision Becomes Impact",
      portfolioHeroSubtitle:
        "Explore our portfolio of successful campaigns and events that transformed brands and engaged audiences across industries in the Middle East.",

      ourWork: "Our Work",
      featuredProjects: "Featured Projects",
      globalTechSummit: "Global Tech Summit 2023",
      globalTechDescription:
        "A three-day international tech conference bringing together over 2,000 industry leaders.",
      greenInitiativeTitle: "Saudi Green Initiative Awareness Campaign",
      greenInitiativeDescription:
        "A nationwide environmental campaign promoting the Saudi Green Initiative reaching millions and mobilizing volunteers.",
      digitalTransformation: "Digital Transformation Initiative",
      digitalTransformationDescription:
        "A full digital overhaul for a leading financial services provider resulting in a 300% increase in engagement.",
      championshipRacing: "Championship Racing Series",
      championshipRacingDescription:
        "Full event and communications management for a major regional racing championship.",
      socialImpact: "Social Impact Campaign",
      socialImpactDescription:
        "A viral social campaign that reached over 10 million users to raise environmental awareness.",
      viewProject: "View Project",

      // Testimonials
      testimonials: "Testimonials",
      whatOurClientsSay: "What Our Clients Say",
      testimonialsSubtitle:
        "Trusted by leading brands across the Middle East. Here’s what they say about working with us.",
      testimonial1Text:
        "Al-Marjeia turned our brand launch into a nationwide phenomenon. Their strategy and execution exceeded expectations.",
      testimonial1Name: "Fahd Al-Qasim",
      testimonial1Position: "CEO, Al-Qasim Group",
      testimonial2Text:
        "The Al-Marjeia team made our tech summit unforgettable. Professional, innovative, and deeply committed.",
      testimonial2Name: "Noura Al-Mansour",
      testimonial2Position: "Marketing Director, Tech Vision Arabia",
      testimonial3Text:
        "From concept to finish line, Al-Marjeia delivered sporting events that captivated race fans across the region.",
      testimonial3Name: "Saud Al-Farsi",
      testimonial3Position: "Founder, Desert Race",
      testimonial4Text:
        "Their digital transformation expertise revolutionized our online presence. The results speak for themselves.",
      testimonial4Name: "Laila Al-Harbi",
      testimonial4Position: "Marketing Director, Gulf Financial Partners",
      testimonial5Text:
        "The social campaign they created for our cause reached millions and drove real change.",
      testimonial5Name: "Khalid Al-Otaibi",
      testimonial5Position: "Director, Green Desert Initiative",
      testimonial6Text:
        "In crisis communications, Al-Marjeia proved invaluable, protecting our reputation during critical moments.",
      testimonial6Name: "Mohammed Al-Zahrani",
      testimonial6Position: "VP Communications, Arabian Energy Solutions",

      /* ========================================
   Contact Translations
   ======================================== */
      contactHeroAlt: "Contact Al-Marjeia - Let’s Create Together",
      contactHeroTitle: "Let’s Start Your Success Story",
      contactHeroSubtitle:
        "Ready to elevate your brand? Reach out to our expert team to discuss how we can work together.",
      letsCreate: "Let’s Create Something Exceptional",
      contactSubtitle:
        "Ready to elevate your brand? Contact us to discuss how we can help achieve your goals.",
      address: "Address",
      addressValue:
        "Al-Salam Building, 12th Floor, King Fahd Road, Riyadh, Saudi Arabia",
      phone: "Phone",
      email: "Email",
      workingHours: "Working Hours",
      workingHoursValue: "Sun - Thu, 9:00 AM - 6:00 PM",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      companyName: "Company Name",
      serviceInterest: "Service Interest",
      selectService: "Select a Service",
      other: "Other",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      sendMessage: "Send Message",
      messageSent: "Message Sent!",
      messageSentText:
        "Thanks for reaching out. We will get back to you within 24 hours.",

      /* ========================================
   Footer Translations
   ======================================== */
      footerDescription:
        "Strategic communications, flawless events, and digital innovation that transform brands and create lasting impact.",
      stayUpdated: "Stay Updated",
      subscribeNewsletter:
        "Subscribe to our newsletter for insights and updates.",
      yourEmail: "Your Email",
      company: "Important Links",
      ourTeam: "Our Team",
      careers: "Careers",
      allRightsReserved: "All rights reserved.",

      // Validation
      requiredField: "This field is required",
      sending: "Sending...",
      thankYouSubscribe: "Thanks for subscribing!",
    },
  },

  init() {
    const saved = localStorage.getItem("al-marjeia-lang");
    if (saved && (saved === "en" || saved === "ar")) {
      this.current = saved;
    } else {
      const browserLang = navigator.language.slice(0, 2);
      this.current = browserLang === "ar" ? "ar" : "en";
    }
    this.apply();
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem("al-marjeia-lang", lang);
    this.apply();
  },

  apply() {
    document.documentElement.dir = this.current === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = this.current;
    document.body.classList.remove("rtl", "ltr", "en", "ar");
    document.body.classList.add(this.current === "ar" ? "rtl" : "ltr");
    document.body.classList.add(this.current);

    // Update all translatable elements
    this.updateTexts();
  },

  t(key) {
    return this.translations[this.current][key] || key;
  },

  updateTexts() {
    // Update elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key) || "";

      // Inputs and textareas should receive placeholder text
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translation;
      } else if (el.tagName === "OPTION") {
        el.textContent = translation;
      } else {
        // If translation contains HTML tags, set as innerHTML, otherwise plain text
        if (translation.includes("<") && translation.includes(">")) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.placeholder = this.t(key);
    });

    // Update language toggle text
    const langText = document.querySelector(".lang-text");
    if (langText) {
      langText.textContent = this.current === "en" ? "EN" : "ع";
    }

    const mobileLangText = document.querySelector(".mobile-lang-text");
    if (mobileLangText) {
      mobileLangText.textContent =
        this.current === "en" ? "العربية" : "English";
    }

    // Update active language menu item
    document.querySelectorAll(".lang-menu-item").forEach((item) => {
      if (item.dataset.lang === this.current) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update Page Title
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    let titleKey = "indexTitle"; // Default

    if (page.includes("about")) titleKey = "aboutTitle";
    else if (page.includes("services")) titleKey = "servicesTitle";
    else if (page.includes("portfolio")) titleKey = "portfolioTitle";
    else if (page.includes("contact")) titleKey = "contactTitle";

    document.title = this.t(titleKey);
  },

  isRTL() {
    return this.current === "ar";
  },
};

// --- Header Management ---
const HeaderManager = {
  header: null,
  mobileMenu: null,
  mobileOverlay: null,
  langDropdown: null,
  langMenu: null,

  init() {
    this.header = document.querySelector(".header");
    this.mobileMenu = document.querySelector(".mobile-menu-drawer");
    this.mobileOverlay = document.querySelector(".mobile-menu-overlay");
    this.langDropdown = document.querySelector(".lang-dropdown");
    this.langMenu = document.querySelector(".lang-menu");

    if (!this.header) return;

    // Mark active page link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });

    // Scroll handler
    window.addEventListener("scroll", () => this.handleScroll());
    this.handleScroll();

    // Mobile menu toggle
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => this.toggleMobileMenu());
    }

    // Close mobile menu on overlay click
    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener("click", () =>
        this.closeMobileMenu(),
      );
    }

    // Close mobile menu on link click
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => this.closeMobileMenu());
    });

    // Language dropdown
    const langToggle = document.querySelector(".lang-toggle");
    if (langToggle) {
      langToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleLangMenu();
      });
    }

    // Close language menu on outside click
    document.addEventListener("click", (e) => {
      if (this.langDropdown && !this.langDropdown.contains(e.target)) {
        this.closeLangMenu();
      }
    });

    // Language menu items
    document.querySelectorAll(".lang-menu-item").forEach((item) => {
      item.addEventListener("click", () => {
        const lang = item.dataset.lang;
        if (lang) {
          LanguageManager.set(lang);
          this.closeLangMenu();
        }
      });
    });

    // Mobile language toggle
    const mobileLangToggle = document.querySelector(".mobile-lang-toggle");
    if (mobileLangToggle) {
      mobileLangToggle.addEventListener("click", () => {
        LanguageManager.set(LanguageManager.current === "en" ? "ar" : "en");
      });
    }

    // ESC key handler
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeMobileMenu();
        this.closeLangMenu();
      }
    });
  },

  handleScroll() {
    if (!this.header) return;
    const scrolled = window.scrollY > 50;
    if (scrolled) {
      this.header.classList.add("scrolled");
    } else {
      this.header.classList.remove("scrolled");
    }
  },

  toggleMobileMenu() {
    const isOpen = this.mobileMenu?.classList.contains("open");
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  },

  openMobileMenu() {
    if (this.mobileMenu) this.mobileMenu.classList.add("open");
    if (this.mobileOverlay) this.mobileOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  },

  closeMobileMenu() {
    if (this.mobileMenu) this.mobileMenu.classList.remove("open");
    if (this.mobileOverlay) this.mobileOverlay.classList.remove("open");
    document.body.style.overflow = "";
  },

  toggleLangMenu() {
    if (!this.langMenu) return;
    this.langMenu.classList.toggle("open");
  },

  closeLangMenu() {
    if (!this.langMenu) return;
    this.langMenu.classList.remove("open");
  },
};

// --- Portfolio Carousel ---
const PortfolioCarousel = {
  currentSlide: 0,
  slides: [],
  dots: [],
  thumbnails: [],
  autoPlayTimer: null,
  autoPlayDelay: 5000,
  isAutoPlaying: true,
  prevBtn: null,
  nextBtn: null,
  slidesContainer: null,

  init() {
    this.slidesContainer = document.querySelector(".carousel-track");
    this.prevBtn = document.querySelector(
      ".portfolio-nav .prev, .nav-btn.prev",
    );
    this.nextBtn = document.querySelector(
      ".portfolio-nav .next, .nav-btn.next",
    );
    this.dots = Array.from(document.querySelectorAll(".carousel-dots .dot"));
    this.thumbnails = Array.from(
      document.querySelectorAll(".portfolio-thumbnails .thumb"),
    );

    if (!this.slidesContainer) return;

    this.slides = Array.from(document.querySelectorAll(".portfolio-slide"));
    this.currentSlide = 0;

    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.prev();
        this.pauseAndResume();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.next();
        this.pauseAndResume();
      });
    }

    // Update button classes for styling
    if (this.prevBtn) this.prevBtn.classList.add("prev");
    if (this.nextBtn) this.nextBtn.classList.add("next");

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.goTo(index);
        this.pauseAndResume();
      });
    });

    this.thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        this.goTo(index);
        this.pauseAndResume();
      });
    });

    // Pause on hover and resume on leave
    const carouselContainer = document.querySelector(".portfolio-carousel");
    if (carouselContainer) {
      carouselContainer.addEventListener("mouseenter", () => {
        this.stopAutoPlay();
      });

      carouselContainer.addEventListener("mouseleave", () => {
        if (this.slides.length > 1) this.startAutoPlay();
      });
    }

    // Start autoplay
    setTimeout(() => {
      this.startAutoPlay();
    }, 1000);

    // Auto-update active states
    this.update();
  },

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.update();
  },

  prev() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.update();
  },

  goTo(index) {
    this.currentSlide = index;
    this.update();
  },

  update() {
    if (!this.slidesContainer) return;

    // Always use negative translateX because carousel-track is LTR oriented
    const translateX = -this.currentSlide * 100;
    this.slidesContainer.style.transform = `translateX(${translateX}%)`;

    // Update dots
    this.dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Update thumbnails
    this.thumbnails.forEach((thumb, index) => {
      if (index === this.currentSlide) {
        thumb.classList.add("active");
      } else {
        thumb.classList.remove("active");
      }
    });
  },

  startAutoPlay() {
    if (this.autoPlayTimer || this.slides.length <= 1) return;

    this.autoPlayTimer = setInterval(() => {
      const nextIndex =
        this.currentSlide + 1 >= this.slides.length ? 0 : this.currentSlide + 1;
      this.goTo(nextIndex);
    }, this.autoPlayDelay);

    this.isAutoPlaying = true;
  },

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
      this.isAutoPlaying = false;
    }
  },

  pauseAndResume() {
    this.stopAutoPlay();
    setTimeout(() => {
      if (this.slides.length > 1) this.startAutoPlay();
    }, 10000); // resume after 10s
  },
};

// --- Form Handling ---
const FormManager = {
  init() {
    // Contact form
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) =>
        this.handleContactSubmit(e),
      );
    }

    // Newsletter form
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) =>
        this.handleNewsletterSubmit(e),
      );
    }
  },

  async handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector(".btn-submit");
    const formWrapper = form.closest(".contact-form-wrapper");

    if (!submitBtn) return;

    // Disable submit button and show loading
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Hide form and show success message
    form.style.display = "none";
    const successDiv = formWrapper.querySelector(".form-success");
    if (successDiv) {
      successDiv.style.display = "flex";
    }
  },

  async handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector('input[type="email"]');
    if (!input) return;
    const email = input.value.trim();

    if (!email) return;

    // Disable form
    form.style.pointerEvents = "none";

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Hide form and show success message
    form.style.display = "none";
    const successDiv = document.getElementById("newsletterSuccess");
    if (successDiv) {
      successDiv.style.display = "block";
    }

    // Reset input
    input.value = "";
  },
};

// --- Smooth Scroll ---
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#") return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  },
};

// --- Animation on Scroll ---
const ScrollAnimations = {
  init() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Ensure visible for elements without CSS reveal rules
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes (including story/vision items)
    document
      .querySelectorAll(
        ".feature-card, .project-card, .service-card, .testimonial-card, .story-box, .vm-item, .about-image, .about-content, .section-header",
      )
      .forEach((el) => {
        observer.observe(el);
      });
  },
};

// --- Timeline Section ---
const TimelineManager = {
  section: null,
  path: null,
  points: [],

  init() {
    this.section = document.getElementById("timeline");
    if (!this.section) return;

    this.path = document.getElementById("timeline-path");
    this.points = Array.from(document.querySelectorAll(".timeline-point"));

    // Reset points
    if (this.points.length > 0) {
      this.points.forEach((point) => {
        point.style.opacity = "0";
        point.style.transform =
          window.innerWidth <= 768 ? "translateX(-40px)" : "translateY(40px)";
        point.classList.remove("revealed");
      });
    }

    // Use GSAP if available
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      try {
        gsap.registerPlugin(ScrollTrigger);

        // Animate path
        if (this.path) {
          const pathLength = this.path.getTotalLength();
          this.path.style.strokeDasharray = pathLength;
          this.path.style.strokeDashoffset = pathLength;

          gsap.to(this.path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: this.section,
              start: "top 70%",
              once: true,
            },
          });
        }

        // Animate points
        if (this.points.length > 0) {
          this.points.forEach((point) => {
            const delay = parseFloat(point.getAttribute("data-delay")) || 0;

            gsap.to(point, {
              scrollTrigger: {
                trigger: this.section,
                start: "top 70%",
                once: true,
              },
              opacity: 1,
              y: 0,
              x: 0,
              duration: 0.8,
              delay: delay,
              ease: "back.out(1.7)",
              onComplete: () => {
                point.classList.add("revealed");
              },
            });
          });
        }
      } catch (e) {
        // If GSAP usage fails, fall back to observer below
        this._initFallback();
      }
    } else {
      this._initFallback();
    }
  },

  _initFallback() {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate path with CSS class
            if (this.path) {
              this.path.classList.add("animated");
            }

            // Animate points with delay
            if (this.points.length > 0) {
              this.points.forEach((point, index) => {
                const delay = parseFloat(point.getAttribute("data-delay")) || 0;
                setTimeout(() => {
                  point.classList.add("revealed");
                  point.style.opacity = "1";
                  point.style.transform =
                    window.innerWidth <= 768
                      ? "translateX(0)"
                      : "translateY(0)";
                }, delay * 1000);
              });
            }

            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(this.section);
  },
};

// --- Initialize Everything ---
document.addEventListener("DOMContentLoaded", () => {
  LanguageManager.init();
  HeaderManager.init();
  PortfolioCarousel.init();
  FormManager.init();
  SmoothScroll.init();
  ScrollAnimations.init();
  TimelineManager.init();
});

// --- Export for global access ---
window.LanguageManager = LanguageManager;
window.HeaderManager = HeaderManager;
window.PortfolioCarousel = PortfolioCarousel;
window.TimelineManager = TimelineManager;
