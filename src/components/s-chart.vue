<template>
  <div :class="$style.card" :style="[{ minHeight: setHeight() }, setTheme()]">
    <s-page-loading v-if="loading" />
    <s-error v-else-if="!loading && error" />
    <slot v-else>
      <div :class="$style['card-header']">
        <div :class="$style['card-header-text']" v-if="data.title || data.subtitle">
          <div :class="$style['card-header-title']" v-if="data.title">{{ data.title }}</div>
          <div :class="$style['card-header-subtitle']" v-if="data.subtitle">{{ data.subtitle }}</div>
        </div>

        <img v-if="data.icon" :src="data.icon" :alt="data.title" />
        <slot v-else-if="$scopedSlots.icon" name="icon" />
      </div>
      <div v-if="data.type === 'statistics'" :class="$style['card-body']">
        {{ data.content }}
      </div>
      <apexchart
          v-else
          :type="getType()"
          :height="height"
          :options="data.options"
          :series="data.series"
      />
    </slot>
  </div>
</template>
<script>
//repository
import ChartRepository from "../repository/chart.repository";

// components
import VueApexCharts from "vue-apexcharts";
import SPageLoading from "./s-loading";
import SError from "./s-error";

export default {
  name: "SChart",
  components: {
    SError,
    SPageLoading,
    ApexCharts: VueApexCharts
  },

  props: {
    request: {
      type: String | Object,
      required: true,
      default: () => console.error("The REQUEST props is required and needs to be a String or Object")
    },
    template: {
      type: String,
      required: false,
      default: 'chart'
    },
    height: {
      type: String,
      required: false,
      default: "250"
    },
    type: {
      type: String,
      required: false,
      default: ""
    }
  },

  methods: {
    async init () {
      return await new ChartRepository().get(this.request);
    },

    getType () {
      return this.type ? this.type : ( this.data.type ? this.data.type : "" );
    },

    setHeight () {
      let height = this.data.type === 'statistics' || this.type === 'statistics' ? 150 : this.height;
      return height + "px";
    },

    setTheme() {
      const hasStyle = !!this.data.style;
      const color = hasStyle ? this.data.style.text : "#1e1e1e";
      const backgroundColor = hasStyle ? this.data.style.background : "#ffffff";

      return { color, backgroundColor }
    }
  },

  data: () => ({
    data: {},
    loading: true,
    error: false,
  }),

  async mounted() {
    setTimeout(async () => {
      const response = await this.init();

      if (response.status()) this.data = response.data();
      else this.error = true;
      this.loading = false;
    }, Math.floor(Math.random() * 2000) )

  }
}
</script>
<style module>
.card {
  width: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .16);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
}
.card * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Tahoma, sans-serif;
}
.card-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.card-header-title {
  font-size: 16px;
  font-weight: bold;
}
.card-header-text {
  margin-right: auto;
}

.card-body {
  font-size: 25px;
  font-weight: bold;
}
</style>