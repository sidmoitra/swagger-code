<template>
	<v-app>
		<toolbar></toolbar>
		<v-content app>
			<v-container fill-height align-start>
				<v-layout text-xs-center
									wrap
									align-center="true"
									align-content-center="true"
				>
					<router-view></router-view>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Toolbar from './components/Toolbar/Toolbar';

export default {
	name: 'App',
	components: {
		Toolbar,
	},
	data() {
		return {
			//
		};
	},
};
</script>
