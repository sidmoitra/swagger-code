<template>
	<div class="spec-content">
		<specification-header :title="spec.info.title" :ver="spec.info.version"></specification-header>
		<pre>
			{{ JSON.stringify(spec, undefined, 2) }}
		</pre>
	</div>
</template>

<script>
import SpecificationHeader from './components/SpecificationHeader';

export default {
	components: {
		SpecificationHeader,
	},

	props: ['spec'],
};
</script>

