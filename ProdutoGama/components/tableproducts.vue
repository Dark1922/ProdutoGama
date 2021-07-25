<template>
    <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Nome
                </th>
                <th class="text-left">
                    Validade (Meses)
                </th>
                <th class="text-left">
                    Preço R$
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(prod,i) in prods"
                :key="i"
                >
                <td>{{ prod.nome }}</td>
                <td>{{ prod.validade }}</td>
                <td>{{ prod.preco }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
</template>

<script>
export default ({
    data() {
       return{

       } 
    },
    props:{
        prods:[]
    }
})
</script>
