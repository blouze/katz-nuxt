import groq from "groq"

export default groq`{
  "products": *[_type == 'product'] {
    _id, title, slug,
    "image": defaultProductVariant.images[0],
    "price": defaultProductVariant.price,
    vendor-> { title, logo },
    categories[]-> {
      _id, title, slug,
      parents[]-> {
        _id, title, slug,
      }
    }
  }
}`
