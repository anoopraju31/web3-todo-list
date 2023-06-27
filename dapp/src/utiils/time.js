export const getTimestamp = (date) => {
	// console.log('Timestap Date', date)
	return Math.floor(date.getTime() / 1000)
}
