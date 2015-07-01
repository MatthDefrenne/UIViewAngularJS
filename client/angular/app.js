angular.module('app.services', ["ui.router"]);
angular.module('app.controllers', ["ui.router"]);
angular.module('app.directives', ["ui.router"]);
angular.module('app.filters', ["ui.router"]);
angular.module('app.factories', ["ui.router"]);
angular.module('app.constants', ["ui.router"]);

angular.module('app', [
    'ui.router','ngResource',
    'app.controllers', 'app.services', 'app.filters', 'app.directives', 'app.factories', 'app.constants'
]);

