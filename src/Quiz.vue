<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Flag } from './flags.ts'
import { buildGame, QUESTIONS_PER_GAME, type Question } from './quiz.ts'
import FlagDisplay from './FlagDisplay.vue'

const questions = ref<Question[]>([])
const currentIndex = ref(0)
const score = ref(0)
const phase = ref<'start' | 'playing' | 'answered' | 'gameover'>('start')
const selectedId = ref<string | null>(null)
let advanceTimer: ReturnType<typeof setTimeout> | null = null

const infoFlag = ref<Flag | null>(null)

const currentQuestion = computed<Question | null>(
  () => questions.value[currentIndex.value] ?? null
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
    <h2 class="title is-3 mb-4">Do you know your pride flags?</h2>
    <p class="mb-5">You'll see {{ QUESTIONS_PER_GAME }} flags — pick the right name from 4 options.</p>
    <button class="button is-primary is-large" @click="startGame">Start Quiz</button>
  </div>

  <div v-else-if="phase === 'playing' || phase === 'answered'" class="quiz-layout">
    <div class="quiz-score">{{ score }} / {{ questions.length }}</div>

    <div v-if="currentQuestion" class="quiz-flag-wrapper">
      <FlagDisplay :flag="currentQuestion.correctFlag" />
    </div>

    <h2 class="title is-5 has-text-centered mb-4">What flag is this?</h2>

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
            {{ choice.name }}
          </button>
          <button
            class="answer-info-btn"
            @click="infoFlag = choice"
            aria-label="Learn more"
          >ⓘ</button>
        </div>
      </div>
    </div>

  </div>

  <div v-else-if="phase === 'gameover'" class="quiz-layout has-text-centered">
    <h2 class="title is-3 mb-4">Quiz Complete!</h2>
    <p class="title is-1 mb-5">{{ score }} / {{ questions.length }}</p>
    <button class="button is-primary is-large" @click="startGame">Play Again</button>
  </div>

  <div class="modal" :class="{ 'is-active': infoFlag !== null }">
    <div class="modal-background" @click="infoFlag = null"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ infoFlag?.name }}</p>
        <button class="delete" aria-label="close" @click="infoFlag = null"></button>
      </header>
      <section class="modal-card-body">
        <p>{{ infoFlag?.description }}</p>
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
</style>
