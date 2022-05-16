<script>
	export /** @type number */ let width;
	export /** @type number */ let height;

	/**
	 * @typedef Element
	 * @property {string} imageURL
	 * @property {string} description
	 * @property {number} x
	 * @property {number} y
	 * @property {number} [rotation]
	 * @property {number} [scale]
	 */

	export let /** @type Element[] */ elements = [];
	$: elementsCSS = elements.map((element) => {
		let transform = '';
		if (element.rotation !== undefined) {
			transform += ` rotate(${element.rotation}deg)`;
		}
		if (element.scale !== undefined) {
			transform += ` scale(${element.scale})`;
		}
		return {
			src: element.imageURL,
			alt: element.description,
			top: element.y + 'px',
			left: element.x + 'px',
			transform: transform === '' ? undefined : transform.trim()
		};
	});
</script>

<main style:width={width + 'px'} style:height={height + 'px'}>
	{#each elementsCSS as { src, alt, top, left, transform }}
		<img {src} {alt} style:top style:left style:transform />
	{/each}
</main>

<style>
	main {
		position: relative;
		/* background: url('./canvas-background.png');
		background-size: contain; */
		background: linear-gradient(
			to bottom,
			rgb(255, 255, 255) 0%,
			rgb(219, 253, 216) 88%,
			rgb(178, 251, 171) 100%
		);
		overflow: hidden;
	}

	img {
		position: absolute;
	}
</style>
