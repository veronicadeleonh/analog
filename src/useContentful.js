import { createClient } from "contentful";


const useContentful = () => {

    const client = createClient ({
        space: "kuqpmtu87g1u",
        accessToken: "GGCdRHVxIa-P9DxkdQOrippAtle4_qlZXd8xsiyElnw",
        host: "cdn.contentful.com"
})

const getPhotos = async () => {
    try {
        const entries = await client.getEntries({
            content_type: "analog",
            select: "fields"
        });

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