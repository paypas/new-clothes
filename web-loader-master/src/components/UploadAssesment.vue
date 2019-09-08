<template>

    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 500px; width:100%">
        <h3 style="text-align:center;">Upload Assesment</h3>
        <q-form class="q-gutter-md">
          <div>
          </div>
          <q-input
            filled
            v-model="lorem"
            label="lorem ipsum *"
            hint="lorem ipsum"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="ipsum"
            label="lorem ipsum *"
            hint="lorem ipsum"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
           
          <q-uploader
            url="http://localhost:/upload"
            label="Restricted to images"
            multiple
            accept=".jpg, image/*"
            style="max-width: 500px; width:97%"
          />

          <q-uploader
            url="http://localhost:4444/upload"
            label="Restricted to pdf"
            multiple
            accept=".pdf"
            style="max-width: 500px; width:97%"
          />
          <div>
            <q-btn label="Submit" type="submit" color="black" />
            <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>

</template>

<style>
.q-field__control {
  color: black !important;
}
.q-uploader__header {
    color: black !important;
}
</style>

<script>
export default {
  name: "UploadAssesment",

  data() {
    return {
      lorem: "",
      ipsum: ""
    };
  }
};
</script>