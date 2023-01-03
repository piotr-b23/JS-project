function calculateBlackPageCosts(fpname, spname, fpcost,spcost,fbcost,sbcost){
    let summaryText = "";
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
    else if(totalFirstPrinterCost > totalSecondtPrinterCost && fbcost >= sbcost){
        summaryText = "Printer " + fpname +
         " is more expensive in its basic price and in its black pages printing cost. Choose printer " + spname + ".<br>";
    }
    else if(totalFirstPrinterCost < totalSecondtPrinterCost && fbcost > sbcost){
        
        while((totalSecondtPrinterCost - totalFirstPrinterCost) >=0){
            totalFirstPrinterCost += fbcost;
            totalSecondtPrinterCost += sbcost;
            bpagecount += 1;
        }
        summaryText = "Printer " + spname + " will print " + bpagecount +
        " total black pages before printer " + fpname + " will match its price, totaling " +
        totalSecondtPrinterCost/100 + " of your currency.<br>";

    }
    else if(totalFirstPrinterCost < totalSecondtPrinterCost && fbcost <= sbcost){
        summaryText = "Printer " + spname +
         " is more expensive in its basic price and in its black pages printing cost. Choose printer " + fpname + ".<br>";
    }

    return summaryText;
}

function calculateColorPageCosts(fpname, spname, fpcost,spcost,fccost,sccost){
    let summaryText = "";
    let cpagecount = 0;
    let totalFirstPrinterCost = fpcost;
    let totalSecondtPrinterCost = spcost;

    if(totalFirstPrinterCost > totalSecondtPrinterCost && fccost < sccost){
        
        while((totalFirstPrinterCost - totalSecondtPrinterCost) >=0){
            totalFirstPrinterCost += fccost;
            totalSecondtPrinterCost += sccost;
            cpagecount += 1;
        }
        summaryText = "Printer " + fpname + " will print " + cpagecount +
        " total color pages before printer " + spname + " will match its price, totaling " +
        totalSecondtPrinterCost/100 + " of your currency.<br>";

    }
    else if(totalFirstPrinterCost > totalSecondtPrinterCost && fccost >= sccost){
        summaryText = "Printer " + fpname +
         " is more expensive in its basic price and in its color pages printing cost. Choose printer " + spname + " if you plan to plin mostly in color.<br>";
    }
    else if(totalFirstPrinterCost < totalSecondtPrinterCost && fccost > sccost){
        
        while((totalSecondtPrinterCost - totalFirstPrinterCost) >=0){
            totalFirstPrinterCost += fccost;
            totalSecondtPrinterCost += sccost;
            cpagecount += 1;
        }
        summaryText = "Printer " + spname + " will print " + cpagecount +
        " total color pages before printer " + fpname + " will match its price, totaling " +
        totalSecondtPrinterCost/100 + " of your currency.<br>";

    }
    else if(totalFirstPrinterCost < totalSecondtPrinterCost && fccost <= sccost){
        summaryText = "Printer " + spname +
         " is more expensive in its basic price and in its color pages printing cost. Choose printer " + fpname + " if you plan to plin mostly in color.<br>";
    }

    return summaryText;
}

function calculatePageCosts(fpname, spname, fpcost,spcost,ftcost,stcost){
    let pageCount = 0;
    let totalFirstPrinterCost = fpcost;
    let totalSecondtPrinterCost = spcost;

    const pageCosts = {totalPagesPrinted: "0", totalCostOfPrinting: "0", betterPrinter: "", worstPrinter: ""};

    if(totalFirstPrinterCost > totalSecondtPrinterCost && ftcost < stcost){
        
        while((totalFirstPrinterCost - totalSecondtPrinterCost) >=0){
            totalFirstPrinterCost += ftcost;
            totalSecondtPrinterCost += stcost;
            pageCount += 1;
        }
        pageCosts.totalPagesPrinted = pageCount;
        pageCosts.totalCostOfPrinting = totalFirstPrinterCost;
        pageCosts.betterPrinter = fpname;
        pageCosts.worstPrinter = spname;
    }
    else if(totalFirstPrinterCost > totalSecondtPrinterCost && ftcost >= stcost){
        pageCosts.betterPrinter = spname;
        pageCosts.worstPrinter = fpname;
    }
    else if(totalFirstPrinterCost < totalSecondtPrinterCost && ftcost > stcost){
        
        while((totalSecondtPrinterCost - totalFirstPrinterCost) >=0){
            totalFirstPrinterCost += ftcost;
            totalSecondtPrinterCost += stcost;
            pageCount += 1;
        }
        pageCosts.totalPagesPrinted = pageCount;
        pageCosts.totalCostOfPrinting = totalFirstPrinterCost;
        pageCosts.betterPrinter = spname;
        pageCosts.worstPrinter = fpname;

    }
    else if(totalFirstPrinterCost < totalSecondtPrinterCost && ftcost <= stcost){
        pageCosts.betterPrinter = fpname;
        pageCosts.worstPrinter = spname;
    }
    return pageCosts;
}


function calculateCosts(){
    let fpname = document.getElementById("printer-first").value;  //first printer name
    let fpcost =  parseInt(parseFloat(document.getElementById("firstPrinterCost").value)*100); //first printer cost
    let fbcost = parseInt(parseFloat(document.getElementById("firstBlackCost").value)*100);  //first printer black page cost
    let fccost = parseInt(parseFloat(document.getElementById("firstColorCost").value)*100); // first printer color page cost

    let spname = document.getElementById("printer-second").value;  //second printer name
    let spcost = parseInt(parseFloat(document.getElementById("secondPrinterCost").value)*100); //second printer cost
    let sbcost = parseInt(parseFloat(document.getElementById("secondBlackCost").value)*100);  //second printer black cost
    let sccost = parseInt(parseFloat(document.getElementById("secondColorCost").value)*100);  //second prinetr color cost

    let bratio = parseInt(document.getElementById("blackCountRatio").value);
    let cratio = parseInt(document.getElementById("colorCountRatio").value);

    let summaryText = "";

    document.getElementById("summary").style.visibility = "visible";

    if(fpcost <= 0 || fbcost <= 0 || fccost <= 0 || spcost <= 0 || sbcost <= 0 || sccost <= 0){
        alert("Error, wrong input values");
        document.getElementById("summaryText").innerHTML = "The value you have filled are wrong, fix them to get correct results.";
    }
    else if (fpcost && fbcost && spcost && sbcost){
        if(fbcost==sbcost){
            summaryText = "Printing costs in black will never cross. Choose cheaper printer if you only print in black.";
        }
        else{
            const blackCosts = calculatePageCosts(fpname, spname, fpcost, spcost, fbcost, sbcost);
            if(blackCosts.totalCostOfPrinting==0){
                summaryText = "Printer " + blackCosts.worstPrinter +
                " is more expensive in its basic price and in its black pages printing cost. Choose printer " + blackCosts.betterPrinter + ".<br>";  
            }
            else{
                summaryText = "Printer " + blackCosts.betterPrinter + " will print " + blackCosts.totalPagesPrinted +
                " total black pages before printer " + blackCosts.worstPrinter + " will match its price, totaling " +
                blackCosts.totalCostOfPrinting/100 + " of your currency. "  + blackCosts.worstPrinter +
                 " will be more expensive from this point <br>";
            }
        }

        if(fccost && sccost){
            if(fccost==sccost){
                summaryText += "Printing costs in color will never cross. Choose cheaper printer if you plan to print mostly in color.";
            }
            else{
                const colorCosts = calculatePageCosts(fpname, spname, fpcost, spcost, fccost, sccost);
                if(colorCosts.totalCostOfPrinting==0){
                    summaryText += "Printer " + colorCosts.worstPrinter +
                    " is more expensive in its basic price and in its color pages printing cost. Choose printer " + colorCosts.betterPrinter + 
                    " if you plan to print mostly in color.<br>";  
                }
                else{
                    summaryText += "Printer " + colorCosts.betterPrinter + " will print " + colorCosts.totalPagesPrinted +
                    " total black color before printer " + colorCosts.worstPrinter + " will match its price, totaling " +
                    colorCosts.totalCostOfPrinting/100 + " of your currency. "  + colorCosts.worstPrinter +
                    " will be more expensive from this point <br>";
                }
            }
            if(bratio && cratio && bratio != cratio && bratio > 0 && cratio > 0){

            }
        }

        document.getElementById("summaryText").innerHTML = summaryText;
    }

}