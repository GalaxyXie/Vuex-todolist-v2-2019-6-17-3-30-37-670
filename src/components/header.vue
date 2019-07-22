<template>
    <div>
        <div>
        <h2>Jquery To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p> 
      </div>
      <div>
        <input class="input-text" type="text" v-model="checkString" />
        <div id="button" @click="add">Add</div>
      </div>
    </div>
</template>
      