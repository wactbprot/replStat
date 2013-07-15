function(head, req) {


    var mustache = require("lib/couchapp/mustache"),
    header       = this.templates.header,
    body         = this.templates.body,
    foot         = this.templates.foot,
    sco          = {error:"red",
		    completed:"green",
		    triggered:"orange"
		   },
    row;
    
    start({
	      headers: {"Content-type": "text/html"}
	  });

    send( mustache.to_html(header, 
			   {"Title":"Replication State"}));

    while(row = getRow()) {
	var rv   = row.value,
	rvs      = rv._replication_state;

	send( mustache.to_html(body,
			       { id:rv._id,
				 target:rv.target.replace("http://", ""),
				 source:rv.source.replace("http://", ""),
				 time:rv._replication_state_time,
				 state:rvs,
				 state_color:sco[rvs]		 
			       }
			      )
	    );
    }
    
    send( mustache.to_html(foot, 
			   {"Date":"nil"}));
};
  // ---example doc
  //  value: {
  //     "_id": "from_a73435",
  //     "_rev": "818-4e53042a4f3f175d36ff5db2ea2dd050",
  //     "source": "http://a73435.berlin.ptb.de:5984/vaclab_db",
  //     "target": "http://a73434.berlin.ptb.de:5984/vaclab_db",
  //     "create_target": true,
  //     "owner": null,
  //     "_replication_state": "completed",
  //     "_replication_state_time": "2013-07-15T12:25:04+02:00",
  //     "_replication_id": "97f4da0a2d2689385098f4b7ec5c9980",
  //     "_replication_stats": {
  //         "revisions_checked": 0,
  //         "missing_revisions_found": 0,
  //         "docs_read": 0,
  //         "docs_written": 0,
  //         "doc_write_failures": 0,
  //         "checkpointed_source_seq": 1897
  //     }
  //  }