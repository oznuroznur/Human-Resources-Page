angular.module("contactList", [])
  // .filter("favorites", function() {
  //   return function(favorites){
  //     switch (favorites) {
  //       case "":
  //         $scope.nameList[$index].favorite = "favorite";
  //         break;
  //       case "favorite":
  //         $scope.nameList[$index].favorite = "";
  //         break;
  //     }
  //   }
  // })
  .controller("nameAdderController", function($scope) {

    //set temp initial values for testing
    $scope.nameBox = "";
    $scope.surnameBox = "";
    $scope.emailBox = "";
    $scope.phoneBox = "";
    $scope.departmentBox = "";
    $scope.oNoBox = "";
    $scope.positionBox = "";
    $scope.timetableBox="";
    //

    var nameList = [{
      name: "Furkan",
      surname: "Alkaya",
      favorite: "",
      phone: "888-888-8888",
      email: "furkan@website.com",
      department: "Software", 
      position: "Student",
      timetable: "15-02",
    }, {
      name: "Dila",
      favorite: "",
      phone: "888-888-8888",
      email: "dila@website.com",
      department: "Software",
      position: "Employee",
      timetable: "Cuma",
    }, {
      name: "Sarper",
      favorite: "",
      phone: "888-888-8888",
      email: "sarper@website.com",
      department: "Software",
      position: "Student",
      timetable: "15-02",
    }, {
      name: "Ayberk",
      favorite: "",
      phone: "888-888-8888",
      email: "ayberk@website.com",
      department: "Software", 
      position: "HRM",
      timetable: "15-02",
    }, {
      name: "Merve",
      favorite: "",
      phone: "888-888-8888",
      email: "merve@website.com",
      department: "Software",
      position: "Student",
      timetable: "15-02",
    }, {
      name: "Nisa",
      favorite: "favorite",
      phone: "888-888-8888",
      email: "nisa@website.com",
      department: "Math",       
      position: "Student",
      timetable: "15-02",
    }, {
      name: "Sülü",
      favorite:"",
      phone: "888-888-8888",
      email: "sulu@website.com",
      department: "Software", 
      position: "Student",
      timetable: "15-02",
    }, {
      name: "Öznur",
      favorite: "",
      phone: "888-888-8888",
      email: "oznur@website.com",
      department: "Software",
      oNo:"01", 
      position: "Manager",
      timetable: "15-02",
    }, {
      name: "Ali",
      favorite: "",
      phone: "888-888-8888",
      email: "ali@website.com",
      department: "Software", 
      oNo:"255",
      position: "Student",
      timetable: "15-02",
    }, ];
    $scope.nameList = nameList;

    $scope.favName = function($index) {
      switch ($scope.nameList[$index].favorite) {
        case "":
          $scope.nameList[$index].favorite = "favorite";
          break;
        case "favorite":
          $scope.nameList[$index].favorite = "";
          break;
      }

      console.log($scope.nameList[$index].favorite);
    }

    $scope.editing = false;
  
    $scope.openEdit = function($index) {
      if (!$scope.editing) {
        //edit contact is open
        $scope.editing = true;
        $scope.contactName = $scope.nameList[$index].name;
        $scope.nameBox = $scope.nameList[$index].name;
        $scope.surnameBox = $scope.nameList[$index].surname;
        $scope.emailBox = $scope.nameList[$index].email;
        $scope.phoneBox = $scope.nameList[$index].phone;
        $scope.favBox = $scope.nameList[$index].favorite;
        $scope.departmentBox = $scope.nameList[$index].department;
        $scope.oNo = $scope.nameList[$index].oNo;
        $scope.positionBox = $scope.nameList[$index].position;
        $scope.timetableBox = $scope.nameList[$index].timetable;


        if($scope.favBox == "favorite"){
          $scope.favBox = true;
        }else{
          $scope.favBox = false;
        }
      } else {
        $scope.editing = false;
        $scope.emailBox = "";
        $scope.nameBox = "";
        $scope.surnameBox = "";
        $scope.phoneBox = "";
        $scope.departmentBox = "";
        $scope.oNoBox = "";
        $scope.positionBox = "";
        $scope.timetableBox = "";
      }
      $scope.editContact = function(){
          
          /*future functionality: 
          -reference current item in editor by unique user ID # instead of $index 
          (ie. open editor for "John" aka (userId:82341, $index:5), 
          check for changes to index position of John before splicing and pushing)
            -var userID = $scope.nameList[$index].userID
            -loop through all userIds in nameList.userId for matching userID
            -if index = userID then edit that index
          */
        
          console.log($scope.nameList[$index]);
          $scope.nameList.splice($index, 1);
          $scope.addContact();
          $scope.editing = false;
        }
    }

    $scope.nameSorter = function() {
      var byName = $scope.nameList.slice(0)
      byName.sort(function(a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      $scope.nameList = byName;
    }
    
    //sort onload
    $scope.nameSorter();
  
    $scope.addContact = function() {
      //since email isn't required...
      $scope.emailBox = $scope.emailBox || $scope.nameBox + "@website.com";
      $scope.phoneBox = $scope.phoneBox || "123-456-7891";
      
      if($scope.favBox){
        $scope.favBox = "favorite";
      }else{
        $scope.favBox = "";
      }

      $scope.nameList.push({
        name: $scope.nameBox,
        favorite: $scope.favBox,
        phone: $scope.phoneBox,
        email: $scope.emailBox,
        phone: $scope.phoneBox,
        department: $scope.departmentBox,
        oNo: $scope.oNoBox,
        position: $scope.positionBox,
        timetable: $scope.timetableBox,

      });

      $scope.nameSorter();

      $scope.emailBox = "";
      $scope.nameBox = "";
      $scope.phoneBox = "";
      $scope.nameBox,
      $scope.favBox,
      $scope.phoneBox,
      $scope.emailBox,
      $scope.phoneBox,
      $scope.departmentBox,
      $scope.oNoBox,
      $scope.positionBox,
      $scope.timetableBox

    }
var scott;
    $scope.removeName = function($index) {
      var curName = $scope.nameList[$index].name;
      $scope.nameList.splice($index, 1);
      console.log(curName + " removed");
    }

    $scope.deleteAll = function() {
      $scope.nameList = [];
    }

    $scope.favSort = false;

    $scope.favToggle = function() {
      if ($scope.favSort) {
        $scope.favSort = false;
      } else {
        $scope.favSort = true;
      }
      console.log($scope.favSort);
    }

    $scope.filterFavs = function(obj) {
      //console.log(obj.name, obj.favorite);
      if ($scope.favSort) {
        if (obj.favorite === "favorite") {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }

    }
  });