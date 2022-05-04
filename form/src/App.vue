<template>
  <form @submit.prevent="onSubmit">
    <input
      id="task"
      type="text"
      class="task"
      placeholder="Task..."
      v-model="task"
    />
    <button type="submit" class="btn">
      <ion-icon name="add-outline"></ion-icon>
    </button>
  </form>
</template>

<style lang="scss">
#form-app {
  position: relative;
  width: 100%;
  height: 100%;
}

form {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;

  .task {
    margin-right: 5px;
    padding: 5px;

    background-color: #3f3f3f;
    color: white;

    border: none;
    border-bottom: 0.5px solid #fff;
    outline: none;
  }

  .btn {
    margin-left: 5px;

    width: 30px;
    height: 30px;

    border: none;
    border-radius: 25px;

    cursor: pointer;

    ion-icon {
      width: 100%;
      height: 100%;

      font-size: 10px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    onSubmit() {
      if (!this.task) return;
      window?.Garfish?.channel.emit("task", this.task);
    },
  },
};
</script>
