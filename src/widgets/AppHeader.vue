<template>
   <header class="header">
      <div class="container">
         <div class="header__wrapper">
            <div class="header__logo">
               <span class="body-text">[Modular UI Kit]</span>
            </div>
            <nav class="header__nav">
               <ul>
                  <li>
                     <router-link to="/ui/buttons" class="body-text"> buttons</router-link>
                  </li>
                  <li>
                     <router-link to="/ui/form/inputs" class="body-text">input</router-link>
                  </li>
                  <li>
                     <router-link to="/ui/form/selects" class="body-text">select</router-link>
                  </li>
                  <li>
                     <router-link to="/ui/form/textareas" class="body-text">textarea</router-link>
                  </li>
                  <li>
                     <router-link to="/ui/form/checkboxes" class="body-text">checkbox</router-link>
                  </li>
               </ul>
            </nav>

         </div>
      </div>
   </header>
</template>

<script setup lang="ts">

</script>
