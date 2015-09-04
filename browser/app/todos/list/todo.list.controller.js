// define a `TodoListCtrl` controller that places injected
// `todos` (from a UI-Router state resolve) on the scope.
// It should have a scope method `setCategory` that changes
// `$scope.filterByCompleted` to certain values; a method
// `isActiveCategory` that confirms the current category;
// and a method `addTodo` that saves `$scope.toAdd` to the backend,
// then goes to that new todo's edit state.
app.controller("TodoListCtrl", function($scope,todos,Todo,$state){
  $scope.todos = todos;
  $scope.setCategory = function(category){
    if(category === "all"){
      $scope.filterByCompleted = "";
      $scope.activeCategory = "all";
    }else if(category === "completed"){
      $scope.filterByCompleted = true;
      $scope.activeCategory = "completed";
    }else if(category === "active"){
      $scope.filterByCompleted = false;
      $scope.activeCategory = "active";
    }
  };
  $scope.isActiveCategory = function(category){
    return category === $scope.activeCategory;
  };
  $scope.addTodo = function(){
    Todo.add($scope.toAdd);
    $state.go('todos.edit',{id: "123"});
  };
});
