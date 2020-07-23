let ask = (question, yes, no) => confirm(question) ? yes(): no();

ask("Do you agree",()=>{alert("you argee")},()=> {(alert("you canceled the execution."))});