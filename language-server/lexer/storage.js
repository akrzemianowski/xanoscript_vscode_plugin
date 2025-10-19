import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

export const StorageToken = createTokenByName("storage", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// create_image
export const CreateImageToken = createTokenByName("create_image", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// create_attachment
export const CreateAttachmentToken = createTokenByName("create_attachment", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// read_file_resource
export const ReadFileResourceToken = createTokenByName("read_file_resource", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// create_file_resource
export const CreateFileResourceToken = createTokenByName(
  "create_file_resource",
  {
    longer_alt: Identifier,
    categories: [Identifier],
  }
);

// read_file_resource
export const ReadFileToken = createTokenByName("read_file", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// delete_file
export const DeleteFileToken = createTokenByName("delete_file", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// sign_private_url
export const SignPrivateUrlToken = createTokenByName("sign_private_url", {
  longer_alt: Identifier,
  categories: [Identifier],
});

export const StorageTokens = [
  StorageToken,
  CreateImageToken,
  CreateAttachmentToken,
  ReadFileResourceToken,
  CreateFileResourceToken,
  ReadFileToken,
  DeleteFileToken,
  SignPrivateUrlToken,
];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case StorageToken.name:
    case CreateImageToken.name:
    case CreateAttachmentToken.name:
    case ReadFileResourceToken.name:
    case CreateFileResourceToken.name:
    case ReadFileToken.name:
    case DeleteFileToken.name:
    case SignPrivateUrlToken.name:
      return "function";
    default:
      return null;
  }
}
