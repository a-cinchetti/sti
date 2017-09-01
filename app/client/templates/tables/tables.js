/*****************************************************************************/
/* Tables: Event Handlers */
/*****************************************************************************/
Template.Tables.events({
    'submit form': function (e,t) {
        e.stopPropagation();
        e.preventDefault();
        var name = e.target.name.value;
        console.log(name);
        var file = t.find('#file').files[0];
        var reader = new FileReader();
        // console.log(file.name);
        reader.onload = function() {
            Meteor.call('file-upload', file.name, reader.result, name);
        };
        reader.onerror = function(error){
            alert(error);
        };
        reader.readAsText(file);
    }
});

/*****************************************************************************/
/* Tables: Helpers */
/*****************************************************************************/
Template.Tables.helpers({
});

/*****************************************************************************/
/* Tables: Lifecycle Hooks */
/*****************************************************************************/
Template.Tables.onCreated(function () {
});

Template.Tables.onRendered(function () {
});

Template.Tables.onDestroyed(function () {
});
