import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupplierService } from "./supplier.service";
import { SupplierControllerBase } from "./base/supplier.controller.base";

@swagger.ApiTags("suppliers")
@common.Controller("suppliers")
export class SupplierController extends SupplierControllerBase {
  constructor(protected readonly service: SupplierService) {
    super(service);
  }
}
