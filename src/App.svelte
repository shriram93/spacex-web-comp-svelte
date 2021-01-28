<script>
	import LaunchPrograms from "./LaunchPrograms.svelte";
</script>

<style>
	.app {
		background: #f2f2f2;
		display: flex;
		flex-direction: column;
		max-width: 1440px;
		margin: auto;
		height: 100%;
	}

	.app__content {
		padding-left: 8px;
		flex: 1;
		overflow-y: auto;
	}
</style>

<main class="app">
	<spacex-header>SpaceX Launch Programs</spacex-header>
	<div class="app__content">
		<LaunchPrograms/>
	</div>
	<spacex-footer>Developed by: shriram</spacex-footer>
</main>
