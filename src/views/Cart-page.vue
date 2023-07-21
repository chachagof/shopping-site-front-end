<template>
  <div class="card cart-container col-10">
    <div class="card-header">Shop name</div>
    <div class="card-body ">
      <div class="cart-commodity d-flex border-bottom border-secondary p-3">
      <div class="commodity-avatar commodity col-2">
        <img src="https://fakeimg.pl/150x120/">
      </div>
      <div class="commodity-description commodity col-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at mi et metus dictum malesuada ac sit amet mauris. Suspendisse pharetra tincidunt odio, sit amet commodo velit viverra id. Nulla tristique rhoncus orci, vel vehicula arcu venenatis id. Fusce ut.
      </div>
      <div class="commodity-price commodity col-2">
        $100
      </div>
      <div class="commodity-amount commodity col-3">
        <div class="input-group mb-3">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">
            <font-awesome-icon icon="circle-minus" />
          </button>
          <input type="number" class="form-control " placeholder="" min="0" step="1">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">
            <font-awesome-icon icon="circle-plus" />
          </button>
        </div>
      </div>
      <div class="commodity-total-price commodity col-2">
        $200
      </div>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <div class="total-price d-flex align-items-center">
        <div class="total-price-title">Total Price</div>
        <div class="total-price-price bg-white border border-dark rounded m-2 p-1"> $100</div>
      </div>
      <div class="total-amount d-flex align-items-center">
        <div class="total-amount-title">Total Amount</div>
        <div class="total-amount-amount bg-white border border-dark rounded m-2 p-1"> 1 </div>
      </div>
      <button type="button" class="btn btn-success">
        Buy Now
        <font-awesome-icon icon="cash-register" />
      </button>
    </div>
  </div>
</template>

<style scoped>
  /* non-display arrow in number input */
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .commodity{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
