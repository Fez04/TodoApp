var input = document.getElementById('input');
var btn = document.getElementById('btn');
var lists = {
  todo: document.getElementById('todo'),
  done: document.getElementById('done')
};
function removeItem() {

  var item = this.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);

  //lists.todo.appendChild(task)
}


var editItem= function() {
    console.log('Edit task...');

    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
var label = listItem.querySelector("label");


    var containsClass = listItem.classList.contains('editMode');


    //if the class pf parent is .editmode
if (containsClass){
  //label text become the input's value
  label.textContent = editInput.value;

} else {
    //switch to .editmode
    //input value becomes the label's text
  editInput.value = label.textContent;
}

listItem.classList.toggle('editMode'); //toggle .editmode on the parent

}




var makeTaskHtml = function(taskString, onCheck) {
    var listItem= document.createElement('li');
    var checkbox = document.createElement('input');
    var deleteButton = document.createElement('button');
    var editButton = document.createElement('button');
    var label = document.createElement('label');
    var editInput = document.createElement('input');


    checkbox.type = 'checkbox';
    editInput.type = "text";

    checkbox.addEventListener('click', onCheck);
    //label.textContent = str;
    label.textContent = taskString;

    deleteButton.innerText = ('Delete');
    editButton.innerText = ('Edit');
    deleteButton.addEventListener('click', removeItem);
    editButton.addEventListener("click", editItem);

    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    listItem.appendChild(label);

    return listItem;
  };

  var addTask = function(task) {
      lists.todo.appendChild(task);
      //lists.todo.insertBefore(task, list.childNodes[0]);
  };

  var onCheck = function(event){
      var task = event.target.parentElement;
      var list = task.parentElement.id;

      lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
      this.checked = true;
      input.value = '';
      input.focus()

  };

  var onInput = function() {
    var taskString = input.value;
          addTask(makeTaskHtml(taskString, onCheck))
          input.value = '';
          input.focus();



  };








  btn.addEventListener('click', onInput);
  input.addEventListener('keyup', function(event){
      var code = event.keyCode;

      if (code ===13) {
        onInput();
      }
  });
