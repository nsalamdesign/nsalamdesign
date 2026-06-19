export const categoriesQuery = `
*[_type == "category"] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  order
}
`;

export const projectsByCategoryQuery = `
*[
  _type == "project" &&
  category->slug.current == $slug
]{
  _id,
  title,
  description,
  important,
  _createdAt,
  "slug": slug.current,
  mainImage
}
| order(important desc, _createdAt desc)
`;

export const projectQuery = `
*[
  _type == "project" &&
  slug.current == $slug
][0]{
  _id,
  title,
  description,
  industry,
  year,
  services,
  mainImage,
  caseStudy,
  gallery
}
`;

export const homeSettingsQuery = `
*[_type == "homeSettings"][0]{
  heroTitle,
  heroSubtitle,
  philosophyTitle,
  philosophyText,
  ctaTitle,
  ctaButtonText
}
`;

export const reviewsQuery = `
*[_type == "review"] | order(_createdAt desc){
  _id,
  name,
  company,
  review,
  rating
}
`;

export const pricingQuery = `
*[_type == "pricing"] | order(_createdAt asc){
  _id,
  title,
  price,
  features
}
`;

export const faqQuery = `
*[_type == "faq"] | order(_createdAt asc){
  _id,
  question,
  answer
}
`;

export const postsQuery = `
*[_type == "post"] | order(order asc, _createdAt desc){
  _id,
  title,
  excerpt,
  "slug": slug.current,
  coverImage,
  publishedAt
}
`;

export const postQuery = `
*[
  _type == "post" &&
  slug.current == $slug
][0]{
  title,
  excerpt,
  coverImage,
  publishedAt,
  content
}
`;

export const contactSettingsQuery = `
*[_type == "contactSettings"][0]{
  email,
  whatsapp,
  fiverr,
  instagram,
  facebook,
  linkedin,
  behance
}
`;
