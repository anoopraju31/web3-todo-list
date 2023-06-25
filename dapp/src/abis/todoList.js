export const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'DescriptionUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'PriorityUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'StatusToggle',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'TargetTimeUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'TitleUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'TodoCreate',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_title',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_description',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: '_targetTime',
				type: 'uint256',
			},
			{
				internalType: 'uint8',
				name: '_priority',
				type: 'uint8',
			},
		],
		name: 'createTodo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTodos',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'title',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'description',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'createdTime',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'lastUpdated',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'targetTime',
						type: 'uint256',
					},
					{
						internalType: 'uint8',
						name: 'priority',
						type: 'uint8',
					},
					{
						internalType: 'bool',
						name: 'status',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'isPresent',
						type: 'bool',
					},
				],
				internalType: 'struct TodoList.Todo[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTodosCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'toggleStatus',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '_description',
				type: 'string',
			},
		],
		name: 'updateDescription',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'uint8',
				name: '_priority',
				type: 'uint8',
			},
		],
		name: 'updatePriority',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_targetTime',
				type: 'uint256',
			},
		],
		name: 'updateTargetTime',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '_title',
				type: 'string',
			},
		],
		name: 'updateTitle',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
]
