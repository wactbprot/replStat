exports.globals= {
    "Ids": {
        "g-monitor": "g-monitor",
        "log": "log",
        "usrInp":"usrInp",
        "calibTable": "select_calib",       
        "rfoot": "rfoot",
        "lfoot":"lfoot",
        "content": "content",
        "forward": "forward",
        "idAppend": "ids",
        "nodeserver": "nodeserver",
        "askForRepeat": "askForRepeatId"
    },
    "Values": {
        "noOfRepeats": 1,
        "heartbeat": 500,
        "noOfLogKeeps": 100,
	"askForRepeat": true
    },
    "Prefixes": {
        "info": "randomPage",
        "g-monitor": "g-monitor",
        "buttonRun": "buttonRun",
        "buttonGen": "buttonGen",
        "buttonStop": "buttonStop",
        "step": "step",
        "main": "scMain",
        "inputData": "inputData", //needed? -> todo!!
        "usrInpData": "usrInp",
        "outputaData": "outputData", //needed? -> todo!!
	"toSaveData":"toSaveData",
	"toIdData":"toIdData",
        "exchangeData": "exchangeData",
        "dform":"dform"
    },
    "Classes": {
	"infoPage": "randomPage",
        "calDocId":"calDocId",
        "calDocRev":"calDocRev",
        "calDocSign" :"calDocSign",
        "calDocType" :"calDocType",
        "calDocStandard" :"calDocStandard",
        "calDocYear":"calDocYear",
        "monitor": "monitor",
        "g-monitor": "g-monitor",
        "dformContent": "dformContent",
        "buttonRun": "buttonRun",
        "buttonStop": "buttonStop",
        "buttonGen": "buttonGen",
        "recipeContent": "recipeContent",
        "selected": "selected",
        "visited": "visited",
        "running": "running",
        "executed": "executed",
        "notExecuted": "notExecuted",
        "vals": "vals",
        "dyn": "dyn",
        "par": "par",
        "seq": "seq"
    },
    "Misc": {
        "futonString"  : "/_utils/document.html?",
        "nodeServerUrl": "http://localhost:55555",
        "custCoMarker" : "CUCO"
    }
};
// better in a own file:
// TODO!
exports.TaskTemplates = {
    "callList": {
        "Key": "?taskName",
        "Action": "yamp_worker_getList",
        "ListName": "get_task",
        "ViewName": "tasks",
        "Format": "json_plain",
        "Callback": "?callback",
        "Callafter": "?callafter"
    },
    "callShow": {
        "Id": "?id",
        "Action": "yamp_worker_getShow",
        "ShowName": "doc_info",
        "AppendTo": "doc_info",
        "UrlParams": {
            "template": "docInfo"
        }
    },
    "CUCO_pressure_init":{
        "Comment": "erstellt ein Eingabeformular  dessen Werte nach Calibration/Measuremen/Values/Pressure geschrieben werden",
        "Action": "yamp_worker_makeDForm",
	"AppendTo":"cuco_ini",
        "DocPath": "Calibration_Measurement_Values_Pressure",
        "Value": {
            "type": "fieldset",
            "class": "vals",
            "caption": "?CUCO",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "val_ok",
                    "class": "valuebox",
                    "caption": "OK  "
                },
                {
                    "name": "type",
                    "value": "ind",
                    "type": "text",
                    "class": "type",
                    "caption": "Type"
                },
                {
                    "name": "Value",
                    "type": "text",
                    "class": "value",
                    "caption": "Value"
                },
                {
                    "name": "Unit",
                    "type": "text",
                    "value": "mbar",
                    "class": "unit",
                    "caption": "Unit"
                }
            ]
        }
    }
};
