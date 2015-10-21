/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






/*
 * Targer every node start
 */


var storage=window.localStorage;
storage.setItem("define_content","0");
var check_draw=window.localStorage;

var temp=0;
var node1=document.getElementById("child_div1");
var node2=document.getElementById("child_div2");
var node3=document.getElementById("child_div3");
var node4=document.getElementById("child_div4");
var node5=document.getElementById("child_div5");
var node6=document.getElementById("child_div6");
var node7=document.getElementById("child_div7");
var node8=document.getElementById("child_div8");
var node9=document.getElementById("child_div9");
var player=document.getElementById("playerid");
/*
 * Targer every node end
 */


/*
Function that will determine the result of game
Start.
*/
function determine_result(){
    if((node1.textContent==="X" && node2.textContent==="X" && node3.textContent==="X") || (node1.textContent==="O" && node2.textContent==="O" && node3.textContent==="O")){
        return 1;
    }
    if((node4.textContent==="X" && node5.textContent==="X" && node6.textContent==="X") || (node4.textContent==="O" && node5.textContent==="O" && node6.textContent==="O")){
        return 2;
    }
    
    if((node7.textContent==="X" && node8.textContent==="X" && node9.textContent==="X") || (node7.textContent==="O" && node8.textContent==="O" && node9.textContent==="O")){
        return 3;
    }
    
    if((node1.textContent==="X" && node4.textContent==="X" && node7.textContent==="X") || (node1.textContent==="O" && node4.textContent==="O" && node7.textContent==="O")){
        return 4;
    }
    
    if((node2.textContent==="X" && node5.textContent==="X" && node8.textContent==="X") || (node2.textContent==="O" && node5.textContent==="O" && node8.textContent==="O")){
        return 5;
    }
    
    if((node3.textContent==="X" && node6.textContent==="X" && node9.textContent==="X") || (node3.textContent==="O" && node6.textContent==="O" && node9.textContent==="O")){
        return 6;
    }
    
    if((node1.textContent==="X" && node5.textContent==="X" && node9.textContent==="X") || (node1.textContent==="O" && node5.textContent==="O" && node9.textContent==="O")){
        return 7;
    }
    
    if((node3.textContent==="X" && node5.textContent==="X" && node7.textContent==="X") || (node3.textContent==="O" && node5.textContent==="O" && node7.textContent==="O")){
        return 8;
    }
    
    if(Number(check_draw.getItem("value"))===9){
        return 9;
    }
    
    
    
    
    
}


/*
Function that will determine the result of game
Start.
*/




/*
 Function that will determine the turn of player  and 
 place the symbol according to player id . start
 */

function determine_content(e){
    e.preventDefault();
     if(e.target.parentNode.id==="Parent_div"){
    if(player.textContent==="Turn:Game Over"){
      document.getElementById("temp").innerHTML="Game is over.... </br>Press the button Below to start Again";
      document.getElementById("temp").setAttribute("style","color:red");
    }
    else{
    if((e.target.textContent==="X" || e.target.textContent==="O") && player.textContent!=="Turn:Game Over" ){
        alert("selected");
    }
    else{
        if(storage.getItem("define_content")==="0"){
            player.innerHTML="Turn:Player Two";
            e.target.textContent="X";
            temp+=1;
            check_draw.clear();
            check_draw.setItem("value",temp);
            
            
            if(determine_result()===1){
            storage.clear();
            //alert("win1");
            //document.getElementById("result").innerHTML="Result: win 1";
            winner_player(1);
            node1.setAttribute("style","background-color:brown");
            node2.setAttribute("style","background-color:brown");
            node3.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===2){
            storage.clear();
            //alert("win2");
            //document.getElementById("result").innerHTML="Result: win 2";
            winner_player(2);
            node4.setAttribute("style","background-color:brown");
            node5.setAttribute("style","background-color:brown");
            node6.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===3){
            storage.clear();
            //alert("win3");
            //document.getElementById("result").innerHTML="Result: win 3";
            winner_player(3);
            node7.setAttribute("style","background-color:brown");
            node8.setAttribute("style","background-color:brown");
            node9.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===4){
            storage.clear();
            //alert("win4");
            //document.getElementById("result").innerHTML="Result: win 4";
            winner_player(4);
            node1.setAttribute("style","background-color:brown");
            node4.setAttribute("style","background-color:brown");
            node7.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===5){
            storage.clear();
            //alert("win5");
            //document.getElementById("result").innerHTML="Result: win 5";
            winner_player(5);
            node2.setAttribute("style","background-color:brown");
            node5.setAttribute("style","background-color:brown");
            node8.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===6){
            storage.clear();
            //alert("win6");
            //document.getElementById("result").innerHTML="Result: win 6";
            winner_player(6);
            node3.setAttribute("style","background-color:brown");
            node6.setAttribute("style","background-color:brown");
            node9.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===7){
            storage.clear();
           // alert("win7");
           //document.getElementById("result").innerHTML="Result: win 7";
           winner_player(7);
           node1.setAttribute("style","background-color:brown");
           node5.setAttribute("style","background-color:brown");
           node9.setAttribute("style","background-color:brown");
           player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===8){
            storage.clear();
            //alert("win8");
            //document.getElementById("result").innerHTML="Result: win 8";
            winner_player(8);
            node3.setAttribute("style","background-color:brown");
            node5.setAttribute("style","background-color:brown");
            node7.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
        if(determine_result()===9){
            storage.clear();
            //alert("win8");
            document.getElementById("result").innerHTML="Result: Match Draw";
            //winner_player(8);
            //node3.setAttribute("style","background-color:brown");
            //node5.setAttribute("style","background-color:brown");
            //node7.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
        else{
            storage.clear();
            storage.setItem("define_content","1");
        }
            
        }
        else{
            player.innerHTML="Turn:Player One";
            e.target.textContent="O";
            temp+=1;
            check_draw.clear();
            check_draw.setItem("value",temp);
            
            if(determine_result()===1){
            storage.clear();
            //alert("win1");
            //document.getElementById("result").innerHTML="Result: win 1";
            winner_player(1);
            node1.setAttribute("style","background-color:brown");
            node2.setAttribute("style","background-color:brown");
            node3.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===2){
            storage.clear();
            //alert("win2");
            //document.getElementById("result").innerHTML="Result: win 2";
            winner_player(2);
            node4.setAttribute("style","background-color:brown");
            node5.setAttribute("style","background-color:brown");
            node6.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===3){
            storage.clear();
            //alert("win3");
            //document.getElementById("result").innerHTML="Result: win 3";
            winner_player(3);
            node7.setAttribute("style","background-color:brown");
            node8.setAttribute("style","background-color:brown");
            node9.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===4){
            storage.clear();
            //alert("win4");
            //document.getElementById("result").innerHTML="Result: win 4";
            winner_player(4);
            node1.setAttribute("style","background-color:brown");
            node4.setAttribute("style","background-color:brown");
            node7.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===5){
            storage.clear();
            //alert("win5");
            //document.getElementById("result").innerHTML="Result: win 5";
            winner_player(5);
            node2.setAttribute("style","background-color:brown");
            node5.setAttribute("style","background-color:brown");
            node8.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===6){
            storage.clear();
            //alert("win6");
            //document.getElementById("result").innerHTML="Result: win 6";
            winner_player(6);
            node3.setAttribute("style","background-color:brown");
            node6.setAttribute("style","background-color:brown");
            node9.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===7){
            storage.clear();
           // alert("win7");
           //document.getElementById("result").innerHTML="Result: win 7";
           winner_player(7);
           node1.setAttribute("style","background-color:brown");
           node5.setAttribute("style","background-color:brown");
           node9.setAttribute("style","background-color:brown");
           player.innerHTML="Turn:Game Over";
        }
         if(determine_result()===8){
            storage.clear();
            //alert("win8");
            //document.getElementById("result").innerHTML="Result: win 8";
            winner_player(8);
            node3.setAttribute("style","background-color:brown");
            node5.setAttribute("style","background-color:brown");
            node7.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
        if(determine_result()===9){
            storage.clear();
            //alert("win8");
            document.getElementById("result").innerHTML="Result: Match Draw";
            //winner_player(8);
            //node3.setAttribute("style","background-color:brown");
            //node5.setAttribute("style","background-color:brown");
            //node7.setAttribute("style","background-color:brown");
            player.innerHTML="Turn:Game Over";
        }
        else{
            storage.clear();
            storage.setItem("define_content","0");
        }
        }
    }
}
    }
    e.preventDefault();
}

/*
 Function that will determine the turn of player  and 
 place the symbol according to player id . start
 */














/*
 *A click event is created 
 *start here 
 */
addEventListener("click", determine_content);
/*
 *A click event is created 
 *start here 
 */
document.getElementById("refresh").addEventListener("click",function (e){
    location.reload();
    
});

function winner_player(combination_id){
 var get_id=combination_id;
 if(get_id===1 || get_id===4 || get_id===7){
     if(node1.textContent==="X"){
          document.getElementById("result").innerHTML="Result: Player One win";
     }
     if(node1.textContent==="O"){
          document.getElementById("result").innerHTML="Result: Player Two win";
     }
 }
 if(get_id===2){
     if(node4.textContent==="X"){
          document.getElementById("result").innerHTML="Result: Player One win";
     }
     if(node4.textContent==="O"){
          document.getElementById("result").innerHTML="Result: Player Two win";
     }
 }
 if(get_id===3){
     if(node7.textContent==="X"){
          document.getElementById("result").innerHTML="Result: Player One win";
     }
     if(node7.textContent==="O"){
          document.getElementById("result").innerHTML="Result: Player Two win";
     }
 }  
 if(get_id===5){
     if(node2.textContent==="X"){
          document.getElementById("result").innerHTML="Result: Player One win";
     }
     if(node2.textContent==="O"){
          document.getElementById("result").innerHTML="Result: Player Two win";
     }
 }   
 if(get_id===6 || get_id===8){
     if(node3.textContent==="X"){
          document.getElementById("result").innerHTML="Result: Player One win";
     }
     if(node3.textContent==="O"){
          document.getElementById("result").innerHTML="Result: Player Two win";
     }
 }   
};
