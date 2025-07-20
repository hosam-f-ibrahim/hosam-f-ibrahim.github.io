

/* Portfolio Data */

(function() {
  "use strict";

        const portfolioData = {
        fiu360: {
          title: "FIU360",
          image: "assets/img/portfolio/fiu360.png",
          category: "Financial Intelligence | Data Analytics",    // what shows under <span class="category">
          tags: ["dotnet","financial","ai","etl","aml","data"], // matches the filters
          summary:"Led the architecture, design, and delivery of FIU360—a modular, secure financial intelligence platform meeting AML/CFT standards…",
          meta: "Mar 2020 – Present<br>intelliSYS Solutions & Consulting",
          overview: "I led the architecture, design, and delivery of FIU360, a next-generation, end-to-end financial intelligence platform engineered to meet the most rigorous international AML/CFT standards (FATF recommendations and UN Conventions) and scale dynamically with any FIU’s evolving requirements. By modularizing the solution into precisely aligned functional areas, I ensured that each capability integrates seamlessly with the others while preserving full configurability and robust security.",
          features: [
            "Registration: I designed FIU360’s registration module to establish the first nationwide verified counterpart registry with granular, role-based access control. The state-of-the-art secure online registration process supports multiple user personas per institution and hierarchical permission levels, reducing onboarding errors and accelerating registration cycles.",
            "Data Collection: I engineered a flexible XML schema validation and transformation engine that supports over 300 customizable parameters—defining the exact data requirements for CTR (Currency Transaction Reports), STR (Suspicious Transaction Reports), EFT (Electronic Funds Transfers), and AIF (Account Information Files). This adaptability standardized every report’s structure and delivered seamless ingestion across heterogeneous data sources.",
            "Sanctions Screening: I built a comprehensive sanctions-screening workflow that commences upon data intake, running Selective Matching against high-risk watchlists. Alerts generate, and case-confirmation logic applies established criteria to verify matches. Whitelisting managed false positives while confirmed cases automatically escalate to investigation queues, ensuring regulatory compliance and operational efficiency.",
            "Data Enrichment (FIU360 Connect): I architected the FIU360 Connect layer to assimilate intelligence from financial disclosures, national registries, international counterparts, and open data sources. By consolidating local and global intelligence, analysts achieved enormous uplift in investigative leads, gaining a holistic view of subjects and transactions that drives more proactive threat response.",
            "Data Management: I implemented advanced indexing and AI-driven search algorithms that empower analysts to manage, search, view, and update records across persons, accounts, entities, transactions, phones, addresses, and more. This module accelerates relationship discovery, effectively serving as an AI-powered assistant in uncovering hidden links and building intelligence profiles.",
            "AI-Powered Analytics: Leveraging integrated Large Language Models (LLMs), I delivered dual-path analytics that transform raw data into real-time operational intelligence and long-term strategic insights. This AI backbone reduced analysis turnaround, enabling rapid decision-making and refined strategic forecasting.",
            "Data Visualization: I designed an interactive visualization suite using graphing tools with advanced rich functionality. Analysts can drill into transaction flows and entity networks with intuitive dashboards, generating executive-ready visual reports, improving pattern detection speed enormously.",
            "Case Management: I developed a layered case-management framework with precise access controls, security settings, case-type categorizations, and a specialized module for optimized AML/CFT investigations. This design elevated case-closure rates while safeguarding intelligence assets and ensuring an organized, secure investigative environment.",
            "Document Management: I integrated an enterprise document-management system that attaches scanned documents, Word files, Excel sheets, and PowerPoint presentations directly to intelligence records. The platform extracts all text from attachments for full-text search capabilities, minimizing the manual effort.",
            "Statistics: I built a one-click statistical reporting engine that produces FATF-compliant tables and charts for annual reports, balance-fluctuation analyses, summarizations, and more. With a single operation, FIU360 generates comprehensive statistical insights—streamlining the conversion of raw data into actionable intelligence.",
            "Dissemination: I automated the distribution of statistical analyses, charts, and visualizations via configurable dissemination workflows, freeing analysts from manual preparation and enabling them to focus on high-value investigative work.",
            "BI Dashboard: I implemented drag-and-drop Business Intelligence dashboards and reporting services that deliver real-time, performance-driven insights directly to decision-makers’ inboxes. Customizable drill-down analytics provide a complete operational overview, driving faster, data-driven decisions across the organization.",
            "Security: At the foundation of FIU360 is a global benchmark security framework: end-to-end encryption, role-based access control (RBAC), detailed auditing, tamper-proof logs, and zero-trust principles. IT administrators can manage the platform without direct access to sensitive data, ensuring the highest standards of confidentiality and integrity.",
            "Throughout this project, I championed Agile delivery, instituted CI/CD pipelines in Azure DevOps for automated workflows and zero-downtime deployments, and mentored cross-functional teams on best practices in full-stack architecture, data engineering, AI integration, and regulatory strategy. FIU360 stands today as a testament to my ability to deliver mission-critical, transformative solutions that empower Financial Intelligence Units worldwide."
          ],
          skills: [
            "Workflow Automation","Extract, Transform, Load (ETL)","Azure DevOps Services",".NET","Web Development",
            "Requirements Analysis","JavaScript","Problem Solving","Parallel Programming","Team Leadership",
            "Large-Scale Development","Agile Methodologies","Workflow Management","SQL","Design Patterns",
            "XML Data Processing","UI/UX Design","REST APIs","Web Services","Solution Architecture",
            "Microsoft SQL Server","Stakeholder Management","DevExpress","Leading Development Teams",
            "System Integration","Vue.js","Team Building","Critical Thinking","Graphing Tools","HTML",
            "XML Schema","C#","Encryption","Requirement Specifications","Software Development","Transact-SQL (T-SQL)",
            "Data Modeling","Scalability","Software Project Management","Artificial Intelligence (AI)",
            "Business Intelligence (BI)","Team Management","Logical Approach","Data Transformation",
            "Software Architecture","Data Integration","Database Design","Performance Tuning"
          ],
          url: "https://intellisys.sk/fiu-360/"
        },
        amlpro: {
          title: "AML PRO",
          image: "assets/img/portfolio/amlpro.png",
          category: "Financial Reporting | Compliance Automation | Data Management",    // what shows under <span class="category">
          tags: ["dotnet","compliance","etl","data"], // matches the filters
          summary:"Implemented a .NET/C# application to streamline FIU XML reporting, enable compliant data submission, and reduce onboarding time…",
          meta: "Jan 2022 – Dec 2022<br>intelliSYS Solutions & Consulting",
          overview: "Implemented a .NET/C# application to streamline FIU XML reporting, enabling reporting entities to submit compliant data from day one and reducing onboarding time.",
          features: [
            "External Data Manager: Built an External Data Manager to import and normalize client data from Excel and organizational databases, minimizing the manual data ingestion effort.",
            "Client Data Manager: Implemented a Client Data Manager with intelligent validation rules and error-handling routines that flagged and corrected data inconsistencies before submission.",
            "Data Transformation: Leveraged advanced data-transformation mappings for cleansing, deduplication, and normalization, standardizing client records across diverse source formats.",
            "UX/UI: Integrated DevExpress controls to build an intuitive UI for compliance officers, accelerating issue resolution through easy editing and annotation.",
            "Requirements Analysis: Collaborated with compliance, legal, and business stakeholders to capture requirements and ensure alignment with FIU mandates.",
            "Leadership: Mentored junior engineers on best practices in ETL design, data validation, and .NET development, raising team productivity.",
            "Code Authoring & Quality: Managed source code with Git, enforcing pull-request reviews and branching strategies to maintain code quality."
          ],
          skills: [
            "Extract, Transform, Load (ETL)",".NET","Data Validation","Software Engineering","SQL",
            "XML Data Processing","Web Services","Microsoft SQL Server","Stakeholder Management",
            "DevExpress","System Integration","XML Schema","C#","Software Development","Data Quality",
            "Data Transformation"
          ],
          url: "https://intellisys.sk/aml-pro/"
        },
        dataViz: {
          title: "Data Visualization",
          image: "assets/img/portfolio/dataviz.png",
          category: "Data Visualization | Real‑time Analytics",    // what shows under <span class="category">
          tags: ["dotnet","visualization","ai","data"], // matches the filters
          summary:"Architected a .NET/C# framework that rendered database objects as interactive dashboards—reducing analyst effort by 90%…",
          meta: "Jan 2020 – Jul 2021<br>intelliSYS Solutions & Consulting",
          overview: "Architected and led the development of a scalable .NET/C# visualization framework that renders database objects and relationships, empowering compliance teams with interactive dashboards and real-time insights.",
          features: [
            "Architected a scalable .NET/C# visualization framework to render all database objects and relationships, reducing analyst effort by 90%.",
            "Designed interactive dashboards with drill-down and filter capabilities, enabling compliance teams to identify suspicious patterns faster.",
            "Integrated external databases through dynamic data connectors, supporting cross-database relationship mapping for a unified view.",
            "Implemented RESTful Web Services to fetch real-time data from multiple sources, ensuring up-to-date visual insights.",
            "Optimized Microsoft SQL Server views and stored procedures to pre-aggregate relationship data, cutting load times by 50%.",
            "Developed parallel data‐processing pipelines for large-scale ETL tasks.",
            "Built graphing components and layouts to visualize complex entity networks, enhancing detection of anomalous clusters.",
            "Applied advanced data‐transformation rules to normalize schema variations, improving consistency across visualized datasets.",
            "Defined software architecture and component interfaces, ensuring modularity and ease of future enhancements.",
            "Conducted requirements analysis workshops with stakeholders to capture visualization needs and refine UX flows.",
            "Established CI/CD pipelines in Azure DevOps for automated deployment of visualization updates with zero downtime.",
            "Monitored performance with Application Insights, proactively identifying and resolving bottlenecks in graph rendering.",
            "Mentored junior developers on best practices for real-time data binding and memory management in rich UI.",
            "Adopted Agile processes, delivering incremental visualization features.",
            "Managed source control with Git, enforcing branching strategies and peer code reviews."
          ],
          skills: [
            "Extract, Transform, Load (ETL)","Graphing",".NET","Requirements Analysis",
            "Cross-Database Integration","Software Design","Parallel Programming","Agile Methodologies",
            "SQL","UI/UX Design","REST APIs","Web Services","Microsoft SQL Server","Stakeholder Management",
            "DevExpress","System Integration","Graphing Tools","C#","Data Visualization","Data Modeling",
            "Data Transformation","Software Architecture","Performance Tuning"
          ],
          url: "https://intellisys.sk/additional-tools/"
        },
        enrichment: {
          title: "Data Enrichment",
          image: "assets/img/portfolio/enrichment.png",
          category: "Data Integration | Automation",    // what shows under <span class="category">
          tags: ["dotnet","etl","aml","data","compliance"], // matches the filters
          summary:"Developed a .NET/C# add‑on suite for AML report enrichment—automating data acquisition workflows and achieving 99% accuracy…",
          meta: "Oct 2019 – Jan 2020<br>intelliSYS Solutions & Consulting",
          overview: "Architected and delivered an extensible .NET/C# add-on suite that automates AML report enrichment by integrating data from diverse sources, streamlining analyst workflows, and dramatically increasing data accuracy, throughput, and security.",
          features: [
            "Architected an extensible .NET/C# add-on suite to automate enrichment of AML reports with data from financial, government, and open-source sources, removing the burden of manual data gathering, while increasing the security and accuracy of the data.",
            "Implemented ETL pipelines to ingest, cleanse, and normalize heterogeneous datasets, achieving 99% data accuracy.",
            "Implemented parallel programming patterns and multithreaded ETL workflows to process over 100K records/hour.",
            "Orchestrated automated data-acquisition workflows that trigger on FIU report receipt or ad-hoc analyst requests, cutting latency by 99%.",
            "Ensured data integrity with comprehensive validation, error-handling routines, and retry logic, lowering enrichment failures by more than 90%.",
            "Collaborated with compliance and business stakeholders to align enrichment outputs with AML regulatory requirements.",
            "Designed advanced data-transformation mappings (cleansing, deduplication, normalization) to standardize disparate source formats.",
            "Monitored application health and performance with logging and telemetry (Application Insights), proactively resolving bottlenecks.",
            "Secured sensitive data in transit with TLS encryption.",
            "Coordinated with third-party API providers to expand data coverage and ensure SLA compliance."
          ],
          skills: [
            "Extract, Transform, Load (ETL)",".NET","Requirements Analysis","Software Design",
            "Parallel Programming","SQL","REST APIs","Web Services","Microsoft SQL Server",
            "Stakeholder Management","System Integration","C#","Data Modeling","Data Transformation",
            "Data Integration","Performance Tuning"
          ],
          url: "https://intellisys.sk/additional-tools/"
        },
        appointment: {
          title: "Appointment Reservation System",
          image: "assets/img/portfolio/appointment.png",
          category: "Scheduling | Client Management",    // what shows under <span class="category">
          tags: ["dotnet","web","scheduling","data"], // matches the filters
          summary:"Developed a C#/.NET web system enabling online booking, rescheduling, and automated reminders for clinics…",
          meta: "Jan 2014 – Sep 2019<br>Rakaaiz",
          overview: "Designed and delivered an end-to-end appointment reservation system enabling healthcare and service businesses to streamline scheduling, improve client experience, and support operational scalability.",
          features: [
            "Developed a user-friendly appointment reservation system using C# and the .NET Framework, enabling clinics, labs, and other businesses to efficiently manage client appointments.",
            "Designed an intuitive interface that allows clients to easily book, reschedule, and cancel appointments online, improving client satisfaction and reducing administrative burden.",
            "Implemented a robust database using Microsoft SQL Server to securely store appointment details, client information, and service availability.",
            "Integrated the system with existing business processes to streamline scheduling and resource allocation.",
            "Ensured the scalability and reliability of the application to handle a growing number of users and appointment requests."
          ],
          skills: [
            ".NET","Requirements Analysis","Problem Solving","Software Engineering",
            "REST APIs","Web Services","Microsoft SQL Server","Stakeholder Management",
            "C#","Entity Framework","Software Project Management","Database Design"
          ]
        },
        eventManagement: {
          title: "Event Management System",
          image: "assets/img/portfolio/event-management.png",
          category: "Event Management | Online Registration",    // what shows under <span class="category">
          tags: ["dotnet","web","scheduling"], // matches the filters
          summary:"Led full‑lifecycle .NET/SQL development of an event platform—covering registration, payments, and analytics…",
          meta: "Jan 2014 – Sep 2019<br>Rakaaiz",
          overview: "Led the end-to-end development of a .NET and SQL Server-based Event Management System—streamlining planning, registration, and execution through a secure backend, modern web interface, and integrated analytics.",
          features: [
            "Led the full lifecycle development of an Event Management System using .NET and SQL Server, streamlining event planning, registration, and execution processes.",
            "Designed a robust database schema in SQL Server to efficiently manage event details, attendee information, and scheduling.",
            "Developed a user-friendly web interface with JavaScript, jQuery, Bootstrap, HTML, and Cascading Style Sheets (CSS) for event organizers and attendees.",
            "Implemented features for online registration, payment processing, and communication with attendees, enhancing user experience and event participation.",
            "Integrated reporting and analytics capabilities to provide insights into event attendance, feedback, and overall success.",
            "Utilized the Entity Framework for efficient data access and manipulation within the .NET environment."
          ],
          skills: [
            ".NET","Web Development","Requirements Analysis","JavaScript","CSS",
            "REST APIs","Microsoft SQL Server","Bootstrap","HTML","Entity Framework","jQuery","Database Design"
          ]
        },
        financialManagement: {
          title: "Financial Management System",
          image: "assets/img/portfolio/financial-management.png",
          category: "Financial Operations | Web Application | Web Development",    // what shows under <span class="category">
          tags: ["dotnet","financial","web"], // matches the filters
          summary:"Led development of a .NET financial planning, forecasting, and reporting application—improving accuracy and efficiency…",
          meta: "Jan 2014 – Sep 2019<br>Rakaaiz",
          overview: "Led end-to-end development of a .NET-based Financial Management System, delivering key modules and integrations that enhanced the accuracy, efficiency, and usability of financial operations across the enterprise.",
          features: [
            "Led the development of a Financial Management System using .NET technologies, providing comprehensive tools for financial planning, analysis, and reporting.",
            "Designed and implemented key modules for budgeting, forecasting, and general ledger management, improving the accuracy and efficiency of financial operations.",
            "Developed robust data validation and security measures to ensure the integrity and confidentiality of financial data.",
            "Integrated the system with existing web services to facilitate seamless data exchange with other enterprise applications.",
            "Utilized HTML, JavaScript, and AngularJs to create a responsive and interactive user interface for financial professionals.",
            "Optimized database queries and application performance to ensure timely access to critical financial information."
          ],
          skills: [
            ".NET","Web Development","Requirements Analysis","AngularJS",
            "JavaScript","Software Design","Team Leadership","CSS","REST APIs",
            "Web Services","Microsoft SQL Server","HTML","Entity Framework",
            "Data Analysis","Database Design","Performance Tuning"
          ]
        },
        hrManagement: {
          title: "HR Management System",
          image: "assets/img/portfolio/hr-management.png",
          category: "Web Application | HR Operations | Payroll",    // what shows under <span class="category">
          tags: ["dotnet","hr","web"], // matches the filters
          summary:"Engineered a .NET/SQL system for employee records, payroll, and benefits, featuring a responsive UI and secure access controls…",
          meta: "Jan 2014 – Sep 2019<br>Rakaaiz",
          overview: "Engineered a .NET and SQL Server-based HR Management System to optimize and secure core HR operations, providing seamless access to employee records, payroll workflows, and organizational insights.",
          features: [
            "Engineered an HR Management System using .NET, SQL Server, and web technologies to streamline human resources processes, including employee records, payroll, and benefits administration.",
            "Designed a comprehensive database schema in SQL Server to efficiently manage employee data and ensure data integrity.",
            "Developed user-friendly interfaces using JavaScript, AngularJS, and Cascading Style Sheets (CSS) for various HR functions.",
            "Implemented secure authentication and authorization mechanisms to protect sensitive employee information.",
            "Integrated reporting capabilities to provide HR professionals with valuable insights into workforce trends and metrics."
          ],
          skills: [
            ".NET","Web Development","Requirements Analysis","AngularJS",
            "JavaScript","Software Design","CSS","REST APIs","Web Services",
            "Microsoft SQL Server","HTML","T-SQL","Database Design"
          ]
        },
        npoOperation: {
          title: "NPO Operation Management System",
          image: "assets/img/portfolio/npo-operation.png",
          category: "Nonprofit Operations | Web Application",    // what shows under <span class="category">
          tags: ["dotnet","npo","web"], // matches the filters
          summary:"Developed a .NET/SQL platform to manage donor records, programs, and analytics—optimizing nonprofit workflows…",
          meta: "Jan 2014 – Sep 2019<br>Rakaaiz",
          overview: "Engineered an NPO Operation Management System using .NET and SQL Server to streamline key workflows and improve operational oversight across donor and program activities.",
          features: [
            "Developed an NPO Operation Management System utilizing .NET, SQL Server, and web technologies to optimize the operational efficiency of non-profit organizations.",
            "Designed a modular system to manage various aspects of NPO operations, including donor management, and program tracking.",
            "Implemented robust security measures, including encryption, to protect sensitive donor and operational data.",
            "Developed interactive user interfaces using JavaScript, jQuery, Bootstrap, and Web Development best practices.",
            "Integrated reporting and analytics capabilities to provide insights into program effectiveness and resource allocation."
          ],
          skills: [
            "Web Development","Requirements Analysis","JavaScript","Software Design",
            "CSS","REST APIs","Microsoft SQL Server","Bootstrap","HTML","Encryption","jQuery","Database Design"
          ]
        },
        socialNetworking: {
          title: "Social Networking Platform",
          image: "assets/img/portfolio/social-networking.png",
          category: "Community Platform | Web Application",    // what shows under <span class="category">
          tags: ["dotnet","web"], // matches the filters
          summary:"Contributed to a .NET/SQL social network—developing user profiles, content sharing, and engagement tools…",
          meta: "Jan 2014 – Sep 2019<br>Rakaaiz",
          overview: "Contributed to a feature-rich Social Networking Platform using .NET, SQL Server, and modern web technologies, with a focus on scalable architecture and user engagement tools.",
          features: [
            "Contributed to the development of a Social Networking Platform using .NET, SQL Server, and web technologies, focusing on features to enhance user engagement and community building.",
            "Designed and implemented key features such as user profiles, content sharing, and social interaction tools.",
            "Developed a scalable database architecture in SQL Server to accommodate a growing user base and increasing data volume.",
            "Utilized JavaScript, jQuery, Bootstrap, HTML, and Cascading Style Sheets (CSS) to create a dynamic and user-friendly front-end experience.",
            "Implemented security measures to protect user data and ensure platform integrity."
          ],
          skills: [
            ".NET","Web Development","Requirements Analysis","JavaScript","CSS","REST APIs",
            "Microsoft SQL Server","Bootstrap","HTML","T-SQL","Scalability","jQuery","Database Design"
          ]
        },
        trainingManagement: {
          title: "Training Management System",
          image: "assets/img/portfolio/training-management.png",
          category: "Learning Management | Web Application",    // what shows under <span class="category">
          tags: ["dotnet","web","training"], // matches the filters
          summary:"Engineered a .NET/SQL certification platform with digital signatures—allowing custom certificates & enhanced authenticity…",
          meta: "Jan 2014 – Sep 2019<br>Rakaaiz",
          overview: "Designed and delivered a highly customizable Training and Certification Management System, empowering organizations to define training flows, issue digitally signed certificates, and manage participants with ease through a robust .NET and SQL Server backend.",
          features: [
            "Engineered a Training and Certification Management System using .NET and SQL Server, enabling each organization to design its own certificates from scratch with attached digital signatures, greatly enhancing the flexibility.",
            "Architected the system to manage training programs, participant records, certification processes, and the generation of digitally signed certificates.",
            "Developed a user-friendly interface with JavaScript, jQuery, Bootstrap, HTML, and Cascading Style Sheets (CSS) for designing and managing certificates.",
            "Implemented digital signature functionality to ensure the authenticity and integrity of issued certificates.",
            "Designed a flexible database structure in SQL Server to accommodate various training programs and certification requirements.",
            "Utilized the Entity Framework for efficient data management and interaction within the .NET application."
          ],
          skills: [
            "Web Development","Requirements Analysis","JavaScript","CSS","Bootstrap",
            "HTML","Entity Framework","jQuery","Database Design"
          ]
        },
        financialPlanning: {
          title: "Financial Planning System",
          image: "assets/img/portfolio/financial-planning.png",
          category: "Financial Forecasting | Excel/VBA",    // what shows under <span class="category">
          tags: ["financial"], // matches the filters
          summary:"Developed an Access VBA/Excel system for budgeting and forecasting—featuring a flexible interface, calculation engine, and Crystal Reports…",
          meta: "Jan 2010 – Jan 2014<br>ASEC Automation (ASA)",
          overview: "Engineered a comprehensive Financial Planning System using Microsoft Access VBA and Excel, empowering organizations to plan, analyze, and report on financial performance with flexibility and precision.",
          features: [
            "Developed a Financial Planning System to enable organizations to create and manage financial forecasts and budgets effectively.",
            "Designed a flexible and user-friendly interface using Microsoft Access VBA and Excel to facilitate data input and scenario planning.",
            "Implemented robust calculation engine to generate accurate financial projections and variance analyses.",
            "Integrated data from various sources to provide a holistic view of the organization's financial landscape.",
            "Generated customizable reports using Crystal Reports and Excel, enhancing financial transparency and decision-making."
          ],
          skills: [
            "Access VBA","Requirements Analysis","Software Design","Problem Solving",
            "Stakeholder Management","Financial Planning","Data Analysis","VBA Excel",
            "Microsoft Access","Software Development"
          ]
        },
        opcClient: {
          title: "OPC Client Software",
          image: "assets/img/portfolio/opc-client.png",
          category: "Industrial Automation | Real‑time Data",    // what shows under <span class="category">
          tags: ["dotnet","industrial","data"], // matches the filters
          summary:"Developed a .NET OPC client for real-time process data acquisition—enabling secure communication, visualization, and control…",
          meta: "Jan 2010 – Jan 2014<br>ASEC Automation (ASA)",
          overview: "Built a .NET-based OPC Client application to enable real-time communication and data acquisition from industrial automation servers and devices.",
          features: [
            "Developed OPC Client Software using .NET to facilitate seamless communication with process automation servers, enabling real-time data acquisition and control.",
            "Designed a robust and reliable architecture to handle continuous data streams from OPC-compliant devices.",
            "Implemented data visualization tools to provide operators with real-time insights into industrial processes.",
            "Ensured secure and efficient data exchange between the client application and automation servers."
          ],
          skills: [
            "Real-Time Data Processing",".NET","Requirements Analysis","Software Design",
            "Problem Solving","Industrial Automation","System Integration","OPC",
            "Microsoft Access","Database Design","Performance Tuning"
          ]
        },
        timeAttendance: {
          title: "Time Attendance Tracking System",
          image: "assets/img/portfolio/time-attendance.png",
          category: "HR Systems | Timekeeping Automation | Web Applications",    // what shows under <span class="category">
          tags: ["dotnet","hr","web"], // matches the filters
          summary:"Built an ASP.NET/SQL system for automated timekeeping, PTO requests, and payroll integration—enhancing HR efficiency…",
          meta: "Jan 2010 – Jan 2014<br>ASEC Automation (ASA)",
          overview: "Built an ASP.NET and SQL Server-based Time Attendance Tracking System that automated employee timekeeping, streamlined HR processes, and integrated seamlessly with payroll systems.",
          features: [
            "Developed a Time Attendance Tracking System using ASP.NET and SQL Server to automate employee timekeeping and attendance management.",
            "Designed a user-friendly web interface for employees to clock in and out, request time off, and view their attendance records.",
            "Implemented a robust database in SQL Server to store attendance data and generate comprehensive reports for payroll processing.",
            "Integrated the system with existing HR and payroll systems to streamline administrative processes."
          ],
          skills: [
            ".NET","Web Development","Requirements Analysis","REST APIs",
            "Microsoft SQL Server","System Integration","Software Development","ASP.NET"
          ]
        },
        travelAgency: {
          title: "Travel Agency Management System",
          image: "assets/img/portfolio/travel-agency.png",
          category: "Web Applications | Travel Services | CRM",    // what shows under <span class="category">
          tags: ["dotnet","web"], // matches the filters
          summary:"Engineered a .NET/SQL system for booking, customer management, and invoicing—streamlining travel agency operations…",
          meta: "Jan 2009 – Jan 2010<br>Freelancer",
          overview: "Engineered a web-based Travel Agency Management System using .NET and SQL Server to streamline bookings, manage packages, and enhance customer engagement across the full travel lifecycle.",
          features: [
            "Engineered a Travel Agency Management System using .NET, SQL Server, and web technologies to streamline booking processes, manage customer information, and track travel packages.",
            "Designed a comprehensive database to store details of destinations, accommodations, flights, and customer bookings.",
            "Developed user-friendly interfaces for travel agents to manage bookings, generate invoices, and communicate with clients.",
            "Implemented reporting features to track sales, popular destinations, and customer preferences."
          ],
          skills: [
            ".NET","Web Development","Requirements Analysis","Software Design",
            "Problem Solving","Stakeholder Management","Project Management",
            "AJAX","ASP.NET","Database Design"
          ]
        },
        dpme: {
          title: "DPME ERP System",
          image: "assets/img/portfolio/dpme.png",
          category: "ERP System | Project Management",    // what shows under <span class="category">
          tags: ["dotnet","erp","hr","financial"], // matches the filters
          summary:"Led the full-lifecycle development and migration of a comprehensive ERP system—covering Project Management, Finance, HR, Payroll, and Timesheet…",
          meta: "Jan 2006 – Dec 2008<br>Design & Project Management Engineering Co. (DPME)",
          overview: "Led the full lifecycle development of a scalable ERP platform covering Project Management, Finance, HR, Payroll, and Timesheet modules—streamlining business operations and enabling secure, data-driven decision-making.",
          features: [
            "Led a full lifecycle development team in the design, implementation, and migration of a comprehensive ERP system encompassing Project Management, Financial, HR, Payroll, and Timesheet Management modules, streamlining core business operations.",
            "Architected and developed a robust and scalable solution using C#, ASP.NET, and SQL Server, ensuring seamless data integration and workflow automation across departments.",
            "Implemented key workflow management solutions that automated critical business processes, resulting in enhanced collaboration and a measurable reduction in administrative overhead by 15%.",
            "Conducted thorough requirements analysis and translated business needs into detailed technical specifications, ensuring alignment between IT solutions and organizational goals.",
            "Designed a secure and efficient database schema in SQL Server, optimizing data retrieval and reporting capabilities for improved business intelligence.",
            "Managed the successful migration of legacy data into the new ERP system, ensuring data integrity and minimizing disruption to ongoing operations.",
            "Provided leadership and guidance to the development team, fostering a collaborative environment focused on delivering high-quality, on-time solutions."
          ],
          skills: [
            ".NET","Requirements Analysis","Software Design","Data Migration",
            "Team Leadership","Workflow Management","SQL","Microsoft SQL Server",
            "ERP Implementations","C#","Software Project Management","AJAX",
            "Visual Basic","ASP.NET","Data Integration","Database Design"
          ]
        }
      };



// Project cards rendering
    const grid = document.getElementById('portfolioGrid');
    const filters = {
      dotnet: 'filter-dotnet',
      web: 'filter-web',
      data: 'filter-data',
      financial: 'filter-financial',
      compliance: 'filter-compliance',
      erp: 'filter-erp',
      hr: 'filter-hr',
      ai: 'filter-ai',
      etl: 'filter-etl',
      aml: 'filter-aml',
      training: 'filter-training',
      scheduling: 'filter-scheduling',
      visualization: 'filter-visualization',
      npo: 'filter-npo',
      industrial: 'filter-industrial'
    };
    
    Object.entries(portfolioData).forEach(([key, p]) => {
      // build filter classes string
      const classes = (p.tags || []).map(tag => filters[tag]).join(' ');
      
      // build features list
      const featuresHTML = p.features.map(f =>
        `<div class="col-12"><p class="text-muted mb-0"><strong>${f.split(':')[0]}:</strong> ${f.split(':').slice(1).join(':').trim()}</p></div>`
      ).join('');
      
      // build skills badges
      const skillsHTML = p.skills.map(s =>
        `<span class="badge bg-light text-dark">${s}</span>`
      ).join('');
      
      // append card
      const card = document.createElement('div');
      card.className = `col-lg-6 col-md-6 portfolio-item isotope-item ${classes}`;
      card.innerHTML = `
        <div class="portfolio-card">
          <div class="portfolio-image">
            <img src="${p.image}" class="img-fluid" alt="${p.title}"/>
            <div class="portfolio-overlay">
              <div class="portfolio-actions">
                <a href="#" class="details-link" data-bs-toggle="modal"
                   data-bs-target="#portfolioModal" data-project="${key}">
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-content">
            <span class="category">${p.category}</span>
            <h3>${p.title}</h3>
            <p class="project-summary">
              ${p.summary.split('…')[0]}…  
              <a href="#" class="read-more" data-bs-toggle="modal"
                 data-bs-target="#portfolioModal" data-project="${key}">
                Read More
              </a>
            </p>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // re-trigger isotope layout once items are in DOM
    const isoContainer = document.querySelector('.isotope-layout .isotope-container');
    if (isoContainer && window.Isotope && window.imagesLoaded) {
      imagesLoaded(isoContainer, () => {
        window.isoInstance = new Isotope(isoContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'masonry'
        });
      });
    }


    // Portfolio modal functionality
      // Populate and show modal on click
      document.querySelectorAll('.read-more, .details-link').forEach(el => {
        el.addEventListener('click', e => {
          const key = e.currentTarget.dataset.project;
          const data = portfolioData[key];
          if (!data) return;

          // Header
          document.getElementById('portfolioModalLabel').innerText = data.title;
          // Image
          const img = document.getElementById('portfolioModalImage');
          img.src = data.image;
          img.alt = data.title;
          // Meta & Overview
          document.getElementById('portfolioModalMeta').innerHTML = data.meta;
          document.getElementById('portfolioModalOverview').innerText = data.overview;
          // Features
          // const feat = document.getElementById('portfolioModalFeatures');
          // feat.innerHTML = '';
          // data.features.forEach(item => {
          //   const div = document.createElement('div');
          //   div.className = 'col-12';
          //   const [title, ...rest] = item.split(':');
          //   div.innerHTML = `<p class="text-muted mb-0"><strong>${title.trim()}:</strong> ${rest.join(':').trim()}</p>`;
          //   feat.appendChild(div);
          // });
          const feat = document.getElementById('portfolioModalFeatures');
          feat.innerHTML = '';
          data.features.forEach(item => {
            const div = document.createElement('div');
            div.className = 'col-12';

            if (item.includes(':')) {
              const [title, ...rest] = item.split(':');
              div.innerHTML = `<p class="text-muted mb-0"><strong>${title.trim()}:</strong> ${rest.join(':').trim()}</p>`;
            } else {
              div.innerHTML = `<p class="text-muted mb-0">${item.trim()}</p>`;
            }

            feat.appendChild(div);
          });
          // Skills
          const skl = document.getElementById('portfolioModalSkills');
          skl.innerHTML = '';
          data.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'badge bg-light text-dark';
            span.innerText = skill;
            skl.appendChild(span);
          });

          // Add the project url if available
          const linkBtn = document.getElementById('portfolioModalLink');
          if (data.url) {
            linkBtn.href = data.url;
            linkBtn.style.display = 'inline-block';
          } else {
            linkBtn.style.display = 'none';
          }

        });
      });

// })();



//   (function() {
  })();

/* Testimonials Data */

  const testimonialsData = [
  {
    title: "Visionary Tech Leader and Mentor",
    paragraphs: [
      "I’ve had the privilege of working closely with Hosam Ibrahim for over 1 year, and I can say without hesitation that he is one of the most talented technologists and leaders I’ve ever encountered.",
      "From day one, Hosam has brought an unparalleled clarity of thought to every challenge we face. He doesn’t just dive in—he carefully structures problems into manageable pieces, lays out a roadmap for the team, and ensures that everyone understands both the “why” and the “how.” Watching him deconstruct complex, seemingly insurmountable technical issues and then guide us step-by-step toward elegant solutions is nothing short of inspiring.",
      "What truly sets Hosam apart, though, is his humility and genuine care for the growth of each team member. He is always ready to listen—whether you’re proposing a new idea, struggling with a piece of code, or simply need advice on your career path. I’ve learned more from his patient mentoring and thoughtful feedback than from any book or course. Under his leadership, I’ve seen our team’s skills sharpen, our processes become more efficient, and our confidence skyrocket.",
      "I’m grateful for everything I’ve learned from him and what I will learn from him in the future, and I know that any organization will be lucky to have Hosam on their side.",
      "I wholeheartedly recommend Hosam Ibrahim to anyone seeking a visionary tech lead who can both solve giant problems and uplift the people around him.",
    ],
    author: "Mohamed Mahrous",
    role: "Software Engineer | .Net Developer",
    image: "assets/img/testimonial/03.jpeg"
  },
  {
    title: "Reliable Tech Expert with Business Insight",
    paragraphs: [
      "I had the chance to work with Hosam Ibrahim at DPME, and honestly, he’s one of the most reliable and knowledgeable tech professionals I’ve worked with.",
      "Hosam has a solid background in software development and architecture, and it really shows in the way he tackles problems and designs smart, scalable solutions. He’s not just technically strong – he also understands business needs and knows how to bridge the gap between tech and business.",
      "What I appreciated most is how calm and focused he is, even when things get complicated or deadlines are tight. He’s always ready to help and share knowledge, and working with him made a real difference in the team’s output.",
      "I’d definitely recommend Hosam for any role that needs a sharp mind, steady hands, and solid experience."
    ],
    author: "Mahmoud Mansour",
    role: "Full Stack Developer at شركة عالم النظم والبرامج",
    image: "assets/img/testimonial/04.jpeg"
  },
  {
    title: "Proactive Team Player with Strong Problem-Solving Skills",
    paragraphs: [
      "I had the pleasure of working with Hosam Fazie at Rakaaiz, where he consistently demonstrated dedication, creativity, and a strong work ethic. Hosam played a key role in driving our projects forward with his problem-solving skills and ability to collaborate effectively with the team. His proactive approach and attention to detail made a significant impact on our success.",
      "Hosam is not only a reliable and skilled professional but also someone who brings positive energy to the workplace. I highly recommend him for any role that values initiative, teamwork, and high performance."
    ],
    author: "Ashraf Ahmed Soliman",
    role: "IT Business Conultant",
    image: "assets/img/testimonial/01.jpeg"
  },
  {
    title: "Exceptional Developer and Inspiring Team Leader",
    paragraphs: [
      "I had the pleasure of working closely with Hosam in a software development environment, and I can say without hesitation that he’s an outstanding developer and leader.",
      "Hosam has a deep understanding of software development principles and a strong ability to design and implement scalable, efficient solutions. Whether tackling complex technical challenges or optimizing systems for performance, he approaches every task with precision and a clear focus on quality. His technical acumen is matched by his ability to innovate and solve problems in creative ways.",
      "As a team leader, Hosam stands out for his ability to guide and inspire others. He has a natural talent for breaking down complex problems and leading teams toward effective solutions. He communicates with clarity and always makes sure that everyone is aligned on goals and expectations. His collaborative nature fosters a supportive environment, where team members feel encouraged to share ideas and learn from one another.",
      "Hosam’s leadership goes beyond technical expertise. He is genuinely invested in the growth of those around him, taking the time to mentor junior developers and share his knowledge. His calm and focused demeanor, even under pressure, sets a positive tone for the entire team and ensures that projects stay on track.",
      "What I appreciated most about Hosam is his commitment to continuous improvement, both in terms of personal growth and team development. He’s always up-to-date with the latest technologies, eager to adopt best practices, and willing to implement changes that benefit the team as a whole.",
      "In summary, Hosam is a highly skilled developer with excellent leadership capabilities. He combines technical expertise with a strong ability to lead teams and drive projects forward. Any organization would be lucky to have him on board, and I highly recommend him for any leadership or senior technical role."
    ],
    author: "Ahmed Maatouk",
    role: "Turnover and Completions Manager",
    image: "assets/img/testimonial/02.jpeg"
  },
  {
    title: "From Expert Developer to Strategic Architect",
    paragraphs: [
      "I highly recommend Hosam Fazie. As a former Senior Developer, his technical expertise and dedication were evident. Now, as a Software Architect, his strategic vision is commendable. He is a valuable professional and a pleasure to have worked with. I wish him continued success."
    ],
    author: "Amr Adel",
    role: "Product Director @Future Group Translation & Localization | Fintech | Loyalty | Telecom | Driving Innovation",
    image: "assets/img/testimonial/05.jpeg"
  }
];


(function() {
    const wrapper = document.getElementById('testimonialsWrapper');

    testimonialsData.forEach(test => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <div class="testimonial-item">
          <div class="row">
            <div class="col-lg-8">
              <h2>${test.title}</h2>
              ${test.paragraphs.map(p => `<p>${p}</p>`).join('')}
              <div class="profile d-flex align-items-center">
                <img src="${test.image}" class="profile-img" alt="">
                <div class="profile-info">
                  <h3>${test.author}</h3>
                  <span>${test.role}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-none d-lg-block">
              <div class="featured-img-wrapper">
                <img src="${test.image}" class="featured-img" alt="">
              </div>
            </div>
          </div>
        </div>`;
      wrapper.appendChild(slide);
    });

    // After slides are added, re-init Swiper (if needed)
    if (window.Swiper) {
      new Swiper('.testimonials-slider', JSON.parse(
        document.querySelector('.testimonials-slider .swiper-config').innerHTML
      ));
    }
  })();