function newItem(){

  //1. adding a new item to the list of items

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something');
  }
  else {
    let list = $('#list');
    list.append(li);
  }

  //2. crossing out an item from the list of items

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //3a. adding the delete button "X"

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  //3b. adding CLASS DELETE (DISPLAY: NONE) from the css:

  function deleteListItem() {
    li.addClass('delete');
  }
  //4. Re-ordering the List
  $('#list').sortable();
}
