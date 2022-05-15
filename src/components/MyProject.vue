<template>
  <div class="myproject">
    <!-- Project -->
    <section class="section-project">
      <h3>Project</h3>
      <div class="repo-banner">
        <img src="../assets/repository/covid-19-db.png" />
        <a
          target="_blank"
          href="https://github.com/pichayakorn/db-coid19-vaccination"
          ><p class="repo-name">COVID-19 DB</p></a
        >
        <p>Database Design of COVID-19 Vaccination in Bangkok</p>
      </div>
      <div class="repo-banner">
        <img src="../assets/repository/count-24.png" />
        <a target="_blank" href="https://github.com/pichayakorn/S1-G08-2021"
          ><p class="repo-name">Game on MCU</p></a
        >
        <p>Count 24 game on microcontroller STM32L152RB using KEIL uVision 5</p>
      </div>
      <div class="repo-banner">
        <img src="../assets/repository/rpi.png" />
        <a target="_blank" href="https://github.com/pichayakorn/test_script"
          ><p class="repo-name">RPI Thermal Check</p></a
        >
        <p>Testing script with Raspberry Pi thermal</p>
      </div>
      <div class="repo-banner">
        <img src="../assets/repository/rpi0.png" />
        <a target="_blank" href="#"
          ><p class="repo-name">Air Quality Monitor</p></a
        >
        <p>
          Build an air quality monitor using Raspberry Pi Zero W + ANAVI
          Infrared pHAT
        </p>
      </div>
      <div class="repo-banner">
        <img src="../assets/repository/pihole.png" />
        <a target="_blank" href="#"><p class="repo-name">Pi-hole</p></a>
        <p>DNS sinkhole and optionally a DHCP server</p>
      </div>
      <div class="repo-banner">
        <img src="../assets/repository/quiz-app.png" />
        <a target="_blank" href="https://github.com/pichayakorn/ad08-quiz-app"
          ><p class="repo-name">Mobile Quiz Application</p></a
        >
        <p>
          Making mobile application quiz game with android studio and google
          firebase
        </p>
      </div>
      <div class="repo-banner">
        <img src="../assets/repository/wd02.png" />
        <a target="_blank" href="https://github.com/pichayakorn/wd02"
          ><p class="repo-name">Webpage Design</p></a
        >
        <p>Web design and development using html, css, and javascript</p>
      </div>
    </section>
    <!-- Learning -->
    <section class="section-learning">
      <h3>Learning</h3>
      <div class="repo-banner">
        <img src="../assets/repository/android-studio.png" />
        <a
          target="_blank"
          href="https://github.com/pichayakorn/mobile-application-development-workspace"
          ><p class="repo-name">Android Studio</p></a
        >
        <p>Google Android Developer Fundamentals V2</p>
      </div>
      <div class="repo-banner">
        <img src="../assets/repository/mcu.png" />
        <a
          target="_blank"
          href="https://github.com/pichayakorn/embedded-system-lab-workspace"
          ><p class="repo-name">MCU - STM32L152RB</p></a
        >
        <p>Learing Microcontroller</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "myproject",
};
</script>

<style scoped>
h3 {
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #525252;
  text-decoration-thickness: 4px;
  margin-bottom: 16px;
  margin-top: 16px;
  margin: 8px;
}
section {
  margin-bottom: 40px;
}
.repo-banner {
  display: inline-block;
  margin: 8px;
  width: 200px;
  vertical-align: top;
}
.repo-banner img {
  height: 112.5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
p {
  margin: 0;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.repo-name {
  font-size: 17px;
  margin-bottom: 3px;
}
a {
  color: #ff63c3;
  text-decoration: none;
}
a:hover {
  --color: #ff63c3;
  color: #81e6d9;
  transition: color 0.2s;
}
img {
  width: 200px;
}
</style>