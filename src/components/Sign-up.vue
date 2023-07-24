<script setup>
import { ref } from 'vue'

defineProps(['role'])
const emit = defineEmits(['form-submitted'])

const name = ref('')
const account = ref('')
const password = ref('')
const passwordCheck = ref('')

const handleSubmit = () => {
  const userData = {
    name: name.value,
    account: account.value,
    password: password.value,
    passwordCheck: passwordCheck.value
  }
  emit('form-submitted', userData)
}
</script>

<template>
  <div class="signup col-5 ">
    <div class="mb-4 text-center">
      <h1 v-if="role[0].role === 'buyer'" class="h3 font-weight-normal mb-3">Buyer Sign Up</h1>
      <h1 v-if="role[0].role === 'seller'" class="h3 font-weight-normal mb-3">Seller Sign Up</h1>
    </div>
    <form @submit.prevent="handleSubmit" class="form-signup">
      <div class="form-row mb-3">
        <label class="form-label" for="name">Name</label>
        <input v-model="name" type="text" id="name" name="name" class="form-control" placeholder="Name" required autofocus>
      </div>
      <div class="form-row mb-3">
        <label class="form-label" for="account">Account</label>
        <input v-model="account" type="text" id="account" name="account" class="form-control" placeholder="Account" required>
      </div>
      <div class="form-row mb-3">
        <label class="form-label" for="password">Password</label>
        <input v-model="password" type="password" id="password" name="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="form-row mb-3">
        <label class="form-label" for="passwordCheck">Password Check</label>
        <input v-model="passwordCheck" type="password" id="passwordCheck" name="passwordCheck" class="form-control" placeholder="Password Check"
          required>
      </div>
      <button class="btn btn-primary btn-block" type="submit">Submit</button>
    </form>
    <div class="mb-4 text-center">
      <p v-if="role[0].role === 'buyer'">
        <router-link to="/buyer/signin">
          Sign In
        </router-link>
      </p>
      <p v-if="role[0].role === 'seller'">
        <router-link to="/seller/signin">
          Sign In
        </router-link>
      </p>
    </div>
  </div>
</template>
