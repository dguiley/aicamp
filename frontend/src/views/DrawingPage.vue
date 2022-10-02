<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div>
          <h3>Let's draw, baby!!</h3>
          <VueDrawingCanvas
              ref="VueCanvasDrawing"
              v-model:image="data.image"
              :stroke-type="data.strokeType"
              :line-cap="data.lineCap"
              :line-join="data.lineJoin"
              :fill-shape="data.fillShape"
              :eraser="data.eraser"
              :lineWidth="data.line"
              :color="data.color"
              :background-color="data.backgroundColor"
              :background-image="data.backgroundImage"
              :lock="data.disabled"
          />
        </div>
        <div>
          <button @click="data.eraser=false" class="btn btn-secondary" :class="{'active':!data.eraser}">Draw</button>
          <button @click="data.eraser=true" class="btn btn-secondary" :class="{'active':data.eraser}">Erase</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDrawingCanvas from "vue-drawing-canvas";
import {reactive} from "vue";

const data = reactive({
  image: "",
  eraser: false,
  disabled: false,
  fillShape: false,
  line: 20,
  color: "#be0b0b",
  strokeType: "dash",
  lineCap: "round",
  lineJoin: "round",
  backgroundColor: "#FFFFFF",
  backgroundImage: null,
  watermark: null,
  additionalImages: []
})
  </script>

<style lang="scss">
.active {
  background-color: aquamarine !important;
  color: black !important;
}
</style>
  
