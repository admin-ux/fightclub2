<template>
  <div >
   
  <!-- <div class="queryofIPs">
                    <div v-for="initialpost in queriedInitialPosts" :key="initialpost.id" class="initialpost">
                        {{initialpost.landlordname}}
                    </div>
  </div> -->
  
     <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Advanced Search</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="searchRequest">
            <div class="form-group">
              <label for="landlordname">Landlordname</label>
              <input
                id="landlordname"
                type="text"
                placeholder="Landlordname"
                name="landlordname"
                v-model="landlordname"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="street">Street</label>
              <input
                type="street"
                class="form-control"
                placeholder="Street"
                name="street"
                id="street"
                v-model="street"
              >
              <label for="city">City</label>
              <input
                id="city"
                type="text"
                placeholder="City"
                name="city"
                v-model="city"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="province">Province</label>
              <input
                type="province"
                class="form-control"
                placeholder="Province"
                name="province"
                id="province"
                v-model="province"
              >
            </div>
             <div class="form-group">
              <label for="country">Country</label>
              <input
                type="country"
                class="form-control"
                placeholder="Country"
                name="country"
                id="country"
                v-model="country"
              >
            </div>
            <input type="submit" class="btn btn-primary" value="Submit">
            &nbsp;&nbsp;&nbsp;&nbsp;
      
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
export default {
  data() {
      return {
          landlordname: "",
          street: "",
          city: "",
          province: "",
          country: ""
      };
      
    },
  //name:"SearchRequest",
    methods: {
      ...mapActions(["fetchInitialPosts"]),
      searchRequest(){
          let searchparameters ={
                  
              landlordname: this.landlordname,
              street: this.street,
              city: this.city,
              province: this.province,
              country: this.country,

          };
    
      // console.log(theSearchParam);
  
          this.fetchInitialPosts(searchparameters);

        //this.fetchInitialPosts(this.landlordname,this.street,this.city, this.province,this.country);
        // .then(res => {
        //   if (res.data.success) {
             this.$router.push("/SearchResults");
        //   }
        // })
        // .catch(err => {
        //   console.log(err);
        // });

    }
  
  },
  // computed: mapGetters(["queriedInitialPosts"]),
  // created() {
  //   this.fetchInitialPosts();
  // },



  
  // data() 
  // {
  
  //     return {
  //       slide: 0,
  //       sliding: null
  //     }
  //   },
  //   methods: {
  //     onSlideStart() {
  //       this.sliding = true
  //     },
  //     onSlideEnd() {
  //       this.sliding = false
  //     }
  //   }

 
    //Carousel Markup
      // <b-carousel
      //   id="carousel-1"
      //   v-model="slide"
      //   :interval="4000"
      //   controls
      //   indicators
      //   background="#ababab"
      //   img-width="1024"
      //   img-height="480"
      //   style="text-shadow: 1px 1px 2px #333;"
      //   @sliding-start="onSlideStart"
      //   @sliding-end="onSlideEnd">
      //   <!-- Text slides with image -->
      //   <b-carousel-slide
      //     caption="First slide"
      //     text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      //     img-src="https://picsum.photos/1024/480/?image=52"
      //   ></b-carousel-slide>

      //   <!-- Slides with custom text -->
      //   <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      //     <h1>Hello world!</h1>
      //   </b-carousel-slide>

      //   <!-- Slides with image only -->
      //   <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      //   <!-- Slides with img slot -->
      //   <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      //   <b-carousel-slide>
      //     <template v-slot:img>
      //       <img
      //         class="d-block img-fluid w-100"
      //         width="1024"
      //         height="480"
      //         src="https://picsum.photos/1024/480/?image=55"
      //         alt="image slot"
      //       >
      //     </template>
      //   </b-carousel-slide>

      //   <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      //   <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          
      //     <b-jumbotron header="Rate Landlord" lead="Looking To Rate Your Landlord">
      //       <p>Search our Database to find your Landlord //:Edit</p>
            

      //       <b-navbar type="light" variant="light">
      //         <b-nav-form>
      //           <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      //           <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
      //         </b-nav-form>
      //       </b-navbar>
      //     </b-jumbotron>
    
      //   </b-carousel-slide>
      //   <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          
      //     <b-jumbotron header="Find Landlord" lead="Looking For a Specific Landlord">
      //       <p>Search our Database to find your Landlord //:Edit</p>
      //       <!-- <b-button variant="primary" href="#">More Info</b-button> -->
      //       <b-navbar type="light" variant="light">
      //         <b-nav-form>
      //           <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      //           <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
      //         </b-nav-form>
      //       </b-navbar>
      //     </b-jumbotron>
    
      //   </b-carousel-slide>
      //   <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          
      //     <b-jumbotron header="Search By Address" lead="Enter as much info as you can to narrow your search">
      //       <p>Search our Database to find your Landlord //:Edit</p>
      //       <!-- <b-button variant="primary" href="#">More Info</b-button> -->
      //       <b-navbar type="light" variant="light">
      //         <b-nav-form>
      //           <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      //           <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
      //         </b-nav-form>
      //       </b-navbar>
      //     </b-jumbotron>
    
      //   </b-carousel-slide>
      // </b-carousel>

      // <p class="mt-4">
      //   Slide #: {{ slide }}<br>
      //   Sliding: {{ sliding }}
      // </p>
}
</script>
