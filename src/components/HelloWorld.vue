<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="handleTap">count is: {{ count }}</button>
    <p>Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleTap() {
      this.count++
      this.$emit('update:msg', this.msg + this.count)
    }
  }
}
</script>
