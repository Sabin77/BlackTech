import * as graphql from "@nestjs/graphql";
import { SupplierResolverBase } from "./base/supplier.resolver.base";
import { Supplier } from "./base/Supplier";
import { SupplierService } from "./supplier.service";

@graphql.Resolver(() => Supplier)
export class SupplierResolver extends SupplierResolverBase {
  constructor(protected readonly service: SupplierService) {
    super(service);
  }
}
