<template>
  <app-header></app-header>
  <div class="container">
    <!-- <index-comp></index-comp> -->
    <yup-validate></yup-validate>
  </div>
  <app-footer></app-footer>
 
</template>

<script>
import YupValidate from './components/Validate/YupValidate.vue';


export default {
  components:{
    YupValidate

  }

 
}
</script>

