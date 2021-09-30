document.getElementById("btn").addEventListener("click",function(){
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});
function checkPalindrome(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let l = txt_new.length;
    let h_l = Math.floor( l/2 );
    let display =document.getElementById("display");
    let i;

    for(i = 0; i < h_l; i++){
        if(txt_new[i] !== txt_new[l-1-i]){
            display.textContent = "Wrong! It's not a palindrome";
            return;
        }
        display.textContent = "True! It's a palindrome"
    }
}
