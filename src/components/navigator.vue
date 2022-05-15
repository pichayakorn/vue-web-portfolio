<template>
  <div id="navigator">
    <nav>
      <p class="nav-head">🐱Pratch Suntichaikul</p>
      <router-link class="link" :to="{ path: '/' }">Profile</router-link>
      <router-link class="link" :to="{ path: '/repository' }"
        >Repository</router-link
      >
      <router-link class="link" :to="{ path: '/contact' }">Contact</router-link>
    </nav>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-brightness-high"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
* {
  margin: 0;
}
#navigator {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: #202023c9;
  backdrop-filter: blur(8px);
}
.link {
  color: #ffffffeb;
  text-decoration: none;
  margin-left: 8px;
  margin-right: 8px;
}
.link:hover {
  text-underline-offset: 3px;
  text-decoration: underline;
}
.nav-head {
  font-weight: bold;
  display: inline-block;
  width: 180px;
}
nav {
  padding: 0px;
  margin-top: 8px;
}
button {
  color: #202023;
  background-color: #fbd38d;
  width: 40px;
  height: 40px;
  border-radius: 20%;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #ffbe4d;
}
</style>