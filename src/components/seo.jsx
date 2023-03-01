import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, address, facebookUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    address,
    facebookUsername
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="image" content={seo.image} />
      <meta name="title" content={seo.title} />
      <meta name="og:title" content={seo.title} />
      <meta name="url" content={seo.url} />
      <meta name="og:url" content={seo.url} />

      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}