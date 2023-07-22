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
  <div class="modal-container">
    <div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <img src="https://fakeimg.pl/200x200/">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer text-muted">
        <div class="button-container d-flex justify-content-between">
          <router-link to="/back" class="btn btn-outline-danger">Back   <font-awesome-icon icon="backward" /></router-link>
          <router-link to="/cart" class="btn btn-outline-warning">Add  To Cart <font-awesome-icon icon="cart-plus" /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* 根據需求自行設定Modal的樣式 */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>