<template>
  <tr class="hover:bg-gray-100">
    <td class="py-4 px-6 border-b border-gray-200">{{product.Name}}</td>
    <td class="py-4 px-6 border-b border-gray-200"><a :href="product.URL">{{product.URL}}</a></td>
    <td class="py-4 px-6 border-b border-gray-200">
      <span class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-400 mr-1 hover:bg-green-600">Remote research</span>
      <span href="#" class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-blue-400 hover:bg-blue-600">Usability testing</span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductRow',
  props: ['product']
}
</script>
