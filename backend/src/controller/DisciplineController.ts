import { Request, Response } from 'express';
import { DisciplineService, DisciplineServiceInterface } from '../service/DisciplineService';

export class DisciplineController {

    private disciplineService: DisciplineServiceInterface = new DisciplineService();

    async createDiscipline(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number;
        var responseBody: object;
        try {
            const discipline = request.body;
            await this.disciplineService.createDiscipline(discipline);
            responseBody = { message: "Discipline created successfully!", discipline};
            codeResponse = 201;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to create a discipline!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async createManyDisciplines(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number;
        var responseBody: object;
        try {
            const disciplines = request.body;
            await this.disciplineService.createManyDisciplines(disciplines);
            responseBody = { message: "Discipline created successfully!", disciplines};
            codeResponse = 201;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to create a discipline!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async deleteDiscipline(request: Request, response: Response): Promise<Response> {
        var codeResponse: number;
        var responseBody: object;
        try {
            const { id } = request.params;
            await this.disciplineService.deleteDiscipline(Number(id));
            responseBody = { message: "Discipline was deleted successfully!"};
            codeResponse = 200;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to delete a discipline!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async deleteAllDisciplines(request: Request, response: Response): Promise<Response> {
        var codeResponse: number;
        var responseBody: object;
        try {
            await this.disciplineService.deleteAllDisciplines();
            responseBody = { message: "All disciplines were deleted successfully!"};
            codeResponse = 200;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to delete all disciplines!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async updateDiscipline(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number;
        var responseBody: object;
        try {
            const { id } = request.params;
            const discipline = request.body;
            await this.disciplineService.updateDiscipline(Number(id), discipline);
            responseBody = { message: "Discipline updated successfully!", discipline};
            codeResponse = 200;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to update a discipline!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async patchDiscipline(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number;
        var responseBody: object;
        try {
            const { id } = request.params;
            const updates = request.body;
            await this.disciplineService.patchDiscipline(Number(id), updates);
            const discipline = await this.disciplineService.getOneDisciplineByID(Number(id));
            responseBody = { message: "Discipline's field updated successfully!", discipline};
            codeResponse = 200;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to update a discipline's field!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async getOneDisciplineByID(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number;
        var responseBody: object;
        try {
            const { id } = request.params;
            const discipline = await this.disciplineService.getOneDisciplineByID(Number(id));
            responseBody = { message: "Discipline was found successfully!", discipline};
            codeResponse = 200;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to get one discipline!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async getOneDisciplineByName(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number;
        var responseBody: object;
        try {
            const { name } = request.params;
            const discipline = await this.disciplineService.getOneDisciplineByName(name);
            responseBody = { message: "Discipline was found successfully!", discipline};
            codeResponse = 200;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to get one discipline!"};
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }

    async getAllDisciplines(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number;
        var responseBody: object;
        try {
            const disciplines = await this.disciplineService.getAllDisciplines();
            responseBody = { message: "Disciplines were found successfully!", disciplines};
            codeResponse = 200;
        } catch (error: any) {
            responseBody = { message: error.message || "Error trying to get all disciplines!" };
            codeResponse = error.statusCode && !isNaN(error.statusCode) ? error.statusCode : 400;
        }
        return response.status(codeResponse).json(responseBody)
    }
}