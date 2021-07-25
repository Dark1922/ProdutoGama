<template>
  <div>
    <v-sheet
      color="white"
      elevation="10"
      height="100%"
      width="100%"
    >
      <h3 style="text-align:center; padding-top: 3%">Para realizar o cadastro selecione uma das opções abaixo ou acesse o menu lateral</h3>
      <v-container style="margin-top: 10%">
        <v-row justify="space">
          <v-col
            cols="12"
            md="4"
          >
            <v-sheet
              class="pa-12"
              color="white"
            >
              <v-sheet
                :elevation="elevation"
                class="mx-auto"
                height="100"
                width="100"
              > 
                <v-btn
                  class="ma-2"
                  :loading="loading2"
                  :disabled="loading2"
                  color="success"
                  @click="loader = 'loading2'"
                  to="/produtos"
                >
                  Cadastro de Produtos
                  <template v-slot:loader>
                    <span>Loading...</span>
                  </template>
                </v-btn>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            md="4"
            style="margin-left: 15%"
          >
            <v-sheet
              class="pa-12"
              color="white"
            >
              <v-sheet
                :elevation="elevation"
                class="mx-auto"
                height="100"
                width="100"
              > 
                <v-btn
                  class="ma-2"
                  :loading="loading4"
                  :disabled="loading4"
                  color="info"
                  @click="loader = 'loading4'"
                  to="/clientes"
                >
                  Cadastro de Clientes
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
                  </template>
                </v-btn>
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      
    </v-sheet>
  </div>
</template>



<script>

export default ({
  data() {
    return{
     
    }
  },



  
})
</script>
