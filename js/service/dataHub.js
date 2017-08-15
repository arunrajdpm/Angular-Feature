 (function() {
      'use strict';

        var app = angular.module('angularApp');

       app.service("dataHub", function(){
             return {
                 employeeDetails : employeeDetails
             };

             function employeeDetails(){
                 return [
                                {
                                    "_id": "599197bf561296f9e47dcf56",
                                    "index": 0,
                                    "guid": "39cad23d-a732-4d2f-ab0f-d4995cb8a215",
                                    "isActive": true,
                                    "picture": "http://placehold.it/32x32",
                                    "age": 39,
                                    "position": "Supervisor",
                                    "name": {
                                    "first": "Luann",
                                    "last": "Spence"
                                    },
                                    "company": "INDEXIA",
                                    "email": "luann.spence@indexia.biz",
                                    "phone": "+1 (899) 476-2203"
                                },
                                {
                                    "_id": "599197bf13914d6b2e047baf",
                                    "index": 1,
                                    "guid": "ee4c58cc-1b78-4a28-832c-ac561604cc2c",
                                    "isActive": true,
                                    "picture": "http://placehold.it/32x32",
                                    "age": 25,
                                    "position": "Supervisor",
                                    "name": {
                                    "first": "Figueroa",
                                    "last": "Wilkinson"
                                    },
                                    "company": "TWIIST",
                                    "email": "figueroa.wilkinson@twiist.com",
                                    "phone": "+1 (974) 596-2681"
                                },
                                {
                                    "_id": "599197bf32d8e13ff255f06e",
                                    "index": 2,
                                    "guid": "8ca4ddc9-40e7-4d42-ac97-3032a6d36058",
                                    "isActive": false,
                                    "picture": "http://placehold.it/32x32",
                                    "age": 37,
                                    "position": "HElper",
                                    "name": {
                                    "first": "Robinson",
                                    "last": "Schroeder"
                                    },
                                    "company": "BUGSALL",
                                    "email": "robinson.schroeder@bugsall.ca",
                                    "phone": "+1 (990) 491-3784"
                                },
                                {
                                    "_id": "599197bfc81d72a73760b322",
                                    "index": 3,
                                    "guid": "4e550da9-cbc5-4ed7-97fe-2ef521a6e7a4",
                                    "isActive": true,
                                    "picture": "http://placehold.it/32x32",
                                    "age": 36,
                                    "position": "Rocha",
                                    "name": {
                                    "first": "Small",
                                    "last": "Richardson"
                                    },
                                    "company": "ESCHOIR",
                                    "email": "small.richardson@eschoir.me",
                                    "phone": "+1 (861) 504-2376"
                                },
                                {
                                    "_id": "599197bf05dea768e78e1757",
                                    "index": 4,
                                    "guid": "f126eb73-45e2-40b8-90c2-d92ad0d35a5b",
                                    "isActive": false,
                                    "picture": "http://placehold.it/32x32",
                                    "age": 27,
                                    "position": "Harding",
                                    "name": {
                                    "first": "Chavez",
                                    "last": "Hill"
                                    },
                                    "company": "XPLOR",
                                    "email": "chavez.hill@xplor.us",
                                    "phone": "+1 (811) 440-3448"
                                },
                                {
                                    "_id": "599197bf6a2060bc6df52004",
                                    "index": 5,
                                    "guid": "7aa6c268-f124-49f0-af3e-99b5801b3805",
                                    "isActive": true,
                                    "picture": "http://placehold.it/32x32",
                                    "age": 26,
                                    "position": "Montgomery",
                                    "name": {
                                    "first": "Burton",
                                    "last": "Yates"
                                    },
                                    "company": "INTRADISK",
                                    "email": "burton.yates@intradisk.tv",
                                    "phone": "+1 (844) 420-3060"
                                }
                                ];
             }
       })
})();