export const getRepeatDates = () => {
    const repeatArray = []
    for (let i = 1; i <= 81; i *= 3) {
        const today = new Date
        today.setDate(today.getDate() + i)
        repeatArray.push(today.toLocaleDateString())
    }
    return repeatArray
}