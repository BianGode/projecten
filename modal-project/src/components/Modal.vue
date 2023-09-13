<template>
  <div>
    <div class="backdrop" @click.self="closeModal">
      <div class="modal" :class="{ sale: theme === 'sale' }">
        <slot></slot>
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style>
.modal.sale {
  border: 5px solid navy;
}

.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.hidden {
  display: none;
}</style>