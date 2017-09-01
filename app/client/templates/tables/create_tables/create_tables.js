/*****************************************************************************/
/* CreateTables: Event Handlers */
/*****************************************************************************/
Template.CreateTables.events({
    'submit form': function (e,t) {
        e.stopPropagation();
        e.preventDefault();
        if(e.target.name.value==null || e.target.name.value=="" ) {
            alert("INSERT A DESCRIPTION");
        }else {
            var name = e.target.name.value;
            console.log(name);
            if (t.find('#file').files[0]==null) {
                alert("INSERT JSON FILE");
            } else {
                var file = t.find('#file').files[0];
                if(!/.*\.json/i.test(file.name))
                    alert("INSERT A CORRECT JSON FILE, NOT OTHER FILE");
                else {
                    console.log(file.name);
                    var reader = new FileReader();
                    // console.log(file.name);
                    reader.onload = function() {
                        Meteor.call('file-upload', file.name, reader.result, name,
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
/* CreateTables: Helpers */
/*****************************************************************************/
Template.CreateTables.helpers({
});

/*****************************************************************************/
/* CreateTables: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTables.onCreated(function () {
});

Template.CreateTables.onRendered(function () {
});

Template.CreateTables.onDestroyed(function () {
});
