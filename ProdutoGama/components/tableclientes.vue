<template>
        <div>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Nome
                </th>
                <th class="text-left">
                    Idade
                </th>
                <th class="text-left">
                    Logradouro
                </th>
                <th class="text-left">
                    Bairro
                </th>
                <th class="text-left">
                    Cidade
                </th>
                <th class="text-left">
                    Uf
                </th>
                <th class="text-left">
                    Cep
                </th>
                <th class="text-left">
                    Número
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(clin,i) in cln"
                :key="i"
                >
                <td>{{ clin.nome }}</td>
                <td>{{ clin.idade }}</td>
                <td>{{ clin.endereco.logradouro }}</td>
                <td>{{ clin.endereco.bairro }}</td>
                <td>{{ clin.endereco.cidade }}</td>
                <td>{{ clin.endereco.uf }}</td>
                <td>{{ clin.endereco.cep }}</td>
                <td>{{ clin.endereco.numero }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>        
    </div>
</template>


<script>

export default ({
    data() {
       return{

       } 
    },

    props:{
        cln: null
    }
})
</script>
