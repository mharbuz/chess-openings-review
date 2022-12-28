<script setup lang="ts">
import FenBoardLine from "../components/FenBoardLine.vue";
defineProps<{
  fen: string;
}>();
</script>

<template>
  <h5 class="green">{{ fen }}</h5>
  <div class="board">
    <FenBoardLine :fen="fen.split('/')[0]" />
    <FenBoardLine :fen="fen.split('/')[1]" />
    <FenBoardLine :fen="fen.split('/')[2]" />
    <FenBoardLine :fen="fen.split('/')[3]" />
    <FenBoardLine :fen="fen.split('/')[4]" />
    <FenBoardLine :fen="fen.split('/')[5]" />
    <FenBoardLine :fen="fen.split('/')[6]" />
    <FenBoardLine :fen="fen.split('/')[7].split(' ')[0]" />
  </div>
</template>

<style>
.board {
  width: 256px;
  height: 256px;
  background-image: url("@/assets/chess/board.png");
  background-size: 256px 256px;
}
</style>
