export const getAllCollections = () => {
    const strStore = Object.values(localStorage)
    const store = strStore.map(collection => JSON.parse(collection))
    return store
}