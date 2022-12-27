function calculateCosts(){
    let pname = document.getElementById("printer").value;
    let bcount = parseInt(document.getElementById("blackCount").value);
    let ccount = parseInt(document.getElementById("colorCount").value);
    let bcost = parseInt(parseFloat(document.getElementById("blackCost").value)*100);
    let ccost = parseInt(parseFloat(document.getElementById("cyanCost").value)*100);
    let mcost = parseInt(parseFloat(document.getElementById("magentaCost").value)*100);
    let ycost = parseInt(parseFloat(document.getElementById("yellowCost").value)*100);

    let summaryText = "Printing costs in printer " + pname + " are:<br>";

    if(bcount <= 0 || ccount <= 0 || bcost <= 0 || ccost <= 0 || mcost <= 0 || ycost <= 0){
        alert("Error, wrong input values");
        document.getElementById("summaryText").innerHTML = "The value you have filled are wrong, fix them to get correct results.";
    }
    else if (bcount && bcost ){
        let blackPageCost = (bcost/bcount)/100;
        summaryText += "Printing only in black will cost you <b>" + blackPageCost + "</b> of your currency per page.<br>";
        document.getElementById("summary").style.visibility = "visible";
        document.getElementById("summaryText").innerHTML = summaryText;
        if (ccount && ccost && mcost && ycost){
            let colorPageCost = ((ccost+mcost+ycost)/ccount)/100 + blackPageCost;
            summaryText += "Printing in color will cost you <b>" + colorPageCost + "</b> of your currency per page.<br>";
            document.getElementById("summaryText").innerHTML = summaryText;
        }
    }

}