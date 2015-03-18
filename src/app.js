var mod = angular.module('kendama_app',
[
    'ui.bootstrap',
    'ngMaterial'
]);
mod.config(function($compileProvider){
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
});
mod.controller('kendama_controller',
[
    '$scope',
    '$mdDialog',
    '$mdBottomSheet'
,function(
    $scope,
    $mdDialog,
    $mdBottomSheet
){
    $scope.kendama_lst = 
    [
        {
            label:'sweet pro pink',
            rate:8,
            img:'img/sweet_pro_pink.jpeg',
            vid:'ozuZSPQIsrU',
            review: 'this is my blah blah blah review'
        },
        {
            label:'black yellow crack',
            img:'img/black_yellow_crack.png',
            rate:7,
            vid:'xAFylJSAzRk',
            review: 'this is my blah blah blah review'
        },
        {
            label:'Ozora galaxy',
            rate:9,
            img:'img/ozora_galaxy.png',
            vid:'kWrJp1P9Or0',
            review: 'this is my blah blah blah review'    
        },

        {
            label:'sweet pro pink',
            rate:8,
            img:'img/sweet_pro_pink.jpeg',
            vid:'ozuZSPQIsrU',
            review: 'this is my blah blah blah review'
        },
        {
            label:'black yellow crack',
            img:'img/black_yellow_crack.png',
            rate:7,
            vid:'xAFylJSAzRk',
            review: 'this is my blah blah blah review'
        },
        {
            label:'Ozora galaxy',
            rate:9,
            img:'img/ozora_galaxy.png',
            vid:'kWrJp1P9Or0',
            review: 'this is my blah blah blah review'    
        },        

        {
            label:'sweet pro pink',
            rate:8,
            img:'img/sweet_pro_pink.jpeg',
            vid:'ozuZSPQIsrU',
            review: 'this is my blah blah blah review'
        },
        {
            label:'black yellow crack',
            img:'img/black_yellow_crack.png',
            rate:7,
            vid:'xAFylJSAzRk',
            review: 'this is my blah blah blah review'
        },
        {
            label:'Ozora galaxy',
            rate:9,
            img:'img/ozora_galaxy.png',
            vid:'kWrJp1P9Or0',
            review: 'this is my blah blah blah review'    
        },       
        {
            label:'sweet pro pink',
            rate:8,
            img:'img/sweet_pro_pink.jpeg',
            vid:'ozuZSPQIsrU',
            review: 'this is my blah blah blah review'
        },
        {
            label:'black yellow crack',
            img:'img/black_yellow_crack.png',
            rate:7,
            vid:'xAFylJSAzRk',
            review: 'this is my blah blah blah review'
        },
        {
            label:'Ozora galaxy',
            rate:9,
            img:'img/ozora_galaxy.png',
            vid:'kWrJp1P9Or0',
            review: 'this is my blah blah blah review'    
        },           
    ];
    $scope.yoyo_lst =
    [
        {
            label:'black yoyo',
            img:'',
            vid:'stUDEebazKs'
        }
    ];

    var Bottom_sheet_controller = function($scope, $mdBottomSheet,lst) {
        $scope.lst = lst;
        $scope.info_clicked=function(item){
            $mdBottomSheet.hide({
                item:item,
                action:'info'
            });
        }
        $scope.play_pause_clicked=function(item){
            $mdBottomSheet.hide({
                item:item,
                action:'play_pause'
            });
        }
    }
    function InfoDialogController($scope, $mdDialog,item) {
        $scope.item = item;
        $scope.exit = function() {
            $mdDialog.cancel();
        };
    }
    $scope.kendama_btn_click = function($event){
        $mdBottomSheet.show({
            templateUrl: 'template/bottom_sheet.html',
            controller: Bottom_sheet_controller,
            targetEvent: $event,
            locals:{
                lst:$scope.kendama_lst
            }
        }).then(
            function(response){
                if(response.action === 'play_pause'){
                    loadVideo(response.item.vid);
                }else if(response.action === 'info'){
                    $mdDialog.show({
                        controller: InfoDialogController,
                        templateUrl: 'template/info_dialog.html',
                        hasBackdrop:true,
                        locals:{item:response.item}
                    })                    
                }
            }
        )        
    }

    $scope.yoyo_btn_click = function(){

    }




}]);

