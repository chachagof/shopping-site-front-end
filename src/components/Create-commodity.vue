<template>
  <div class="modal-container ">
    <div class="card text-center col-4">
      <div class="card-header">
        Create commodity
      </div>
      <div class="card-body ">
        <form class="form-signup" action="/signup" method="POST">
          <div class="form-row mb-3">
            <label class="form-label" for="name">Name</label>
            <input type="text" id="name" name="name" class="form-control" placeholder="Name" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="price">Price</label>
            <input type="text" id="price" name="price" class="form-control" placeholder="Price" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="inventory">Inventory</label>
            <input type="text" id="inventory" name="inventory" class="form-control" placeholder="Inventory" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="avatar">Avatar</label>
            <input type="text" id="avatar" name="avatar" class="form-control" placeholder="Avatar" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="category">Category</label>
            <select class="form-select" id="category" name="category">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-row mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Description"></textarea>
          </div>
        </form>
      </div>
      <div class="card-footer text-muted">
        <div class="button-container d-flex justify-content-between">
          <router-link to="/back" class="btn btn-outline-danger">Back   <font-awesome-icon icon="backward" /></router-link>
          <button class="btn btn-outline-success">Save <font-awesome-icon icon="square-plus" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
