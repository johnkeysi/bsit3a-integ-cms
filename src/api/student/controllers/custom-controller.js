'use strict';

const course = require("../../course/controllers/course");

module.exports = {

    // @ts-ignore
    async getStudents(ctx) {
        try {
            const students = await strapi.documents("api::student.student").findMany(
                {
                    filters: {
                        course: {
                            id: '1'
                        },
                        student_status: 'active'
                    },
                    
                    populate: {
                        course: true,
                    }
                }
            );

            ctx.body = students;
            ctx.status - 200;


        }catch (error) {
            ctx.throw(500, error);
        }
 
    },
    //@ts-ignore
    //crete a new student
    async createStudent(ctx) {
        try {
            const  {
                student_no,
                last_name,
                first_name,
                middle_name,
                year_level,
                student_status,
                course_id
            } = ctx.request.body
            const createStudent = await strapi.documents("api::student.student").create({
                data: {
                    student_no: student_no,
                    last_name: last_name,
                    first_name: first_name,
                    middle_name: middle_name,
                    year_level: year_level,
                    student_status: student_status,
                    course: course_id,
                },
                populate: {
                    course:true,
                }
            })
            ctx.body = createStudent;
        }
        catch(error) {
            ctx.throw(500, error);
        }
    },

    //create student information
    //@ts-ignore
    async updateStudents(ctx) {
        try {

        }
        catch(error) {
            ctx.throw(500, error);
        }
    },
        
    //@ts-ignore
    async deleteStudents(ctx) {
        try {
            
            const { id } = ctx.params  

            const checkIfExisting = await strapi.documents("api::student.student").findOne({
                documentId: id
            });
            if(!checkIfExisting) {
                return ctx.notFound('Student not found');
            }

            
            const deleteStudent = await strapi.documents("api::student.student").delete({
                documentId: id,});
                ctx.body = {
                    message: 'Student Deleted',
                    status: 200,
                }

        }
        catch(error) {
            ctx.throw(500, error);
        }
    
}
};



