Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('tables/create', {
  name: 'createTables',
  controller: 'TablesController',
  action: 'create',
  where: 'client'
});

Router.route('jsonfile', {
  name: 'jsonfile',
  controller: 'JsonfileController',
  where: 'client'
});

Router.route('/tables', {
    name: 'tablesList',
    controller: 'TablesController',
    action: 'list',
    where: 'client'
});

Router.route('/tables/:_id', {
    name: 'editTable',
    controller: 'TablesController',
    action: 'edit',
    where: 'client'
});