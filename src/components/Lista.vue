<template>
	<div>
		<h2 class="text-center">
			{{header}}
		</h2>
		<table class="table table-sm">
			<tr class="thead-dark">
				<th>Titulo</th>
				<th>Artista</th>
			</tr>
			<tr v-for="item of alabanzas" :key="item.id">
				<td>
					{{item.titulo}}
				</td>
				<td>
					{{item.artista}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'Lista',
	props: {
		header: String,
		alabanzas: Array
	}
}
</script>