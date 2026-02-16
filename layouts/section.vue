<template>
  <div class="slidev-layout section">
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem;
  background: #ffffff !important;
  color: #404040;
  height: 100%;
  width: 100%;
}

.section-content {
  width: 100%;
}

.section :deep(h1) {
  font-size: 4rem;
  background: #00b0f0;
  color: #ffffff !important;
  margin: 0;
  padding: 1rem 0;
  margin-left: -3rem;
  margin-right: -3rem;
  box-sizing: border-box;
  text-align: center;
}

.section :deep(h2) {
  font-size: 2.5rem;
  background: #00b0f0;
  color: #ffffff !important;
  margin: 0;
  padding: 0.75rem 0;
  margin-left: -3rem;
  margin-right: -3rem;
  box-sizing: border-box;
  text-align: center;
}

.section :deep(p) {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #404040 !important;
}
</style>
