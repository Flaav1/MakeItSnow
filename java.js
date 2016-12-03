 var snow = document.getElementById('snow');

// Create a loop
        setInterval(function () {

     // Create a random number between 0 and 100
            var num = Math.round(Math.random() * 100);
    // Create an icon for tour snowflakes
            var newflake = document.createElement('i');

    //add the fontawesome class and our flake class
            newflake.setAttribute('class', 'fa fa-snowflake-o flake');

    // add the X-position of the flake from our random generated number. 
            newflake.style.left = num + '%';
    // finally append your newly created flake on your page
            snow.appendChild(newflake);


            var flakes = document.getElementsByClassName('flake');

            $(flakes).each(function (index, flk) {

                if (flk.offsetTop > $(window).height() - 10) {
                    snow.removeChild(flk);
                }

                console.log($(window).height());
            });

        }, 500);  

    
   
