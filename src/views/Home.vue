<template>
<v-row class="text-center mt-5">

  <v-col></v-col>
  <v-col>
    <v-btn color="error" @click="download">Descargar PDF</v-btn>
  </v-col>

  <v-col></v-col>

</v-row>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import docDefinition from "../Doc/myDoc";

export default {
  name: 'Home',
  data() {
    return {
      docDefinition: docDefinition,
    }
  },
  methods: {
    download() {
      pdfMake.createPdf(docDefinition).open();
      // pdfMake.createPdf(docDefinition).download();
    },
  }
}
</script>
