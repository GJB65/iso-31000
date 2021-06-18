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


    </>
  )
}

Home.Layout = Layout
