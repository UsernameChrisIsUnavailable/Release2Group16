// IIFE --> immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App started");
    }
    window.addEventListener("load", Start);

    let deleteButtons = document.querySelectorAll('.btn-danger');
    for(button of deleteButtons)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm("Are you Sure?"))
            {
                event.prevent.Default();
                window.location.assign('/gameslist');
            }
        })
    }
})();