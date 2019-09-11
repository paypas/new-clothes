<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>

import transaction from '@/api/transaction/index';
import LineChart from './Transaction.vue'
import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)
export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    json: '',
    chartdata: null,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  async mounted () {
    this.loaded = false;
    this.json = '';
      transaction.getTransaction().then(function(result){
            localStorage.setItem('jsonTransaction', JSON.stringify(result));
        });
        this.json = (localStorage.getItem('jsonTransaction')); 
        // console.log("json");
        // console.log(this.json);
        var i = 1;
        var j = 1;
        var labelsa = [];
        var datas = [];

        JSON.parse(this.json, (key, value) => {
            datas[0] = 0;
            labelsa[0] = ''
            if(key === 'sentAt'){
                labelsa[j++]= value;
            }
            if(key === 'quantity'){
                datas[i++]= value; 
            }
            
        });
        
            // return value;
            this.chartdata = {
                labels: labelsa,
                datasets: [
                    {
                        label: 'Data Transaksi Harian',
                        backgroundColor: '#f87979',
                        data: datas
                    }
                ]
            };
        console.log(this.chartdata)

      
        // this.chartdata = config;
        this.loaded = true
  }
}
</script>