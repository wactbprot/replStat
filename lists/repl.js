function(head, req) {

  var mustache = require("lib/couchapp/mustache"),
      share        = require("lib/vaclab/share"),
      header       = this.templates.header,
      body         = this.templates.body,
      foot         = this.templates.foot,
      sco          = {error:"red",
                      completed:"green",
                      triggered:"limegreen"},
      row;
  start({headers: {"Content-type": "text/html"}});

  send( mustache.to_html(header,
                         {"Title":"Replication State"}));

  while(row = getRow()) {
    var rv   = row.value,
        rvs      = rv._replication_state,
        pattern  = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
        targetCompl = rv.target,
        sourceCompl = rv.source,
        rd = share.vlDateString(rv._replication_state_time).split(" "),
        neg = { id:rv._id,
        masterdbStr:"http://a73434:5984/_utils/#/database/_replicator/",
                fauxtonStr:"/_utils/#/database/",
                protStr: "http://",
                viewStr:"/_all_docs",
                date:rd[0],
                time:rd[1],
                state:rvs,
                state_color:sco[rvs]
              };

    neg.targetShort = targetCompl.match(pattern)[4]
    neg.sourceShort = sourceCompl.match(pattern)[4]
    neg.targetDispl = targetCompl.match(pattern)[4].split(":")[0].split(".")[0];;
    neg.sourceDispl = sourceCompl.match(pattern)[4].split(":")[0].split(".")[0];
    neg.sourceDb    = targetCompl.match(pattern)[5].replace("/","");
    neg.targetDb    = sourceCompl.match(pattern)[5].replace("/","");

    send( mustache.to_html(body,neg));
  }

  send( mustache.to_html(foot,
                         {"Date":new Date()}));
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