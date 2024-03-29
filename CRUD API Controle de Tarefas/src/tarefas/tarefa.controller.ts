import { Request, Response } from "express";
import tarefaService from "./tarefa.service";

class TarefaController {
  async create(req: Request, res: Response) {
    try {
      const tarefa = await tarefaService.create(req.body);
      return res.json(tarefa);
    } catch (error) {
      return error;
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const tarefa = await tarefaService.findById(req.params.id);
      return res.json(tarefa);
    } catch (error) {
      return error;
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const tarefa = await tarefaService.findAll();
      return res.json(tarefa);
    } catch (error) {
      return error;
    }
  }

  async update(req: Request, res: Response) {
    try {
      const tarefa = await tarefaService.update(req.params.id, req.body);
      return res.json(tarefa);
    } catch (error) {
      return error;
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const tarefa = await tarefaService.delete(req.params.id);
      return res.json(tarefa);
    } catch (error) {
      return error;
    }
  }
}

export default new TarefaController();
