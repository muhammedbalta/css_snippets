const fill = document.querySelector('#fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart(e)
{
    console.log("dragstart");
    console.log(e.target);
    if(e.target.id)
    {
        e.dataTransfer.setData('text/plain', e.target.id);
        this.className += ' hold';
        setTimeout(() => this.className = 'invisible', 5);
    }
}

function dragEnd()
{
    console.log("dragend");     
    this.className = 'fill';
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
    console.log("Drag enter");
    this.className += " hovered";
}

function dragLeave(e)
{
    console.log("Drag leave");
    e.preventDefault();
    this.className = "empty"
}

function dragDrop(e)
{
    this.className = "empty";
    const id = e.dataTransfer.getData("text/plain");
    if(id && id === "fill")
    {
        this.append(document.getElementById(id));
    }
}