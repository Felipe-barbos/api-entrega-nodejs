import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman.ts/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { ensureAuthenticateClient } from "./modules/middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./modules/middlewares/ensureAuthenticateDeliveryman";


const routes = Router();


const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const findAllAvailableController = new FindAllAvailableController();

const updateDeliverymanController = new UpdateDeliverymanController();

const findAllDeliveriesController = new FindAllDeliveriesController();

const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

const updateEndDateController = new UpdateEndDateController();


routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);


routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle);


routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id_delivery", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.put("/delivery/updateEndDate/:id_delivery", ensureAuthenticateDeliveryman, updateEndDateController.handle);



export { routes };

