import { createClient } from "contentful";

const useContentful = () => {


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