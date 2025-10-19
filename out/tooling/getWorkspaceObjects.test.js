"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const sinon = require("sinon");
const getWorkspaceObjects_1 = require("./getWorkspaceObjects");
const registryModule = require("../registry/registry");
const types_1 = require("../registry/types");
suite("getWorkspaceObjects", () => {
    let getRegistryStub;
    let fileContentStub;
    setup(() => {
        getRegistryStub = sinon.stub(registryModule, "getRegistry");
        fileContentStub = sinon.stub(registryModule, "fileContent");
    });
    teardown(() => {
        sinon.restore();
    });
    test("should return table objects with schema", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRegistry = [
            {
                id: 1,
                type: types_1.XanoObjectType.TABLE,
                path: "tables/1_users.xs",
                status: types_1.XanoStatus.UNCHANGED,
                staged: false,
            },
        ];
        const tableContent = `table users {
  schema {
    int id
    text name?
    email email_address?
  }
}`;
        getRegistryStub.resolves(mockRegistry);
        fileContentStub.resolves(tableContent);
        const result = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)("table");
        assert.strictEqual(result.length, 1);
        const obj = JSON.parse(result[0]);
        assert.strictEqual(obj.id, 1);
        assert.strictEqual(obj.name, "users");
        assert.strictEqual(obj.type, types_1.XanoObjectType.TABLE);
        assert.strictEqual(obj.path, "tables/1_users.xs");
        assert.ok(obj.schema);
        assert.ok(obj.schema.id);
        assert.strictEqual(obj.schema.id.type, "int");
        assert.ok(obj.schema.name);
        assert.strictEqual(obj.schema.name.type, "text");
    }));
    test("should return function objects with input schema", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRegistry = [
            {
                id: 2,
                type: types_1.XanoObjectType.FUNCTION,
                path: "functions/2_calculate.xs",
                status: types_1.XanoStatus.UNCHANGED,
                staged: false,
            },
        ];
        const functionContent = `function calculate {
  input {
    int value1?
    int value2?
  }
  stack {
  }
  response {
  }
}`;
        getRegistryStub.resolves(mockRegistry);
        fileContentStub.resolves(functionContent);
        const result = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)("function");
        assert.strictEqual(result.length, 1);
        const obj = JSON.parse(result[0]);
        assert.strictEqual(obj.id, 2);
        assert.strictEqual(obj.name, "calculate");
        assert.strictEqual(obj.type, types_1.XanoObjectType.FUNCTION);
        assert.ok(obj.schema);
        assert.ok(obj.schema.value1);
        assert.strictEqual(obj.schema.value1.type, "int");
    }));
    test("should filter objects by category", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRegistry = [
            {
                id: 1,
                type: types_1.XanoObjectType.TABLE,
                path: "tables/1_users.xs",
                status: types_1.XanoStatus.UNCHANGED,
                staged: false,
            },
            {
                id: 2,
                type: types_1.XanoObjectType.FUNCTION,
                path: "functions/2_calculate.xs",
                status: types_1.XanoStatus.UNCHANGED,
                staged: false,
            },
            {
                id: 3,
                type: types_1.XanoObjectType.TASK,
                path: "tasks/3_cleanup.xs",
                status: types_1.XanoStatus.UNCHANGED,
                staged: false,
            },
        ];
        getRegistryStub.resolves(mockRegistry);
        fileContentStub.resolves("table users {}");
        const tables = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)("table");
        assert.strictEqual(tables.length, 1);
        const functions = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)("function");
        assert.strictEqual(functions.length, 1);
        const all = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)("all");
        assert.strictEqual(all.length, 3);
    }));
    test("should handle objects without schema", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRegistry = [
            {
                id: 1,
                type: types_1.XanoObjectType.API_GROUP,
                path: "apis/auth/api_group.xs",
                status: types_1.XanoStatus.UNCHANGED,
                staged: false,
            },
        ];
        const apiGroupContent = `api_group auth {
  auth = false
}`;
        getRegistryStub.resolves(mockRegistry);
        fileContentStub.resolves(apiGroupContent);
        const result = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)("api_group");
        assert.strictEqual(result.length, 1);
        const obj = JSON.parse(result[0]);
        assert.strictEqual(obj.name, "api_group");
        assert.strictEqual(obj.type, types_1.XanoObjectType.API_GROUP);
        assert.strictEqual(obj.schema, undefined);
    }));
    test("should extract name from file path correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRegistry = [
            {
                id: 42,
                type: types_1.XanoObjectType.TOOL,
                path: "tools/42_my_custom_tool.xs",
                status: types_1.XanoStatus.UNCHANGED,
                staged: false,
            },
        ];
        getRegistryStub.resolves(mockRegistry);
        fileContentStub.resolves("tool my_custom_tool {}");
        const result = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)("tool");
        assert.strictEqual(result.length, 1);
        const obj = JSON.parse(result[0]);
        assert.strictEqual(obj.name, "my_custom_tool");
    }));
});
//# sourceMappingURL=getWorkspaceObjects.test.js.map