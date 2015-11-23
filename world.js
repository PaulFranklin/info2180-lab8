window.onload = function() {
    on_load(); 
};

    
    function on_load() {
  
    var button = document.getElementById("lookup").addEventListener( "click", al_ert());
    
function load_XMLDoc() {
    var xmlhttp;
    var txt, x, i;
    if (window.XMLHttpRequest) {
        
        xmlhttp = new XMLHttpRequest();
    }
    else { 
        
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            
            xmlDoc = xmlhttp.responseXML;
            txt="";
            x=xmlDoc.getElementsByTagName("Jamaica");
    
            for (i=0;i<x.length;i++) {
                txt=txt + x[i].childNodes[0].nodeValue + "<br>";
                }
                
            document.getElementById("lookup").innerHTML=txt;
        }
         }
  
    xmlhttp.open("GET","country.xml",true);
    xmlhttp.send();
}  
    


function alert() {
     document.observe("dom:loaded", function() {
         $("lookup").observe("click"), function() {
             new Ajax.Request("world.php", 
             {
                  method: "GET", 
                                        onSucess: function(response) {
                                        alert(response.responseText);
                                        },
                                        onFailure: function(response) {
                                        alert('ehh...Errors, what you gonna do :P');
                                        }
                                    }
                                    }});
    );
    
    /