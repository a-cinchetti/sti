/*****************************************************************************/
/* EditTable: Event Handlers */
/*****************************************************************************/
Template.EditTable.events({
    'click #delete': function (e,t) {
        e.stopPropagation();
        e.preventDefault();
        var ident= this._id;
        console.log(ident);
        if (confirm('Really delete table\?')) {
            Meteor.call('file-delete', ident,
                function(error, result) {
                    if (result) {
                        Router.go('tablesList');
                    }
                }
            );
        }


    },
    'submit form': function (e,t) {
        e.stopPropagation();
        e.preventDefault();
        var ident = this._id;
        if(e.target.name.value==null || e.target.name.value=="" ) {
            alert("INSERT A DESCRIPTION");
        }else {
            var name = e.target.name.value;
            if (t.find('#file').files[0]==null) {
                Meteor.call('simpleUpdate', name,ident,
                    function(error, result){
                        if(result){
                        }
                    });
            } else {
                var file = t.find('#file').files[0];
                if(!/.*\.json/i.test(file.name))
                    alert("INSERT A CORRECT JSON FILE, NOT OTHER FILE");
                else {
                    var reader = new FileReader();
                    reader.onload = function() {
                        Meteor.call('updateJson', file.name, reader.result, name, ident,
                            function(error, result){
                                if(result){
                                    location.reload();
                                }
                            }
                        );
                    };
                    reader.onerror = function(error){
                        alert(error);
                    };
                    reader.readAsText(file);
                }

            }
        }
    }
});

/*****************************************************************************/
/* EditTable: Helpers */
/*****************************************************************************/
Template.EditTable.helpers({
    name: function() {
        return Tables.findOne({_id: this._id}).name;
    },
    filename: function(){
        return Tables.findOne({_id: this._id}).file_name;
    },
    Datetime: function(){
        return Tables.findOne({_id: this._id}).date;
    },
    Data: function(){
        return (Jsonfile.findOne({_id: this._id}).data);
    }
});

/*****************************************************************************/
/* EditTable: Lifecycle Hooks */
/*****************************************************************************/
Template.EditTable.onCreated(function () {
});

Template.EditTable.onRendered(function () {
});

Template.EditTable.onDestroyed(function () {
});
