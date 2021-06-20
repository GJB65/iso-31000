import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>



<Hero
headline ="What are critical success factors contributing to organizational resilience?"

description ="Ensure your organization identifies opportunities and risks for delivering the business IT infrastructure, including identification of competitive services, opportunities for innovation and assessment of marketplace obstacles and technical hurdles to the business success. "/>




<Hero
headline ="How will you adjust your risk plan to respond to monitoring and review?"

description ="Ensure your organization is providing input on the security and risk implications from business and technology transformation activities. Develop appropriate risk treatment and mitigation options to address security risks identified during security reviews or risk assessments Your (internal) clients depend upon effective risk management, internal audit, and governance of enterprise information technology in order to achieve business objectives. Manage engagement risk, project scope including planning and budgeting, defining deliverable content, and ensuring buy in of projected solutions from key stakeholders at the client. "/>


<Hero
headline ="Inspections: do you have implemented any inspection plans to reduce the inherent risks, which are periodically revised?"

description ="Ensure your organization documents and supports third party related controls, risks, and issues. Establish and implement plans to protect data and information systems against unauthorized access. Innovate ways to identify key risks/concentrations and implement processes to actively monitor risks. Coordinate program support activities, including the development of internal and external communications, establishing roadmaps and benchmarks, and developing training plans. Ensure your organization develops new risk policies and strategies; contributes to ERM tools and methodologies to measure, monitor, and report risks; ensures proper application of risk management framework and controls. "/>


<Hero
headline ="What controls could be implemented to minimise the risk?"

description ="Provide timely status reports and introduce mitigation tactics to minimize project delivery risks. Ensure your organization understands the trade offs required to manage the different levels of risk tolerance and risk exposure across your organization and balance this with risk investments. Interpret error codes generated by log and system files from DBMS(s), OS(s), business applications, monitoring agents, risk mitigation agents, backup/recovery agents, network devices and storage devices. Identify and recommend improvements and efficiencies in the ERM governance, risk validation, and reporting processes to further advance the program maturity and improve the quality of program deliverables. Work closely with Security, Infrastructure and other key enterprise teams to understand changes they are making to the Production environment; analyzing and providing transparency into potential risks, issues or impacts to Digital systems. "/>



<Hero
headline ="Who is in charge of ensuring that the repair is made?"

description ="Analyze projects, report on project scope, budget, risks, and available resources. Ensure there is a strong technical competence up and down the technology stack user interface, applications, communications, infrastructure, database, network, storage, etc. "/>


<Hero
headline ="What are the strengths of the Risk management system in your organization?"

description ="Provide technology and risk related inputs to various Real risk programs. The head of data strategy must also out your organizations current data quality and maturity levels. So that funding investments needs to be secured in operational risk or third party risk management frameworks is under management. Primary functions: the data center services analyst is responsible for administering your organizations enterprise production environment. Evaluate your organizations policies, procedures, products and programs to ensure risk monitoring and mitigation is addressed where appropriate. Ensure your organization removes roadblocks and obstacles that may impair Systems Engineers to help ensure efforts meet strategic, financial, and technical goals. Maintain information security policies and procedures, ensuring adherence by engaging cross functional organizational stakeholders in periodic policy review and changes. "/>



<Hero
headline ="Do top management and executive leadership understand the aggregated and interlinked level of risk for your organization as a whole?"

description ="Participate in staffing design and management. Ensure your organization manages security incident detection, response, remediation using the NIST cybersecurity Risk Management Framework crm; it infrastructure; enterprise architecture; software development lifecycle; budgetary analysis; and organizational personnel assessment. Define and refine enterprise level, healthcare specific data models that cover entities and relationships between entities such as Members (Eligibility), Provider, Benefits, etc. "/>



<Hero
headline ="Did you think about what kinds of decisions should be officially included?"

description ="Make decisions based on data and related processes in support of stakeholders. Ensure your organization understands the professional services business, and the impact that decisions have to your organization. So that funding investments needs to be secured in strategic planning and management including budget, organization, personnel decisions. Support information system authorization decisions by performing risk trade off analyses and developing risk mitigation strategies and solutions. Be a cybersecurity advisor to managers and leaders who are responsible for making decisions about solutions that address business goals and risks. "/>


<Hero
headline ="What are the ESG related regulations, requirements or obligations in your organizations markets?"

description ="Ensure your organization maintains compliance with applicable laws, licenses, and regulations in the regions that you do business. Ensure your organization is starting from a database of requirements that encompasses your (internal) clients product platforms. Understand cryptography keys;Key creation, key exchange, key use, key storage, key size requirements, and key recovery. Be responsible for enterprise architecture strategy and leading the emerging technology and collaboration organizations. Ensure that all tasks performed adhere to your organizations ISO 27001 Information Security Management System (ISMS). Manage security incidents to protect corporate IT assets, including intellectual property, regulated data and your organizations reputation. Research, review, analyze, and summarize risk management and compliance related data, information, and processes to ensure adherence with corporate standards and federal/state requirements. Collaborate with a cross-functional team of application developers, operations engineers, architects to understand complex product requirements and translate them into automated solutions that you build. Needed: manage organization of Standards and Technology (NIST) standards, Cloud Computing Security Requirements Guide, and FISMA/FedRAMP compliance. Ensure your organization leads enterprise architecture team to identify and analyze business needs for future innovative technology, develops solution architecture requirements, and determines potential impact of technology solution. "/>

<Hero
headline ="Why is there a limited use (or reporting) of risk management practices?"

description ="Ensure your organization monitors for new regulation and developments in relation to model risk management. Effectively contributes in cross functional teams to identify, assess, aggregate, and mitigate current and emerging risk events. Interact closely with property management offices to observe adherence to policies and procedures, identify problem areas, and develop improved business processes. Develop experience should include security policy development, security education, network penetration testing, application vulnerability assessments, risk analysis and compliance testing. "/>


<Hero
headline ="Are people, assets, etc. exposed to potential risk?"

description ="Be the first to see new Algorithmic Risk Assessment Tools. Implement low risk, well understood changes that are requested by end users. Ensure your organization is assisting with digital risk management daily operations. Lead or oversee the Development, implementation and monitoring of enterprise wide initiatives that including providing clear risk mitigating directives Your it risk consultants provide advice to ceos, cfos, cros, cios, cisos and boards of directors on how to understand and adhere to changing regulatory compliance requirements. Collaborate with the operations team to understand the risk of the vulnerabilities at the time of discovery as well as if new information, such as an exploit in the wild, requires or a change in tactics. Pro-actively engage Internal Audit, SOX, Compliance, Information Security, Supplier Risk Management, Business Continuity and other assurance functions to support an integrated approach to risk management. "/>
<Hero
	
  headline ="Processes: are IA processes in line with business needs?"

description ="Ensure your organization is managing its principal IA business consulting. Analyze and identify problems, research and collect data, prepare business proposals, prepare presentation materials, manage projects and programs. Ensure your organization facilitates the enterprise wide risk assessment process, including identification of participants and coordination of the risk interview, identification, and evaluation processes. The operations manager risk management is responsible for providing the leadership team and businesses with a strong risk management culture, framework and reporting mandate supported by relevant risk committee. This group includes New Business Initiatives, Issue Management, Risk Measurement, Risk Reporting and Analytics, Enterprise Risk Optimization and Strategy; the Transition Oversight Office; and Strategic Risk Oversight (SRO)."
/>

<Hero
	
  headline ="Is your organizations security policy efficient?"

description ="Ensure your organization develops and operationalizes the CDC Cybersecurity Program. The risk manager is responsible for understanding and communicating your organizations risk profile to promote risk aware decision making and foster risk mitigation. Ensure your organization recommends and develops educational and training programs/activities in support of Safety, Health and Environmental programs to minimize your organizations exposure to loss.  "
/>

<Hero
	
  headline ="How do you systematically assess the risks you have identified?"

description ="Support reporting and governance of model and other quantitative risks. The risk manager is responsible for working with business partners to identify and consult on potential risks to your organization. Monitor asset allocations, identify emerging trends and risks to drive risk management action and inform asset allocation decisions. Establish the enterprise risk management program framework for the company to identify, assess, mitigate, monitor, test and report on risks faced by the company, consistent with industry best practices."
/>
<Hero
	headline ="If the client preserves the data in place, who pays for the extended storage, and at what cost?"

description ="Develop standards for streamlining data collection where data visualization and Enterprise Risk Management experience is needed. Ensure your organization works with (internal) clients with levels of risk and complexity of needs. Ensure your organization secures receivables from (internal) clients during and after completion of engagements Industry Knowledge. Ensure your organization is working on significant and unique security issues where analysis of situations or data requires an evaluation of intangibles. Ensure your organization attends change management events as Change Management Boards and deployment planning meetings to collect data and information pertaining to the release. "/>

<Hero
	headline ="What is the status of your response actions?"

description ="invest in ERM risk assessment and compile and analyze data responses. Ensure your organization (internal) customers on alternatives available for financial interactions. Track status of project deliverables and milestones based on information provided throughout the program. Ensure your organization is aligning individual and team actions with strategies and plans to drive business results. Implement internal control plan by means of administration, risk identification, testing and monitoring, and remediation actions. Provide objective assurance and advisory to management including identification of significant risks and risk response strategies and actions delivery: delivery offers and asset manager services ranging from account opening and market data services to transaction processing, corporate actions and reconciliation. The enterprise risk management manager is responsible for managing the enterprise risk management (ERM) risk register, response plans, databases and accumulation of relevant metric/data sources to support broader trending and reporting. Coordinate efforts to ensure the continuous validation and testing of the ERM/BC programs to include control testing, development of after actions reports, identification of best practices, learned, and monitoring gaps and actions items. "/>

<Hero
headline ="What can be done to reduce or eliminate risks?"

description ="Work with your enterprise risk management (ERM) team to understand expectations for managing cross functional risks and dependencies. Develop and implement the collection, analysis, and reporting of operational loss data and interlink losses to key risks and control deficiencies. Ensure your organization programs facilitate the identification, assessment, monitoring, and treatment and reporting of all types of risks, your organization faces. Ensure your organization develops and revises Enterprise Risk Management (ERM) policies, practices, and tools to analyze and report enterprise risks, and to manage risks according to the ERM framework. Invest in identifying key risks and mitigating factors of potential investments, such as asset types and values, legal and ownership structures, professional, customer bases or industry segments. Coordinate a unified approach to enterprise risk management through convening stakeholders involved in compliance, audit, insurance and other keys functions to manage ongoing organizational risks. Risk identification, risk measurement, issues management, and new business initiatives, enterprise risk reporting and analytics, risk optimization and strategy, as well as reputational and strategic risks. Ensure your organization leads the assessment of IT or business solutions against IT security requirements calling your gaps, risks, and corrective actions for both application and infrastructure solutions. "/>

<Hero
	
  headline ="Cultural risks: will the suggested goals and methods agree with the values of all project partners?"

description ="Display teamwork: work well with others to achieve group goals. Measure project performance using appropriate systems, tools and techniques. Ensure your organization consultants analyze data to define solution and alternate methods as well. Work with the Practice Managers and Directors to ensure the proper resources are utilized for the project delivery. Prepare reports summarizing operational results, financial performance, or accomplishments of specified objectives, goals, or plans. Work with internal stakeholders across the business to identify, assess, report, track, and remediate risks and support the development of risk mitigation strategies. The enterprise risk management (erm) team is responsible for the companys overall risk management program that enables your organization to understand, consider, manage, and disclose to investors risks that can have a material effect on a companys financial condition and results of operations."
/>

<Hero
	
		headline ="Is there a need for more monitoring and control for any particular risk?"

description ="Ensure your organization provides executive oversight and directs your organizations Strategy, Planning, and Risk functions. Provide guidance to internal stakeholders on effective risk management, including risk policy owners, risk owners, and process owners. Lead the svp, ERM with integrated, enterprise-wide activities, including the corporate risk assessment, department risk assessments, strategic planning, capital planning, and business performance management. Ensure your organization works with enterprise risk management to develop, maintain, and enforce policies and procedures to ensure the protection of winds it assets and the integrity, security, and privacy of its information. "/>


<Hero

  headline ="What type of monitoring activities do individuals conduct?"

description ="Evaluate risk levels and implement risk responses and monitoring. Conduct research to identify solutions to mitigate potential areas of risk. Ensure your organization conducts risk assessment and provides recommendations for application design. Lead your organizations processes for identifying, analyzing, evaluating, responding to and controlling, monitoring, and reporting on key risk management issues. Lead business lines and support functions in identifying, assessing, mitigating, and monitoring risk in a rapidly evolving regulatory and business operating environment. Ensure your organization conducts risk assessments to determine physical hazards and applicable state and federal program requirements for all organization related on site services. Ensure your organization applies tools and process for collecting updates across the integration team relating to progress on key activities, deliverable completion, issues, decision status, etc. Ensure your organization is supervising and conducting project level incident investigations and electrical mishaps; documenting factors contributing to an incident and preparing required reports. Ensure your organization leads departments in conducting a Business Impact Analysis and in using it to determine critical business processes, identifies acceptable recovery time periods, and establishes resources required for successful resumption of business operations in the event of a disaster."
/>


<Hero
		
		headline ="Who are your internal and external stakeholders?"

description ="To find out who your stakeholders are, develop a training plan for staff and key stakeholders on BCP and BIA. Ensure your organization manages ambiguity and consistently seeks to drive clarity amongst project stakeholders. Ensure your organization is responsible for supporting multiple stakeholders which include project, programs, operations, and functional organizations. Actively promote a risk aware culture with the values of stewardship, risk awareness and accountability through education and communication to all stakeholders. Organizations that lack effective cybersecurity measures to help manage this change, face breaking the trust of their (internal) customers, stakeholders, and the marketplace while exposing themselves to ever increasing risk. Collaborate and engage with various stakeholders to interpret maturity and the level of control implementation to promote adequately positioned controls and prioritize investments/effort through strong collaboration with Core IT Compliance and Enterprise Risk Management."
/>

<Hero
		
		headline ="It may be useful to consider further What if?"

description ="Consider deep investing in business continuity, enterprise risk management, internal audit, or compliance. Ensure your organization is responsible for all project documentation, including maintaining technical documents and business requirements. Ensure deployment and security configuration of complex applications throughout the project and secure software development lifecycle."
/>

<Hero
		
		headline ="Are the controls effective and fit for purpose?"

description ="When controls are active they drive documentation of processes and risks. Create a comprehensive inventory of risks and controls, and refine your organizations risk lexicon and risk appetite statements. Ensure your organization is assessing the design and effectiveness of internal controls through walkthroughs, sampling/testing of data, and documentation of results. Ensure your organization creates, maintains, and updates a continuity charter that defines the purpose, rules, deliverables, and goals of a Continuity organization. Serve as an enterprise-wide advisor to the organization, the business and helping them design and/or remediate controls weaknesses, using GRC data analytics and monitoring to focus in on key areas. Manage (part of the business and line) in the implementation of, and ongoing compliance with, the enterprise risk management framework which aims to identify, assess and monitor risks and controls. Ensure your organization develops effective internal controls designed to promote adherence with applicable laws, accreditation organization requirements, and federal, state, and private plans with various business department leaders to perform ERM duties such as identifying and assessing risk; developing, monitoring, and testing key controls and mitigations; planning; reporting; and related analysis. The organization partners with business operations to ensure proactive risk/issue identification, establishment of controls and monitoring, effective remediation of issues, appropriate risk/issue awareness and escalation, always-on audit readiness, and securing the achievement of business objectives."
/>

<Hero
headline ="Are you doing enough to manage risks or opportunities?"

description ="If you manage well, you build relationships and create opportunities. Conceive and implement key process improvement initiatives to mitigate strategic risks. Ensure your organization identifies opportunities to make tactical improvements to the release management process. Develop action plans for dispersing, controlling, responding, diminishing, isolating, testing, improving, relocating, redesigning, or diversifying risks. Serve as an advisor, leader, facilitator, and an influential voice for informing strategic decision making, including evaluation of new business and program opportunities. The mission of Enterprise Risk Management (ERM) is to ensure that your organization has a comprehensive framework for understanding the risks embedded in and across its businesses, so that the company can manage these risks effectively, evaluate current and future risk challenges and opportunities, and enhance shareholder value. "
/>


<Hero

headline ="How do you evolve (e.g., creation through a top down executive directive or a bottom up staff initiative)?"

description ="To evolve initiatives, conceive and implement key process improvement initiatives to mitigate strategic risks. Creation and development of (repeatable/automated) analytical solutions and tools to analyze risk portfolios reporting, data management, data interpretation into key observations and trends. Develop experience driving large and complex initiatives from framing the problem, conducting research and analysis to building the business and operational plans through to driving execution to success is required. Ensure your organization supports business partners in identifying, assessing and mitigating risks from business transactions and new initiatives M and A, customer and vendor contracts and new products and services."
/>


<Hero

headline ="Which (access) capabilities are required for carrying out the attack step?"

description ="As identity and access management (IAM) professional you will use the help desk to report accessibility and usability related issues. Invest in the management of project plans (including project timelines, data requirements, specific steps). Ensure your organization has access to extensive training and development resources and tools. Leverage tools/systems to enhance scenario analysis capabilities and partner with quantitative risk analytics and risk teams to develop dashboards which provide key insights into portfolio concentrations and risks. Strong knowledge on at least 4 of the following areas needs to be in place: Cloud Security, network security, and IoT security, security operations, Identity and access management, disaster recovery and incident management, DB security, data security, data protection and recovery, encryption and PKI."
/>
<Hero
	
headline ="How do you make sense of multiple criteria?"

description ="Manage several projects simultaneously with a sense of urgency. Compare estimated operational risks with criteria established by policy. Ensure your organization has a strong sense of initiative to identify data solutions meeting the ERM and to business needs should independent judgment in methods, techniques and evaluation criteria for obtaining risk reduction objectives. Establish success criteria, metrics, milestones, and timelines for deployment projects and ensure projects remain on track and on time. Ensure your organization develops and maintains the Enterprise Risk Management policies and procedures, identifies standards, performance criteria, internal controls, processes and systems needed, and recommend enhancements to the program as appropriate including assessing and aligning the program with industry standards and practices. "
/>



<Hero
	
headline ="Who has responsibility for implementing the plan for managing risks?"

description ="Work with svp, erm on incident management activities and business continuity plans. Plan, design, create and execute your organizations Model Risk Management framework. Ensure your organization understands engagement and project planning. Ensure your organization monitors significant risks to ensure they are actively managed and reported. Ensure your organization maintains erm expertise on emerging risks and trends through training and research. "
/>
<Hero
	
headline ="Do you support decision making by getting feedback and information?"

description ="Develop and implement ERP application information systems security plans and procedures. Ensure your organization participates in leadership and team decision making and associated activities. Information security (info sec) info sec prevents, responds and mitigates cyber risk, protecting yours and client data, and your information management systems. Ensure your organization works with enterprise risk management to develop, maintain, and enforce policies and procedures to ensure the protection of your it assets and the integrity, security, and privacy of its information. Ensure your organization opportunities are based on assigned department, possible examples include organizational structures, business etiquette, interpersonal/conflict resolution/sales/negotiation skills, industry information, products and services and functional responsibilities for various departments. "
/>



<Hero
	
headline ="Corporate greening through ISO 14001: A rational myth?"

description ="Act as primary liaison with regulatory bodies. Ensure effective communication with employees, supervisors/managers and staff. Ensure your organization performs business analytics and forecasting. Ensure your organization participates and is represented in industry meetings; interacts with subordinates, supervisors, other departments and Operating Units to facilitate safety compliance."
/>



<Hero
	
headline ="What does a risk management process look like?"

description ="Manage the process of collection, analysis and of all enterprise risk data. Develop experience on security policy, process, guidelines and procedures development. Provide on going thought leadership to shape the Enterprise Risk Management Program. Assure the identification of potential people side risks. Ensure your organization follows the ISO 31000 risk management process: identification, assessment, evaluation, mitigation and monitoring."
/>

<Hero
	
headline ="What are the risks perceived by companies?"

description ="Document minutes, action items, risks and issues and distribute. Ensure your organization is advising on contract status, legal risks, and the legal liabilities. Ensure your organization supports the erm program that is designed to proactively and systematically identify, assess, monitor, report and escalate significant operational risks. Establish the enterprise risk management program framework for the company to identify, assess, mitigate, monitor, test and report on risks faced by the company, consistent with industry best practices. The executive liability team works with (internal) clients to prevent, mitigate, and finance d and o liability and related governance risks by benchmarking, risk modeling, and enterprise risk management (erm) for risk profiles. Work collaboratively with business unit leaders to identify key risks, assess severity of risks, aggregate and prioritize risks, obtain management approval for appropriate risk treatment strategies, and regularly monitor and report residual risks through reporting and both targeted and enterprise-wide risk assessments. Lead and promote the development of an enterprise risk management strategy to support effective identification, assessment, measurement, control, monitoring, and communication of corporate risks, especially those risks having the potential to exceed corporate tolerances and disrupt the achievement of strategic initiatives. "
/>



<Hero

headline ="What are you here for (our vision and/or philosophy)?"

description ="Ensure your organization promotes your organizations mission and philosophy by participating in public forums. Review the insurance and indemnity provisions for vendor contracts, leasing, property management, agreements, and documents. Ensure your organization works as a product manager to create the vision for the capabilities, platforms ,roadmaps and key activities to make programs successful and collaborates and makes this vision executable. Ensure your organization leads and participates in special projects or reviews of cross-cutting Corporate issues that involve responsibilities of multiple Divisions/Offices and presents findings and recommendations to management. "
/>


<Hero

headline ="Are written and verbal communications from QA to Management timely & effective?"

description ="Maintain the emergency communications plan. Manage third party vendors related to the enterprise risk management program. Share meaningful knowledge across enterprise risk management framework, including: risk identification, risk appetite and strategy, risk-related decisions, processes and controls, risk analytics and governance."
/>


<Hero

headline ="Actionable: what needs to be done to deliver the expected outcome?"

description ="Ensure your organization directs delivery and management of complex client assurance to ensure positive outcomes. Ensure your organization is killed in developing working relationships with sales support and (internal) clients to deliver timely and effective outcomes. Team members research procedural outcomes for quality, analyze results, identify trends, and prepare reports for process owners. Have the intellectual and emotional intelligence to strategically partner cross functionally in the pursuit of shared business outcomes.  "
/>



<Hero

headline ="Is there regular review and monitoring of the risk management process?"

description ="Manage and/or oversee critical elements of your organizations risk management activities. Ensure your organization oversees the development and the performance of quality assurance reviews. Ensure your organization manages the risk and control monitoring departments metrics, models, scorecards, etc. Your solution deployment manager leverages skills in project management and business analysis, to ensure that enterprise (internal) customers are quickly and successfully onboarded to the platform."
/>

    </>
  )
}

Home.Layout = Layout
