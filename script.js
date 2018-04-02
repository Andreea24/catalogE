  
   var listaElevi = [];
   var listaNote = [];
   var index;
   var medie = [];
   
     function adaugaElevi() {
             event.preventDefault();
             var elemNume = document.querySelector("#nume").value;
             listaElevi.push(elemNume);
             listaNote.push([]);
             medie.push(0);
             document.querySelector("#nume").value = "";
             drawCatalog();
        }
 
     function drawCatalog() {
            var tabel = document.querySelector("#listaElevi tbody");
            var str = "";
            var str= `<thead>
                        <tr>
                            <td class="thead-item">Nume</td>
                            <td class="thead-item">Medie</td>
                            <td></td>
                        </tr>
                       </thead>
            `;
         for (var i = 0; i < listaElevi.length; i++) {
                var rand = `<tr>
                                <td>${listaElevi[i]}</td>
                                <td>${medie[i]}</td>
                                <td><button onclick="index=${i}; drawNote();" class="btnNote">Vezi notele</button></td> 
                            </tr>`;
                 str += rand;
            }
            tabel.innerHTML = str;
        }
    
    function enterElev(elem,e){
            if(e.keyCode == 13){
               adaugaElevi();
               }
           }
       
     function sort_asc_note(){ 
            listaNote[index].sort(function(a,b){
                return a-b
           });
             drawNote();
       }
     function sort_desc_note(){ 
            listaNote[index].sort(function(a,b){
                return b-a });
             drawNote();
        }
     function adaugaNote() {
        event.preventDefault();
        var elemNote = document.querySelector("#nota").value;
        //ia notele elevului
        var elev_note = listaNote[index];
        if(Number.parseInt(elemNote) <= 0 || Number.parseInt(elemNote) > 10 || elemNote.length == 0 || isNaN(elemNote)) 
           return;
        elev_note.push(elemNote);
        document.querySelector("#nota").value = "";
        drawNote();
        }

     function drawNote() {
            document.querySelector("#numeElev").innerHTML = listaElevi[index];
            document.getElementById("note_elev_wrapper").style.display="block";
            var elev_note = listaNote[index];
            var tabel2 = document.querySelector("#listaNote tbody");
            var str2 = "";
            var str2= `<thead>
                            <tr>
                                <td class="thead-item2">Note</td>
                                <td></td>
                            </tr>
                        </thead>
            `;
            for (var i = 0; i < elev_note.length; i++) {
                var rand2 = `<tr>
                                <td>${elev_note[i]}</td>
                            </tr>`;
                 str2 += rand2;
            }
            tabel2.innerHTML = str2;
        }
        
      function ascunde() {
        document.getElementById("note_elev_wrapper").style.display = "none";
        }

      function media_generala(){
        var elev_note = listaNote[index];
        var sum = 0;
        for (var i = 0; i < elev_note.length; i++) {
            sum = sum + parseInt(elev_note[i]);
                    }
            var media = (sum/elev_note.length).toFixed(2);
        return media;
            }
	        
      function sort_asc_medie(){ 
         medie.sort(function(a, b){return a-b});  
         drawCatalog();
        }

      function sort_desc_medie(){ 
         medie.sort(function(a, b){return b-a});  
         drawCatalog();
        }

    function enterNota(elem,e){
            if(e.keyCode == 13){
               adaugaNote();
               }
           }
