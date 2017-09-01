/*****************************************************************************/
/* ListTables: Event Handlers */
/*****************************************************************************/
Template.ListTables.events({
});

/*****************************************************************************/
/* ListTables: Helpers */
/*****************************************************************************/
Template.ListTables.helpers({
    tables: function() {
        return Tables.find();
    }
});

/*****************************************************************************/
/* ListTables: Lifecycle Hooks */
/*****************************************************************************/
Template.ListTables.onCreated(function () {
});

Template.ListTables.onRendered(function () {
});

Template.ListTables.onDestroyed(function () {
});
