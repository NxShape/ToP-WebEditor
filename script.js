var stdNo = 0;
var tbody = document.getElementById('tbody1');

function AddItemToTable(nation, unitName, health, moveSpeed){
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    td1.innerHTML = ++stdNo;
    td2.innerHTML = nation;
    td3.innerHTML = unitName;
    td4.innerHTML = health;
    td5.innerHTML = moveSpeed;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);
}

function AddAllItemsToTable(dataList){
    stdNo = 0;
    tbody.innerHTML = "";

    dataList.array.forEach(element => {
        AddAllItemsToTable(element.nation, element.unitName, element.health, element.moveSpeed);
    });
}

window.onload = GetAllDataAtOnce;

function GetAllDataAtOnce(){
    const dbRef = ref(db);

    get(child(dbRef, "Units"))
    .then((snapshot) => {
        var units = [];

        snapshot.forEach(unitData =>{
            units.push(unitData.val());
        })

        AddAllItemsToTable(units);

    })
}
