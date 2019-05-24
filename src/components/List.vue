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
        <tr class="hover:bg-gray-100">
          <td class="py-4 px-6 border-b border-gray-200">AttrakDiff</td>
          <td class="py-4 px-6 border-b border-gray-200">http://attrakdiff.de</td>
          <td class="py-4 px-6 border-b border-gray-200">
            <a href="#" class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-400 mr-1 hover:bg-green-600">Remote research</a>
            <a href="#" class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-blue-400 hover:bg-blue-600">Usability testing</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'List'
}
</script>
