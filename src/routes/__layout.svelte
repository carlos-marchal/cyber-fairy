<script>
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		const html = window.document.documentElement;
		const outerWidth = window.innerWidth;
		const innerWidth = html.clientWidth;
		const scrollbarWidth = outerWidth - innerWidth;
		html.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
	});
</script>

<slot />
