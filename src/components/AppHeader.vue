<template>
  <div class="container my-6 mx-auto text-center">
    <h1 class="font-bold text-4xl">Diari Jajan {{ date }}</h1>
    <p>Pengeluaran bulan ini {{ convertNumber(total) }}</p>
    <!-- Modal toggle -->
    <button
      class="block mx-auto my-6 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      type="button"
      data-modal-toggle="popup-modal"
    >
      Tambah Item
    </button>

    <div
      id="popup-modal"
      tabindex="-1"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
      aria-hidden="true"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-sm shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-sm text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="p-6">
            <h3 class="mb-5 text-lg text-left font-bold">Tambah Entry</h3>
            <hr />
            <FormInput />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import { mapActions, mapGetters } from "vuex";
import FormInput from "./FormInput.vue";
export default {
  name: "AppHeader",
  components: { FormInput },
  data() {
    moment().locale("id");
    let date = moment().format("MMMM YYYY");
    return {
      date: date,
    };
  },
  computed: {
    ...mapGetters({
      total: "total",
    }),
  },
  methods: {
    ...mapActions({
      SetTotal: "SetTotal",
    }),
    convertNumber(number) {
      return numeral(number).format("0,0");
    },
  },
  mounted() {
    this.SetTotal(this.date);
  },
};
</script>

<style></style>
