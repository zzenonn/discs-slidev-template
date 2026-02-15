<template>
  <div class="slidev-layout end">
    <div class="end-content">
      <h1>Thank You</h1>
      <slot />
    </div>
    <div class="branding">
      <div class="discs-logo">DISCS</div>
      <p class="institution">Ateneo de Manila University</p>
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
  background: #ffffff;
  position: relative;
  color: #404040;
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

.end h1 {
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

.branding {
  margin-top: auto;
  padding-top: 2rem;
}

.discs-logo {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #00b0f0 !important;
  margin-bottom: 0.5rem;
}

.institution {
  font-size: 1rem;
  color: #404040 !important;
}
</style>
