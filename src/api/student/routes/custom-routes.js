'use strict';
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/students/list',
            handler: 'custom-controller.getStudents'
        },

         {
            method: 'POST',
            path: '/students/create',
            handler: 'custom-controller.createStudent'
        },

        {
            method: 'DELETE',
            path: '/students/:id',
            handler: 'custom-controller.deleteStudents'
        }

    ],

};