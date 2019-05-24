<template>
  <div class="w-2/3 mx-auto">
  <div class="bg-white shadow-md rounded my-6">
    <table class="text-left w-full border-collapse">
      <thead>
        <tr>
          <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Product</th>
          <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Link</th>
          <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Tags</th>
        </tr>
      </thead>
      <tbody>
        <product-row v-for='product in products' :key='product.id' :product='product'></product-row>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import ProductRow from './ProductRow'

export default {
  name: 'List',
  components: {
    ProductRow
  },
  data () {
    return {
      products: [
        {
          'Name': '4qSurvey',
          'URL': 'http://www.iperceptions.com/en/',
          'Category': 'Survey, polling and feedback'
        },
        {
          'Name': 'A/B Test Master',
          'URL': 'http://www.abtestmaster.com',
          'Category': 'Multivariate testing, split, A/B testing'
        },
        {
          'Name': 'Access (Cint)',
          'URL': 'https://www.cint.com/solutions/access',
          'Category': 'Panel, Survey, polling and feedback'
        },
        {
          'Name': 'Adobe Brackets',
          'URL': 'http://brackets.io',
          'Category': 'Text editor'
        },
        {
          'Name': 'AirServer',
          'URL': 'http://www.airserver.com',
          'Category': 'Mobile research, Lab tech'
        }
      ]
    }
  }
}
</script>
