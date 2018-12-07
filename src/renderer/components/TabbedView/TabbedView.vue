<template>
	<tab-header :tabs='tabs' :activeTab='active'></tab-header>
</template>

<script>
	import TabHeader from '@/components/TabbedView/TabHeader';
	export default {
		components: {
			TabHeader,
		},
		data() {
			return {
				tabs: [
					{
						id: 1,
						title: 'New Tab 1',
					},
					{
						id: 2,
						title: 'New Tab 2',
					},
				],
				active: 1,
			};
		},
	};
</script>
