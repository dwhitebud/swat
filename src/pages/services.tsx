import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import { 
  ComputerDesktopIcon, 
  CloudArrowUpIcon, 
  CogIcon, 
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
  'technology-strategy': ComputerDesktopIcon,
  'cloud-services': CloudArrowUpIcon,
  'implementation': CogIcon,
  'analytics': ChartBarIcon,
}

const ServicesPage: React.FC<PageProps<ServicesPageData>> = ({ data }) => {
  const services = data.allContentfulService.edges.sort(
    (a, b) => (a.node.order || 0) - (b.node.order || 0)
  )

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive technology consulting services to help your business grow
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {services.map(({ node: service }) => {
                const Icon = icons[service.slug as keyof typeof icons] || CogIcon
                return (
                  <div
                    key={service.slug}
                    className="space-y-4 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 text-primary-600">
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-500">{service.description.description}</p>
                    {service.features && service.features.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <svg
                              className="flex-shrink-0 mr-2 h-5 w-5 text-primary-500"
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage

export const Head = () => <title>Our Services | Technology Consulting</title>

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
