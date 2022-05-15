<template>
  <div class="skill">
    <h3>Hard Skills</h3>
    <p>
      Microsoft Word, Microsoft PowerPoint, Basic SQL, Oracle PL/SQL, Basic
      Linux Command
    </p>
    <p>
      Programing Language C, C++, Java, Python, Javascript, HTML, CSS, Shell
      Script
    </p>
    <h3>Soft Skills</h3>
    <p>
      Leadership, Problem Solving, Hard Working, Responsibility, Time management
    </p>
    <h3>Hobbies</h3>
    <p>
      Reading books, Tabletenis, Listening a Music, Playing Guitar, Playing
      Saxophone, Photography
    </p>
    <h3>Interested in...</h3>
    <p>
      Internet Technology, Linux, VMware, Microprocessor, Raspberry Pi,
      Operating System, Computer Networking, Computer Security, Machine Learning
    </p>
    <router-link class="link" :to="{ path: '/repository' }">
      <button type="button" class="repo-btn">
        My Repository

        <span class="icon"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
            ></path></svg
        ></span>
      </button>
    </router-link>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  text-align: left;
}
h3 {
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #525252;
  text-decoration-thickness: 4px;
  margin-bottom: 16px;
  margin-top: 16px;
}
p {
  margin: 0;
  line-height: 24px;
  text-indent: 1em;
}
.repo-btn {
  color: #202023;
  background-color: #81e6d9;
  height: 40px;
  padding: 0 16px;
  font-weight: bold;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 0;
  display: block;
  text-decoration: none;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
}
.repo-btn:hover {
  background-color: #4ed1c4;
  transition: background-color 0.2s;
}
a {
  text-decoration: none;
}
</style>