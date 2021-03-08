<template>
  <div class="createrating">
    
    <!-- Either remove columns or make 1 and 3 very small -->
    <b-container class="bv-example-row">
        <b-row class="text-center">
            <b-col>1 of 3</b-col>

            <b-col cols="8" >2 of 3 (wider)

                
                <div>
                    <b-card bg-variant="light">
                        <b-form-group
                        label-cols-lg="3"
                        label="Leave A Rating"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0"
                        >
                        </b-form-group>
                        <!-- Might remove divs from both -->
                         <div>
                            <b-form-textarea
                            id="review"
                            v-model="review"
                            placeholder="Write Your Review Here"
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>

                            <!-- <pre class="mt-3 mb-0">{{ text }}</pre> -->
                            <p></p>
                        </div>
                        <div>
                            <b-form-rating v-model="rating" variant="warning" class="mb-2"></b-form-rating>
                            <p class="mt-2">Value: {{ rating }}</p>
                        </div>

           
                    </b-card>
                </div>


            </b-col>

            <b-col>3 of 3</b-col>
        </b-row>
    </b-container>

     
  
  </div>

  
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    data() {
      return {
        review: "",
        rating:0
      }
    }
  }
</script>
