<template>
  <div id="app">
	 	<v-app>
      <!-- Toolbar -->
			<toolbar></toolbar>
			<!-- Main Content -->
      <main-content></main-content>
    </v-app>
  </div>
</template>

<script>
	import Toolbar from '@/components/Toolbar/Toolbar';
	import MainContent from '@/components/MainContent';

	export default {
		components: {
			Toolbar,
			MainContent,
		},
	};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons");
/* Global CSS */
</style>
