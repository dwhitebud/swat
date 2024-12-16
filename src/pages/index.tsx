import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  ChartBarIcon,
  Cog6ToothIcon as CogIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CircleStackIcon as ChipIcon
} from '@heroicons/react/24/outline'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-primary-900 text-white overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
            <div className="relative h-full">
              <svg
                className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-primary-700" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
              </svg>
            </div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Business with</span>
                <span className="block text-primary-400">Modern Technology Solutions</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Empower your business with cutting-edge technology solutions. We help small and medium-sized businesses 
                leverage the power of modern tech to drive growth, increase efficiency, and stay ahead of the competition.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Trusted by Growing Businesses
              </h2>
              <p className="mt-3 text-xl text-primary-200">
                Our track record speaks for itself
              </p>
            </div>
            <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-200">
                  Clients Served
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">100+</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-200">
                  Implementation Success Rate
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">98%</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-200">
                  Client Satisfaction
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">4.9/5</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                Comprehensive Solutions
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to succeed in the digital age
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                From strategic planning to implementation and support, we provide end-to-end technology solutions 
                tailored to your business needs.
              </p>
            </div>

            <div className="mt-16">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    title: "Strategic Technology Planning",
                    description: "Develop a comprehensive technology roadmap aligned with your business goals and budget.",
                    icon: LightBulbIcon
                  },
                  {
                    title: "Cloud Solutions",
                    description: "Leverage cloud technology for improved scalability, security, and cost efficiency.",
                    icon: ChipIcon
                  },
                  {
                    title: "Digital Transformation",
                    description: "Modernize your business processes with cutting-edge digital solutions.",
                    icon: CogIcon
                  },
                  {
                    title: "Data Analytics",
                    description: "Turn your data into actionable insights with advanced analytics solutions.",
                    icon: ChartBarIcon
                  },
                  {
                    title: "Cybersecurity",
                    description: "Protect your business with enterprise-grade security solutions and best practices.",
                    icon: ShieldCheckIcon
                  },
                  {
                    title: "Training & Support",
                    description: "Comprehensive training and ongoing support to ensure long-term success.",
                    icon: UserGroupIcon
                  }
                ].map((feature) => (
                  <div key={feature.title} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 py-16 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  What Our Clients Say
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Don't just take our word for it - hear from some of our satisfied clients
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "CEO, TechStart Inc",
                    content: "Working with this team has transformed our business. Their expertise in cloud solutions helped us reduce costs while improving our operational efficiency.",
                  },
                  {
                    name: "Michael Chen",
                    role: "CTO, GrowthBox",
                    content: "Their strategic approach to technology planning has been invaluable. They don't just implement solutions - they help you build a technology foundation for growth.",
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Operations Director, Swift Logistics",
                    content: "The cybersecurity solutions they implemented gave us peace of mind. Their ongoing support and training ensure our team stays ahead of potential threats.",
                  },
                ].map((testimonial) => (
                  <div key={testimonial.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary-600">Testimonial</p>
                        <div className="mt-3">
                          <p className="text-base text-gray-500">{testimonial.content}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to transform your business?</span>
              <span className="block">Start your journey today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-primary-200">
              Schedule a free consultation with our technology experts and discover how we can help your business thrive in the digital age.
            </p>
            <a
              href="/contact"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Modern Technology Solutions for Business Growth | Technology Consulting Services</title>
    <meta
      name="description"
      content="Transform your business with our modern technology solutions. We help small and medium-sized businesses leverage cutting-edge tech for growth and efficiency."
    />
  </>
)
