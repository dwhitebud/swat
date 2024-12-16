# About Page Implementation

## Overview
This document details the implementation of the About page in our Gatsby-based consulting website. The page displays team member profiles and company information, with content managed through Contentful CMS.

## Key Features
- Dynamic content management via Contentful
- Responsive layout with hero section
- Team member profiles with photos and LinkedIn links
- Rich text content rendering
- Fallback content for missing data

## Technical Implementation

### 1. Content Models in Contentful

#### Page Content Type
```typescript
{
  title: string
  slug: string
  content: RichText
  seoTitle: string
  seoDescription: string
  featuredImage: Asset
}
```

#### Team Member Content Type
```typescript
{
  name: string
  position: string
  bio: RichText
  photo: Asset
  linkedInUrl: string
}
```

### 2. GraphQL Query Structure
```graphql
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
          gatsbyImageData
        }
        linkedInUrl
      }
    }
  }
  contentfulPage(slug: { eq: "about" }) {
    title
    content {
      raw
      references
    }
    seoTitle
    seoDescription
    featuredImage {
      gatsbyImageData
    }
  }
}
```

### 3. Key Components

#### Hero Section
- Features a full-width background image with overlay
- Displays page title and main content
- Uses Contentful's rich text renderer for formatted content

#### Team Member Grid
- Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
- Individual team member cards with:
  - Circular profile photo (with fallback avatar)
  - Name and position
  - Bio text
  - LinkedIn link (if provided)

### 4. Error Handling & Fallbacks
- Optional chaining for all Contentful data access
- Fallback content for missing text fields
- Placeholder avatar for missing profile photos
- Graceful handling of missing LinkedIn URLs
- Default page title if not set in Contentful

### 5. Styling
- Tailwind CSS for responsive design
- Typography plugin for rich text content
- Custom classes for hover effects and transitions
- Consistent spacing and alignment

## Dependencies
- gatsby-source-contentful
- gatsby-plugin-image
- gatsby-source-contentful/rich-text
- Tailwind CSS
- Heroicons

## Common Issues & Solutions

### 1. Rich Text Rendering
**Issue**: Objects not valid as React children
**Solution**: Use `renderRichText` from gatsby-source-contentful/rich-text and include references in the GraphQL query

### 2. TypeScript Integration
**Issue**: Type errors with optional fields
**Solution**: Proper interface definitions with optional fields and IGatsbyImageData type

### 3. Case Sensitivity
**Issue**: Field name mismatches (linkedinUrl vs linkedInUrl)
**Solution**: Match exact field names from Contentful schema

## Future Improvements
1. Add animations for team member cards
2. Implement filtering/sorting of team members
3. Add more interactive elements
4. Enhance SEO capabilities
5. Add team member social media links

## Maintenance Notes
- Keep Contentful content models in sync with GraphQL queries
- Test with missing data regularly
- Update fallback content as needed
- Monitor image sizes for performance
