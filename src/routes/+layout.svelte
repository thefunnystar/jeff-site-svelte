<script>
	import Header from '$components/header/Header.svelte';
	import Footer from "$components/footer/Footer.svelte";
</script>

<div class="app">
<!--	<Header />-->

	<main>
		<slot />
	</main>

	<Footer />
</div>
