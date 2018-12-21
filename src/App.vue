<template>
	<v-app>
		<toolbar></toolbar>
		<v-content app>
			<v-container fill-height align-start>
				<v-layout
									wrap
									v-on:upload-specification="specificationUploaded"
				>
					<router-view></router-view>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Toolbar from './components/Toolbar/Toolbar';
import ChooseSpec from './components/Landing/ChooseSpec';

export default {
	name: 'App',
	components: {
		Toolbar,
		ChooseSpec,
	},
	data() {
		return {
			//
		};
	},
	methods: {
		specificationUploaded(specification) {
			console.log(specification);
			this.$router.push('/editor');
		},
	},
};
</script>
