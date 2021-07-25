<template>
    <div>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="nome"
                        :rules="nomeRules"
                        :counter="20"
                        label="Nome"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="validade"
                        :rules="validadeRules"
                        :counter="2"
                        label="Validade (Meses)"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                    <v-text-field
                        v-model="preco"
                        :rules="precoRules"
                        label="Preço"
                        type="number"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="insereDados"
                >
                    Salvar
                </v-btn>
                <v-overlay :value="overlay">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
                </v-overlay>
                <v-snackbar
                    v-model="snackbar"
                    >
                    {{ text }}

                    <template v-slot:action="{ attrs }">
                        <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                        >
                        Close
                        </v-btn>
                    </template>
                </v-snackbar>
            </v-container>
        </v-form>
        <tableproducts :prods="produtos"></tableproducts>
        <nuxt-link to="/" style="text-decoration:none"><v-btn
        depressed
        color="error"
        style="margin-top: 5%"
        >
        Início
        </v-btn></nuxt-link>
    </div>
</template>

<script>

export default ({
    data() {
        return{
            produtos: null,
            url: "https://apiproductsgama.herokuapp.com/",
            valid: false,
            nome: '',
            validade: '',
            nomeRules: [
                v => !!v || 'Nome é obrigatório',
                v => v.length <= 20 || 'Nome não pode conter mais que 20 caracteres',
            ],
            validadeRules: [
                v => !!v || 'Validade é obrigatória',
                v => v.length <= 2 || 'Validade não pode conter mais que 2 caracteres',
            ],
            preco: '',
            precoRules: [
                v => !!v || 'Preço é obrigatório'                
            ],
            overlay: false,
            text: 'Dados Inseridos com sucesso!',
            snackbar: false,
        }
    },

    methods:{
        async buscaDados(){
            try{
                this.toggleOverlay();
                const request = await this.$axios.get(this.url+'produtos');
                this.produtos = request.data;
                console.log(this.produtos)
            } catch{
                console.log('Error');
            } finally{
                this.toggleOverlay();
            }
        },

        async insereDados(){
            try{
                this.toggleOverlay();
                const request = await this.$axios.post(this.url+'addProd',{nome: this.nome , validade: this.validade, preco: this.preco});
                await this.buscaDados();
                this.nome = '';
                this.validade = '';
                this.preco = '';

                
                this.toggleSnackbar();
            } catch{
                console.log('Error')
            }finally{
                this.toggleOverlay();
            }
        },

        toggleOverlay(){
            this.overlay = !this.overlay;
        },

        toggleSnackbar(){
            this.snackbar = !this.snackbar;
        }

       
    },

    created(){
        this.buscaDados();
    }
})
</script>
