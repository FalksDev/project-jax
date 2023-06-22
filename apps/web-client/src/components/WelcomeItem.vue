<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 
      class="
      text-3xl 
      font-medium
      bg-primary
      hover:bg-primary-hover
      transition-all duration-200
      rounded-md m-2 p-2">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>