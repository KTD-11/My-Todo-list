
let input = document.querySelector('input');
let section = document.querySelector('section');

input.addEventListener('keyup', function(event){
    if (event.key === 'Enter'){
        
        let nodeText = document.createElement('label');
        let newTask = document.createElement('input');
        let taskContainer = document.createElement('div');
        let del = document.createElement('button')
        
        newTask.setAttribute('type', 'checkbox');
        nodeText.textContent = input.value;
        del.innerText = 'Delete'

        del.addEventListener('click', function(){
            section.removeChild(taskContainer);
        })

        taskContainer.appendChild(newTask);
        taskContainer.appendChild(nodeText);
        taskContainer.appendChild(del);

        section.appendChild(taskContainer);

        newTask.addEventListener('change', function() {
            if (newTask.checked) {
                nodeText.style.textDecoration = 'line-through';
            } else {
                nodeText.style.textDecoration = 'none';
            }
        
        })

        input.value = ''
    }
})

