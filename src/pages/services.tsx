import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import { 
  LightBulbIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'

interface ServiceNode {
  node: {
    title: string
    description: {
      description: string
    }
    slug: string
    features: string[]
    order: number
  }
}

interface ServicesPageData {
  allContentfulService: {
    edges: ServiceNode[]
  }
}

const icons = {
  'technology-strategy': LightBulbIcon,
  'digital-transformation': ArrowPathIcon,
  'data-analytics-ai': CircleStackIcon,
  'cloud-services': CloudArrowUpIcon,
  'implementation': Cog6ToothIcon,
  'analytics': ChartBarIcon,
}

const ServicesPage: React.FC<PageProps<ServicesPageData>> = ({ data }) => {
  const services = data.allContentfulService.edges.sort(
    (a, b) => (a.node.order || 0) - (b.node.order || 0)
  )

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-primary-800 pb-32">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-primary-900 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-200">
                Comprehensive technology consulting services to help your business thrive in the digital age
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="relative -mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map(({ node: service }) => {
              const Icon = icons[service.slug as keyof typeof icons] || Cog6ToothIcon
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 text-primary-600 mb-6">
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-500 mb-6">{service.description.description}</p>
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <svg
                              className="flex-shrink-0 mt-1 mr-2 h-5 w-5 text-primary-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <a
                      href={`/contact?service=${service.slug}`}
                      className="text-base font-medium text-primary-600 hover:text-primary-500"
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-700 mt-32">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to transform your business?</span>
              <span className="block">Let's discuss your needs.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-primary-200">
              Schedule a free consultation with our technology experts and discover how we can help your business thrive.
            </p>
            <a
              href="/contact"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage

export const Head = () => (
  <>
    <title>Technology Consulting Services | Expert Solutions for Business Growth</title>
    <meta
      name="description"
      content="Transform your business with our comprehensive technology consulting services. From strategy to implementation, we help businesses thrive in the digital age."
    />
  </>
)

export const query = graphql`
  query ServicesQuery {
    allContentfulService {
      edges {
        node {
          title
          description {
            description
          }
          slug
          features
          order
        }
      }
    }
  }
`
