
var students = [];

$('#add-student-form').submit(function(event){
  event.preventDefault();

  var student = $('#student-name').val()

  $('#student-list').append('<li>'+ student + '</li>');

  students.push(student)

  $('#student-name').val('');
})


$('#pair-btn').click(function(){
  var group = [];

  $('#student-list').html('');



  while (students.length > 0) {
    var randomArrayPosition = Math.floor(Math.random()*students.length);
    
    var student = students[randomArrayPosition];

    if (group.length == 2) {
      console.log(group);
    
      $('.groups').append('<div class="group"><div class="student">' + group[0] + '</div><div class="student">' + group[1] + '</div></div>')

      
      group = [student];
    } else {
      group.push(student)
    }
    
    students.splice(randomArrayPosition, 1)
  }

  if (group.length > 0) {
    console.log(group)
    $('.groups').append('<div class="group"><div class="student">' + group[0] + '</div><div class="student">' + group[1] + '</div></div>')

  }



})



    