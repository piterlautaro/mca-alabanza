<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <ListaAlabanzas></ListaAlabanzas>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import ListaAlabanzas from './components/ListaAlabanzas'

export default {
  name: 'app',
  components: {
    Navbar,
    ListaAlabanzas
  }
}

</script>
