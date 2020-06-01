<template>
  <div class="mew-progress-bar full-width d-flex">
    <div
      :class="[
        idx === 0 ? 'left-border-radius' : '',
        idk === progressData.length - 1 && hasRightBorderRadius ? 'right-border-radius' : ''
      ]"
      v-for="(data, idx) in progressData"
      :key="data + idx"
      :style="{ height: '10px', width: data.percentage + '%', background: data.color}"
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
       progressData: [],
       hasRightBorderRadius: false
    }
  },
  props: {
    /**
     * Balance object contains send, fee and total amount, i.e. { send: '', fee: '', total: ''}
     */
    balanceObj: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  mounted() {
    let percentageOfSend, percentageOfFee;
    if (this.balanceObj.send < this.balanceObj.total) {
      percentageOfSend = ((this.balanceObj.send) / (this.balanceObj.total)) * 100;
      this.progressData.push({
        name: 'send',
        percentage: percentageOfSend,
        color: '#0b2840'
      })
    }

    if (this.balanceObj.fee < this.balanceObj.total) {
      percentageOfFee = ((this.balanceObj.fee) / (this.balanceObj.total)) * 100;
      this.progressData.push({
        name: 'fee',
        percentage: percentageOfFee,
        color: '#f5a623'
      })
    }

    if ((percentageOfSend + percentageOfFee) === 100) {
      this.hasRightBorderRadius = true;
    }
  }
  
}
</script>

<style lang="scss" scoped>
.mew-progress-bar {
  background-color: var(--v-primaryOutlineActive-base);
  border-radius: 8.5px;

  .left-border-radius {
    border-top-left-radius: 8.5px;
    border-bottom-left-radius: 8.5px;
  }

  .right-border-radius {
    border-top-right-radius: 6.5px;
    border-bottom-right-radius: 6.5px;
  }
}
</style>