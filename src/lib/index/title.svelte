<script>
	export /** @type {string} */ let title;
	export /** @type {string} */ let logoURL;
</script>

<header>
	<div>
		<img src={logoURL} alt={title} />
	</div>
</header>

<style>
	header {
		height: 100vh;
		background: url('./title-background.png');
		background-size: contain;
	}

	div {
		position: sticky;
		height: 100%;
		width: calc(100vw - var(--scrollbar-width));
		left: 0;
	}

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		max-width: 90%;
		transform: translate(-50%, -50%);
	}
</style>
