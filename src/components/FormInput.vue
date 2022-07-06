<template>
  <form @submit.prevent="AddData(input)">
    <div class="text-left my-6">
      <label
        for="nama"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Nama</label
      >
      <input
        type="text"
        id="nama"
        v-model="input.nama"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Memo"
        required
      />
    </div>

    <div class="text-left my-6">
      <label
        for="harga"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Harga</label
      >
      <input
        type="number"
        v-model="input.harga"
        id="harga"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      />
    </div>

    <div class="flex mt-6 justify-end">
      <button
        data-modal-toggle="popup-modal"
        type="button"
        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-sm border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 mr-3"
      >
        Batal
      </button>
      <button
        data-modal-toggle="popup-modal"
        type="submit"
        class="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-sm text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
      >
        Kirim
      </button>
    </div>
  </form>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
export default {
  name: "FormInput",
  data() {
    moment().locale("id");
    let date = moment().format("D MMMM");
    let group = moment().format("MMMM YYYY");
    return {
      input: {
        date: date,
        group: group,
        nama: "",
        harga: "",
        now: "",
      },
    };
  },
  methods: {
    ...mapActions({
      AddData: "AddData",
    }),
  },
};
</script>

<style></style>
