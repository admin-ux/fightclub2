<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        img-src="https://media.istockphoto.com/photos/red-boxing-glove-picture-id1006291908?k=6&m=1006291908&s=612x612&w=0&h=Yin0d6ACZOqbgiNJ4DUYorU6OwBju_vOjlcs8TuJjPo="
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button
          v-b-tooltip.hover
          title="Tooltip content"
          v-b-modal="modalId"
          variant="primary"
          >Go somewhere</b-button
        >
        <b-modal :id="modalId" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name", "id"],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style scoped></style>