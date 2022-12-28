<script setup lang="ts">
import FenBoardTile from "../components/FenBoardTile.vue";

defineProps<{
  fen: string;
}>();

function fenTile(fenLine: string) {
  let t: string = fenLine;
  console.log(fenLine);
  t = t.replace("1", "e");
  t = t.replace("2", "ee");
  t = t.replace("3", "eee");
  t = t.replace("4", "eeee");
  t = t.replace("5", "eeeee");
  t = t.replace("6", "eeeeee");
  t = t.replace("7", "eeeeeee");
  t = t.replace("8", "eeeeeeee");
  return t;
}
</script>

<template>
  <!--<div>{{ fen }}</div>-->
  <div class="line">
    <FenBoardTile :fen="fenTile(fen)[0]" />
    <FenBoardTile :fen="fenTile(fen)[1]" />
    <FenBoardTile :fen="fenTile(fen)[2]" />
    <FenBoardTile :fen="fenTile(fen)[3]" />
    <FenBoardTile :fen="fenTile(fen)[4]" />
    <FenBoardTile :fen="fenTile(fen)[5]" />
    <FenBoardTile :fen="fenTile(fen)[6]" />
    <FenBoardTile :fen="fenTile(fen)[7]" />
  </div>
</template>

<style>
.line {
  width: 100%;
  height: 32px;
}
</style>
