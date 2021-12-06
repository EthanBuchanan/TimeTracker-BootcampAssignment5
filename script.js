var timeBlockContainerEL = $("ul");



function createTimeBlock(time,hour)
{
    var got = String( localStorage.getItem(time));
    var now = moment().format("H");
    
    var output = $(`
    <li id="${time}" class="row time-block ${hour < now? "past":(hour > now?"future":"present")}">
          <div class="hour">
            ${time}  
          </div >
          <textarea class="description">${got === "null"?"":got }</textarea>
          <button class="saveBtn">💾</button>
        </li>
    `);

    output.children("button").on("click",function ()
    {
        //console.log(output.children("textarea").val());
        localStorage.setItem(time,output.children("textarea").val());
    })
    return output; 
}


for (var i = 9; i <= 12; i++){
    timeBlockContainerEL.append(createTimeBlock(i+":AM",i));
}
for (var i = 1; i <= 5; i++){
    timeBlockContainerEL.append(createTimeBlock(i+":PM",i+12));
}

var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);