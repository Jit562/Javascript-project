
// function searchfun(){
//     let filter = document.getElementById("searchtext");
// }

// or

const searchFun = () => {
    let filter = document.getElementById("searchText").value.toUpperCase();

    let myTable = document.getElementById("myTable");
    
    let tr = myTable.getElementsByTagName("tr");

    for(let i=0; i<tr.length; i++){

        let td = tr[i].getElementsByTagName("td")[0];
        // let tdd = tr[i].getElementsByTagName("td")[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }

        } 
        
    }
}