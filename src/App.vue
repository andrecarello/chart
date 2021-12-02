<template>
  <div>
    <h1>Estatisticas</h1>
    <div :class="[$style.grid, $style['grid-cols-4']]">
      <s-chart :request="chart.url.statistics1">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path></svg>
        </template>
      </s-chart>
      <s-chart :request="chart.url.statistics2" />
      <s-chart :request="chart.url.statistics3">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        </template>
      </s-chart>
      <s-chart :request="chart.url.statistics4">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
        </template>
      </s-chart>
    </div>

    <h1>Gráficos</h1>
    <div :class="[$style.grid, $style['grid-cols-2']]">
      <s-chart :request="chart.url.graphics1" />
      <s-chart :request="{
        url: chart.url.graphics2,
        headers: [
            { property: 'Authorization', value: 'Bearer 212313123'},
            { property: 'SERVICE', value: 'FLOW' }
        ]}"
        height="350"
      />
    </div>

    <div :class="[$style.grid, $style['grid-cols-2']]">
      <s-chart :request="chart.url.graphics3" type="donut">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
        </template>
      </s-chart>
      <s-chart :request="chart.url.graphics4" />
    </div>

    <s-chart :request="chart.url.graphics5" />

    <div :class="[$style.grid, $style['grid-cols-2']]">
      <s-chart :request="chart.url.graphics6" type="bar" />
      <s-chart :request="chart.url.graphics7" type="bar" />
    </div>
  </div>
</template>
<script>
import SChart from "./components/s-chart";

export default {
  name: "App",

  data: () => ({
    chart: {
      url: {
        graphics1: "http://localhost:8080/json/chart.graphics.1.json",
        graphics2: "http://localhost:8080/json/chart.graphics.2.json",
        graphics3: "http://localhost:8080/json/chart.graphics.3.json",
        graphics4: "http://localhost:8080/json/chart.graphics.4.json",
        graphics5: "http://localhost:8080/json/chart.graphics.5.json",
        graphics6: "http://localhost:8080/json/chart.graphics.6.json",
        graphics7: "http://localhost:8080/json/chart.graphics.7.json",

        statistics1: "http://localhost:8080/json/chart.statistics.1.json",
        statistics2: "http://localhost:8080/json/chart.statistics.2.json",
        statistics3: "http://localhost:8080/json/chart.statistics.3.json",
        statistics4: "http://localhost:8080/json/chart.statistics.4.json",
      }
    }
  }),

  components: {
    SChart
  }
}

</script>
<style module>
.grid {
  display: grid;
  gap: 10px;
}
.grid-cols-2{
  grid-template-columns: repeat(2,minmax(0,1fr));
}
.grid-cols-4{
  grid-template-columns: repeat(4,minmax(0,1fr));
}
</style>