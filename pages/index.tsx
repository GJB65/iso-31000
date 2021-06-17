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


    </>
  )
}

Home.Layout = Layout
