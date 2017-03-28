function(doc) {
    if(doc.source &&
       doc.target){
	emit(doc._id, doc);
    }
}
