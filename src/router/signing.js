export default [{
	name: 'searcHis',
	path: '/signing',
	meta: {
		router: 'sign',
	},
	component: () => import('@/views/signing/searcHis.vue'),
	},{
	name: 'riskReport',
	path: '/signing/report',
	meta: {
		router: 'signing',
	},
	component: () => import('@/views/signing/riskReport.vue'),
	}, {
	name: 'healthGuidance',
	path: '/signing/guidance',
	meta: {
		router: 'signing',
	},
	component: () => import('@/views/signing/guidance.vue'),
	},{
		name: 'reportTest',
		path: '/signing/reportTest',
		meta: {
		router: 'signing',
	},
	component: () => import('@/views/signing/report.vue'),
	}]