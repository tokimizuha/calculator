var eqFlg="false";//＝押したらeqFlg=true
var opeVal="";//演算子入れる
var tenFlg="false";//.押したらtenFlg=true
var chkStr="";//入力値取り出し
var chkNan="";//文字と数値の判別して入れる

function push(num){//数値又は.が押された時　numはボタン値
 H_dispBox=document.getElementById("dispBox");//演算ボックス
 H_opeBox=document.getElementById("opeBox");//演算子表示ボックス

//ボックスが0の時0か.を押したら0.を表示
if(( H_dispBox.value=="0"&& num =="0")||( H_dispBox.value=="0"&& num ==".")){
 num="0.";tenFlg="true"; }

//ボックスが0の時0以外の値を押したらボックスをクリア
if(H_dispBox.value =="0"&&num !="0"){H_dispBox.value="";}
if(tenFlg=="true"&& num =="."){num="";}//小数点２度押ししない

 //＝の後演算子が押されてなければボックスをクリア
if(eqFlg=="true"&&opeVal==""){ H_dispBox.value="";//新しい数を表示
if(num=="."||num=="0"){num="0.";tenFlg="true";}
 eqFlg="false"; }

 //＝の後演算子押されていれば計算続ける
if(opeVal !=""){ 
if(num=="."||num=="0"){num="0.";tenFlg="true";}
 H_dispBox.value += opeVal+num;//ボックスの値＋演算子＋ボタン値
 H_opeBox.innerHTML=""; opeVal="";//演算子クリア
     }
else { H_dispBox.value += num;//ボックスの値＋ボタン値
if(num=="."){tenFlg="true";}
     } 
　　     }

//+-/*を入力した時
function opePush(num){ 
 H_dispBox=document.getElementById("dispBox");//演算ボックス
 H_opeBox=document.getElementById("opeBox");//演算子表示ボックス
 if( H_dispBox.value=="0"&& num !="-"){return}//0の時-以外入力しない
  chkStr=H_dispBox.value.slice(-1);//演算ボックスの最後値
  chkStr=isNaN(chkStr);//文字列ならtrue,数値ならfalse
 if(chkStr==true){return}//演算子なら演算子の、.なら演算子と.の入力をしない
  opeVal=num;
　H_opeBox.innerHTML=opeVal;//演算子表示
  eqFlg="false"; tenFlg="false";
     }

function equal(){
 try{//計算結果出る 
  keta=100000;
　coDe=H_dispBox.value; //計算式
　toTal=eval(coDe); //計算結果
　toTal=Math.round(toTal*keta) / keta;//小数点以下6桁を四捨五入
　H_dispBox.value=toTal;//演算ボックスに表示
  H_opeBox.innerHTML="";opeVal="";
  eqFlg="true";tenFlg="false";
     }

catch(e){//不正入力          
 H_dispBox.value = e.description;}   
　　 }

function clr(){//すべての値をリセット
 H_dispBox.value="0";
 H_opeBox.innerHTML="";
 opeVal=""; 
 eqFlg="false";
 tenFlg="false";
     }

