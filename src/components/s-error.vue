<template>
  <div :class="$style.errorMessage">
    <slot v-if="$scopedSlots.message" />
    <div v-else :class="$style.errorMessageContent">
      <div>
        <div :class="$style.errorMessageTitle">OPS</div>
        <div>Tivemos um problema.</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SError",
}
</script>
<style module>
.errorMessage {
  font-family: Arial, Tahoma, sans-serif !important;
  color: #1e1e1e;
}
.errorMessageContent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  text-align: center;
}
.errorMessageTitle {
  font-size: 2rem;
  font-weight: bold;
}
</style>