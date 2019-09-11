<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>

import commodity from '@/api/commodity/index';
import LineChart from './Commodity.vue'
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
      var comm = commodity.getCommodity().then(function(result){
            localStorage.setItem('json', JSON.stringify(result));
        });
        this.json = (localStorage.getItem('json')); 
        // console.log("json");
        // console.log(this.json);
        var i = 1;
        var j = 1;
        var labelsa = [];
        var datas = [];

        JSON.parse(this.json, (key, value) => {
            datas[0] = 0;
            labelsa[0] = ''
            if(key === 'entry_day'){
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
                        label: 'Data Barang Masuk Mingguan',
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