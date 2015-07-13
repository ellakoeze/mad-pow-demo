






$(document).ready(function() {
   
     

   //search icon appearing/disappearing  
     
    $('#click-away').click(function(e) {
        if (!$(e.target).is('#search-box')) {  
            $('#search-icon').show();  
        }
        else
            
            $('#search-icon').hide();
               
    
});
    
//navigation tabs
    
$('#learn-button a[href="#learn"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

 $('#build-button a[href="#build"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
 
$('#home-button a[href="#home"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

 $('#connect-button a[href="#connect"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
  console.log("is this not working?");
});
 
 $('#profile-button a[href="#profile"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
 
//start panel buttons
            
$('#learn-square').click(function (e) {
  e.preventDefault()
  learn();
  console.log('learn');
});
      
$('#build-square').click(function (e) {
  e.preventDefault()
  build();
  console.log('build');
});
          
$('#connect-square').click(function (e) {
  e.preventDefault()
  connect();
  console.log('connect');
});
      
//make highchart
      
buildChart();
  
 //build newsfeed   
 
 $.ajax({
          type: "GET",
          url: "newsfeed.xml",
          dataType: "xml",
          success: function(data) {
            console.log("XML File is loaded!");
                
                
            $(data).find('Item').each(function(){
                console.log("once for every item");
                var $item = $(this);
                console.log($item);
                var title = $item.find('title').text();
                console.log(title);
                var image = $item.find('image').text();
                var date = $item.find('date').text();
                var likes = $item.find('likes').text();
                var featured = $item.find('featured').text();
                var type = $item.find('type').text();
                var grade = $item.find('grade').text();
                var tag1 = $item.find('tag1').text();
                var tag2 = $item.find('tag2').text();
                var tag3 = $item.find('tag3').text();
                var tag4 = $item.find('tag4').text();
                var tag5 = $item.find('tag5').text();
                var description = $item.find('description').text();
                
                var html= '';
                 html += '<div class="newsbox"><a href=#><img src="'
                html += image
                html +='">'
                html += '<div class="newscontent">'
                html +='<div class="row1"><span class="title">'
                html +=title
                html +='</span><span class="date">posted '
                html += date
                html +=' days ago</span><span class="likes"><img src="images/thumb-10.png">'
                html +=likes
                html +='</span><span class="featured">'
                html +=featured
                html +='</span></div>'
                html +='<div class="row2"><span class="type">'
                html +=type
                html +='</span><span>|</span><span class="grade">'
                html +=grade
                html +='</span><span>|</span><span class="tag1">'
                html +=tag1
                html +='</span><span class="tag2">'
                html +=tag2
                html +='</span><span class="tag3">'
                html +=tag3
                html +='</span><span class="tag4">'
                html +=tag4
                html +='</span><span class="tag5">'
                html +=tag5
                html +='</span>'
                html+= '</div>'
                html +='<div class="description"><p>'
                html +=description
                html +='</p></div></div></a></div>'
           
             $('#newsfeed').append(html);
            });
                
             
                
                }
        
            
          });
 
 //sidebar menu arrow toggle
 
$("#little-arrows").click(function(){
    arrowToggle();
});

//sidebar menu tabs
   
$('#profile1-button a[href="#profile1"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#implementations-button a[href="#implementations"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#bookmarked-button a[href="#bookmarked"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});   
   
$('#building-button a[href="#building"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
  
});

$('#liked-button a[href="#liked"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
}); 
   
$('#recent-button a[href="#recent"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
}); 
   
$('#friends-button a[href="#friends"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#inbox-button a[href="#inbox"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
}); 


//leave profile page open to documents>built/building

$("#side-nav-link").trigger('click');  
$("#document-link").trigger('click');
$("#building-link").trigger('click'); 


});









 function learn(){
    $('#learn-button a[href="#learn"]').trigger('click');
 
 };
 
 
 
 function build(){
         $('#build-button a[href="#build"]').trigger('click');       
 };
 
 function connect(){
    $('#connect-button a[href="#connect"]').trigger('click');
          
 };
 
 function buildChart(){
    
    $('#chart-container').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['Day 1', 'Day 4', 'Day 7', 'Day 10', 'Day 13']
        },
        yAxis: {
            title: {
                text: 'Tasks Completed'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        //legend: {
            
       // },
        series: [{
            name: 'Tasks',
            data: [2, 5, 7, 11, 12]
        }]
    });
    


 };


function arrowToggle(){
var src = $("#little-arrows").attr("src");

if (src == "images/arrows-06.png") {
       
$("#little-arrows").attr("src", "images/arrows-07.png");      

}

else {
    
 $("#little-arrows").attr("src", "images/arrows-06.png");

}
};





