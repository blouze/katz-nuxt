import groq from "groq"

export default groq`{
  "products": *[_type == 'product' && vendor->slug.current == $slug && !(_id in path('drafts.**'))] {
    _id, title, slug,
    "image": defaultProductVariant.images[0],
    "price": defaultProductVariant.price,
    categories[]-> {
      _id, title, slug,
      parents[]-> {
        _id, title, slug,
      }
    }
  },
	"vendor": *[_type == 'vendor' && slug.current == $slug] {
    title, logo, parents[]-> { _id, title, slug }
  }[0]
}`
