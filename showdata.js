var DLVL1 = JSON.parse(localStorage.getItem("DLVL1"));
var DLVL2 = JSON.parse(localStorage.getItem("DLVL2"));
var DLVL3 = JSON.parse(localStorage.getItem("DLVL3"));
var dlvl1 = (localStorage.getItem("dlvl1"));
var dlvl2 = (localStorage.getItem("dlvl2"));
var dlvl3 = (localStorage.getItem("dlvl3"));

generate();

function generate(){
    const chooseRandom = (arr, num) => {
        const res = [];
        for(let i = 0; i < num; ){
            const random = Math.floor(Math.random() * arr.length);
            if(res.indexOf(arr[random]) !== -1){
                continue;
            };
            res.push(arr[random]);
            i++;
        };
        return res;
    };
    
    // const finalSheet = [];
    const randomD1 = chooseRandom(DLVL1, Math.min(DLVL1.length, dlvl1));
    const randomD2 = chooseRandom(DLVL2, Math.min(DLVL2.length, dlvl2));
    const randomD3 = chooseRandom(DLVL3, Math.min(DLVL3.length, dlvl3));
    const finalSheet=randomD1.concat(randomD2, randomD3);
    
    displayTestData(finalSheet);
    
    
    // const productContainer = document.querySelector("show");
    
    // function displaying all test datas
    function displayTestData(tdata){
        let i = 0;
        let displayData = tdata.map(function (data_items) {
            i++;
            return `<div class=""products>
                            <div class="content">
                                <h3 class="No">No # ${i}</h3>
                                <p class="year">${data_items.Year}</p>
                                <p class="qtype">${data_items.Type}</p>
                                <p class="chpt">Chapter ${data_items.Chapter}</p>
                                <p class="question">${data_items.Question}</p>
    <pre>
        A ${data_items.Option_A}
        B ${data_items.Option_B}
        C ${data_items.Option_C}
        D ${data_items.Option_D}
    </pre>
                                <p class="dlvl">${data_items.Level}</p>
                            </div>
                        </div>`;
        });
        
        displayData = displayData.join("");
        document.getElementById("display").innerHTML=displayData;
    }
}
