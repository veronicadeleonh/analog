import { createClient } from "contentful";


const useContentful = () => {

    const client = createClient ({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENT_DELIVERY_API_KEY,
        host: "cdn.contentful.com",
})

const getPhotos = async () => {
    try {
        const entries = await client.getEntries({
            skip: 0,
            limit: 1000,
            content_type: "analog",
            select: "fields",
        });

        console.log(entries, "full")

        const sanitizedEntries = entries.items.map((item) => {
           return {
            ...item.fields,
           }
        })
        
        return sanitizedEntries
    } catch (error) {
        console.log(`Error fetching images: ${error}`)
    }
}
    return { getPhotos }
}

export default useContentful