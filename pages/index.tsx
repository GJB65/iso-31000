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
		headlinebig = ""
		headline ="Who are your internal and external stakeholders?"

description ="To find out who your stakeholders are, develop a training plan for staff and key stakeholders on BCP and BIA. Ensure your organization manages ambiguity and consistently seeks to drive clarity amongst project stakeholders. Ensure your organization is responsible for supporting multiple stakeholders which include project, programs, operations, and functional organizations. Actively promote a risk aware culture with the values of stewardship, risk awareness and accountability through education and communication to all stakeholders. Organizations that lack effective cybersecurity measures to help manage this change, face breaking the trust of their (internal) customers, stakeholders, and the marketplace while exposing themselves to ever increasing risk. Collaborate and engage with various stakeholders to interpret maturity and the level of control implementation to promote adequately positioned controls and prioritize investments/effort through strong collaboration with Core IT Compliance and Enterprise Risk Management."
/>

    </>
  )
}

Home.Layout = Layout
