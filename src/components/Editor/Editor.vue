<template>
	<div>Hi {{ JSON.stringify(spec) }}</div>
</template>

<script>
export default {
	props: ['spec'],
};
</script>

