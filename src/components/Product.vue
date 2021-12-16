<template>
  <v-col cols="12" sm="6" md="4" lg="4">
    <v-card class="mx-auto">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="product.image">
        <v-card-title class="card-title">{{ product.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{ product.year }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ product.category }}</div>
        <div>{{ product.use }}</div>
        <div>{{ product.info }}</div>
      </v-card-text>

      <v-card-actions
        v-for="(url, key) in product.urls"
        :key="key">
        <a :href="url" target="_blank">
          <v-btn color="orange" text>
            LINK
          </v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>

<style lang="scss">
.card-title {
  text-shadow : 3px 3px 3px #000000;
}
</style>
