<template>
  <div class="commodity-container col-10 d-flex flex-wrap justify-content-center">
    <!-- each commodity -->
    <div class="card col-2 m-3">
      <img src="https://fakeimg.pl/200x200/" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">commodity name</h5>
        <div class="button-container d-flex justify-content-between">
          <router-link to="/info" class="btn btn-outline-success"><font-awesome-icon icon="circle-info" /></router-link>
        <router-link to="/cart" class="btn btn-outline-warning"><font-awesome-icon icon="cart-plus" /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
