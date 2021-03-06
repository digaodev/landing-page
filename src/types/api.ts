export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type TechIcon = {
  id: string
  icon: {
    url: string
  }
  title: string
}
export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concept = {
  id: string
  title: string
}
export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type Module = {
  id: string
  title: string
  subtitle: string
  description: string
}
export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}
export type Author = {
  photo: Image
  name: string
  description: string
  role: string
  socialLinks: SocialLink[]
}
export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  id: number
  name: string
  text: string
  photo: {
    url: string
  }
}
export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  id: number
  question: string
  answer: string
}
export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
