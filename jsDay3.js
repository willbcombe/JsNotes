this; /* ref to current Object */
//EX in head
    onload = function(){
        for(i=0;i<document.images.length;i++){
            alert(this)
                alert(this)
                this.src='dog.jpg' //This is right could be a whats wrong q
            }
        }
    }
//EX 2 for this
    onload = function(){
        pars = document.getElementsByTagName('p')
        for(i=0;i < pars.length; i++){
            pars[i].onmouseover = function(){
                this.style.color = 'yellow'
            }
            pars[i].ondblclick = function(){
                this.style.color = 'black'
            }
        }
    }
//better solution EX 2
    function whatever(){
        this.style.color = 'yellow'
    }
        onload = function(){
                pars = document.getElementsByTagName('p')
                for(i=0;i < pars.length; i++){
                    pars[i].onmouseover = whatever //no brackets = call back function
                    pars[i].style.border = 'solid'
     
                }
            }
/* whats diff between following 3: QUIZ Q
    x = global variable
    var x = only vailable in function
    let x = only available in 
    
    Shpws how they difference QUIZ Q
Object/Feature Detection = Good
    --> > 399 kph, >500 hp, 0-60 < 4 sec
Browser Detection = bad
    --> lambo, ferrari, mclaren, lotus, burgatti, shelby, tesla

*/
    