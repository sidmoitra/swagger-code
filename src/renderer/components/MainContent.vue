<template>
	<v-content app>
		<v-container fluid style="padding: 0px;">
			<tabbed-view></tabbed-view>
		</v-container>
	</v-content>	
</template>

<script>
	import TabbedView from './TabbedView/TabbedView';

	export default {
		components: {
			TabbedView,
		},
	};
</script>

