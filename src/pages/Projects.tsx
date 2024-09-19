// Import necessary modules
import React from "react";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";

interface Project {
  name: string;
  description?: string;
  scope: string;
  processesProducts: string[];
  technologies: string[];
  responsibilities: string[];
}

const projects: Project[] = [
  {
    name: "CSOX",
    description:
      "Led development and optimization of a ReactJS application with Theia and Material UI.",
    scope: "Lead development and optimization",
    processesProducts: [
      "Led the development of a ReactJS application with Theia and Material UI.",
      "Enhanced functionality with AGGrid and Testing.",
      "Optimized performance by improving HARA (Hazard Analysis and Risk Assessment), TARA (Threat and Risk Assessment), and ATA (Attack Tree Analysis) within the SOX application.",
      "Automated deployment processes with CI/CD pipelines on GitLab, resulting in efficient and error-free releases.",
    ],
    technologies: [
      "ReactJS",
      "Theia",
      "Material UI",
      "AGGrid",
      "React Testing Library",
      "GitLab CI/CD",
      "AWS",
    ],
    responsibilities: [
      "Developed and enhanced various modules within the application.",
      "Implemented robust quality assurance measures.",
      "Optimized performance and automated deployment processes.",
    ],
  },

  {
    name: "Justtrack Application",
    description:
      "Implemented features and enhanced product reliability using various technologies.",
    scope: "Feature implementation and reliability enhancement",
    processesProducts: [
      "Implemented numerous features using ReactJS, React Table, Tanstack Query, Redux, and Material UI, enhancing overall functionality and UI.",
      "Played a pivotal role in ensuring product reliability and stability by contributing to E2E testing efforts using Cypress.",
    ],
    technologies: [
      "ReactJS",
      "React Table",
      "Tanstack Query",
      "Redux",
      "Material UI",
      "Rechart",
      "Cypress",
    ],
    responsibilities: [
      "Developed new features and improved UI.",
      "Contributed to E2E testing, improving software quality and user satisfaction.",
    ],
  },
  {
    name: "Finacle",
    scope:
      "Worked on integrating Finacle with React and Polymer for a comprehensive banking solution. Leveraged React for dynamic and responsive user interfaces and Polymer for web component development, enhancing modularity and reusability.",
    processesProducts: [
      "Implemented numerous features using ReactJS, React Table, Tanstack Query, Redux, and Material UI, enhancing overall functionality and UI.",
      "Played a pivotal role in ensuring product reliability and stability by contributing to E2E testing efforts using Cypress.",
    ],
    technologies: [
      "ReactJS",
      "Polymer",
      "MongoDB",
      "Redux",
      "Material UI",
      "React Table",
    ],
    responsibilities: [
      "Scrum master",
      "Team Lead",
      "Code Review",
      "Collaboration with another team leads",
      "Key feature developments",
    ],
  },
  {
    name: "ATS Core Frontend",
    scope: "Development and Deployment",
    processesProducts: [
      "Login",
      "Routing",
      "Localization",
      "Material Spinner",
      "Material Snack bar",
      "Interceptor",
      "Guards",
      "Signal R",
    ],
    technologies: ["Angular 6 with CLI", "Angular Material"],
    responsibilities: [
      "Attend regular meetings/discussions with client",
      "Plan and deliver all tasks in an efficient manner",
      "Develop and deploy the changes on respective environments",
    ],
  },
  {
    name: "Timber Preserve Management",
    scope: "Development",
    processesProducts: [
      "Production Scheduling",
      "Treatment Cycles",
      "Spices",
      "Wood Types",
      "Profiles",
      "Volume calculations",
      "Export to Excel",
      "Export to PDF using WKHTMLTOPDF library",
      "Printing charge sheet reports",
    ],
    technologies: [
      "Sencha Architect 4.2",
      "Ext JS 6.5.2",
      "Angular JS",
      "WCF",
      "SQL Server 2014",
    ],
    responsibilities: [
      "Create pages with required extension controls",
      "Attend regular meetings/discussions with client",
      "Plan and deliver all tasks in an efficient manner",
      "Code deployment to the DEV/QA/UAT/PROD environments",
    ],
  },
  {
    name: "Tricore - Grand Rapid Reports",
    scope: "Development and Deployment",
    processesProducts: [
      "Receiving Summary Report",
      "Receiving Details Report",
      "Batch Summary Report",
      "Batch Details Report",
      "Pre-Batch Report",
    ],
    technologies: ["SSRS", "SQL Server 2014"],
    responsibilities: [
      "Attend regular discussions with client",
      "Create reports and stored procedures",
      "Develop and deploy the changes on respective environments",
    ],
  },
  {
    name: "Gas Management System (GMS)",
    scope: "Development and Support",
    processesProducts: [
      "Volume loading",
      "Nominations and allocations",
      "Report generation",
    ],
    technologies: [
      "ASP.NET MVC",
      "C#.NET",
      "VB6.0",
      "ASP.NET",
      "WCF",
      "BOOTSTRAP",
      "Crystal Reports",
      "jQuery",
      "JavaScript",
      "SharePoint",
      "SQL Server",
      "JSON",
      "XML",
      "HTML",
    ],
    responsibilities: [
      "Develop and write programming logic, WCF services, and stored procedures",
      "Attend daily meetings with client or onsite for project/requirement analysis",
      "Act as a solo project executer",
      "Plan and deliver all tasks in an efficient manner",
      "Create Sites and provide access to SharePoint portals",
      "Prepare tasks and estimates with client or onsite",
      "Preparation of test cases and unit testing",
      "Respond promptly and professionally over reported issues",
      "Conduct DP Log meetings with team to ensure quality of the project",
      "Document the changes in database and code as required",
      "Prepare Knowledge Captured Document (KCD) for the applications",
      "Preparation of Root Cause Analysis (RCA) for the critical issues",
      "Code deployment to the DEV /QA/ UAT/ PROD environments",
    ],
  },
  {
    name: "Brewery Process Management",
    scope: "Development",
    processesProducts: ["Material", "Definitions", "Equipment", "Packaging"],
    technologies: [
      "Angular 4",
      "Web API",
      "Bootstrap",
      "jQuery",
      "Typescript",
      "HTML 5",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with client or onsite for project/requirement analysis/discussion and task updates",
      "Preparation of test cases and unit testing",
      "Respond promptly and professionally over reported issues",
      "Code deployment to the DEV /QA/ UAT/ PROD environments",
    ],
  },
  {
    name: "QR Code Scanner Web App",
    scope: "Development",
    processesProducts: [
      "Scan QR code on machines",
      "Fetch documents as per QR code and open respective PDF files and display to user",
    ],
    technologies: [
      "Bootstrap",
      "HTML 5",
      "Instascan JavaScript library for QR Code",
      "WebRTC",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Plan and deliver all tasks in an efficient manner",
      "Test code with different browsers on laptops, tablets, and mobiles",
      "Deployment",
    ],
  },
  {
    name: "OPARM (Organizational Projects Asset Retention and Management)",
    scope: "Development",
    processesProducts: [
      "User Profile",
      "Skills",
      "Contacts",
      "Domain Exposure",
      "Customer Exposure",
      "Industry Standard and Skill Matrix",
    ],
    technologies: [
      "ASP.NET MVC 4",
      "Web API",
      "SQL Server",
      "C#.NET",
      "JQuery",
      "Bootstrap",
      "HTML5",
    ],
    responsibilities: [
      "Write code to implement modules",
      "Attend daily meetings with client or onsite for project/requirement analysis/discussion and task updates",
      "Plan and deliver all tasks in an efficient manner",
      "Prepare tasks and estimates with team",
      "Respond promptly and professionally over reported issues",
      "Prepare Knowledge Captured Document (KCD) for the applications",
      "Preparation of Root Cause Analysis (RCA) for the critical issues",
      "Deployment to Dev, QA and Prod environments",
    ],
  },
  {
    name: "Next Gen Portal",
    scope: "Design and Development",
    processesProducts: [
      "Create Libraries",
      "Users",
      "Topics",
      "Artifacts",
      "Review and update Artifacts",
    ],
    technologies: [
      "ASP.NET MVC",
      "Entity Framework",
      "WCF",
      "LINQ",
      "HTML5",
      "BOOTSTRAP",
      "JSON",
      "jQuery",
      "SQL Server",
    ],
    responsibilities: [
      "Develop and write programming logic, WCF services",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Attend daily meetings with client for requirement analysis/discussion",
      "Act as a solo project executer",
      "Respond promptly and professionally to technical issues resolving",
      "Document the changes in database and code as required",
      "Code deployment to the DEV /QA/ UAT/ PROD environments",
      "Write test cases",
    ],
  },
  {
    name: "Power Transmission Project",
    scope: "Designing and Development",
    processesProducts: [
      "Collect information from all locations",
      "Send data to server",
    ],
    technologies: [
      "C#.NET",
      "LINQ",
      "Entity Framework",
      "SQL Server 2008 R2",
      "ASP.NET MVC",
      "WCF",
      "jQuery",
    ],
    responsibilities: [
      "Develop and write programming logic, WCF services",
      "Attend daily meetings with client for requirement analysis/discussion and task updates",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Manage team, estimate tasks, allocate tasks and review the same",
      "Develop and deploy the project within timeline defined",
      "Unit testing of the deliverable module",
      "Code deployment to the DEV /QA/ UAT/ PROD",
    ],
  },
  {
    name: "Business Mobile App",
    scope: "Designing and Development",
    processesProducts: [
      "Fetching data from database and manipulate data on server using JSON based web services",
      "Mail notifications as well as Push notifications for Android and iOS",
    ],
    technologies: [
      "ASP.NET",
      "C#.NET",
      "JSON",
      "SQL Server 2008",
      "Web Services",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with client for requirements and task updates",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Act as a solo project executer",
      "Write web services for Android and iOS applications",
      "Respond promptly and professionally to bugs/issues resolving",
      "Code deployment to the DEV /QA/ UAT/ PROD",
    ],
  },
  {
    name: "iOS Mobile App with Admin",
    scope: "Designing and Development",
    processesProducts: [
      "Fetching data from database and manipulate data on server using JSON based web services",
      "Mail notifications as well as Push notifications for iOS",
      "Admin section to review data, video, audio and doc files",
    ],
    technologies: [
      "ASP.NET",
      "C#.NET",
      "jQuery",
      "JSON",
      "SQL Server 2008",
      "Web Services",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with client for requirement and task updates",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Respond promptly and professionally to bug fixes",
      "Write web services for Android and iOS applications",
      "Code deployment to the DEV /QA/ UAT/ PROD",
    ],
  },
  {
    name: "Transport Application - Snylsis",
    scope: "Designing & Development",
    processesProducts: [
      "Manage the shipments, journeys, drivers, vehicles, packages, contacts, customers, dispatchers, invoices",
      "Access permissions and dashboard for admin",
    ],
    technologies: [
      "ASP.NET MVC",
      "SQL Server 2014",
      "jQuery",
      "Bootstrap",
      "HTML5",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with client for requirement/ task updates",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Respond promptly and professionally to bugs/issues",
      "Code deployment to the DEV/ QA/ UAT/ PROD",
    ],
  },
  {
    name: "San Joaquin Valley (SJV) App Upgrade (NET Framework Upgrade)",
    scope: "Upgradation",
    processesProducts: [
      "Upgradation of .NET 3.5/2.0 applications to .NET 4.5",
      "Pre-and Post-migration SAST (Static Application Security Testing) scanning for vulnerability check",
    ],
    technologies: [
      "ASP.NET",
      "C#.NET",
      "VB.NET",
      "IIS Server",
      "VS 2012",
      "TFS",
      "Crystal Reports",
      "HP Fortify (SAST Scan Tool)",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with client or onsite for requirement and task updates",
      "Plan and deliver all tasks in an efficient manner",
      "Respond promptly and professionally to bugs",
      "Document the changes in database and code as required",
      "Create resource files for multi-language support",
      "Perform SAST Scanning before and after migration of the application to ensure that post migration there are no new issues",
    ],
  },
  {
    name: "Project Management System (PMS)",
    scope: "Designing & Development",
    processesProducts: [
      "Manage project related data such as programmer/Tester and Designer’s daily work and related tasks, testing related activities",
      "Assignment and Tracking of Projects with various kinds of reports",
      "Reports - Daily work report, Quarter report, and Resource Summary report",
    ],
    technologies: [
      "VS2010",
      "ASP.NET",
      "C#.NET",
      "SQL Server 2008",
      "jQuery",
      "JavaScript",
      "CSS",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with end users for requirement",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Plan and deliver all tasks in an efficient manner",
      "Respond promptly and professionally to bug fixes",
      "Prepare test cases for developed functionalities",
      "Document the changes in database and code as required",
      "Code deployment to the DEV /QA/ UAT/ PROD",
    ],
  },
  {
    name: "Customer Relationship Management (CRM)",
    scope: "Designing & Development",
    processesProducts: [
      "Managing company’s interactions between customers and sales",
      "Organizing, automating, and synchronizing business processes and sales activities",
      "Goal to find, attract, win new clients and retain existing clients",
    ],
    technologies: [
      "VS2010",
      "ASP.NET",
      "C#.NET",
      "SQL Server 2008",
      "jQuery",
      "JavaScript",
      "CSS",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with end users for requirement analysis/discussion",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Plan and deliver all tasks in an efficient manner",
      "Prepare test cases for developed functionalities",
      "Document the changes in database and code as required",
      "Code deployment to the DEV /QA/ UAT/ PROD",
    ],
  },
  {
    name: "Pathology System",
    scope: "Designing & Development",
    processesProducts: [
      "Maintain all pathology reports in smart card",
      "Retrieve data using smart card reader at pathology centre",
    ],
    technologies: [
      "VS2008",
      "VB.NET",
      "MS Access",
      "SQL Server 2008",
      "SCOSTA File System",
      "RDLC / Crystal Reports",
      "Wojtek tool",
      "Microsystems SCR3310 and SCOSTA based smart cards",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with onsite for requirement",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Plan and deliver all tasks in an efficient manner",
      "Document the changes in database and code as required",
      "Prepare user manual for the end user",
      "Write stored procedure as required",
      "Create file system on SCOSTA smart cards using Wojtek Tool",
      "Create deployable setup file",
    ],
  },
  {
    name: "File Tracking System",
    scope: "Designing & Development",
    processesProducts: [
      "File Registration, File Allocation, File Search, File Theft Detection and buzzed Alarm on Theft",
      "Various Reports",
    ],
    technologies: [
      "VS2008",
      "C#.NET",
      "SQL Server 2008",
      "Windows-CE",
      "Sirit Infinity UHF Reader Antenna with RFID Tags",
      "Windows-CE based Handheld Reader with RFID UHF Tags",
    ],
    responsibilities: [
      "Attend daily meetings with onsite for requirement",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Plan and deliver all tasks in an efficient manner",
      "Document the changes in database and code as required",
      "Prepare user manual for the end user",
      "Write module to read data from RFID tags and process it",
      "Create deployable setup file",
    ],
  },
  {
    name: "Bicycle Kitting Management",
    scope: "Designing & Development",
    processesProducts: [
      "Allocate smartcards for different processes of bicycle manufacturing",
      "Allow supervisor login and verify all the processes",
    ],
    technologies: [
      "C#.NET",
      "SQL Server 2008",
      "Omnikey Diagnostic Tool",
      "NFC Multi Smartcard",
      "DUALi Reader with Mifare Smartcards",
      "Feig RFID Pad Antenna with RFID Tags",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with onsite for requirement",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Plan and deliver all tasks in an efficient manner",
      "Document the changes in database and code as required",
      "Prepare user manual for the end user",
      "Create file system using SCOSTA smart cards using Wojtek Tool",
      "Create deployable setup file",
    ],
  },
  {
    name: "Vehicle Management System",
    scope: "Designing & Development",
    processesProducts: [
      "Read / write the vehicle information, customer information, services information and all payment related information",
    ],
    technologies: [
      "VS2008",
      "VB.NET",
      "MS Access",
      "SQL Server 2008",
      "SCOSTA File System",
      "RDLC / Crystal Reports",
      "Wojtek tool",
      "SCM Microsystems SCR3310 and SCOSTA based Smartcards",
    ],
    responsibilities: [
      "Develop and write programming logic",
      "Attend daily meetings with onsite for requirement analysis/discussion",
      "Design project architecture and define rules",
      "Design database structure and write stored procedures",
      "Plan and deliver all tasks in an efficient manner",
      "Document the changes in database and code as required",
      "Prepare user manual for the end user",
      "Create file system using SCOSTA smart cards using Wojtek Tool",
      "Create deployable setup file",
    ],
  },
  {
    name: "Answer to Reset (ATR) Reader System",
    scope: "Designing & Development",
    processesProducts: [
      "In manufacturing of SCOSTA smartcards, used to check ATR of smartcard for testing",
    ],
    technologies: [
      "VS2008",
      "VB.NET",
      "SCOSTA File System",
      "Wojtek tool",
      "SCM Microsystems SCR3310 and SCOSTA based Smartcards",
    ],
    responsibilities: [
      "Proactively provide a solution to the manufacturing team to automate the manual process",
      "Execute APDU commands through .NET application which removed manual execution on APDU commands",
      "Demo the application and explain how the manual process can be removed and provide setup file of the application",
    ],
  },
  {
    name: "Enterprise Resource Planning (ERP)",
    scope: "Development and Support",
    processesProducts: [
      "Material management in enterprises - from purchase management to aspects of sales and production planning",
    ],
    technologies: ["Visual Basic 6.0", "MS Access", "SQL Server 2005"],
    responsibilities: [
      "Develop and write programming logic",
      "Create crystal reports as per requirements",
      "Make changes in crystal reports as per client requirement",
      "Onsite visit to fix any issue to generate BOL through application",
      "Customization in ERP and creation of new module as per client requirement",
      "Manage team, estimate tasks, allocate tasks and review the same",
      "Database changes as per requirement",
    ],
  },
  {
    name: "SJV (San Joaquin Valley) Migration (ETL Packages Migration)",
    scope: "Migration",
    processesProducts: [
      "Migrate SSIS 2008 to SSIS 2014 and remove dependency of ETL Framework",
      "Remove hard coded connection strings and expressions",
    ],
    technologies: [
      "ETL Framework",
      "SQL Server 2008",
      "SQL Server 2014",
      "VS.NET 2008 BI",
      "VS.NET 2012 BI",
    ],
    responsibilities: [
      "Attend daily scrum call with client for requirement analysis/discussion",
      "Migration of SSIS Packages from 2008 to 2014",
    ],
  },
  {
    name: "Midway Sunset Site (MDWS) Creation in PI Explorer",
    scope: "Design and Development",
    processesProducts: [
      "Create hierarchy and various templates, elements and attributes",
    ],
    technologies: [
      "OSI PI system Explorer",
      "PI Builder",
      "PI Data Link",
      "SQL Server 2012",
    ],
    responsibilities: [
      "Create new site hierarchy in PI system explorer",
      "Create PI Elements, PI Templates in PI system explorer",
      "Attend daily scrum call with client for requirement analysis/discussion",
      "Testing of the application",
      "Prepare documents of tags which are not returning values and analyse them",
      "Prepare release document for production",
    ],
  },
  {
    name: "Daily Journal",
    scope: "Designing and Development",
    processesProducts: [
      "Creation of consoles, systems, sub-systems",
      "Monitor the physical sites of oil and gas and assign event to employees",
    ],
    technologies: ["ServiceNow", "JavaScript"],
    responsibilities: [
      "Attend daily scrum call with client",
      "Work on JavaScript in client scripts, UI Actions and Glide Records",
      "Unit testing of the application",
    ],
  },
  {
    name: "Service Catalogs",
    scope: "Designing and Development",
    processesProducts: [
      "Add user in different Active Directory groups after getting approvals using workflow activities",
      "Inform users and approvers by sending email notifications",
    ],
    technologies: ["ServiceNow", "JavaScript", "Workflows"],
    responsibilities: [
      "Attend daily scrum call with client",
      "Work on JavaScript in client scripts, UI Actions and Glide Records",
      "Unit testing of the application",
    ],
  },
  {
    name: "Align Registration",
    scope: "Designing and Development",
    processesProducts: [
      "Registration of external users to Active Directory using ServiceNow Workflows, Client Scripts and UI-actions",
    ],
    technologies: ["ServiceNow", "JavaScript", "CSS", "Workflows"],
    responsibilities: [
      "Attend daily scrum call with client",
      "Work in JavaScript in client environment, UI Actions and Glide Records",
      "Write PowerShell script",
      "Active Directory integration to add/edit users",
    ],
  },
];

const ProjectsComponent: React.FC = () => {
  return (
    <div className="p-6">
      {projects.map((project, index) => (
        <Card key={index} className="mb-4">
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              <strong>Scope:</strong> {project.scope}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              <strong>Processes/Products:</strong>{" "}
              {project.processesProducts.join(", ")}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              <strong>Responsibilities:</strong>
              <ul>
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </Typography>
            <Divider />
            <Button variant="text" color="primary" className="pt-5">
              View More
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsComponent;