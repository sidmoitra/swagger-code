<template>
	<v-flex mb-4>
		<v-card>
			<v-card-title class="headline">
				Upload Swagger specification
			</v-card-title>
			<v-card-text>
				<v-layout align-center justify-start row fill-height>
					<v-text-field
							label="Path of Swagger specification"
							v-model="location" disabled />
					<v-btn flat icon color="blue-grey"
						@click="handleSelectFile"
					>
						<v-icon>fas fa-upload</v-icon>
					</v-btn>
				</v-layout>
			</v-card-text>
		</v-card>
	</v-flex>
</template>

<script>
import fileDialog from 'file-dialog';

export default {
	data() {
		return {
			location: 'Select',
		};
	},

	methods: {
		handleSelectFile() {
			fileDialog({ multiple: false, accept: 'yaml/*' })
				.then((files) => {
					const reader = new FileReader();
					if (files[0]) {
						this.location = files[0].name;
						reader.onload = (e) => {
							console.log(`On Load: ${reader.result}`);
						};
						reader.readAsText(files[0]);
					}
				});
		},
	},
};
</script>

