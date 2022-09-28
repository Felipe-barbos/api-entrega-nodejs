import { Request, Response } from "express";
import { FindallDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";


export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const findAllDeliveriesDeliverymanUseCase = new FindallDeliveriesDeliverymanUseCase();

    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(
      id_deliveryman
    );

    return response.json(deliveries);
  }
}