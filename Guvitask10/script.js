

function countdown(Number, callback) {
      
    if (Number > 0) {

        document.getElementById
        ('displaycountdown').innerText = Number;
        
        setTimeout(function () {
           
            countdown(Number - 1, callback)
            
        }, 1000);
        
    }
    
    else {
        
        callback();
        
      }
    
}

function display() {

    document.getElementById('displaycountdown').innerText = "HAPPY INDEPENDENCE DAY";

}

countdown(10, function(){
    display();
});
 


   
        
    