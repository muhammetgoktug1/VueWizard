Vue.component('m-button', {
  template: '\
    <button class="normal"\
      :class="mclas"\
      @click="callback($event)"\
      >\
        <slot></slot>\
    </button>\
  ',
  props: {
    mclas: String,
  },
  methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
});