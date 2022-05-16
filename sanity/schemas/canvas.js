export const canvas = {
	title: 'Canvas',
	name: 'canvas',
	type: 'document',

	fields: [
		{ title: 'Title', name: 'title', type: 'string' },
		{ title: 'Logo', name: 'logo', type: 'image' },
		{ title: 'Width', name: 'width', type: 'number' },
		{ title: 'Height', name: 'height', type: 'number' },
		{
			title: 'Elements',
			name: 'elements',
			type: 'array',
			options: { layout: 'grid' },
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Description',
							name: 'description',
							type: 'string',
							validation: (Rule) => Rule.required()
						},
						{ title: 'Image', name: 'image', type: 'image', validation: (Rule) => Rule.required() },
						{ title: 'X', name: 'x', type: 'number', validation: (Rule) => Rule.required() },
						{ title: 'Y', name: 'y', type: 'number', validation: (Rule) => Rule.required() },
						{ title: 'Scale', name: 'scale', type: 'number' },
						{ title: 'Rotation', name: 'rotation', type: 'number' }
					]
				}
			]
		}
	],

	__experimental_actions: ['update', 'publish']
};
