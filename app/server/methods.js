/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

var fs= require('fs');
Meteor.methods({
  'server\method_name': function () {
    // server method logic
  },
  'file-upload': function (fileInfo, fileData, nameinput) {
    console.log(fileInfo);
    // console.log("received file " + fileInfo.name + " data: " + fileData);
    // var a = "\.\/" + fileInfo.name;
    // fs.writeFile('./files', fileInfo, fileData);
    //   if(/.*\.json/i.test(fileInfo))
      // console.log(JSON.parse(fileData));
    console.log(nameinput);
    var  original_id = new Mongo.ObjectID()._str;
    console.log(original_id);

      Tables.insert({
          "_id": original_id,
          "name": nameinput,
          "file_name": fileInfo,
          "date": new Date()
      });
      Jsonfile.insert({
          "_id": original_id,
          "data": fileData

      });
      return true;
},
    'file-delete' : function(fileid) {

      Tables.remove({_id: fileid});
      Jsonfile.remove({_id: fileid});

      return true;


    },
    'simpleUpdate': function (nameinput, ident) {
        console.log(nameinput);
        console.log(ident);
        Tables.update({ _id : ident},
            { $set: {
                name: nameinput,
                date: new Date()
            }}

        );
        console.log(Tables.findOne({_id: ident}));
        return true;
    },
    'updateJson': function (fileInfo, fileData, nameinput, ident) {

        Tables.update({ _id : ident},
            { $set: {
                name: nameinput,
                file_name:fileInfo,
                date: new Date()
            }}

        );
        Jsonfile.update({ _id : ident},
            { $set: {
                data: fileData
            }}

        );
        return true;
    }

});
