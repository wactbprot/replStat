function(doc) {
    if(doc.source && 
       doc.target && 
       doc._replication_state_time){
	emit(doc._replication_state_time, doc);
    }
}
