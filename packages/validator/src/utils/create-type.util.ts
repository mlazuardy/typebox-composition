import { TypeSystem } from "@sinclair/typebox/system";
import { CreateTypeOptions } from "../interfaces/create-type.interface";

/**
 * Create new custom Typesystem.Type
 * instead directly use Typesystem.Type
 * we will create a type using this function
 * so you can add any metadata and render the message correctly based on metadata
 */
export function createType<Type, Options = object>(
  options: CreateTypeOptions<Options>,
) {
  const T = TypeSystem.Type<Type, Options>(options.kind, (options, value) => {
    return true;
  });

  return T;
}

const FileType = createType<File>({ kind: "String", message: "testW" });
