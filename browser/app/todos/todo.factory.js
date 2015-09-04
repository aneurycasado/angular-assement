// define a `Todo` factory that uses AJAX calls to
// read and write from the backend Todo models. The methods
// should all return promises for the *data* of the server responses.
app.factory("Todo",function($http){
  function getOne(id){
    var route = '/api/todos/'+id;
    return $http.get(route).then(function(response){
      return response.data;
    });
  }
  function getAll(){
      return $http.get("/api/todos").then(function(response){
        return response.data;
      });
  }
  function destroy(id){
      return $http.delete("/api/todos/"+id).then(function(response){
        return response.data;
      });
  }
  function add(id){
    return $http.post("/api/todos").then(function(response){
      return response.data;
    });
  }
  function update(id,obj){
    return $http.put("/api/todos/"+id,obj).then(function(response){
      return response.data;
    });
  }
  return {
    getOne: getOne,
    getAll: getAll,
    destroy: destroy,
    add: add,
    update: update
  };
});
