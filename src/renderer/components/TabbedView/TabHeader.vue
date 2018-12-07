<template>
	<div class="chrome-tabs">
		<div class="chrome-tabs-content" ref="tabsContent">
			<div class="chrome-tab" v-for="(specification, index) in specs" 
					ref="tabs"
					:key="specification.id" 
					v-bind:class="{ 'chrome-tab-current' : specification.id === activeTabId}"
					v-bind:style="{ zIndex: (specification.id === activeTabId) ? (specs.length + 2) : (specs.length - index), }">
				<div class="chrome-tab-background">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 29" ><path d="M14.3 0.1L214 0.1 214 29 0 29C0 29 12.2 2.6 13.2 1.1 14.3-0.4 14.3 0.1 14.3 0.1Z"/></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 29"><use xlink:href="#chrome-tab-geometry-left"/></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="50%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#chrome-tab-geometry-left" width="214" height="29" class="chrome-tab-shadow"/></svg><g transform="scale(-1, 1)"><svg width="50%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#chrome-tab-geometry-right" width="214" height="29" class="chrome-tab-shadow"/></svg></g></svg>
				</div>
				<div class="chrome-tab-favicon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABNSURBVDhPYxg0oBWIfwLxfyIwSF0LEKMAkCAfhAkHgkD8C8JEAfxADFKPAkAmYwPotoPwHyiNAjAE8ACQyygyAARGDaCVAaTi4QEYGAAqjTH4t0uQNwAAAABJRU5ErkJggg=="></div>
				<div class="chrome-tab-title">{{ specification.title }}</div>
				<div class="chrome-tab-close"></div>
			</div>
		</div>
	</div>
</template>

<script>
	// const isNodeContext = true;
	const DEFAULT_TAB_TITLE = 'New Tab';
	const DEFAULT_TAB_FAVICON = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABNSURBVDhPYxg0oBWIfwLxfyIwSF0LEKMAkCAfhAkHgkD8C8JEAfxADFKPAkAmYwPotoPwHyiNAjAE8ACQyygyAARGDaCVAaTi4QEYGAAqjTH4t0uQNwAAAABJRU5ErkJggg==">';
	const TAB_TEMPLATE = `
			<div class="chrome-tab chrome-tab-current">
				<div class="chrome-tab-background">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 29" ><path d="M14.3 0.1L214 0.1 214 29 0 29C0 29 12.2 2.6 13.2 1.1 14.3-0.4 14.3 0.1 14.3 0.1Z"/></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 29"><use xlink:href="#chrome-tab-geometry-left"/></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="50%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#chrome-tab-geometry-left" width="214" height="29" class="chrome-tab-shadow"/></svg><g transform="scale(-1, 1)"><svg width="50%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#chrome-tab-geometry-right" width="214" height="29" class="chrome-tab-shadow"/></svg></g></svg>
				</div>
				<div class="chrome-tab-favicon">${DEFAULT_TAB_FAVICON}</div>
				<div class="chrome-tab-title">${DEFAULT_TAB_TITLE}</div>
				<div class="chrome-tab-close"></div>
			</div>
		`;
	/*
	const DEFAULT_TAB_PROPERTIES = {
		title: DEFAULT_TAB_TITLE,
		favicon: DEFAULT_TAB_FAVICON,
	};
	*/
	const TAB_OVERLAP_DISTANCE = 14;
	const TAB_MIN_WIDTH = 45;
	const TAB_MAX_WIDTH = 243;

	let instanceId = 0;

	export default {
		props: {
			specs: {
				type: Array,
				required: true,
			},
			activeSpecId: {
				type: Number,
				required: true,
			},
		},
		data() {
			return {
				tabTemplate: TAB_TEMPLATE,
				currentActiveTabId: undefined,
				availableTabs: [],
				instanceId: instanceId++,
			};
		},
		methods: {
			layoutTabs() {
				this.$refs.tabs.forEach((tab, index) => {
					tab.style.width = `${this.tabWidth}px`;
					tab.style.transform = `translate3d(${index * this.tabEffectiveWidth}px, 0, 0)`;
				});
			},
			/*
			cleanUpPreviouslyDraggedTabs() {
				if (this.$refs.tabs) {
					this.$refs.tabs.forEach(tabEl => tabEl.classList.remove('chrome-tab-just-dragged'));
				}
			},
			*/
		},
		computed: {
			tabWidth() {
				const tabsContentWidth = this.$refs.tabsContent.clientWidth - TAB_OVERLAP_DISTANCE;
				const width = (tabsContentWidth / this.specs.length) + TAB_OVERLAP_DISTANCE;
				return Math.max(TAB_MIN_WIDTH, Math.min(TAB_MAX_WIDTH, width));
			},
			tabEffectiveWidth() {
				return this.tabWidth - TAB_OVERLAP_DISTANCE;
			},
			activeTabId() {
				if (!this.currentActiveTabId) {
					this.currentActiveTabId = this.activeSpecId;
				}
				return this.currentActiveTabId;
			},
		},

		mounted() {
			this.layoutTabs();
		},
	};
</script>

<style>

	.chrome-tabs {
		box-sizing: border-box;
		position: relative;
		font-size: 10px;
		height: 4.2em;
		background: linear-gradient(#dad9da, #d9d8d9);
		padding: 1em 1.2em 0.45em 1.2em;
		border-radius: 0.5em 0.5em 0 0;
		box-shadow: 0 0.05em #b7b7b7;
		overflow: hidden;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	.chrome-tabs * {
		box-sizing: inherit;
		font-family: inherit;
	}
	.chrome-tabs .chrome-tabs-bottom-bar {
		position: absolute;
		bottom: 0;
		height: 0.45em;
		left: 0;
		width: 100%;
		background: #f2f2f2;
		box-shadow: 0 -0.05em rgba(0,0,0,0.27);
		z-index: 20;
	}
	.chrome-tabs .chrome-tabs-content {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.chrome-tabs .chrome-tab {
		position: absolute;
		left: 0;
		height: 2.8em;
		width: 24em;
		border: 0;
		margin: 0;
		z-index: 1;
	}
	.chrome-tabs .chrome-tab,
	.chrome-tabs .chrome-tab * {
		user-select: none;
		cursor: default;
	}
	.chrome-tabs .chrome-tab .chrome-tab-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
	}
	.chrome-tabs .chrome-tab .chrome-tab-background > svg {
		width: 100%;
		height: 100%;
	}
	.chrome-tabs .chrome-tab .chrome-tab-background > svg .chrome-tab-shadow {
		fill: none;
		stroke: rgba(0,0,0,0.27);
		stroke-width: 0.5px;
	}
	.chrome-tabs .chrome-tab .chrome-tab-background > svg .chrome-tab-background {
		fill: #d0d0d0;
		transform: translateX(0.25px) translateY(0.25px);
	}
	.chrome-tabs .chrome-tab.chrome-tab-current {
		z-index: 999;
	}
	.chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-background > svg .chrome-tab-background {
		fill: #f2f2f2;
	}
	.chrome-tabs .chrome-tab.chrome-tab-just-added {
		top: 10px;
		animation: chrome-tab-just-added 120ms forwards ease-in-out;
	}
	@-moz-keyframes chrome-tab-just-added {
		to {
			top: 0;
		}
	}
	@-webkit-keyframes chrome-tab-just-added {
		to {
			top: 0;
		}
	}
	@-o-keyframes chrome-tab-just-added {
		to {
			top: 0;
		}
	}
	@keyframes chrome-tab-just-added {
		to {
			top: 0;
		}
	}
	.chrome-tabs.chrome-tabs-sorting .chrome-tab:not(.chrome-tab-currently-dragged),
	.chrome-tabs:not(.chrome-tabs-sorting) .chrome-tab.chrome-tab-just-dragged {
		transition: transform 120ms ease-in-out;
	}
	.chrome-tabs .chrome-tab-favicon {
		position: relative;
		margin-left: 1.6em;
		height: 1.6em;
		width: 1.6em;
		background-size: 1.6em;
		margin-top: 0.6em;
		z-index: 3;
		display: inline-block;
		vertical-align: top;
		pointer-events: none;
	}
	.chrome-tabs .chrome-tab-title {
		position: relative;
		display: inline-block;
		vertical-align: top;
		color: #222;
		padding: 0 0.25em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1.2em;
		margin-top: 0.5em;
		max-width: calc(100% - 5em);
		pointer-events: none;
	}
	.chrome-tabs .chrome-tab-close {
		position: absolute;
		width: 1.4em;
		height: 1.4em;
		border-radius: 50%;
		z-index: 2;
		right: 1.4em;
		top: 0.7em;
	}
	.chrome-tabs .chrome-tab-close::before {
		content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><path stroke='#5a5a5a' stroke-linecap='round' stroke-width='1.125' d='M4 4 L10 10 M10 4 L4 10'></path></svg>");
		position: absolute;
		display: block;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.chrome-tabs .chrome-tab-close:hover::before,
	.chrome-tabs .chrome-tab-close:hover:active::before {
		content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><path stroke='#fff' stroke-linecap='round' stroke-width='1.2' d='M4 4 L10 10 M10 4 L4 10'></path></svg>");
	}
	.chrome-tabs .chrome-tab-close:hover {
		background: #e25c4b;
	}
	.chrome-tabs .chrome-tab-close:hover:active {
		background: #b74a3b;
	}

</style>

