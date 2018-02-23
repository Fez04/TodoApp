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


}


var editItem= function() {
    console.log('Edit task...');

    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");


    var containsClass = listItem.classList.contains('editMode');



if (containsClass){

  label.textContent = editInput.value;

  label.style.display = 'inline';
  editInput.style.display = 'none';
} else {

  editInput.value = label.textContent;

  editInput.style.display = 'inline-block';
  label.style.display = 'none';
}

listItem.classList.toggle('editMode');

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

    editInput.style.display = 'none';

    checkbox.addEventListener('click', onCheck);

    label.textContent = taskString;

    deleteButton.innerText = ('Delete');
    editButton.innerText = ('Edit');
    deleteButton.addEventListener('click', removeItem);
    editButton.addEventListener("click", editItem);

    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    listItem.appendChild(label);

    listItem.appendChild(editInput);

    return listItem;
  };

  var addTask = function(task) {
      lists.todo.appendChild(task);
      
      this.checked = false;

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
