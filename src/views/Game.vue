<template>
  <div class="game">
    <h2 class="wordsnum">{{ wordslen }} left</h2>

    <h2 class="score">Score: {{ Score }}</h2>

    <Card class="card">
      <v-card-title>
        <h3 class="ms-16 scrambledwords">{{ scrambledword }}</h3>
      </v-card-title>

      <v-card-text>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <v-btn
              class="ma-2"
              text
              icon
              color="blue lighten-2"
              v-if="checkingifcorrect == true"
            >
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>

            <v-btn
              class="ma-2"
              text
              icon
              color="red lighten-2"
              v-else-if="checkingifcorrect == false"
            >
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
          </span>
          <input
            v-model="enteredword"
            type="text"
            class="form-control"
            placeholder="Correct Word"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            spellcheck="false"
          />
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          v-if="checkingifcorrect == false"
          disabled
          class="ms-16"
          color="primary"
          elevation="22"
        >
          Next
        </v-btn>

        <v-btn
          v-else-if="$store.state.words.length == 1"
          class="ms-16"
          color="primary"
          elevation="22"
          @click="onclick()"
        >
          Finish
        </v-btn>

        <v-btn
          v-else-if="$store.state.words.length == 0"
          disabled
          class="ms-16"
          color="primary"
          elevation="22"
          @click="onclick()"
        >
          Finish
        </v-btn>
        <v-btn
          v-else
          class="ms-16"
          color="primary"
          elevation="22"
          @click="onclick()"
          >Next</v-btn
        >
        <v-btn
          v-if="$store.state.words.length == 0"
          disabled
          @click="onskipbtn()"
          class="ms-16"
          color="primary"
          elevation="22"
          v-show="iftoshowskipbtn"
          >Skip</v-btn
        >

        <v-btn
          v-else
          @click="onskipbtn()"
          class="ms-16"
          color="primary"
          elevation="22"
          v-show="iftoshowskipbtn"
          >Skip</v-btn
        >
      </v-card-actions>

      <!-- users figuring out hard words -->
      <v-alert type="success" v-if="ifprenom"
        >Good job! I see that you have passed the trick, this is not an english
        word, keep going!</v-alert
      >
      <v-alert type="success" v-if="enteredword == 'background'"
        >Excellent {{ $store.state.name }}!, I knew that you will figure it
        out.</v-alert
      >

      <!-- Meaning of words -->
      <a v-if="checkingifcorrect" :href="getmeaning">Find it's meaning </a>
    </Card>

    <v-alert
      v-if="
        $store.state.words.length == 0 &&
          $store.state.radioGroup == 'Easy' &&
          Score >= $store.state.number * 5 - 15
      "
      type="success"
    >
      Excellent <strong>{{ $store.state.name }}!</strong> You've finished this
      level, continue with other levels.
      <br />
      <v-btn @click="gotohome()">Home</v-btn>
    </v-alert>

    <v-alert
      v-else-if="
        $store.state.words.length == 0 &&
          $store.state.radioGroup == 'Easy' &&
          Score < $store.state.number * 5 - 15
      "
      type="warning"
    >
      Not good <strong>{{ $store.state.name }}!</strong> You've in an easy
      level, and your score is {{ Score }}. But no problem, with failures you
      get in to success, try again.
      <br />
      <v-btn @click="gotohome()">Home</v-btn>
    </v-alert>

    <v-alert
      v-if="
        $store.state.words.length == 0 &&
          $store.state.radioGroup == 'Medium' &&
          Score >= $store.state.number * 5 - 25
      "
      type="success"
    >
      Good job <strong>{{ $store.state.name }}!</strong> You've finished this
      level, continue with other levels.
      <br />
      <v-btn @click="gotohome()">Home</v-btn>
    </v-alert>

    <v-alert
      v-if="
        $store.state.words.length == 0 &&
          $store.state.radioGroup == 'Medium' &&
          Score < $store.state.number * 5 - 25
      "
      type="warning"
    >
      Mmmmm, <strong>{{ $store.state.name }}!</strong>, your score is
      {{ Score }} which is not very bad; However, you can do better, try again.
      <br />
      <v-btn @click="gotohome()">Home</v-btn>
    </v-alert>

    <v-alert
      v-if="
        $store.state.words.length == 0 &&
          $store.state.radioGroup == 'Hard' &&
          Score > $store.state.number * 5 - 35
      "
      type="success"
    >
      Good <strong>{{ $store.state.name }}!</strong> You've finished this level,
      continue with other levels.
      <br />
      <v-btn @click="gotohome()">Home</v-btn>
    </v-alert>

    <v-alert
      v-if="
        $store.state.words.length == 0 &&
          $store.state.radioGroup == 'Medium' &&
          Score <= $store.state.number * 5 - 35
      "
      type="warning"
    >
      Not good at all <strong>{{ $store.state.name }}!</strong>, your score is
      {{ Score }} which is poor, but, you can do better, just try again.
      <br />
      <v-btn @click="gotohome()">Home</v-btn>
    </v-alert>
  </div>
</template>

<script lang="ts" scoped>
import Vue from "vue";
import Card from "../components/card.vue";
import "../assets/styles/game.sass";

export default Vue.extend({
  mounted() {
    this.getrandomizedcharact();
  },

  data() {
    return {
      currword: this.$store.state.words[
        Math.floor(Math.random() * this.$store.state.words.length)
      ],
      enteredword: "",
      scrambledword: "",
      Score: 0,
    };
  },

  components: {
    Card,
  },

  methods: {
    onclick() {
      if (this.checkingifcorrect == true) {
        const index = this.$store.state.words.indexOf(this.currword);
        this.$store.state.words.splice(index, 1);
        this.Score += 5;

        if (this.$store.state.words.length > 0) {
          this.currword = this.$store.state.words[
            Math.floor(Math.random() * this.$store.state.words.length)
          ];
          this.getrandomizedcharact();
          this.enteredword = "";
        }

        // alerts for specific words
        if (this.$store.state.words.length > 1) {
          if (this.currword == "prenom") {
            alert("This is a trick `:)");
          } else if (this.currword == "background") {
            alert(
              "This is the largest word in this level, but I'm sure that you will figure it out"
            );
          }
        }
      }
    },

    onskipbtn() {
      const index = this.$store.state.words.indexOf(this.currword);
      this.$store.state.words.splice(index, 1);

      if (this.$store.state.words.length > 0) {
        this.currword = this.$store.state.words[
          Math.floor(Math.random() * this.$store.state.words.length)
        ];
        this.getrandomizedcharact();
        this.enteredword = "";
      }
    },

    getrandomizedcharact() {
      let arr = this.currword.split("");

      for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length);

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      this.scrambledword = arr.join("");
      return this.scrambledword;
    },
    gotohome() {
      window.location.href = "/";
    },
  },

  computed: {
    iftoshowskipbtn() {
      if (this.scrambledword.length >= 5) {
        return true;
      }
    },
    ifprenom() {
      if (this.enteredword == "prenom") {
        return true;
      }
    },
    wordslen() {
      if (this.$store.state.words.length > 0)
        return this.$store.state.words.length - 1;
      else {
        return 0;
      }
    },

    checkingifcorrect() {
      if (this.enteredword.toLowerCase() === this.currword) {
        return true;
      } else {
        return false;
      }
    },
    getmeaning(): string {
      return `https://www.google.com/search?q=what is the meaning of ${this.currword}`;
    },
  },
});
</script>
