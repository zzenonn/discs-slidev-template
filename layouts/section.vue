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
  background: var(--discs-blue);
  color: var(--discs-white);
}

.section h1 {
  font-size: 4rem;
  color: var(--discs-white);
  margin: 0;
}

.section h2 {
  font-size: 2.5rem;
  color: var(--discs-white);
  margin: 0;
}

.section p {
  font-size: 1.5rem;
  margin-top: 1rem;
  opacity: 0.9;
}
</style>
