<template>
  <div id="app">
    <b-card-group deck>
      <b-form @submit="onSubmit">
        <b-card
          title="Joshua vs Fury"
          tag="article"
          style="max-width: 25rem"
          class="mb-2"
        >
          <b-form-group label="Who wins?">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="selected"
              :options="options"
              name="pickFighter"
              buttons
              variant="dark"
            ></b-form-radio-group>
            <div class="text-subtitle1">
              Type:
              <div class="example">
                <b-form-radio-group
                  id="type"
                  v-model="typeWin"
                  :options="type"
                  name="type"
                  buttons
                ></b-form-radio-group>
              </div>
            </div>
            <div class="text-subtitle1" v-show="typeWin === 'KO'">
              Round of KO/TKO:
              <div>
                <b-form-radio-group
                  id="Detail"
                  v-model="detail"
                  :options="detailKO"
                  name="Detail"
                  buttons
                ></b-form-radio-group>
              </div>
            </div>
            <div class="text-subtitle1" v-show="typeWin === 'Decision'">
              Points spread:
              <div>
                <b-form-radio-group
                  id="Detail"
                  v-model="detail"
                  :options="detailPoints"
                  name="Detail"
                  buttons
                ></b-form-radio-group>
              </div>
            </div>
          </b-form-group>
          <b-button type="submit" variant="primary" :loading="submitting"
            >Submit
          </b-button>
        </b-card>
      </b-form>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      typeWin: null,
      points: null,
      submitting: false,
      detail: null,
      detail2: null,
      options: [
        { text: "Joshua", value: "joshua" },
        { text: "Fury", value: "fury" },
        { text: "Draw", value: "draw" },
      ],
      type: [
        { text: "KO/TKO", value: "KO" },
        { text: "Decision", value: "Decision" },
      ],
      detailPoints: [
        { text: "Close(0-5)", value: "close" },
        { text: "Clear(6-12)", value: "clear" },
        { text: "Wide(19+)", value: "wide" },
      ],
      detailKO: [
         { text: '(1-4)', value: 'early' },
         { text: '(5-7)', value: 'mid' },
         { text: '(8-10)', value: 'late' },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.submitting = true;
      alert("Thanks for submitting");
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  padding: 20px;
  height: 300px;
}
</style>