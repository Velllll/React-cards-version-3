export const sortCollections = (store) => {
    const today = new Date
    store.sort((a, b) => a.id - b.id)
    const notStarted = []
    const learnLate = []
    const learnToday = []
    store.forEach(collection => {
        if(collection.repeat?.length === 0) {
            notStarted.push(collection)
        } else if (collection.repeat.includes(today.toLocaleDateString())) {
            learnToday.push(collection)
        } else {
            learnLate.push(collection)
        }
    })
    return {notStarted, learnLate, learnToday}
}