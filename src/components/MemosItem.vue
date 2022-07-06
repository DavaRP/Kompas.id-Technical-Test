<template>
  <div class="p-4 h-full shadow-md rounded-lg bg-white">
    <b class="mb-3 block">{{ data.date }}</b>
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-left"
    >
      <tbody>
        <tr
          class="bg-white border-t border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600"
          v-for="(i, index) in items"
          :key="index"
        >
          <td class="py-4">{{ i.time }}</td>
          <th
            scope="row"
            class="py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ i.nama }}
          </th>
          <td class="py-4">{{ convertNumber(i.harga) }}</td>
        </tr>
      </tbody>
    </table>
    <b class="mt-3 block text-right">Total : {{ getTotal() }}</b>
  </div>
</template>

<script>
import numeral from "numeral";
export default {
  props: ["data"],
  computed: {
    items() {
      return this.data.data.filter((x) => x.date == this.data.date);
    },
  },
  mounted() {
    this.getTotal();
  },
  methods: {
    getTotal() {
      var sum = 0;
      if (this.items) {
        for (let i = 0; i < this.items.length; i++) {
          sum += parseInt(this.items[i].harga);
        }
      }
      return numeral(sum).format("0,0");
    },
    convertNumber(num) {
      return numeral(num).format("0,0");
    },
  },
};
</script>

<style></style>
