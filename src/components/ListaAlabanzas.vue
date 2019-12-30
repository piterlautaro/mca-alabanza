<template>
	<div class="row">
		<Lista header="Alabanzas de Júbilo" v-bind:alabanzas="jubilo" class="col-6"></Lista>
		<Lista header="Alabanzas de Adoración" v-bind:alabanzas="adoracion" class="col-6"></Lista>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import Lista from '@/components/Lista'

	export default {
		name: 'ListaAlabanzas',
		components: {
			Lista
		},
		computed:{
			...mapGetters([
				'jubilo',
				'adoracion'
			])
		}
	}
</script>