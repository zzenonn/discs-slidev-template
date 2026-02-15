<template>
  <div class="slidev-layout end">
    <div class="end-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem;
  background: #ffffff !important;
  position: relative;
  color: #404040;
  height: 100%;
  width: 100%;
}

.end * {
  color: #404040;
}

.end-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.end-content :deep(*) {
  color: #404040 !important;
}

.end-content :deep(h1) {
  font-size: 4rem;
  background: #00b0f0;
  color: #ffffff !important;
  padding: 1rem 0;
  margin-bottom: 2rem;
  margin-left: -3rem;
  margin-right: -3rem;
  box-sizing: border-box;
  text-align: center;
}

.end-content :deep(h2) {
  font-size: 2.5rem;
  background: #00b0f0;
  color: #ffffff !important;
  padding: 0.75rem 0;
  margin-bottom: 1.5rem;
  margin-left: -3rem;
  margin-right: -3rem;
  box-sizing: border-box;
  text-align: center;
}

.end-content :deep(p) {
  font-size: 1.25rem;
  color: #404040 !important;
  margin: 0.5rem 0;
}
</style>
