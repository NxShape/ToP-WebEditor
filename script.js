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

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3Pv2TwRzUVxxtUYIZgKAx_9BHblRftrY",
    authDomain: "white-terra-357508.firebaseapp.com",
    databaseURL: "https://white-terra-357508-default-rtdb.firebaseio.com",
    projectId: "white-terra-357508",
    storageBucket: "white-terra-357508.appspot.com",
    messagingSenderId: "940325706530",
    appId: "1:940325706530:web:ce195db80443a0bb9be37b",
    measurementId: "G-2P7LPTG74L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const db = getDatabase();

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
