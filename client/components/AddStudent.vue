<template>



<v-container>

 <form @submit.prevent="saveData">
    <label for="name">Name</label>
    <v-text-field id="name" v-model="name" type="text" />
    <br/>

  <label for="email">Email</label>
    <v-text-field id="email" v-model="email" type="email" />
    <br/>

      <label for="number">Number</label>
    <v-text-field id="number" v-model="number" type="number" />
    <br/>

      <label for="dob">Date of Birth</label>
    <v-text-field id="dob" v-model="dob" type="date" />
    <br/>

    <button style="  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;">Save</button>
  </form>



{{students}}


</v-container>
 






  
</template>

<script>
import {Students} from '../../imports/api/student'
export default {
  data: () => ({}),
  methods: {
    saveData() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.number);
      console.log(this.dob);


Students.insert({name:this.name, email:this.email,number:this.number,dob:this.dob})




    },
  },
  meteor:{
    students(){
      return Students.find({}).fetch();
      
    }
  }
};
</script>