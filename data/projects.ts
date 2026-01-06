export interface Project {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  role: string;
  duration: string;
  client: string;
  tools: string;
  overview: string;
  challenge: string;
  roleDescription: string;
  process: {
    dataExploration?: string;
    informationArchitecture?: string;
    [key: string]: string | undefined;
  };
  solution: string[];
  impact: string[];
  images: {
    main?: string;
    beforeProcess?: string;
    process?: string;
    dashboards?: string;
    solution?: string;
    [key: string]: string | undefined;
  };
}

export const projects: Project[] = [
  {
    slug: "project-new",
    title: "Real-time decisioning for personalized experiences",
    tags: ["SaaS", "AI"],
    date: "Aug 2025",
    role: "Product Designer",
    duration: "On going",
    client: "BlueConic",
    tools: "Figjam, Figma, Cursor",
    overview: "Next Best Action (NBA) is an AI-powered capability in BlueConic that uses reinforcement learning to decide which dialogue should be shown to each individual user. Instead of relying on static rules or manual prioritization, NBA continuously learns from user behavior to optimize outcomes such as conversions or revenue in real time. NBA turns existing dialogues, profile data, and behavioral signals into a decision system that improves over time, while keeping marketers in control of strategy and intent.",
    challenge: "NBA introduced a new layer of complexity to the platform. It combined reinforcement learning, experimentation, and real-time decisioning in a product that marketers were used to configuring manually.\n\nThe challenge was not only to design the UI, but to deeply understand how the model would function inside the existing platform:\n\t•\tWhere the data came from and how it flowed across the system\n\t•\tHow the model would interpret that data and produce outputs\n\t•\tWhat the model required to learn effectively\n\t•\tHow success could be measured and monitored over time\n\nAt the same time, the experience needed to support marketers' jobs to be done, remain understandable to non-technical users, and align stakeholders across different levels of the organization",
    roleDescription: "I worked as a Product Designer at BlueConic, leading the end-to-end design of the NBA experience. I collaborated closely with a data scientist and engineers to understand the model's behavior, constraints, inputs, and outputs. In parallel, I researched competitor approaches to AI-driven optimization and led the design of flows, dashboards, prototypes, and demos that made the system tangible and understandable for both users and internal stakeholders.",
    process: {
      "Understanding the model and the platform": "A large part of the work was deeply understanding how the reinforcement learning model would live inside BlueConic's existing platform. This meant tracing where data originated, how it was stored in different parts of the system, how it would be consumed by the model, and how outputs could be surfaced back to users. Working closely with the data scientist, I pieced together how the model learned, what it required to function properly, what metrics it could generate, and where its limitations were. This understanding shaped every design decision that followed.",
      "Aligning AI capabilities with user needs": "In parallel, I focused on the marketer's jobs to be done: deciding what to optimize, understanding why certain actions perform better, and trusting the system's decisions. I designed NBA so users could express intent through goals and hypotheses, while the system handled learning and optimization behind the scenes. I also explored how AI could assist with setup itself, guiding users through configuration and reducing manual effort, while ensuring humans remained in control of key decisions.",
      "Creating clarity and alignment": "Because NBA was complex and new, a key part of the process was creating a clear narrative around how it worked. I designed end-to-end flows that explained how data moves through the system, how decisions are made, and how learning happens over time. To align the organization, I created prototypes and demos that made the product tangible. These were used to present the concept multiple times to engineers, leadership, and stakeholders with little or no AI knowledge, allowing us to experiment, validate assumptions, and get everyone aligned before implementation.",
    },
    solution: [
      "NBA delivers a configurable, AI-driven decision system that optimizes dialogue selection in real time. Marketers define intent through goals and hypotheses, while the system handles learning and optimization behind the scenes. By combining goal-based setup, data readiness validation, and AI-assisted configuration, NBA enables reinforcement learning without exposing users to technical complexity.", "Once live, the system continuously learns from user behavior. I designed dashboards that make this learning visible by showing dialogue performance, traffic distribution, the contribution of profile properties, and lift compared to static rules. These insights help users understand when optimization is improving and when to refine their strategy.", "Rather than relying on guesswork, marketers can deliver dialogues that each individual user is more likely to engage with. This results in more relevant experiences for end users, less manual segmentation effort for marketers, and stronger overall campaign performance driven by real-time decisioning.",
    ],
    impact: [
      "Real-time personalization",
      "Reduced segmentation guesswork",
      "2x higher CTA performance",
    ],
    images: {
      main: "/main7.png",
      beforeProcess: "/main7.png",
      process: "/process7.png",
      solution: "/solution7.png",
    },
  },
  {
    slug: "project-6",
    title: "AI-Assisted Dialogues",
    tags: ["SaaS", "AI", "UX Patterns"],
    date: "Mar 2025",
    role: "Product designer",
    duration: "2 months",
    client: "BlueConic",
    tools: "Figma, Cursor",
    overview: "Dialogues are one of BlueConic's core capabilities, enabling marketers to deliver dynamic content through banners, lightboxes, forms, emails, and other interaction formats. Traditionally, creating or updating dialogues required manual configuration and code-based design, which became a bottleneck for marketers iterating on campaigns. This project introduced AI into the Dialogues section of the platform for the first time, enabling users to create dialogues through an AI-assisted experience instead of manual setup.",
    challenge: "There were two main challenges. First, this was the first time AI was introduced into the platform, so there were no existing patterns or precedents to follow. Second, AI-driven interactions are inherently uncertain, which meant it wasn't possible to fully map every possible flow in advance. The experience needed to support open-ended interaction while still feeling structured, understandable, and safe for users.",
    roleDescription: "I worked as a Product Designer at BlueConic, leading the design of the first AI-assisted experience within the platform. I was responsible for defining the interaction model, designing new AI behaviors, and creating reusable patterns that could support uncertain, user-driven flows. A key part of my role was translating this ambiguity into concrete components and scenarios that engineers could implement and scale.",
    process: {
      "Understanding the manual workflow": "I started by analyzing how dialogues were traditionally created and maintained, identifying where manual configuration and code dependencies created friction for marketers. This helped clarify which inputs were truly valuable for users to control, and which parts of the process could be delegated to AI.",
      "Designing for uncertainty": "Because the interaction between users and the assistant could not be fully predicted, I approached the design as a system of flexible components rather than fixed flows. Instead of mapping every possible path, I designed the building blocks the AI could use, such as prompts, confirmations, suggestions, and handoffs, allowing conversations to adapt dynamically to user input.",
      "Defining new AI behaviors": "With no existing AI patterns in the platform, I designed entirely new behaviors for how the assistant would guide, respond, recover, and progress through the task. This included anticipating multiple scenarios and clearly communicating them to engineers so the system could handle variation without breaking the user experience.",
      "Creating scalable patterns": "Since this project was intended as the foundation for future AI features, I focused on defining patterns that could be reused beyond Dialogues. These patterns established a baseline for how AI interactions would behave across the platform, supporting future AI-driven projects without starting from scratch.",
    },
    solution: [
      "The final solution introduced an AI assistant that enables users to create dialogues through a conversational interface. Instead of manually configuring design and logic, users can focus on defining key parameters such as target segments, timing, and intent, while the assistant generates the underlying dialogue structure.", "By designing the experience around adaptable components and clear AI behaviors, the system supports open-ended interaction without requiring fully predefined flows. This approach reduces complexity for marketers while providing a scalable foundation for AI integration across the platform.",
    ],
    impact: [
      "Removed technical bottlenecks",
      "Scalable AI foundation",
      "Faster dialogue creation",
    ],
    images: {
      main: "/main6.png",
      beforeProcess: "/main6.png",
      process: "/process6.png",
      solution: "/solution6.png",
    },
  },
  {
    slug: "project-2",
    title: "OPERATIONAL VESSEL SCHEDULING PLATFORM",
    tags: ["B2B", "Logistics Tech"],
    date: "Sep 2024",
    role: "UX/UI Designer",
    duration: "3 months",
    client: "DCSA",
    tools: "Figma, Miro, Microsoft forms, Excel",
    overview: "Operational Vessel Schedules (OVS) is a B2B platform developed by DCSA to provide shared, real-time visibility into vessel schedules across the container shipping ecosystem. The platform centralizes planned, estimated, and actual vessel schedules across multiple shipping lines, helping stakeholders anticipate delays, resolve inconsistencies, and coordinate operations more effectively.",
    challenge: "In container shipping, schedule data is fragmented across multiple operators and systems. Inconsistencies between planned, updated, and actual schedules often lead to confusion, delays, and costly operational decisions. The challenge was to design a single, trustworthy source of truth that could reconcile conflicting data, support different user scenarios, and surface issues clearly without overwhelming users.",
    roleDescription: "I worked as a UX/UI Designer via The Weird Science, collaborating with product managers, engineers, and industry stakeholders. I conducted interviews with multiple stakeholders across the shipping ecosystem to understand their current workflows, jobs to be done, and pain points. Gaining a deep understanding of these processes was essential to defining the information architecture, interaction patterns, and data visualizations that shaped the OVS platform.",
    process: {
      "From Research to System Design": "I began by interviewing multiple stakeholders to map how schedule information flows across services, ports, and vessels, and where breakdowns typically occur. Rather than focusing on individual screens, I used these insights to model the system around decision points, identifying when users need awareness, when they need coordination, and when they need detailed investigation.",
      "Structuring for Progressive Disclosure": "The experience was intentionally designed as a layered system. High-level views prioritize comparison and early signal detection, while deeper views reveal increasing levels of detail only when needed. This structure allows users to navigate complexity incrementally, reducing cognitive load while preserving access to critical operational data.",
      "Designing for Imperfect Data": "Throughout the process, I treated data inconsistency as a design constraint rather than an edge case. Visual hierarchy, explicit mismatch indicators, and delay calculations were used to surface conflicts and outdated information instead of masking them. By designing clearly for uncertainty, the system supports confident decision-making even when the data is incomplete or contradictory.",
    },
    solution: [
      "The final solution is a layered operational system that brings clarity to fragmented vessel schedule data by aligning information around how users make decisions. By structuring the experience across service, port, and vessel levels, the platform supports both early risk detection and deep operational analysis without overwhelming users. Clear hierarchy, explicit mismatch signaling, and real-time delay calculations ensure discrepancies are visible, understandable, and actionable. Rather than masking uncertainty, the design makes it explicit, enabling users to assess impact, coordinate responses, and act with confidence in time-sensitive environments.",
    ],
    impact: [
      "Single source of truth",
      "Real-time mismatch detection",
      "Clear delay calculation",
    ],
    images: {
      main: "/main2.png",
      beforeProcess: "/main2.png",
      process: "/process2.png",
      solution: "/solution2.png",
    },
  },
  {
    slug: "project-3",
    title: "IDENTITY VERIFICATION FOR SHIPPING ECOSYSTEM",
    tags: ["B2B", "SaaS", "Compliance"],
    date: "Jun 2024",
    role: "UX/UI Designer",
    duration: "6 Months",
    client: "DCSA",
    tools: "Figma, Miro, Excel",
    overview: "Identity Exchange is a B2B platform developed by DCSA to enable secure, standardized identity verification across the container shipping industry. The product allows companies to verify the legal identity of their partners, such as shippers, carriers, and service providers, using trusted external data sources, reducing risk and enabling compliant, high-value business transactions.",
    challenge: "In the shipping ecosystem, companies frequently need to verify the identity of partners they may not have worked with before. This process is often manual, fragmented, and inconsistent across regions and organizations, creating delays, legal risk, and uncertainty. The challenge was to design a platform that could support reliable identity verification across multiple jurisdictions while balancing transparency, security, and ease of use for different stakeholders..",
    roleDescription: "I worked as a UX/UI Designer via The Weird Science, collaborating with product managers, engineers, and domain experts. I conducted interviews with stakeholders to understand existing verification workflows, regulatory constraints, and pain points. This research informed the platform’s information architecture, interaction flows, and patterns for trust, clarity, and controlled access.",
    process: {
      "Workflow research": "I began by interviewing stakeholders to understand how identity verification is currently performed across the shipping ecosystem. These conversations revealed that corroborating an organization’s identity often requires navigating multiple external platforms, registries, and regional systems, making the process time-consuming, inconsistent, and prone to error, especially when onboarding unfamiliar partners.",
      "Rapid iteration": "Based on this understanding, I designed an initial concept that unified identity verification into a single workflow. This concept was tested early with real users to validate assumptions and compare it directly against their existing processes. Feedback from these sessions informed rapid iterations on structure, terminology, and information hierarchy, allowing the experience to evolve through multiple cycles of testing and refinement.",
      "User validation": "Each iteration was reviewed again with users, focusing on whether the platform felt clearer, faster, and more reliable than their current way of validating partners and customers. Acting on this feedback was key to shaping an experience that users ultimately perceived as a meaningful improvement over existing workflows, while still meeting compliance and security requirements.",
    },
    solution: [
      "Identity Exchange delivers a unified, trusted way to verify the identity of partners, customers, and organizations within the shipping ecosystem. By consolidating identity data from multiple authoritative sources into a single workflow, the platform replaces a fragmented, manual process with a clear and repeatable experience. Users can validate identities without navigating multiple external systems, reducing uncertainty and effort while increasing confidence in compliance-critical decisions.",
      "The solution is designed to balance transparency and security: it clearly communicates the provenance of information, signals access boundaries, and maintains a consistent structure across searches and results. Rather than simply displaying data, the platform supports informed decision-making by helping users understand what they are seeing, where it comes from, and how it can be trusted.",
    ],
    impact: [
      "Faster identity verification",
      "Unified compliance workflow",
      "Increased trust & transparency",
    ],
    images: {
      main: "/main3.png",
      beforeProcess: "/main3.png",
      process: "/process3.png",
      solution: "/solution3.png",
    },
  },
  {
    slug: "project-4",
    title: "REEFER MAINTENANCE REPORTING SYSTEM",
    tags: ["B2B", "Logistics tech"],
    date: "Mar 2024",
    role: "UX/UI Designer",
    duration: "4 Months",
    client: "DCSA",
    tools: "Figjam, Figma",
    overview: "Maintaining refrigerated containers is a high-stakes operational process that depends on timely coordination between multiple teams across a vessel’s journey. RMR was designed to support this complexity by replacing static, disconnected reporting practices with a shared, real-time system that keeps all relevant actors aligned around the condition, repair status, and history of each reefer.",
    challenge: "Reefer maintenance involves at least four distinct user groups, vessel crew, port agents, reefer teams, and technical assistance, each with different responsibilities, priorities, and decision-making needs. Historically, maintenance reports were created manually in spreadsheets and shared via email, resulting in outdated information, duplicated work, and poor visibility across the chain. The challenge was to design a system that could support all roles, scenarios, and handoffs while ensuring that every damaged reefer received the appropriate attention and that all relevant parties remained informed.",
    roleDescription: "I worked as a UX/UI Designer via The Weird Science, collaborating with product managers, engineers, and operational stakeholders. Due to access constraints, I was not able to interview all user groups directly. Instead, I relied on close collaboration with the Product Owner, industry experts, and available stakeholders, combining their domain knowledge with existing documentation and real operational scenarios to inform design decisions. This triangulated understanding was essential to modeling roles, responsibilities, and workflows accurately.",
    process: {
      "Modeling a multi-role system": "Rather than starting from individual screens, I focused on modeling the system around roles, responsibilities, and handoffs. Using the available domain expertise, I mapped how vessel crew, port agents, reefer teams, and technical assistance interact with a damaged container across its lifecycle, identifying decision points, dependencies, and failure scenarios that the system needed to support.",
      "Designing for role-specific needs": "From this model, I designed RMR as a role-aware platform where each group has access to the information, alerts, and actions relevant to them. Dedicated dashboards provide tailored overviews, while permissions and functionality vary by role, supporting actions such as report creation, editing, review, live coordination, or read-only access.",
      "Iterative refinement": "Concepts were iterated through close collaboration with the Product Owner and available stakeholders, validating assumptions against real operational practices and refining structure, terminology, and alert logic. This feedback loop ensured the solution improved upon existing spreadsheet-based workflows despite limited direct user access.",
    },
    solution: [
      "RMR delivers a shared, role-aware maintenance system that replaces static reports and fragmented communication with a live, collaborative workflow. By centralizing reefer maintenance information into a single source of truth, the platform enables all involved teams to stay aligned around the status, history, and actions taken for each refrigerated container.",
      "The solution is structured around roles and responsibilities rather than documents. Each user group, vessel crew, port agents, reefer teams, and technical assistance, has access to tailored dashboards, alerts, and actions that reflect their part in the maintenance process. Reports evolve as living records that can be created, updated, reviewed, and acted on in real time, ensuring that repairs, decisions, and handoffs remain visible and coordinated across the entire journey.",
    ],
    impact: [
      "Improved cross-team coordination",
      "Replaced static reports",
      "Clear ownership & handoffs",
    ],
    images: {
      main: "/main4.png",
      beforeProcess: "/main4.png",
      process: "/process4.png",
      solution: "/solution4.png",
    },
  },
  {
    slug: "project-5",
    title: "Control Tracking Registry for Digital Bills of Lading",
    tags: ["B2B", "SaaS", "Compliance"],
    date: "Apr 2024",
    role: "UX/UI Designer",
    duration: "3 Months",
    client: "DCSA",
    tools: "Figjam, Figma, Excel",
    overview: "Control Tracking Registry (CTR) is a core component of DCSA’s eBL ecosystem, designed to bring clarity and accountability to the lifecycle of digital Bills of Lading. Instead of treating the eBL as a static document, CTR captures every action taken on it, creating a transparent, auditable record of ownership transfers, decisions, and disputes between parties.",
    challenge: "Bills of Lading are legally critical documents, yet their transfer and approval processes have traditionally relied on emails, manual checks, and fragmented systems. This made it difficult to track who initiated a transfer, who accepted or rejected it, and when changes occurred. The challenge was to design a system that could support legally sensitive workflows while making ownership changes, decisions, and their history explicit and trustworthy for all parties involved.",
    roleDescription: "I worked as a UX/UI Designer via The Weird Science, designing the interaction model that captures eBL transfers and decisions as traceable system events, ensuring clarity, accountability, and auditability across parties.",
    process: {
      "Understanding the Bill of Lading lifecycle": "I began by analyzing how Bills of Lading are currently created, transferred, and managed across parties. This included tracing the full path of a bill, mapping all possible transfer scenarios, and identifying pain points in existing workflows, particularly around visibility, ownership changes, and manual coordination.",
      "Designing an action-based model": "With this understanding, I drafted a design aligned with the Product Owner’s requirements, reframing the Bill of Lading as a sequence of explicit actions rather than a static document. To validate this approach, we developed an initial proof of concept that mapped how an eBL would move between parties through transfers, acceptances, rejections, and disputes.",
      "Iterating through fast prototyping": "This work was carried out in close collaboration with engineers, allowing us to quickly test system behavior, validate assumptions, and adjust interaction flows as needed. Rapid iteration helped refine the model until the transfer logic felt clear, traceable, and aligned with real-world legal and operational constraints.",
    },
    solution: [
      "I helped design CTR as a registry that shows which eBL platform currently controls a specific interoperable eBL, in real time. This gives users a clear way to locate where control sits without relying on manual follow-ups or guessing across providers.","The experience is built to make control status easy to find and understand, supporting interoperability workflows where eBLs can move between platforms through standardized integrations and a shared legal framework.",
    ],
    impact: [
      "Real-time control tracking",
      "Clear ownership visibility",
      "Auditable action history",
    ],
    images: {
      main: "/main5.png",
      beforeProcess: "/main5.png",
      process: "/process5.png",
      solution: "/solution5.png",
    },
  },
  {
    slug: "project-1",
    title: "REAL-TIME FACTORY PERFORMANCE PLATFORM",
    tags: ["B2B", "Digital twin"],
    date: "Mar 2023",
    role: "UX/UI Designer",
    duration: "3 months",
    client: "Mathaplanet",
    tools: "Figma, Kibana, Miro",
    overview: "MedhaPlanet is a company that specializes in industrial automation and digital transformation. The goal was to create a digital platform that would allow factory managers to monitor and analyze real-time factory performance data.",
    challenge: "The challenge was that factories generate large volumes of raw data that is difficult to access and understand. Factory managers needed a way to visualize and analyze this data in real-time to make informed decisions.",
    roleDescription: "As the UX/UI designer, I was responsible for designing the user interface and user experience for the platform. This included creating wireframes, prototypes, and high-fidelity designs for the dashboard and data exploration features.",
    process: {
      dataExploration: "I worked closely with the data team to understand the types of data generated by factories and how it could be visualized. This involved analyzing data from various factory systems and identifying key metrics and KPIs.",
      informationArchitecture: "I mapped out the information architecture of the platform, organizing factory areas and processes into logical categories that would be displayed in the dashboard. This involved creating user flows and wireframes.",
    },
    solution: [
      "I created a proof-of-concept dashboard that demonstrated how factory data could be visualized in real-time. The dashboard included key metrics such as production rates, energy consumption, and equipment status.",
      "I designed a system that used Kibana's visualization capabilities to create parameter-driven dashboards that could be customized for different factory configurations.",
      "The initial dashboard served as a foundation for a more comprehensive platform that would be developed in future phases.",
    ],
    impact: [
      "Centralized data visibility",
      "100+ visualizations created",
      "Scalable design baseline",
    ],
    images: {
      main: "/main1.png",
      beforeProcess: "/main1.png",
      process: "/process1.png",
      dashboards: "https://www.figma.com/api/mcp/asset/03bf27e8-f7f1-4ca6-97c0-512a8fd9e2d0",
      solution: "/solution1.png",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

