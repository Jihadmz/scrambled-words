<template>
    <div class="game">

        <h2 class="wordsnum">{{wordslen}} left</h2>

                <h2 class="score">{{Score}}</h2>

            <Card class="card">
                <v-card-title>
                <h3 class="ms-16">{{scrambledword}}</h3>
                </v-card-title>

                <v-card-text>
                    <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">
      <v-btn
        class="ma-2"
        text
        icon
        color="blue lighten-2"
        v-if="this.checkingifcorrect==true"
      >
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        text
        icon
        color="red lighten-2"
        v-else-if="this.checkingifcorrect==false"
      >
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>



      </span>
  <input v-model="enteredword" type="text" class="form-control" placeholder="Correct Word" aria-label="Username" aria-describedby="addon-wrapping" spellcheck="false">
</div>
                </v-card-text>

                <v-card-actions>
                    
    <v-btn v-if="this.checkingifcorrect==false" disabled class="ms-16" color="primary" elevation="22">
    Next
    </v-btn>

                <v-btn
    v-else-if="$store.state.words.length==1"
        class="ms-16"
    color="primary"
    elevation="22"
    @click="onclick()"
    >
    Finish
    </v-btn>

     <v-btn
    v-else-if="$store.state.words.length==0"
    disabled
        class="ms-16"
    color="primary"
    elevation="22"
    @click="onclick()"
    >
    Finish
    </v-btn>
                <v-btn v-else
        class="ms-16"
    color="primary"
    elevation="22" @click="onclick()">Next</v-btn>
                
                </v-card-actions>
            </Card>

            <v-alert v-if="$store.state.words.length == 0" type="success" dismissible>
     Congratulations <strong>{{$store.state.name}}!</strong> You've finished this level, continue with other levels
     <br>
      <v-btn @click="gotohome()">Home</v-btn>
    </v-alert>
             </div> 
</template>

<script lang="ts" scoped>
import Vue from 'vue';
import Card from '../components/card.vue';
import '../assets/styles/game.sass';

export default Vue.extend({
    
mounted(){
    this.getrandomizedcharact()
    },

    data(){
        return {
        currword: this.$store.state.words[Math.floor(Math.random() * this.$store.state.words.length)],
        enteredword:'',
        scrambledword: '',
        Score:0,
    }
    },

    components: {
        Card,
    },

    methods: {     
        onclick(){
           if(this.checkingifcorrect==true){
            const index = this.$store.state.words.indexOf(this.currword)
            this.$store.state.words.splice(index, 1)
            this.Score+=5

            if(this.$store.state.words.length > 0){
            this.currword =  this.$store.state.words[Math.floor(Math.random() * this.$store.state.words.length)]
            this.getrandomizedcharact()
            this.enteredword = ''
            }
            else{
                    }
           }
        },

        getrandomizedcharact(){
            let arr = this.currword.split('');

            for(let i=0;i<arr.length;i++){
                let j = Math.floor(Math.random() * arr.length)

                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            this.scrambledword = arr.join('');
            return this.scrambledword
        },
        gotohome(){
            window.location.href='/'
        },
        
        },

        computed: {
            wordslen(){
                if(this.$store.state.words.length > 0)
          return  this.$store.state.words.length - 1
          else {
              return 0
          }
            },

            checkingifcorrect(){
            if(this.enteredword.toLowerCase()===this.currword ){
          return true;
      }
      else{
          return false;
      }
  },
           
        }
        })

</script>