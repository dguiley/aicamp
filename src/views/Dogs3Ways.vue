<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h1>This is an about page</h1>
      </div>
      <div class="col-4">
        <h3>DogListMount</h3>
        <DogListMount />
      </div>
      <div class="col-4">
        <h3>DogListAsync</h3>
        <Suspense>
          <DogListAsync />
        </Suspense>
      </div>
      <div class="col-4">
        <h3>DogListClass</h3>
        <DogListClass />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import DogListAsync from "../components/DogListAsync.vue";
import DogListMount from "../components/DogListMount.vue";
import DogListClass from "../components/DogListClass.vue";
</script>
  
