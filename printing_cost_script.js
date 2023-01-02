function calculateCosts(){
    let fpname = document.getElementById("printer-first").value;
    let fpcost =  parseInt(parseFloat(document.getElementById("firstPrinterCost").value)*100);
    let fbcost = parseInt(parseFloat(document.getElementById("firstBlackCost").value)*100);
    let fccost = parseInt(parseFloat(document.getElementById("firstColorCost").value)*100);

    let spname = document.getElementById("printer-second").value;
    let spcost = parseInt(parseFloat(document.getElementById("secondPrinterCost").value)*100);
    let sbcost = parseInt(parseFloat(document.getElementById("secondBlackCost").value)*100);
    let sccost = parseInt(parseFloat(document.getElementById("secondColorCost").value)*100);

    let summaryText = "";

    document.getElementById("summary").style.visibility = "visible";

    if(fpcost <= 0 || fbcost <= 0 || fccost <= 0 || spcost <= 0 || sbcost <= 0 || sccost <= 0){
        alert("Error, wrong input values");
        document.getElementById("summaryText").innerHTML = "The value you have filled are wrong, fix them to get correct results.";
    }
    else if (fpcost && fbcost && spcost && sbcost){
        if(fbcost==sbcost){
            summaryText = "Printing costs in black will never cross. Choose cheaper printer";
        }
        else{
            let bpagecount = 0;
            let totalFirstPrinterCost = fpcost;
            let totalSecondtPrinterCost = spcost;

            if(totalFirstPrinterCost > totalSecondtPrinterCost && fbcost < sbcost){
                
                while((totalFirstPrinterCost - totalSecondtPrinterCost) >=0){
                    totalFirstPrinterCost += fbcost;
                    totalSecondtPrinterCost += sbcost;
                    bpagecount += 1;
                }
                summaryText = "Printer " + fpname + " will print " + bpagecount +
                " total black pages before printer " + spname + " will match its price, totaling " +
                totalSecondtPrinterCost/100 + " of your currency.<br>";

            }
            else{
                summaryText = "Printer " + fpname +
                 " is more expensive in its basic price and in its black pages printing cost. Choose printer " + spname + ".<br>";
            }

            if(totalFirstPrinterCost < totalSecondtPrinterCost && fbcost > sbcost){
                
                while((totalSecondtPrinterCost - totalFirstPrinterCost) >=0){
                    totalFirstPrinterCost += fbcost;
                    totalSecondtPrinterCost += sbcost;
                    bpagecount += 1;
                }
                summaryText = "Printer " + spname + " will print " + bpagecount +
                " total black pages before printer " + fpname + " will match its price, totaling " +
                totalSecondtPrinterCost/100 + " of your currency.<br>";

            }
            else{
                summaryText = "Printer " + spname +
                 " is more expensive in its basic price and in its black pages printing cost. Choose printer " + fpname + ".<br>";
            }



        }

        document.getElementById("summaryText").innerHTML = summaryText;
    }

}