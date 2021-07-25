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
                        :counter="26"
                        label="Nome"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="idade"
                        :rules="idadeRules"
                        :counter="3"
                        label="Idade"
                        required
                        type="number"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="endereco.cep"
                        :rules="cepRules"
                        :counter="8"
                        label="Cep"
                        type="number"
                        @blur="consultaCep"
                        @keyup.enter="consultaCep"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="endereco.logradouro"
                        :rules="logradouroRules"
                        :counter="30"
                        label="Logradouro"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="endereco.bairro"
                        :rules="bairroRules"
                        :counter="20"
                        label="Bairro"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="endereco.cidade"
                        :rules="cidadeRules"
                        :counter="20"
                        label="Cidade"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="endereco.uf"
                        :rules="ufRules"
                        :counter="2"
                        label="UF"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="endereco.numero"
                        :rules="numeroRules"
                        :counter="10"
                        type="number"
                        label="Número"
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
        <tableclientes :cln="clientes"></tableclientes>
        
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
            clientes: null,
            url: "https://apiproductsgama.herokuapp.com/",
            url2: "https://brasilapi.com.br/api/cep/v1/",
            nome: '',
            idade: '',
            endereco:{
                logradouro: '',
                cidade: '',
                uf: '',
                numero: '',
                cep: '',
                bairro:'',
            },
            valid: false,
            nomeRules: [
                v => !!v || 'Nome é obrigatório',
                v => v.length <= 26 || 'Nome não pode conter mais que 26 caracteres',
            ],
            idadeRules: [
                v => !!v || 'Idade é obrigatória',
                v => v.length <= 3 || 'Idade não pode conter mais que 3 caracteres',
            ],
            cepRules: [
                v => !!v || 'Cep é obrigatório',
                v => v.length <= 8 || 'Cep não pode conter mais que 8 caracteres',
            ],
            logradouroRules: [
                v => !!v || 'Logradouro é obrigatório',
                v => v.length <= 30 || 'Logradouro não pode conter mais que 30 caracteres',
            ],
            bairroRules: [
                v => !!v || 'Bairro é obrigatório',
                v => v.length <= 20 || 'Bairro não pode conter mais que 20 caracteres',
            ],
            cidadeRules: [
                v => !!v || 'Cidade é obrigatório',
                v => v.length <= 20 || 'Cidade não pode conter mais que 20 caracteres',
            ],
            ufRules: [
                v => !!v || 'UF é obrigatório',
                v => v.length <= 2 || 'UF não pode conter mais que 2 caracteres',
            ],
            numeroRules: [
                v => !!v || 'Número é obrigatório',
                v => v.length <= 10 || 'Número não pode conter mais que 10 caracteres',
                v => /\d/.test(v) || 'Digite apenas números',
            ],
            overlay: false,
            snackbar: false,
            text: 'Dados Inseridos com sucesso!'
        }
    },

    methods:{
        async buscaDados(){
            try{
                this.toggleOverlay();
                const request = await this.$axios.get(this.url+'clientes');
                this.clientes = request.data;
            } catch{
                console.log('Error');
            } finally{
                this.toggleOverlay();
            }
        },

        async insereDados(){
            try{
                this.toggleOverlay();
                const request = await this.$axios.post(this.url+'addClin',{nome: this.nome, idade: this.idade, endereco: this.endereco})
                await this.buscaDados();
                this.nome = '';
                this.idade = '';
                this.endereco.logradouro = '';
                this.endereco.cidade = '';
                this.endereco.uf = '';
                this.endereco.numero = '';
                this.endereco.cep = '';
                this.endereco.bairro = '';
                this.toggleSnackbar()
            } catch{
                console.log('Error');
            } finally{
                this.toggleOverlay();
            }
        },

        async consultaCep(){
            try{
                const request = await this.$axios.get(this.url2+this.endereco.cep);
                const dados = request.data;
                this.endereco.logradouro = dados.street;
                this.endereco.bairro = dados.neighborhood;
                this.endereco.cidade = dados.city;
                this.endereco.uf = dados.state;

            } catch{
                console.log('Error')
            }
        },

        toggleOverlay(){
            this.overlay= !this.overlay;
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
