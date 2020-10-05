<script>
import { Line } from 'vue-chartjs';

export default {
name: 'MewChart',
extends: Line,
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    color: {
      type: String,
      default: '#05c0a5'
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.data.x,
        datasets: [
          {
            align: 'center',
            borderColor: this.color,
            fill: false,
            data: this.data.y
          }
        ]
      },
      {
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
          xAxes: [{
              gridLines: {
                  display:false
              },
              ticks: {
                display: false
              }
          }],
          yAxes: [{
              gridLines: {
                  display:false
              },
              ticks: {
                display: false
              }   
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    );
  }
};
</script>
<style scoped lang="scss">
canvas {
  max-height: 30px !important;
  max-width: 30px !important;
}
</style>