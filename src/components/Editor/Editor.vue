<template>
	<div>{{ JSON.stringify(specification) }}</div>
</template>

<script>
export default {
	props: {
		specification: {
			type: Object,
			required: false,
		},
	},
};
</script>

