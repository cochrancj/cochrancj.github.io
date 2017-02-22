console.log("loaded");

// Picks Random Person & Writes to Group
// $(document).ready(function(){
//     $("#create").click(function() {
//         if($(".group-list").children().length == 0) {
//             var names = ["Audrey", "Brian", "Carlos", "Kleon", "Laura Jo", "Megan", "Rachel", "Shoshi"];
//             var random = Math.floor(Math.random() * names.length);

//             $(".group-list").append(names[random]);
//         }
//     });

// });


// $(document).ready(function(){
//     $("#create").click(function(){

//         var names = [" Audrey", " Brian", " Carlos", " Kleon", " Laura Jo", " Megan", " Rachel", " Shoshi", " Sarah"];

//         names.sort(function(){
//             return Math.floor(Math.random() * names.length);
//         });

//         var numTeams = 4;
//         var totalTeam = Math.ceil(names.length/numTeams);  
//         var i,j,newTeam,teamMember = totalTeam;
    
//         for (i=0, j=names.length; i<j; i+=teamMember) {
//             var newTeam = names.slice(i, i+teamMember);
//             $(".group-list").append(newTeam + '<br><br>');
//         };

//     });
// });



$(document).ready(function(){
    function createTeams(names) {
        var team1 = [],
            n;
        for (var i = 0, len = Math.floor(names.length / 3); i < len; i++) {
            n = Math.floor(Math.random() * names.length);
            team1.push(names[n]);
            names.splice(n, 1);
        }
        return {
            'team1': team1,
            'team2': names,
            'team3': names,
            'team4': names

        };
    }

    var teams = createTeams([" Audrey", " Brian", " Carlos", "Kleon", "Laura Jo", " Megan", " Rachel", " Shoshi", " Sarah"]),
        team1 = teams.team1,
        team2 = teams.team2,
        team3 = teams.team3,
        team4 = teams.team4;

    $(".group-list").append(team1 + '<br><br>' + team2 + '<br><br>' + team3 + '<br><br>' + team4 + '<br><br>');
    console.log(team1, team2, team3, team4);
});





