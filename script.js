var app=angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.heroes=[
        {neme:'Geralt of Rivia',description:'Is a witcher and the protagonist of the Witcher series and its adaptations..',image:'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/01/geralt-of-rivia-things-didnt-know-witcher-3-featured-image.jpg'},
        {neme:'Ciri of Cintra',description:'Is one of the main characters of the Witcher saga, around whom much of the plot is centered.',image:'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/12/ciri.jpg?q=50&fit=crop&w=960&h=500'},
        {neme:'Yennefer of Vengerberg',description:'She went on to appear in numerous other Witcher stories and is one of the main characters of the Witcher saga.',image:'https://1.bp.blogspot.com/-17ockqMMb7s/WeIGNJ_IMBI/AAAAAAAAAFo/rfhn9f_YxLgphd6Q6qtwEW8kngdHdbDLwCLcBGAs/s1600/The%2BWitcher%2B3%2BWild%2BHunt%2B16.jpg'},
        {neme:'Triss Merigold',description:' She took care of Ciri for some time and is like an older sister to her. She was a member of the Lodge of Sorceresses.',image:'https://i.redd.it/i3dblzdpovw11.jpg'},
        {neme:'King Foltest',description:' Is the king of Temeria, and involved in an incestuous affair with his sister that produced a daughter. ',image:'https://static.wikia.nocookie.net/witcher/images/c/c8/Gwent_cardart_northern_meve_longsword.png/revision/latest?cb=20181031003943'},
        {neme:'Cahir Mawr Dyffryn aep Ceallach',description:' Was an intelligence officer in the Nilfgaardian army who would later join Geralts hansa. ',image:'https://i.pinimg.com/736x/a1/2a/a4/a12aa4d9edfcd8ad4d6dea3c0b8ecb03.jpg'}
    ];

    $scope.delateHero=function($index){
        $scope.heroes.splice($index,1);
    }
   
    $scope.addHero=function(){
        $scope.heroes.push({
            neme: $scope.newhero.neme,
            description: $scope.newhero.description,
            image: $scope.newhero.image
        })
        $scope.newhero.neme= '';
        $scope.newhero.description= '';
        $scope.newhero.image = '';
    }

    $scope.showHeroInCard=function(hero){
        $scope.clickedHero= hero;
        $scope.showCard=true; 
    }
  
})
