<template>
    <div>
        <div>
        <ul id="filters">
          <li>
            <a  data-filter="all"  @click="showAll">ALL</a>
          </li> 
          <li>
            <a data-filter="active"  @click="showChecked">Active</a>
          </li>
          <li>
            <a data-filter="complete" @click="showNotChecked">Complete</a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: "footer",
}
  
</script>
