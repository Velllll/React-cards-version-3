export const getCollectionById = (id) => {
    const collection = JSON.parse(localStorage.getItem(id))
    if(collection === null) {
        return null
    } else {
        return collection
    }
    
}