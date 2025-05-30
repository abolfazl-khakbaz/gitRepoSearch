<template>
  <transition name="slide-up">
    <footer class="footer" v-show="isVisible">
      <div class="footer-content">
        <img :src="hackerImage" alt="Hacker-Image" class="hacker-img" />
        <div class="info">
          <p class="name mb-5">Abolfazl Khakbaz</p>
          <a
            href="https://github.com/abolfazl-khakbaz"
            class="github "
            target="_blank"
          >
            <button class="button is-large ">
              <span class="icon is-medium ">
                <i class="fab fa-github" style="color: whitesmoke;"></i>
              </span>
              <span>GitHub</span>
            </button>
          </a>
          <p class="typewriter mt-5">{{ typedText }}</p>
        </div>
      </div>
    </footer>
  </transition>
</template>
<script>
import hackerImage from "../assets/img/3849223.png";
export default {
  name: "Footerr",
  data() {
    return {
      isVisible: false,
      fullText: "Code. Commit. Conquer.",
      typedText: "",
      typingIndex: 0,
      hackerImage
    }
  },
  mounted() {
    this.boundScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.boundScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.boundScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 300 && !this.isVisible) {
        console.log("treigger is working");
        this.isVisible = true;
        this.typeText();
      }
    },
    typeText() {
      if (this.typingIndex < this.fullText.length) {
        this.typedText += this.fullText[this.typingIndex++];
        setTimeout(() => this.typeText(), 100);
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
.footer {
  width: 100%;
  
  background-color: #00ff99;
  padding: 2rem 3rem;
  color: black;
  font-family: "Share Tech Mono", monospace;
  box-shadow: 0 -5px 20px rgba(0, 255, 153, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 10;
  margin-top: 10rem;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hacker-img {
  width: 16.875rem;
  height: auto;
  margin-left: 6.875rem;
  padding-bottom: 1rem;
}

.info {
  /* flex: 1; */
  min-width: 15.625rem;
  margin-right: 6.25rem;
  margin-top: 1.125rem;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.github {
    color: rgb(255, 255, 255);
    /* text-decoration: underline; */
    display: block;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.typewriter {
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black;
  animation: blink 0.8s steps(1) infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.slide-up-enter-active {
  animation: slideUp 1.2s ease;
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
