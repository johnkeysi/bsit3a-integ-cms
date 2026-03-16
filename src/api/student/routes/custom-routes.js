'use strict';
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/students/list',
            handler: 'custom-controller.getStudents'
        }
    ],
};