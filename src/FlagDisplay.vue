<script setup lang="ts">
import type { Flag, StripesFlag, StripesProportionalFlag, StripesWithCircleFlag, SvgFlag } from './flags.ts'

defineProps<{ flag: Flag }>()
</script>

<template>
  <div class="flag-display">
    <template v-if="flag.type === 'stripes'">
      <div
        v-for="(color, i) in (flag as StripesFlag).colors"
        :key="i"
        class="flag-stripe"
        :style="{ backgroundColor: color }"
      />
    </template>

    <template v-else-if="flag.type === 'stripes-proportional'">
      <div
        v-for="(color, i) in (flag as StripesProportionalFlag).colors"
        :key="i"
        class="flag-stripe"
        :style="{
          backgroundColor: color,
          flexGrow: (flag as StripesProportionalFlag).proportions[i],
        }"
      />
    </template>

    <template v-else-if="flag.type === 'stripes-with-circle'">
      <div
        class="flag-circle-bg"
        :style="{ backgroundColor: (flag as StripesWithCircleFlag).background }"
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" class="flag-circle-svg">
          <circle
            cx="50"
            cy="50"
            r="30"
            :stroke="(flag as StripesWithCircleFlag).circleColor"
            stroke-width="6"
            fill="none"
          />
        </svg>
      </div>
    </template>

    <template v-else-if="flag.type === 'svg'">
      <div class="flag-svg-container" v-html="(flag as SvgFlag).svg" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.flag-display {
  width: 100%;
  aspect-ratio: 3 / 2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
}

.flag-stripe {
  flex: 1;
  width: 100%;
}

.flag-circle-bg {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flag-circle-svg {
  width: 60%;
  height: 60%;
}

.flag-svg-container {
  width: 100%;
  height: 100%;

  :deep(svg) {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>