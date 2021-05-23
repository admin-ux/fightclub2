<template>
  <div>
    <b-col>
      <b-card
        title="This week in boxing"
        sub-title="May 2-8"
        img-src="https://media.istockphoto.com/photos/red-boxing-glove-picture-id1006291908?k=6&m=1006291908&s=612x612&w=0&h=Yin0d6ACZOqbgiNJ4DUYorU6OwBju_vOjlcs8TuJjPo="
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Your weekly update for all  things boxing.
        </b-card-text>

        <b-button
          v-b-tooltip.hover
          title="Tooltip content"
          v-b-modal="modalId"
          variant="primary"
          >Read me</b-button
        >
        <b-modal :id="modalId" title="BootstrapVue">
          <p class="my-4">Canelo Alvarez returns to the ring this Saturday (May 8, DAZN) against Billy Joe Saunders in a fight where the winner will leave with three of the four major titles at super middleweight.

Canelo was a guest on The Last Stand Podcast with Brian Custer and spoke about the Saunders fight, Caleb Plant and the IBF title, other names at 160, and his willingness to fight on a PBC card.

On Billy Joe Saunders

“I’m not the same guy from 5, 6 years ago, I’m different, I have experience, I’m a more mature boxer. So he can say whatever he wants, but he’s going to be in a different level fight.”

On Caleb Plant possibly being next

“That’s what I want, all of the titles in this division. My first move is Billy Joe Saunders, of course I need to win, and then the next champion is Caleb Plant and that’s the goal.”

On fighting Jermall Charlo

“Yes, why not for the people. Maybe for me it’s hard to make 160 now but lets see for the future.”

On fighting David Benavidez

“Why not, it would be a great fight with David Benavidez. I just want to make fights people want to see.”

How to Watch Canelo vs Saunders
Date: Saturday, May 8 | Start Time: 8:00 pm ET
Location: AT&T Stadium - Arlington, TX
Streaming: DAZN
Online Coverage: BadLeftHook.com

Canelo on fighting Demetrius Andrade

“He’s fought nobody yet, you see the record but he’s fighting with nobody. I have other plans!”

On fighting at 168 pounds

“Maybe until the end of my career. (How many more years do you plan on fighting?) Seven!”

On fighting on a PBC network next

“Maybe, why not? It’s my last fight with DAZN, I hope to work with Eddie (Hearn) no matter what, but why not, because I want to fight with all the guys in boxing.”

</p>
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