import groq from 'groq'

export default groq`{
  "product": *[_type == 'product' && slug.current == $slug] {
    _id, title, slug, blurb, body,
    "image": defaultProductVariant.images[0],
    "price": defaultProductVariant.price,
    vendor-> { title, logo, slug },
    categories[]-> {
      _id, title, slug,
    }
  }[0]
}`
