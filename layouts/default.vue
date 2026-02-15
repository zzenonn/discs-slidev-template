<template>
  <div class="slidev-layout default">
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <div class="footer-left">DISCS</div>
      <div class="footer-right">
        <img src="/discs-logo.png" alt="DISCS Logo" class="footer-logo" />
        <span class="footer-text">INFORMATION SYSTEMS &<br>COMPUTER SCIENCE</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.default {
  padding: 2rem 3rem 5rem 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff !important;
  position: relative;
  color: #404040;
  width: 100%;
}

.content {
  flex: 1;
  color: #404040;
  overflow: hidden;
}

.content :deep(*) {
  color: #404040;
}

.content :deep(h1),
.content :deep(h2) {
  margin-left: 0 !important;
  margin-right: 0 !important;
  color: #404040 !important;
  background: transparent !important;
  padding: 0 !important;
  text-align: left !important;
}

.content :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.content :deep(h2) {
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.content :deep(h3) {
  color: #00b0f0;
}

.content :deep(ul),
.content :deep(ol) {
  list-style-position: outside;
  padding-left: 2rem;
  margin: 1rem 0;
}

.content :deep(ul) {
  list-style-type: disc;
}

.content :deep(ol) {
  list-style-type: decimal;
}

.content :deep(li) {
  display: list-item;
  color: #404040;
  margin: 0.5rem 0;
}

.content :deep(li::marker) {
  color: #404040;
}

.footer {
  position: absolute;
  bottom: 1rem;
  left: 3rem;
  right: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 2px solid var(--discs-blue);
  font-size: 0.9rem;
  color: #404040;
  background: #ffffff;
}

.footer-left {
  font-weight: 700;
  color: var(--discs-blue);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
}

.footer-logo {
  height: 3rem;
  width: auto;
}

.footer-text {
  font-size: 0.7rem;
  color: #666;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;
}
</style>
