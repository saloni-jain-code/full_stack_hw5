fetch("https://randomuser.me/api/?results=5").then((data)=>{
    // console.log(data); // data is in json format
    return data.json(); // converted to object
}).then((objectData)=>{
    console.log(objectData);
    let tableData = "";
    objectData.results.map((values)=>{
        tableData += `<tr>
            <td>${values.name.first}</td>
            <td>${values.location.city}</td>
        </tr>`
    });
    document.getElementById("table_body").innerHTML = tableData;
}).catch((error)=>{
    console.log(error);
});