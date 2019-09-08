

<template>
  <div class="row" style="margin-top:50px;">
    <div class="col-md-1"> </div>
    <div class="col-md-10">
      <q-table :columns="columns">
        <q-tr slot="top-row" style="text-align:center">
          <q-td>1</q-td>
          <q-td>21-08-2019</q-td>
          <q-td>Muhamad Rizki</q-td>
          <q-td>File Berita Kantor</q-td>
          <q-td>
            <q-btn color="secondary">details</q-btn>
          </q-td>
        </q-tr>
      </q-table>
    </div>
    <div class="col-md-1"> </div>

  </div>
  
</template>

<style>
</style>
<script>
export default {
  name: "history",
  data () {
    return {
      columns: [
        { name: 'No', align: 'center', label: 'No', field: 'calories', sortable: true },
        { name: 'Date', align: 'center', label: 'Date', field: 'Date', sortable: true },
        { name: 'Uploader', align: 'center', label: 'Uploader', field: 'carbs' },
        { name: 'Name File', align: 'center', label: 'Name File', field: 'protein' },
        { name: 'Action', align: 'center', label: 'Action', field: 'sodium' },
       ],
      data: []
    }
  }
}
</script>