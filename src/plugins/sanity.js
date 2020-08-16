import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export default (context, inject) => {
  const client = sanityClient({
    projectId: process.env.sanityProjectId,
    dataset: process.env.sanityDataset,
    useCdn: true,
  })

  inject("sanity", client)
  inject("imgBuilder", imageUrlBuilder(client))
}
