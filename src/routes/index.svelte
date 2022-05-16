<script context="module">
	import { querySanity, sanityImageURL } from '$lib/sanity';

	/** @type {import('.').Load} */ export async function load({ fetch }) {
		const { result } = await querySanity(fetch, "*[ _type == 'canvas'][0]");
		const elements = result.elements.map((element) => ({
			...element,
			imageURL: element.image === undefined ? '' : sanityImageURL(element.image)
		}));

		return {
			props: {
				height: result.height,
				width: result.width,
				title: result.title,
				logoURL: sanityImageURL(result.logo),
				elements
			}
		};
	}
</script>

<script>
	export /** @type {number} */ let height;
	export /** @type {number} */ let width;
	export /** @type {import('$lib/index/canvas').Element[]} */ let elements;
	export /** @type {string} */ let title;
	export /** @type {string} */ let logoURL;
	import Title from '$lib/index/title.svelte';
	import Canvas from '$lib/index/canvas.svelte';
	import { element } from 'svelte/internal';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Title {title} {logoURL} />
<Canvas {height} {width} {elements} />
