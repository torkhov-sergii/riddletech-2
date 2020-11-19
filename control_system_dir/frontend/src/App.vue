<template>
  <v-app>
    <Header></Header>
    <ReportTable></ReportTable>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReportTable from "@/components/ReportTable";

export default {
  name: 'App',
  components: {Header, Footer, ReportTable},
  data: () => ({}),
  methods: {},
};
</script>

<style lang="scss">

</style>