import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"

interface TeamMemberNode {
  node: {
    name: string
    position: string
    bio?: {
      bio: string
    }
    photo?: {
      gatsbyImageData: IGatsbyImageData
    }
    linkedInUrl?: string
  }
}

interface AboutPageData {
  allContentfulTeamMember: {
    edges: TeamMemberNode[]
  }
  contentfulPage?: {
    title?: string
    content?: {
      raw: string
    }
    seoTitle?: string
    seoDescription?: string
    featuredImage?: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const AboutPage: React.FC<PageProps<AboutPageData>> = ({ data }) => {
  const teamMembers = data?.allContentfulTeamMember?.edges || []
  const pageData = data?.contentfulPage || {}
  
  // Convert the raw content to rich text if it exists
  const richTextContent = pageData?.content?.raw 
    ? renderRichText({ raw: pageData.content.raw })
    : null

  const heroImage = pageData?.featuredImage?.gatsbyImageData
    ? getImage(pageData.featuredImage)
    : null

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-primary-800">
        {heroImage && (
          <div className="absolute inset-0">
            <GatsbyImage
              image={heroImage}
              alt={pageData?.title || "About Us"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-800 opacity-75" />
          </div>
        )}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {pageData?.title || "About Us"}
          </h1>
          <div className="mt-6 text-xl text-primary-100 max-w-3xl prose prose-invert">
            {richTextContent || (
              <p>We're a team of experienced technology consultants dedicated to helping small businesses thrive in the digital age.</p>
            )}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Team
              </h2>
              <p className="text-xl text-gray-500">
                Meet the experts behind our technology consulting services.
              </p>
            </div>
            {teamMembers.length > 0 ? (
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              >
                {teamMembers.map(({ node: member }) => {
                  const memberImage = member.photo?.gatsbyImageData
                    ? getImage(member.photo)
                    : null

                  return (
                    <li key={member.name}>
                      <div className="space-y-4">
                        <div className="h-48 w-48 mx-auto overflow-hidden rounded-lg">
                          {memberImage ? (
                            <GatsbyImage
                              image={memberImage}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{member.name}</h3>
                            <p className="text-primary-600">{member.position}</p>
                          </div>
                          <div className="text-base text-gray-500">
                            <p>{member.bio?.bio}</p>
                          </div>

                          {member.linkedInUrl && (
                            <ul role="list" className="flex space-x-5">
                              <li>
                                <a
                                  href={member.linkedInUrl}
                                  className="text-gray-400 hover:text-gray-500"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="sr-only">LinkedIn</span>
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No team members found. Add team members in Contentful to see them here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = ({ data }: PageProps<AboutPageData>) => (
  <title>{data.contentfulPage?.seoTitle || "About Us | Technology Consulting"}</title>
)

export const query = graphql`
  query AboutQuery {
    allContentfulTeamMember {
      edges {
        node {
          name
          position
          bio {
            bio
          }
          photo {
            gatsbyImageData(
              width: 400
              height: 400
              quality: 90
              placeholder: BLURRED
            )
          }
          linkedInUrl
        }
      }
    }
    contentfulPage(slug: { eq: "about" }) {
      title
      content {
        raw
      }
      seoTitle
      seoDescription
      featuredImage {
        gatsbyImageData(
          width: 1920
          height: 1080
          quality: 90
          placeholder: BLURRED
        )
      }
    }
  }
`
