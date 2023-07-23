<template>
  <nav class="navbar navbar-light bg-light p-3">
    <!-- logo -->
    <div class="logo-container">
      <RouterLink to="/" class="navbar-brand">Shopping site</RouterLink>
    </div>
    <!-- searchbar -->
    <div class="searchbar-container col-6">
      <div class="searchbar">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div class="search-category d-flex align-items-center justify-content-between mt-2">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="commodity" checked>
          <label class="form-check-label" for="commodity">
            commodity
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="shop" >
          <label class="form-check-label" for="shop">
            shop
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="category">
          <label class="form-check-label" for="category">
            category
          </label>
        </div>
        <div class="form-check d-flex align-items-center ">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="above-price">
          <label class="form-check-label me-2 ms-2" for="above-price">
            price
          </label>
          <div class="price-range d-flex align-items-center  col-6">
            <label class="form-check-label" for="minPrice"></label>
            <input class="form-control me-2" type="number" id="minPrice" name="minPrice" step="1" min="0">
            <label class="form-check-label  me-2" for="maxPrice">to</label>
            <input class="form-control" type="number" id="maxPrice" name="maxPrice" step="1" min="0">
          </div>
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="buttons-container">
      <button type="button" class="btn btn-outline-warning me-3">
        Cart<font-awesome-icon icon="cart-shopping" />
      </button>
      <button type="button" class="btn btn-outline-success">
        Login<font-awesome-icon icon="right-to-bracket" />
      </button>
      <button type="button" class="btn btn-outline-danger">
        Logout<font-awesome-icon icon="right-from-bracket" />
      </button>
    </div>
  </nav>
</template>
