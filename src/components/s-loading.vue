<template>
  <div :class="$style.spinnerWrapper">
    <div :class="$style.spinnerContent">
      <svg :class="$style.spinner" viewBox="0 0 50 50" :style="{ height: size, width: size, marginLeft: -1 * (size / 2), marginTop: -1 * (size / 2) }">
        <circle :class="$style.path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    </div>
  </div>
</template>
<script>

export default {
  name: "SPageLoading",
  data: () => ({
    size: 50
  })
}
</script>
<style module>

.spinnerWrapper {
  height: 200px;
  width: 100%;
  position: relative;
}

.spinnerContent {
  display:flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  stroke: darkorange;
}

.path {
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>