// Start jQuery Area
$(document).ready(function(){
    // Start Header
    // Start Nav Bar
    $('.navbuttons').click(function(){
        $(this).toggleClass('crossxs');
    })

    // End Nav Bar
    // End Header


    // Start Login Box
    $('#open-btn').click(function(){
      document.getElementById('form-popup').style.display = 'block';
    });

    $('#formclose-btn').click(function(){
      document.getElementById('form-popup').style.display = 'none';
    })
    // End Login Box

});

// End jQuery Area



// Start JS Area

// Start Students Counter Section
var getcountervalues = document.querySelectorAll('.countervalues');

getcountervalues.forEach(function(getcountervalue){
    getcountervalue.textContent = 0;

    const updatecounter = function(){
        const getcttarget = +getcountervalue.getAttribute('data-target');
        // console.log(typeof getcttarget);

        const getctcontent = +getcountervalue.innerText;

        const incnumber = getcttarget / 100;

        if(getctcontent < getcttarget){
            getcountervalue.textContent = getctcontent + incnumber;
            setTimeout(updatecounter,50);
        }
    }


    updatecounter();
})

// End Students Counter Section


// Start Rating Section
// start google code for chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8,],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Srilinka',    8]
        ]);

        var options = {
          title: 'International Students',
          is3D: true,
          width: 550,
          height: 400
        //   colors: ['red','#004411']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
// end google code for chart
// End Rating Section


const getyear = document.getElementById('getyear');
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;

// End JS Area