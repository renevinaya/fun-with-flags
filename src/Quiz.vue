<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Flag } from './flags.ts'
import { buildGame, QUESTIONS_PER_GAME, type Question } from './quiz.ts'
import FlagDisplay from './FlagDisplay.vue'
import { ui, type language } from './translations.ts'

const props = defineProps<{ language: language }>()

const questions = ref<Question[]>([])
const currentIndex = ref(0)
const score = ref(0)
const phase = ref<'start' | 'playing' | 'answered' | 'gameover'>('start')
const selectedId = ref<string | null>(null)
let advanceTimer: ReturnType<typeof setTimeout> | null = null

const infoFlag = ref<Flag | null>(null)

const CONFETTI_COLORS = ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787', '#55CDFC', '#F7A8B8', '#FFFFFF']

const confettiPieces = computed(() => {
  if (phase.value !== 'gameover' || score.value / questions.value.length <= 0.85) return []
  return Array.from({ length: 60 }, (_, i): Record<string, string> => ({
    left: `${((i * 61.8) % 100).toFixed(1)}%`,
    width: `${6 + (i * 3) % 7}px`,
    height: `${8 + (i * 5) % 9}px`,
    backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    '--cdelay': `${(i * 0.03).toFixed(2)}s`,
    '--cduration': `${(1.6 + ((i * 37) % 80) / 100).toFixed(2)}s`,
    '--cdrift': `${-50 + (i * 13) % 100}px`,
  }))
})

const currentQuestion = computed<Question | null>(
  () => questions.value[currentIndex.value] ?? null
)

const introText = computed(() =>
  ui['intro'][props.language].replace('{n}', String(QUESTIONS_PER_GAME))
)

function buttonClass(choice: Flag): string {
  if (selectedId.value === null) return ''
  if (choice.id === currentQuestion.value?.correctFlag.id) return 'is-success'
  if (choice.id === selectedId.value) return 'is-danger'
  return ''
}

function startGame(): void {
  questions.value = buildGame()
  currentIndex.value = 0
  score.value = 0
  selectedId.value = null
  phase.value = 'playing'
}

function selectAnswer(flag: Flag): void {
  if (phase.value !== 'playing') return
  selectedId.value = flag.id
  if (flag.id === currentQuestion.value?.correctFlag.id) {
    score.value++
  }
  phase.value = 'answered'
  advanceTimer = setTimeout(() => advance(), 1500)
}

function advance(): void {
  if (advanceTimer !== null) {
    clearTimeout(advanceTimer)
    advanceTimer = null
  }
  const next = currentIndex.value + 1
  if (next >= questions.value.length) {
    phase.value = 'gameover'
  } else {
    currentIndex.value = next
    selectedId.value = null
    phase.value = 'playing'
  }
}
</script>

<template>
  <div v-if="phase === 'start'" class="quiz-layout has-text-centered">
    <h2 class="title is-3 mb-4">{{ ui['tagline'][language] }}</h2>
    <p class="mb-5">{{ introText }}</p>
    <button class="button is-primary is-large" @click="startGame">{{ ui['startBtn'][language] }}</button>
  </div>

  <div v-else-if="phase === 'playing' || phase === 'answered'" class="quiz-layout">
    <div class="quiz-score">{{ score }} / {{ questions.length }}</div>

    <div v-if="currentQuestion" class="quiz-flag-wrapper">
      <FlagDisplay :flag="currentQuestion.correctFlag" />
    </div>

    <h2 class="title is-5 has-text-centered mb-4">{{ ui['question'][language] }}</h2>

    <div v-if="currentQuestion" class="columns is-multiline">
      <div
        v-for="choice in currentQuestion.choices"
        :key="choice.id"
        class="column is-half"
      >
        <div class="answer-wrapper">
          <button
            class="button is-fullwidth answer-btn"
            :class="buttonClass(choice)"
            @click="selectAnswer(choice)"
          >
            {{ choice.name[language] }}
          </button>
          <button
            class="answer-info-btn"
            @click="infoFlag = choice"
            :aria-label="ui['learnMore'][language]"
          >ⓘ</button>
        </div>
      </div>
    </div>

  </div>

  <div v-else-if="phase === 'gameover'" class="quiz-layout has-text-centered">
    <h2 class="title is-3 mb-4">{{ ui['complete'][language] }}</h2>
    <p class="title is-1 mb-5">{{ score }} / {{ questions.length }}</p>
    <button class="button is-primary is-large" @click="startGame">{{ ui['playAgain'][language] }}</button>
  </div>

  <div v-if="confettiPieces.length" class="confetti-container" aria-hidden="true">
    <div
      v-for="(piece, i) in confettiPieces"
      :key="i"
      class="confetti-piece"
      :style="piece"
    ></div>
  </div>

  <div class="modal" :class="{ 'is-active': infoFlag !== null }">
    <div class="modal-background" @click="infoFlag = null"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ infoFlag?.name[language] }}</p>
        <button class="delete" :aria-label="ui['close'][language]" @click="infoFlag = null"></button>
      </header>
      <section class="modal-card-body">
        <p>{{ infoFlag?.description[language] }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-layout {
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem;
}

.quiz-score {
  text-align: right;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.quiz-flag-wrapper {
  width: 100%;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.answer-wrapper {
  position: relative;
}

.answer-btn {
  padding-right: 2.25rem;
}

.answer-info-btn {
  position: absolute;
  right: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  opacity: 0.45;
  color: inherit;
  line-height: 1;
  padding: 0.2rem 0.3rem;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
}

.confetti-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 100;
}

.confetti-piece {
  position: absolute;
  top: -12px;
  border-radius: 2px;
  animation: confetti-fall var(--cduration) var(--cdelay) ease-in both;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(var(--cdrift)) rotate(540deg);
    opacity: 0;
  }
}
</style>
