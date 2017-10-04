//date & times 
//*************q on quiz how many days til halloween 2019*************
    now = new Date();60*60
    xmas = new Date(2017, 11, 25, 0, 0, 0)
    
    days = (xmas - now) / (1000*60*60)

    alert(days.toFixed(2))
    alert(Math.round(days))
/*
(nouns) OBJECTS: navigator, style, document, window, date, math, array, image
(adj) PROPERTIES: Css properties, html attr., width, src, backgroundColor, font family
(verb) METHODS: log(), write(), alert(), toFixed(), round()
(times) EVENTS: onclick, onmouseover, ondblclick
ALL U GOTTA DO IS PUT THESE PIECES TOGETHER IN JS
*/
[] // An Array
{} // An Object
    //EX.In Header
    daysOfTheWeek = ['sun', 'mon', 'tue','wed' ]
        daysOfTheWeek.push('thu') // push method adds to array
        alert(daysOfTheWeek.length)
    
//************** q creat array of instructors names and loop through it*****************

//FOR LOOP -- use ctrl+shift+J to view log in Chrome
    //EX. in header again
    for(i =200; i >= -100; i-=4)
        {
            if(i !=0)
                console.log(i) 
        }
    //EX. in body
    <img src = 'images/cat.jpg'>
    <img src = 'images/dog.jpg'>
     <img src = 'images/bird.jpg'>
    <script>
        for(i =0; i < document.images.length; i++){
            document.images[i].width = 50 // no quotes for HTML
            document.images[i].style.width = "50px"
            document.images[i].style.borderStyle = "solid"
        }
    </script>

//EX. QUIZ QUESTION in vody solution
    <img src = 'images/cat.jpg'>
        <p> hello </p>
    <img src = 'images/dog.jpg'>
        <p> goodbye </p>
        <p> the end</p>
    <img src = 'images/bird.jpg'>
    <script>
        pars = document.getElementsByTagName('p')
        
        for(i = 0; i < pars.length; i++){
            pars[i].style.border = 'red solid 1px'
            pars[i].style.color = 'red'
        }
    </script>
//EX. SAME Q BETTER SOLUTION
    <head>
        <script>
            window.onload = function(){
                pars = document.getElementsByTagName('p')
                for(i = 0; i < pars.length; i++){
                    pars[i].style.border = 'red solid 1px'
                    pars[i].style.color = 'red'
                }
            }
        </script>
    </head>
    <body>
    <img src = 'images/cat.jpg'>
        <p> hello </p>
    <img src = 'images/dog.jpg'>
        <p> goodbye </p>
        <p> the end</p>
     <img src = 'images/bird.jpg'>
    </body>
    
