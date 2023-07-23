<script setup>
import { ref } from 'vue'

defineProps(['role'])
const emit = defineEmits(['form-submitted'])

const account = ref('')
const password = ref('')

const handleSubmit = () => {
  const userData = {
    account: account.value,
    password: password.value
  }
  emit('form-submitted', userData)
}

</script>

<template>
  <div class="signin col-5">
    <div class="mb-4 text-center">
      <h1 v-if="role[0].role === 'buyer'" class="h3 font-weight-normal mb-3">Buyer Sign In</h1>
      <h1 v-if="role[0].role === 'seller'" class="h3 font-weight-normal mb-3">Seller Sign In</h1>
    </div>
    <form @submit.prevent="handleSubmit" class="form-signin">
      <div class="form-row mb-3">
        <label class="form-label" for="account">Account</label>
        <input v-model="account" class="form-control" id="account" type="text" name="account" placeholder="Account" required
          autofocus>
      </div>
      <div class="form-row mb-3">
        <label class="form-label" for="password">Password</label>
        <input v-model="password" class="form-control" id="password" type="password" name="password"
          placeholder="Password" required>
      </div>
      <button class="btn btn-primary btn-block" type="submit">Submit</button>
    </form>
    <div class="mb-4 text-center">
      <p v-if="role[0].role === 'buyer'">
        <router-link to="/buyer/signup">
          Sign Up
        </router-link>
      </p>
      <p v-if="role[0].role === 'seller'">
        <router-link to="/seller/signup">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>
