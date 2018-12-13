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
							v-model="filename" disabled />
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
			filename: 'Select',
			rules: {
				validFile: val,
			},
		};
	},

	methods: {
		handleSelectFile() {
			fileDialog({ multiple: false, accept: 'yaml' })
				.then((files) => {
					const reader = new FileReader();
					if (files[0]) {
						if (files[0].name.endsWith('.yaml') || files[0].name.endsWith('.yml') || files[0].name.endsWith('.json')) {
							this.filename = files[0].name;
							reader.onload = () => {
								console.log(`On Load: ${reader.result}`);
							};
							reader.readAsText(files[0]);
						}
					}
				});
		},
	},
};
</script>

