import Vue from 'vue';
import Router from 'vue-router';
import ChooseSpec from '@/components/Landing/ChooseSpec';
import Editor from '@/components/Editor/Editor';
import Uploader from '@/components/Landing/UploadSpec';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'ChooseSpec',
			component: ChooseSpec,
		},
		{
			path: '/upload',
			name: 'Uploader',
			component: Uploader,
		},
		{
			path: '/edit',
			name: 'Editor',
			component: Editor,
		},
	],
});
