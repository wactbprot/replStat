exports.defaultReplacement= function(task,defaults,query){

    defaults = defaults || task.Defaults;
    query    = query    || {};

    if(defaults){
	for(var i in defaults){
	  
	    var subs = new RegExp(i,'g')
	    for(var j in task){
		/**
		 * diese properties werden von der 
		 * Ersetzung ausgeschlossen
		 */
		if( (j != "Defaults") && 
		    (j != "ErrorResponse") &&
		    (j != "TaskName") &&
		    (j != "DocPath") 
		  ){
		      /**
		       * geht noch eine Ebene in die Tiefe
		       * v.a. wegen PostProcessing 
		       */
		      if( typeof(task[j]) == "object"){ 
			 
			  for (var k in  task[j]){

			      if(query[i]){
				  task[j][k] = task[j][k].replace(subs,query[i]);
			      }else{
				  if(typeof task[j][k] == "string" ){
				     
				      task[j][k] = task[j][k].replace(subs,defaults[i]);				    
				  }
			      }
			  }
		      }
		      if( typeof(task[j]) == "string"){  
			
			  if(query[i]){
			      task[j] = task[j].replace(subs,query[i]);
			  }else{
			      task[j] = task[j].replace(subs,defaults[i]);
			  }
		      }
		  }//!defaults
	    }// for j in tasks
	}// for in in defaults
    }// have defaults
    return task;
};

exports.test = "fffuuuu";

exports.indexOf = function(arr,obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == obj)
      return i;
  }
  return -1;
};


/**
 * http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
 */
exports.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

exports.isArray = function(obj) {
    if (obj.constructor.toString().indexOf("Array") == -1){
	return false;    
    }else{
	return true;    
    }
    
};


exports.generateHtml = function(format,_resArr,_key){
    _key = _key || "key";
    /**
     * wenn Zeit ist kann hier mal der retType zerlegt werden
     * um die html- tags autom. zusammenzubauen
     */
    var fArr = format.split(/[-_]+/),
    noOfTags = fArr.length;
    
    var st = "", 
    et = "", // start tag end tag 
    mds = "<" + fArr[noOfTags-1] + ">",
    mde = "</" + fArr[noOfTags-1] + ">",
    md = "";
    
    for(var j =1; j < (noOfTags-1); ++j){
	st = st + "<" + fArr[j] + ">";
	et = "</" + fArr[j] + ">" + et;
    }

    for (var i = 0; i < _resArr.length; ++i){
   	md = md + "<" + fArr[noOfTags-1] + ">" + 
	    _resArr[i][_key] + 
	    "</" + fArr[noOfTags-1] + ">"; 
    }

    return st + md +  et;
};

exports.start = {
    "headers": {
        "Content-Type": "application/json",
        "charset":"utf-8"
    }
};
 
