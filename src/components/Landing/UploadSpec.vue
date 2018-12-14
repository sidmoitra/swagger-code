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
				<div class="layout caption font-weight-medium font-italic red--text"
					v-if="invalidFileSelected"
				>
					The selected file can only the the extensions: .yaml, .yml, .json
				</div>
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
			invalidFileSelected: false,
		};
	},

	methods: {
		handleSelectFile() {
			this.resetInvalidFileSelection();
			fileDialog({ multiple: false, accept: 'yaml' })
				.then((files) => {
					const reader = new FileReader();
					if (files[0]) {
						if (files[0].name.endsWith('.yaml') || files[0].name.endsWith('.yml') || files[0].name.endsWith('.json')) {
							this.filename = files[0].name;
							reader.onload = () => {
								const specification = JSON.parse(reader.result);
								this.sendSpecificationEvent(specification);
								this.$router.push({
									name: 'Editor',
									params: {
										spec: specification,
									},
								});
							};
							reader.readAsText(files[0]);
						} else {
							this.invalidFileSelected = true;
						}
					}
				});
		},
		resetInvalidFileSelection() {
			this.invalidFileSelected = false;
		},
		sendSpecificationEvent(specification) {
			this.$emit('upload-specification', specification);
		},
	},
};
</script>

