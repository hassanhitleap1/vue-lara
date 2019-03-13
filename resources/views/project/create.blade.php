@extends('layouts.app')

@section('content')
<div class="container"  id="app">
    <div>
        <ul>
          <li v-for="project in projects" v-text="project.name"></li>
        </ul>
          <form action="/projects" method="post"  v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                  <div class="form-group">
                    <label for="Name">Name</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" v-model="form.name"  >
                    <div class="alert alert-danger" role="alert" v-text="form.errors.get('name')" v-if="form.errors.has('name')">
                      </div>
                  </div>
                  <div class="form-group">
                    <label for="description">description</label>
                    <input type="text" class="form-control" placeholder="description" v-model="form.description">
                    <div class="alert alert-danger" role="alert" v-text="form.errors.get('description')" v-if="form.errors.has('description')">
                      </div>
                  </div>
                  <button type="submit" class="btn btn-primary" :disabled="form.errors.any()">Submit</button>
          </form>
  </div>
</div>
@endsection