const getTimestamp = (date) => {
	const d = new Date(date)
	return Math.floor(d / 1000) + 3600
}

const todos = [
	{
		id: 0,
		title: 'Buy groceries',
		description: 'Buy milk, eggs, and bread',
		targetTime: getTimestamp('2023-06-27'),
		priority: 1,
	},
	{
		id: 1,
		title: 'Call Kiran',
		description: 'Enquire about the meetting',
		targetTime: getTimestamp('2023-06-30'),
		priority: 1,
	},
]

module.exports = todos
