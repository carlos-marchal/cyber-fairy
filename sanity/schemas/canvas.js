export const canvas = {
	title: 'Canvas',
	name: 'canvas',
	type: 'document',

	fields: [
		{ title: 'Title', name: 'title', type: 'string', validation: (Rule) => Rule.required() },
		{ title: 'Logo', name: 'logo', type: 'image', validation: (Rule) => Rule.required() },
		{ title: 'Width', name: 'width', type: 'number', validation: (Rule) => Rule.required().min(0) },
		{
			title: 'Height',
			name: 'height',
			type: 'number',
			validation: (Rule) => Rule.required().min(0)
		},
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
						{ title: 'Rotation', name: 'rotation', type: 'number' },
						{ title: 'Video', name: 'video', type: 'file', options: { accept: 'video/mp4' } }
					]
				}
			]
		}
	],

	__experimental_actions: ['update', 'publish']
};
