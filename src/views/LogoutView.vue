<script>
  import axios from "axios";

  export default {
    created: function () {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      this.$router.push("/heroes");
    },
  };
</script>

<template>
  <div class="logout"></div>
</template>