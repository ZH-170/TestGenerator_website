window.addEventListener("DOMContentLoaded", (event) => {

    // Select ALL button
    document.getElementById('ALLJ1')
                .addEventListener('change', function () {
        let checkboxes = 
            document.querySelectorAll('.dropboxJ1');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = this.checked;
        }, this);
    });
    document.getElementById('ALLJ2')
                .addEventListener('change', function () {
        let checkboxes = 
            document.querySelectorAll('.dropboxJ2');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = this.checked;
        }, this);
    });
    document.getElementById('ALLJ3')
                .addEventListener('change', function () {
        let checkboxes = 
            document.querySelectorAll('.dropboxJ3');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = this.checked;
        }, this);
    });
    document.getElementById('ALLS1')
                .addEventListener('change', function () {
        let checkboxes = 
            document.querySelectorAll('.dropboxS1');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = this.checked;
        }, this);
    });
    document.getElementById('ALLS2')
                .addEventListener('change', function () {
        let checkboxes = 
            document.querySelectorAll('.dropboxS2');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = this.checked;
        }, this);
    });
    document.getElementById('ALLS3')
                .addEventListener('change', function () {
        let checkboxes = 
            document.querySelectorAll('.dropboxS3');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = this.checked;
        }, this);
    });

    

    const J1_C1 = document.getElementById("J1_C1");
    const J1_C2 = document.getElementById("J1_C2");
    const J1_C3 = document.getElementById("J1_C3");
    const J1_C4 = document.getElementById("J1_C4");
    const J1_C5 = document.getElementById("J1_C5");

    const J2_C1 = document.getElementById("J2_C1");
    const J2_C2 = document.getElementById("J2_C2");
    const J2_C3 = document.getElementById("J2_C3");
    const J2_C4 = document.getElementById("J2_C4");
    const J2_C5 = document.getElementById("J2_C5");

    const J3_C1 = document.getElementById("J3_C1");
    const J3_C2 = document.getElementById("J3_C2");
    const J3_C3 = document.getElementById("J3_C3");
    const J3_C4 = document.getElementById("J3_C4");
    const J3_C5 = document.getElementById("J3_C5");

    const S1_C1 = document.getElementById("S1_C1");
    const S1_C2 = document.getElementById("S1_C2");
    const S1_C3 = document.getElementById("S1_C3");
    const S1_C4 = document.getElementById("S1_C4");
    const S1_C5 = document.getElementById("S1_C5");

    const S2_C1 = document.getElementById("S2_C1");
    const S2_C2 = document.getElementById("S2_C2");
    const S2_C3 = document.getElementById("S2_C3");
    const S2_C4 = document.getElementById("S2_C4");
    const S2_C5 = document.getElementById("S2_C5");

    const S3_C1 = document.getElementById("S3_C1");
    const S3_C2 = document.getElementById("S3_C2");
    const S3_C3 = document.getElementById("S3_C3");
    const S3_C4 = document.getElementById("S3_C4");
    const S3_C5 = document.getElementById("S3_C5");

    const GenerateBtn = document.getElementById("Run");
    
    const Junior1_uf = [];
    const sheetDataHandlerJ1 = (sheetDataJ1) => {
        for(let i = 0; i < sheetDataJ1.length; i ++){
            Junior1_uf.push(sheetDataJ1[i]);
        }
    }
    
    const Junior2_uf = [];
    const sheetDataHandlerJ2 = (sheetDataJ2) => {
        for(let i = 0; i < sheetDataJ2.length; i ++){
            Junior2_uf.push(sheetDataJ2[i]);
        }
    }

    const Junior3_uf = [];
    const sheetDataHandlerJ3 = (sheetDataJ3) => {
        for(let i = 0; i < sheetDataJ3.length; i ++){
            Junior3_uf.push(sheetDataJ3[i]);
        }
    }

    const Senior1_uf = [];
    const sheetDataHandlerS1 = (sheetDataS1) => {
        for(let i = 0; i < sheetDataS1.length; i ++){
            Senior1_uf.push(sheetDataS1[i]);
        }
    }
    
    const Senior2_uf = [];
    const sheetDataHandlerS2 = (sheetDataS2) => {
        for(let i = 0; i < sheetDataS2.length; i ++){
            Senior2_uf.push(sheetDataS2[i]);
        }
    }

    const Senior3_uf = [];
    const sheetDataHandlerS3 = (sheetDataS3) => {
        for(let i = 0; i < sheetDataS3.length; i ++){
            Senior3_uf.push(sheetDataS3[i]);
        }
    }

    var dlvl1 = document.getElementById("dlvl1");
    var dlvl2 = document.getElementById("dlvl2");
    var dlvl3 = document.getElementById("dlvl3");
    var total = document.getElementById("total");

    
    GenerateBtn.onclick = function(){
        localStorage.setItem("dlvl1", dlvl1.value);
        localStorage.setItem("dlvl2", dlvl2.value);
        localStorage.setItem("dlvl3", dlvl3.value);
        
        const DLVL1 = [];
        const DLVL2 = [];
        const DLVL3 = [];
        
        const Junior1_f = Junior1_uf.filter(function(d){
            if(J1_C1.checked){
                if(d.Chapter === 1){
                    return d;
                }
            }
            
            if(J1_C2.checked){
                if(d.Chapter === 2){
                    return d;
                }
            }
            
            if(J1_C3.checked){
                if(d.Chapter === 3){
                    return d;
                }
            }
            
            if(J1_C4.checked){
                if(d.Chapter === 4){
                    return d;
                }
            }
            
            if(J1_C5.checked){
                if(d.Chapter === 5){
                    return d;
                }
            }

            
        });
        for(let i = 0; i < Junior1_f.length; i ++){
            if(Junior1_f[i].Level == "Level 1"){DLVL1.push(Junior1_f[i]);}
            if(Junior1_f[i].Level == "Level 2"){DLVL2.push(Junior1_f[i]);}
            if(Junior1_f[i].Level == "Level 3"){DLVL3.push(Junior1_f[i]);}
        }
    
        const Junior2_f = Junior2_uf.filter(function(d){
            if(J2_C1.checked){
                if(d.Chapter === 1){
                    return d;
                }
            }
            
            if(J2_C2.checked){
                if(d.Chapter === 2){
                    return d;
                }
            }
            
            if(J2_C3.checked){
                if(d.Chapter === 3){
                    return d;
                }
            }
            
            if(J2_C4.checked){
                if(d.Chapter === 4){
                    return d;
                }
            }
            
            if(J2_C5.checked){
                if(d.Chapter === 5){
                    return d;
                }
            }
        });
        for(let i = 0; i < Junior2_f.length; i ++){
            if(Junior2_f[i].Level == "Level 1"){DLVL1.push(Junior2_f[i]);}
            if(Junior2_f[i].Level == "Level 2"){DLVL2.push(Junior2_f[i]);}
            if(Junior2_f[i].Level == "Level 3"){DLVL3.push(Junior2_f[i]);}
        }

        const Junior3_f = Junior3_uf.filter(function(d){
            if(J3_C1.checked){
                if(d.Chapter === 1){
                    return d;
                }
            }
        
            if(J3_C2.checked){
                if(d.Chapter === 2){
                    return d;
                }
            }
            
            if(J3_C3.checked){
                if(d.Chapter === 3){
                    return d;
                }
            }
            
            if(J3_C4.checked){
                if(d.Chapter === 4){
                    return d;
                }
            }
            
            if(J3_C5.checked){
                if(d.Chapter === 5){
                    return d;
                }
            }
        });
        for(let i = 0; i < Junior3_f.length; i ++){
            if(Junior3_f[i].Level == "Level 1"){DLVL1.push(Junior3_f[i]);}
            if(Junior3_f[i].Level == "Level 2"){DLVL2.push(Junior3_f[i]);}
            if(Junior3_f[i].Level == "Level 3"){DLVL3.push(Junior3_f[i]);}
        }

        const Senior1_f = Senior1_uf.filter(function(d){
            if(S1_C1.checked){
                if(d.Chapter === 1){
                    return d;
                }
            }
            
            if(S1_C2.checked){
                if(d.Chapter === 2){
                    return d;
                }
            }
            
            if(S1_C3.checked){
                if(d.Chapter === 3){
                    return d;
                }
            }
            
            if(S1_C4.checked){
                if(d.Chapter === 4){
                    return d;
                }
            }
            
            if(S1_C5.checked){
                if(d.Chapter === 5){
                    return d;
                }
            }

            
        });
        for(let i = 0; i < Senior1_f.length; i ++){
            if(Senior1_f[i].Level == "Level 1"){DLVL1.push(Senior1_f[i]);}
            if(Senior1_f[i].Level == "Level 2"){DLVL2.push(Senior1_f[i]);}
            if(Senior1_f[i].Level == "Level 3"){DLVL3.push(Senior1_f[i]);}
        }
    
        const Senior2_f = Senior2_uf.filter(function(d){
            if(S2_C1.checked){
                if(d.Chapter === 1){
                    return d;
                }
            }
            
            if(S2_C2.checked){
                if(d.Chapter === 2){
                    return d;
                }
            }
            
            if(S2_C3.checked){
                if(d.Chapter === 3){
                    return d;
                }
            }
            
            if(S2_C4.checked){
                if(d.Chapter === 4){
                    return d;
                }
            }
            
            if(S2_C5.checked){
                if(d.Chapter === 5){
                    return d;
                }
            }
        });
        for(let i = 0; i < Senior2_f.length; i ++){
            if(Senior2_f[i].Level == "Level 1"){DLVL1.push(Senior2_f[i]);}
            if(Senior2_f[i].Level == "Level 2"){DLVL2.push(Senior2_f[i]);}
            if(Senior2_f[i].Level == "Level 3"){DLVL3.push(Senior2_f[i]);}
        }

        const Senior3_f = Senior3_uf.filter(function(d){
            if(S3_C1.checked){
                if(d.Chapter === 1){
                    return d;
                }
            }
        
            if(S3_C2.checked){
                if(d.Chapter === 2){
                    return d;
                }
            }
            
            if(S3_C3.checked){
                if(d.Chapter === 3){
                    return d;
                }
            }
            
            if(S3_C4.checked){
                if(d.Chapter === 4){
                    return d;
                }
            }
            
            if(S3_C5.checked){
                if(d.Chapter === 5){
                    return d;
                }
            }
        });
        for(let i = 0; i < Senior3_f.length; i ++){
            if(Senior3_f[i].Level == "Level 1"){DLVL1.push(Senior3_f[i]);}
            if(Senior3_f[i].Level == "Level 2"){DLVL2.push(Senior3_f[i]);}
            if(Senior3_f[i].Level == "Level 3"){DLVL3.push(Senior3_f[i]);}
        }

        // console.log("DLVL1", DLVL1);
        // console.log("DLVL2", DLVL2);
        // console.log("DLVL3", DLVL3);

        localStorage.setItem("DLVL1", JSON.stringify(DLVL1));
        localStorage.setItem("DLVL2", JSON.stringify(DLVL2));
        localStorage.setItem("DLVL3", JSON.stringify(DLVL3));

        

        
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
        const randomD1 = chooseRandom(DLVL1, Math.min(DLVL1.length, dlvl1.value));
        const randomD2 = chooseRandom(DLVL2, Math.min(DLVL2.length, dlvl2.value));
        const randomD3 = chooseRandom(DLVL3, Math.min(DLVL3.length, dlvl3.value));
        
        const finalSheet=randomD1.concat(randomD2, randomD3);
        window.open("test.html",'_blank');
        // console.log(finalSheet);
        // displayTestData(finalSheet);
        

        
    }

    // display data part
    const productContainer = document.querySelector(".products_wrapper");

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
        productContainer.innerHTML = displayData;
    }

  
    // --==== QUERY EXAMPLES ====--
    // --==== USE LETTERS FOR COLUMN NAMES ====--
    //  'SELECT A,C,D WHERE D > 150'
    //  'SELECT * WHERE B = "Potato"'
    //  'SELECT * WHERE A contains "Jo"'
    //  'SELECT * WHERE C = "active" AND B contains "Jo"'
    //  "SELECT * WHERE E > date '2022-07-9' ORDER BY E DESC"
  
    getSheetDataJ1({
      // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
      sheetID: "1o6fSgreNW3JLHLCbaYhwVSf0tKdzjz2QzLRT-IplqG4",
      // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
      sheetName: "Junior 1",
      query: "SELECT *",
      callback: sheetDataHandlerJ1,
    });
    getSheetDataJ2({
        // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
        sheetID: "1o6fSgreNW3JLHLCbaYhwVSf0tKdzjz2QzLRT-IplqG4",
        // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
        sheetName: "Junior 2",
        query: "SELECT *",
        callback: sheetDataHandlerJ2,
    });
    getSheetDataJ3({
        // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
        sheetID: "1o6fSgreNW3JLHLCbaYhwVSf0tKdzjz2QzLRT-IplqG4",
        // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
        sheetName: "Junior 3",
        query: "SELECT *",
        callback: sheetDataHandlerJ3,
    });
    getSheetDataS1({
        // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
        sheetID: "1o6fSgreNW3JLHLCbaYhwVSf0tKdzjz2QzLRT-IplqG4",
        // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
        sheetName: "Senior 1",
        query: "SELECT *",
        callback: sheetDataHandlerS1,
    });
    getSheetDataS2({
          // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
          sheetID: "1o6fSgreNW3JLHLCbaYhwVSf0tKdzjz2QzLRT-IplqG4",
          // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
          sheetName: "Senior 2",
          query: "SELECT *",
          callback: sheetDataHandlerS2,
    });
    getSheetDataS3({
          // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
          sheetID: "1o6fSgreNW3JLHLCbaYhwVSf0tKdzjz2QzLRT-IplqG4",
          // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
          sheetName: "Senior 3",
          query: "SELECT *",
          callback: sheetDataHandlerS3,
    });
});


function calc(){
    total.value = Number(dlvl1.value) + Number(dlvl2.value) + Number(dlvl3.value);
    document.getElementById("total").innerHTML = total.value;
}
