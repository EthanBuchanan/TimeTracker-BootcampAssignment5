var timeBlockContainerEL = $("ul");

function createTimeBlock(time)
{
    var output = $(`
    <li id="${time}" class="row time-block past">
          <div class="hour">
            ${time}  
          </div >
          <textarea class="description"></textarea>
          <button class="saveBtn">💾</button>
        </li>
    `);
    return output; 
}
console.log(timeBlockContainerEL);
for (var i = 9; i < 13; i++){
    timeBlockContainerEL.append(createTimeBlock(i+":AM"));
}
for (var i = 1; i < 6; i++){
    timeBlockContainerEL.append(createTimeBlock(i+":PM"));
}