<template>
  <div class="overflow-auto">
  

    <b-table
      id="my-table"
      :items="items[0]"
      :fields="fields"
      @row-clicked="rowClickded"
      small
    >
    
    <template #cell(actions)="row">
        <b-button size="sm" @click="izmeni(row.item)" class="mr-1">
            Izmeni
        </b-button>
        <b-button size="sm" @click="obrisi(row.item)">
            Obrisi
        </b-button>
      </template>

    </b-table>


  </div>

</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'KategorijeList',

    data() {
      return {
        fields: [
          {
            key: 'ime',
            sortable: false
          },
          {
            key: 'prezime',
            sortable: false
          },
          {
            key: 'email',
            sortable: false
          },
          {
            key: 'tip',
            sortable: false
          },
          {
            key: 'status',
            sortable: false
          },
          {
            key: 'actions', label: 'Actions'
          }
        ],
        items: [],
        form:{
            ime: '',
            opis: '',
            clicked : 0,
            clickedUpdate: 0,
            id: ''
        }
        
      }
    },

    computed: {
      ...mapState([
         'kategorijeList'
      ]),
      validation() {
        return this.form.ime.length > 2 && this.form.ime.length < 16
      },
      validation2() {
        return this.form.opis.length > 2
      }
    },


    mounted() {
        
        this.fetchKorisnici().then(data => {
            this.items.push(data);
        })
        
        
      
        
    },

    methods: {
      ...mapActions([
        'fetchKorisnici'
      ]),

        submit(){
            if(this.form.ime.length > 2 && this.form.ime.length < 16){
                var kat = {
                    ime: this.form.ime,
                    opis: this.form.opis
                }
                this.addKategorija(kat);
                window.location.reload();
            }
        },

        clicked(){

            this.form.clickedUpdate = 0;
            this.form.ime = '';
            this.form.opis = '';

            if(this.form.clicked == 1){
                this.form.clicked = 0;
            }else{
                this.form.clicked = 1;
            }

        },

        obrisi(item){

            this.deleteKategorija(item.id);
            window.location.reload();

        },

        izmeni(item){

            this.form.clicked = 0;

            if(this.form.clickedUpdate == 1){
                this.form.clickedUpdate = 0;
            }else{
                this.form.clickedUpdate = 1;
            }
            this.form.ime = item.ime
            this.form.opis = item.opis
            this.form.id = item.id

        },

        update(){
            
            var kat = {
                id: this.form.id,
                ime: this.form.ime,
                opis: this.form.opis
            }

            this.updateKategorija(kat);
            window.location.reload();

        },

     
    }
  }

</script>

<style scoped>

    .input{
        width: 50%;
        margin-left: 25%;
        margin-top: 10px;
    }
    .glavni{
        margin-top: 20px;
    }

</style>