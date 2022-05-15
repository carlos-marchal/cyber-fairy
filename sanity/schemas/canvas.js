export const canvas = {
	title: 'Canvas',
	name: 'canvas',
	type: 'document',

	fields: [
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
						{ title: 'Description', name: 'description', type: 'string' },
						{ title: 'Image', name: 'image', type: 'image' },
						{ title: 'X', name: 'x', type: 'number' },
						{ title: 'Y', name: 'y', type: 'number' },
						{ title: 'Scale', name: 'scale', type: 'number' },
						{ title: 'Rotation', name: 'rotation', type: 'number' },
					]
				}
			]
		}
	]
};
