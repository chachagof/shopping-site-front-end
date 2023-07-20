<template>
  <nav class="navbar navbar-light bg-light p-3">
    <!-- logo -->
    <div class="logo-container">
      <RouterLink to="#" class="navbar-brand">Shopping</RouterLink>
    </div>
    <!-- searchbar -->
    <div class="searchbar-container col-6">
      <div class="searchbar">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div class="category d-flex mt-2">
        <div class="form-check me-1">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            category
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            name
          </label>
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="buttons-container">
      <button type="button" class="btn btn-outline-warning me-3">
        <font-awesome-icon icon="cart-shopping" />
      </button>
      <button type="button" class="btn btn-outline-danger">
        <font-awesome-icon icon="right-from-bracket" />
      </button>
    </div>
  </nav>
</template>
