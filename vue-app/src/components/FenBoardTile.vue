<script setup lang="ts">
defineProps<{
  fen: string;
}>();
</script>

<template>
  <div class="tile" :class="fen"></div>
</template>

<style>
.tile {
  width: 32px;
  height: 32px;
  float: left;
  border: 1px solid #fff;
  background-size: 30px 30px;
}
.K {
  background-image: url("@/assets/chess/Chess_klt45.svg");
}
.Q {
  background-image: url("@/assets/chess/Chess_qlt45.svg");
}
.R {
  background-image: url("@/assets/chess/Chess_rlt45.svg");
}
.B {
  background-image: url("@/assets/chess/Chess_blt45.svg");
}
.N {
  background-image: url("@/assets/chess/Chess_nlt45.svg");
}
.P {
  background-image: url("@/assets/chess/Chess_plt45.svg");
}
.k {
  background-image: url("@/assets/chess/Chess_kdt45.svg");
}
.q {
  background-image: url("@/assets/chess/Chess_qdt45.svg");
}
.r {
  background-image: url("@/assets/chess/Chess_rdt45.svg");
}
.b {
  background-image: url("@/assets/chess/Chess_bdt45.svg");
}
.n {
  background-image: url("@/assets/chess/Chess_ndt45.svg");
}
.p {
  background-image: url("@/assets/chess/Chess_pdt45.svg");
}
</style>
