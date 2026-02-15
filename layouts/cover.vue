<template>
  <div class="slidev-layout cover">
    <div class="cover-content">
      <h1 v-if="$slidev.configs.title">{{ $slidev.configs.title }}</h1>
      <p v-if="$slidev.configs.info" class="subtitle">{{ $slidev.configs.info }}</p>
      <div class="author-info">
        <p v-if="$slidev.configs.author" class="author">{{ $slidev.configs.author }}</p>
        <p v-if="$slidev.configs.date" class="date">{{ $slidev.configs.date }}</p>
      </div>
    </div>
    <div class="branding">
      <div class="discs-logo">DISCS</div>
      <p class="institution">Ateneo de Manila University</p>
    </div>
  </div>
</template>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: #ffffff;
  position: relative;
  color: #404040;
}

.cover-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.cover h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  background: #00b0f0;
  color: #ffffff !important;
  padding: 1rem 0;
  margin-left: -2rem;
  margin-right: -2rem;
  box-sizing: border-box;
  text-align: center;
}

.subtitle {
  font-size: 1.5rem;
  color: #404040 !important;
  margin-bottom: 2rem;
}

.author-info {
  margin-top: 2rem;
}

.author-info .author {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #404040 !important;
}

.author-info .date {
  color: #666 !important;
  font-size: 1rem;
  margin: 0.5rem 0;
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
  margin: 0;
}
</style>
