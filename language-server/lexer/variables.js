import { createUniqToken } from "./utils.js";

export const ShortFormVariable = createUniqToken({
  name: "ShortFormVariable",
  pattern: /(\$[a-zA-Z]\w*)|(\$\$)/,
  label: "$",
});

export const ResponseVariable = createUniqToken({
  name: "ResponseVariable",
  pattern: /\$response/,
  label: "$response",
  categories: [ShortFormVariable],
  longer_alt: ShortFormVariable,
});

export const LongFormVariable = createUniqToken({
  name: "LongFormVariable",
  pattern: /\$var/,
  label: "$var",
  longer_alt: ShortFormVariable, // allow $variable to be matched as short form variable
});

// $this
export const ContentThisToken = createUniqToken({
  name: "$this",
  pattern: /\$this/,
  longer_alt: ShortFormVariable,
  categories: [ShortFormVariable],
});

export const InputVariable = createUniqToken({
  name: "InputVariable",
  pattern: /\$input/,
  longer_alt: ShortFormVariable,
});

export const EnvVariable = createUniqToken({
  name: "EnvVariable",
  pattern: /\$env/,
  label: "$env",
  longer_alt: ShortFormVariable,
});

export const AuthVariable = createUniqToken({
  name: "AuthVariable",
  pattern: /\$auth/,
  label: "$auth",
  longer_alt: ShortFormVariable,
});

export const RemoteIpVariable = createUniqToken({
  name: "$remote_ip",
  pattern: /\$remote_ip/,
});

export const RemotePortVariable = createUniqToken({
  name: "$remote_port",
  pattern: /\$remote_port/,
});

export const RemoteUserVariable = createUniqToken({
  name: "$remote_user",
  pattern: /\$remote_user/,
});

export const RemotePasswordVariable = createUniqToken({
  name: "$remote_passwd",
  pattern: /\$remote_passwd/,
});

export const RemoteHostVariable = createUniqToken({
  name: "$remote_host",
  pattern: /\$remote_host/,
});

export const RequestMethod = createUniqToken({
  name: "$request_method",
  pattern: /\$request_method/,
});

export const VariableTokens = [
  ResponseVariable,
  ContentThisToken,
  LongFormVariable,
  InputVariable,
  EnvVariable,
  AuthVariable,
  RemoteIpVariable,
  RemotePortVariable,
  RemoteUserVariable,
  RemotePasswordVariable,
  RemoteHostVariable,
  RequestMethod,
  ShortFormVariable, // short form should be last to avoid conflicts with $env, $auth, etc.
];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case InputVariable.name:
    case EnvVariable.name:
    case AuthVariable.name:
    case RemoteIpVariable.name:
    case RemotePortVariable.name:
    case RemoteUserVariable.name:
    case RemotePasswordVariable.name:
    case RemoteHostVariable.name:
    case RequestMethod.name:
    case ResponseVariable.name:
    case LongFormVariable.name:
      return "enumMember";
    case ContentThisToken.name:
    case ShortFormVariable.name:
      return "variable";
    default:
      return null;
  }
}
