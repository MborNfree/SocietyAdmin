
//FireBase
// exports.firebaseConfig = {
//     apiKey: "AIzaSyDsPufr5Dhusqal0bB8VDD9N6yv9u0Lo1E",
//     authDomain: "tester-8e38d.firebaseapp.com",
//     databaseURL: "https://tester-8e38d.firebaseio.com",
//     projectId: "tester-8e38d",
//     storageBucket: "tester-8e38d.appspot.com",
//     messagingSenderId: "490493205074"
// };

exports.firebaseConfig = {
  apiKey: "AIzaSyCdBaGl6H_IuyzMyEnjq-6VRD5-2alxUtg",
  authDomain: "society-182906.firebaseapp.com",
  databaseURL: "https://society-182906.firebaseio.com",
  projectId: "society-182906",
  storageBucket: "society-182906.appspot.com",
  messagingSenderId: "583609948893"
};


//App setup
exports.adminConfig={
  "appName": "FireAdmin",
  "slogan":"made with love for a better firebase.",

  "design":{
    "sidebarBg":"sidebar-1.jpg", //sidebar-1, sidebar-2, sidebar-3
    "dataActiveColor":"rose", //"purple | blue | green | orange | red | rose"
    "dataBackgroundColor":"black", // "white | black"
  },

  "codeversion": "1.0",
  "allowedUsers":null, //If null, allow all users, else it should be array of allowd users
  "allowGoogleAuth":true, //Allowed users must contain list of allowed users in order to use google auth
  "fieldBoxName": "Fields",
  "maxNumberOfTableHeaders":5,
  "prefixForJoin":["-event"],
  "methodOfInsertingNewObjects":"push", //timestamp (key+time) | push - use firebase keys
  "urlSeparator":"+",
  "urlSeparatorFirestoreSubArray":"~",


  "fieldsTypes":{
    "photo":["photo","image"],
    "dateTime":["datetime","start"],
    "date":["date","created"],
    "time":["time"],
    "map":["map","latlng","location"],
    "textarea":["description"],
    "html":["content"],
    "radio":["radio","radiotf","featured"],
    "checkbox":["checkbox"],
    "dropdowns":["status","dropdowns"],
    "file":["video"],
    "rgbaColor":['rgba'],
    "hexColor":['color'],
    "relation":['type','creator'],
    "iconmd":['icon'],
    "iconfa":['iconfa'],
    "iconti":['iconti'],
  },
  "optionsForSelect":[
      {"key":"dropdowns","options":["new","processing","rejected","completed"]},
      {"key":"checkbox","options":["Skopje","Belgrade","New York"]},
      {"key":"status","options":["just_created","confirmed","canceled"]},
      {"key":"radio","options":["no","maybe","yes"]},
      {"key":"radiotf","options":["true","false"]},
      {"key":"featured","options":["true","false"]}
  ],
  "optionsForRelation":[
      {
        //Firestore - Native
        "display": "name",
        "isValuePath": true,
        "key": "creator",
        "path": "/users",
        "produceRelationKey": false,
        "relationJoiner": "-",
        "relationKey": "type_eventid",
        "value": "name"
      },
      {
        //Firebase - Mimic function
        "display":"name",
        "key":"eventtype",
        "path":"",
        "isValuePath":false,
        "value":"name",
        "produceRelationKey":true,
        "relationJoiner":"-",
        "relationKey":"type_eventid"
      }
  ],
  "paging":{
    "pageSize": 20,
    "finite": true,
    "retainLastPage": false
  }
}

//Navigation
exports.navigation=[
    {
      "link": "/",
      "name": "Dashboard",
      "schema":null,
      "icon":"home",
      "path": "",
       isIndex:true,
    },
    {
      "link": "fireadmin",
      "path": "events",
      "name": "Events",
      "icon":"event",
      "tableFields":["event_name","event_type"],
      "subMenus":[
        {
          "link": "addevent",
          "path": "",
          "name": "Add Event",
          "icon":"speaker_notes",
          "tableFields":[],
        },
        {
          "link": "fireadmin",
          "path": "events",
          "name": "Skopje",
          "icon":"event",
          "tableFields":["event_name","event_type"]
        },{
          "link": "fireadmin",
          "path": "events",
          "name": "Sofia",
          "icon":"event",
          "tableFields":["event_name","event_type"],
        },{
          "link": "fireadmin",
          "path": "events",
          "name": "Belgrade",
          "icon":"event",
          "tableFields":["event_name","description"],
        }
      ]
    },
    {
      "link": "fireadmin",
      "path": "services",
      "name": "Services",
      "icon":"room",
      "tableFields":["name","description"],
      "subMenus":[
        {
          "link": "addservice",
          "path": "",
          "name": "Add Serivce",
          "icon":"speaker_notes",
          "tableFields":[],
        }, {
          "link": "addservicecat",
          "path": "",
          "name": "Add Serivce Category",
          "icon":"speaker_notes",
          "tableFields":[],
        },{
          "link": "fireadmin",
          "path": "services",
          "name": "service list",
          "icon":"event",
          "tableFields":["Service_name:","Description"],
        }
      ]
    },
    {
      "link": "fireadmin",
      "path": "documents",
      "name": "Documents",
      "icon":"note",
      "tableFields":[],
      "subMenus":[
        {
          "link": "adddocument",
          "path": "",
          "name": "Add Document",
          "icon":"event",
          "tableFields":["document_name:","Description"]
        },{
          "link": "fireadmin",
          "path": "documents",
          "name": "Documents",
          "icon":"event",
          "tableFields":["Contact_name:","Description"],
        }
      ]
    },{
      "link": "fireadmin",
      "path": "emerg_contact",
      "name": "Emergency Contacts",
      "icon":"phone",
      "tableFields":["name","description"],
      "subMenus":[
        {
          "link": "addcontact",
          "path": "",
          "name": "Add contact",
          "icon":"event",
          "tableFields":["contact_name:","Description"]
        },{
          "link": "fireadmin",
          "path": "emerg_contact",
          "name": "Emergency Contacts",
          "icon":"event",
          "tableFields":["Contact_name:","Description"],
        }
      ]
     },
     {
      "link": "fireadmin",
      "path": "account_master",
      "name": "Accounts",
      "icon":"location_city",
      "tableFields":["name","description"],
      "subMenus":[
        {
          "link": "addaccount",
          "path": "",
          "name": "Add account",
          "icon":"event",
          "tableFields":["account_name:","Description"]
        }, {
          "link": "addsubaccount",
          "path": "",
          "name": "Add account sub type",
          "icon":"event",
          "tableFields":["account_name:","Description"]
        }, {
          "link": "addaccounttype",
          "path": "",
          "name": " account type",
          "icon":"event",
          "tableFields":["account_name:","Description"]
        },{
          "link": "fireadmin",
          "path": "account_master",
          "name": "Accounts",
          "icon":"event",
          "tableFields":["account_name:","Description"],
        }
      ]
     },
     {
      "link": "fireadmin",
      "path": "billing",
      "name": "Bills",
      "icon":"location_city",
      "tableFields":["name","description"],
      "subMenus":[
        {
          "link": "addbill",
          "path": "",
          "name": "add bill",
          "icon":"location_city",
          "tableFields":["name:","Description"]
        },{
          "link": "fireadmin",
          "path": "billing",
          "name": "bills",
          "icon":"location_city",
          "tableFields":["name:","Description"],
        },{
          "link": "fireadmin",
          "path": "billing_charges",
          "name": "bills charges",
          "icon":"location_city",
          "tableFields":["name:","Description"],
        },{
          "link": "addbillcharges",
          "path": "",
          "name": "Add Bill Charges",
          "icon":"location_city",
          "tableFields":["name:","Description"],
        }
      ]
     },{
      "link": "push",
      "path": "",
      "name": "Push notification",
      "icon":"speaker_notes",
      "tableFields":[],
    }
  ];

exports.pushSettings={
  "pushType":"onesignal", //firebase or onesignal
  "Firebase_AuthorizationPushKey":"AIzaSyCFUf7fspu61J9YsWE-2A-vI9of1ihtSiE", //Firebase push authorization ket
  "pushTopic":"news", //Only for firebase push
  "oneSignal_REST_API_KEY":"",
  "oneSignal_APP_KEY":"",
  "included_segments":"Active Users", //Only for onesignal push
}

exports.userDetails={

}