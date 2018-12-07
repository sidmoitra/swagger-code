<template>
	<tab-header :specs='specifications' :activeSpecId='activeSpecId'></tab-header>
</template>

<script>
	import TabHeader from '@/components/TabbedView/TabHeader';
	export default {
		components: {
			TabHeader,
		},
		data() {
			return {
				specifications: [
					{
						id: 1,
						title: 'New Tab 1',
					},
					{
						id: 2,
						title: 'New Tab 2',
					},
				],
				activeSpecId: 1,
			};
		},
	};
</script>
