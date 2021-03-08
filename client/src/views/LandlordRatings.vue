<template>
  <div class="landlordratings">
    
    
    <b-container class="bv-example-row">
        <b-row class="text-center">
            <b-col>1 of 3</b-col>

            <b-col cols="8" >2 of 3 (wider)

                
                <!-- Add boarder and off white colour also add results in cards multiplied by number of results scrolling down -->
                <div>
                    <b-card-group deck>
                        <b-card
                        header="Rating: Actual Rating of Landlord"
                        header-tag="header"
                        title="Landlord: Actual Name of Landlord"
                        >
                        <b-card-text>Address: Actaul Address</b-card-text>
                        <!-- <b-button href="#" variant="primary">Go somewhere</b-button>
                        Probably wil make whole card clickable -->
                        <!-- **May Rearrange this to have Rating on Top, Name as title and Body as Address  -->
                        </b-card>   
                    </b-card-group>
                </div>
                <p></p>
                <div>
                    <b-card-group deck>
                        <b-card
                        title="Rating: Given By User"
                        footer="Username:"
                        footer-tag="footer"
                        >
                        <b-card-text>Comment --------- ------- --- ---- ----- ---- ---- ----- ------- --- ---- ---- ----- ---- ------ ----- ------- -----</b-card-text>
                        </b-card>
                    </b-card-group>
                </div>


            </b-col>

            <b-col>3 of 3
               </b-col>
        </b-row>
    </b-container>

     
  
  </div>

  
  
</template>

<script>


</script>
