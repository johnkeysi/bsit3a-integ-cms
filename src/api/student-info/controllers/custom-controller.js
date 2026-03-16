'use strict';
//@ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::student-info.student-info',
    ({strapi}) => ({
async testApi(ctx) {
    ctx.body = 'Hello World'
    ctx.status = 200;

},

//  get all student list
async getStudentList(ctx) {
try {
    const data = await strapi.documents('api::student-info.student-info').findMany();
    ctx.body = data;
    } catch (error) {
    ctx.throw(500, error)
}
}

}));