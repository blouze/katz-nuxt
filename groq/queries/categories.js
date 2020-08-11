import groq from 'groq'

export default groq`{
  "products": *[_type == 'product' && $slug in categories[]->slug.current && !(_id in path('drafts.**'))] {
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
  },
  "category": *[_type == 'category' && slug.current == $slug] {
    title, description, parents[]-> { _id, title, slug }
  }[0]
}`
