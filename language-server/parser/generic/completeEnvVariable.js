import { DotToken, Identifier } from "../../lexer/tokens.js";
import {
  EnvVariable,
  RemoteHostVariable,
  RemoteIpVariable,
  RemotePasswordVariable,
  RemotePortVariable,
  RemoteUserVariable,
  RequestMethod,
} from "../../lexer/variables.js";

/**
 *
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function completeEnvVariable($) {
  return () => {
    $.CONSUME(EnvVariable);
    $.CONSUME(DotToken);
    $.OR([
      { ALT: () => $.CONSUME(RemoteIpVariable) },
      { ALT: () => $.CONSUME(RemotePortVariable) },
      { ALT: () => $.CONSUME(RemoteUserVariable) },
      { ALT: () => $.CONSUME(RemotePasswordVariable) },
      { ALT: () => $.CONSUME(RemoteHostVariable) },
      { ALT: () => $.CONSUME(RequestMethod) },
      { ALT: () => $.CONSUME(Identifier) }, // environment variable don't have subfields
    ]);
  };
}
