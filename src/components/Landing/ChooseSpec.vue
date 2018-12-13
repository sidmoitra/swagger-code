<template>
	<v-flex mb-4>
		<v-card height="100%">
			<v-card-title class="headline">
				New Swagger specification
			</v-card-title>
			<v-card-text>
				<div class="d-flex justify-between align-center mb-3">
					<v-btn depressed large
						to="/upload"
						color="blue-grey"
						@click="showUploadDialog=!showUploadDialog"
						class="white--text"
						style="margin-left: 0;">
						Upload
						<v-icon right dark>fas fa-upload</v-icon>
					</v-btn>
					<v-btn depressed large
						to="/edit"
						color="blue-grey"
						class="white--text"
						style="margin-right: 0;">
						Create
						<v-icon right dark>fas fa-pen-nib</v-icon>
					</v-btn>
				</div>
			</v-card-text>
		</v-card>
	</v-flex>
</template>

<script>
export default {
	data() {
		return {
			showUploadDialog: false,
		};
	},
};
</script>
