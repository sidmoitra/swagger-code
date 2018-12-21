<template>
	<div class="specification-header">
		<div class="display-1 font-weight-bold">
			<span>{{ this.title }}</span>
			<span><v-chip><v-avatar class="blue">V</v-avatar>{{ this.ver }}</v-chip></span>
		</div>
	</div>
	
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		ver: {
			type: String,
			required: true,
		},
	},
};
</script>
