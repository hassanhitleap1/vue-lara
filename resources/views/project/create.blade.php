{{-- @extends('layouts.app')

@section('content') --}}
<div class="container"  id="app">
  <div>
    <ul>
      <li v-for="project in projects" v-text="project.name"></li>
    </ul>

    <form action="/projects" method="post"  v-on:submit.prevent="onSubmit" >
            <div class="form-group">
              <label for="Name">Name</label>
              <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" v-model="name">
              <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="description">description</label>
              <input type="text" class="form-control" placeholder="description" v-model="description">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="{{asset('js/app.js')}}"></script>
{{-- 
@endsection --}}