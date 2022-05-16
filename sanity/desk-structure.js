import S from '@sanity/desk-tool/structure-builder';

export default () =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Canvas')
				.child(
					S.document().schemaType('canvas').documentId('931ed2bb-76be-43cf-9166-892446a1693b')
				),
			...S.documentTypeListItems().filter((listItem) => !['canvas'].includes(listItem.getId()))
		]);
