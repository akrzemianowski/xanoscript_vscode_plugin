"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const registry_1 = require("./registry");
(0, mocha_1.describe)("extractNameFromContent", () => {
    (0, mocha_1.describe)("basic types", () => {
        (0, mocha_1.it)("should extract table name", () => {
            const content = "table user {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("user");
        });
        (0, mocha_1.it)("should extract function name", () => {
            const content = "function utils/factorial {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("utils/factorial");
        });
        (0, mocha_1.it)("should extract function name with underscores", () => {
            const content = "function helper_get_user {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("helper_get_user");
        });
        (0, mocha_1.it)("should extract API endpoint name", () => {
            const content = "api GET_user (";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("GET_user");
        });
        (0, mocha_1.it)("should extract task name", () => {
            const content = "task daily_cleanup {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("daily_cleanup");
        });
        (0, mocha_1.it)("should extract tool name", () => {
            const content = "tool my_tool {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("my_tool");
        });
        (0, mocha_1.it)("should extract agent name", () => {
            const content = "agent assistant {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("assistant");
        });
    });
    (0, mocha_1.describe)("query files (with rich headers)", () => {
        (0, mocha_1.it)("should extract simple query name", () => {
            const content = "query get_users verb=GET {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("get_users");
        });
        (0, mocha_1.it)("should extract query name with multiple verb parameters", () => {
            const content = "query create_user verb=POST {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("create_user");
        });
        (0, mocha_1.it)("should extract query name with underscores and numbers", () => {
            const content = "query api_v2_search verb=GET {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("api_v2_search");
        });
        (0, mocha_1.it)("should extract query name with complex parameters", () => {
            const content = "query update_order verb=PUT {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("update_order");
        });
        (0, mocha_1.it)("should extract query name with path-like structure", () => {
            const content = 'query "users/by_id" verb=GET {';
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("users/by_id");
        });
    });
    (0, mocha_1.describe)("edge cases", () => {
        (0, mocha_1.it)("should handle extra whitespace", () => {
            const content = "table   user   {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("user");
        });
        (0, mocha_1.it)("should handle tabs as whitespace", () => {
            const content = "table\tuser\t{";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("user");
        });
        (0, mocha_1.it)("should handle names with hyphens", () => {
            const content = "function my-helper-function {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("my-helper-function");
        });
        (0, mocha_1.it)("should return null for empty content", () => {
            const content = "";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal(null);
        });
        (0, mocha_1.it)("should return null for content without type keyword", () => {
            const content = "some random content {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal(null);
        });
        (0, mocha_1.it)("should return null for malformed header", () => {
            const content = "table {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal(null);
        });
        (0, mocha_1.it)("should handle multiline content (only checks first line)", () => {
            const content = `table user {
  column id number;
  column name text;
}`;
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("user");
        });
        (0, mocha_1.it)("should handle Windows line endings", () => {
            const content = "table user {\r\n";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("user");
        });
        (0, mocha_1.it)("should handle quoted names with spaces", () => {
            const content = `table "my user" {\r\n`;
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("my user");
        });
        (0, mocha_1.it)("should handle names with numbers", () => {
            const content = "table user2 {";
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("user2");
        });
        (0, mocha_1.it)("should handle names with special path separators", () => {
            const content = 'function "utils/strings/format name" {';
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("utils/strings/format name");
        });
    });
    (0, mocha_1.describe)("complex real-world examples", () => {
        (0, mocha_1.it)("should extract from a typical table definition", () => {
            const content = `table customers {
  column id number pk unique auto_increment;
  column name text;
}`;
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("customers");
        });
        (0, mocha_1.it)("should extract from a typical function definition", () => {
            const content = `function helpers/math/calculate {
  // calculate something
}`;
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("helpers/math/calculate");
        });
        (0, mocha_1.it)("should extract from a query with verb and params", () => {
            const content = `query search_users verb=GET{
  // implementation
}`;
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("search_users");
        });
        (0, mocha_1.it)("should extract from API endpoint with HTTP method", () => {
            const content = `api users verb=GET (
  // parameters
) -> {`;
            (0, chai_1.expect)((0, registry_1.extractNameFromContent)(content)).to.equal("users");
        });
    });
});
//# sourceMappingURL=registry.test.js.map