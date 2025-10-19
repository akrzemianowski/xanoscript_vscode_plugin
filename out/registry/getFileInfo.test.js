"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const getFileInfo_1 = require("./getFileInfo");
const mocha_1 = require("mocha");
(0, mocha_1.suite)("getFileInfo", () => {
    (0, mocha_1.it)("should return the verb and url of a query", () => {
        assert.deepEqual((0, getFileInfo_1.getApiEndpointInfo)("query foo/bar verb=GET {\n}"), {
            verb: "GET",
            path: "foo/bar",
        });
        assert.deepEqual((0, getFileInfo_1.getApiEndpointInfo)("query foo/{user_id} verb=POST {\n}"), {
            verb: "POST",
            path: "foo/{user_id}",
        });
        assert.deepEqual((0, getFileInfo_1.getApiEndpointInfo)("query foo verb=PUT {\n}"), {
            verb: "PUT",
            path: "foo",
        });
        assert.deepEqual((0, getFileInfo_1.getApiEndpointInfo)('query "fo o/bar" verb=DELETE {\n}'), {
            verb: "DELETE",
            path: "fo o/bar",
        });
    });
});
(0, mocha_1.suite)("getFunctionInfo", () => {
    (0, mocha_1.it)("should return the path of a function", () => {
        assert.deepEqual((0, getFileInfo_1.getFunctionInfo)("function foo {\n}"), { path: "foo" });
        assert.deepEqual((0, getFileInfo_1.getFunctionInfo)("function foo/bar {\n}"), {
            path: "foo/bar",
        });
        assert.deepEqual((0, getFileInfo_1.getFunctionInfo)('function "utils/my function" {\n}'), {
            path: "utils/my function",
        });
    });
});
(0, mocha_1.suite)("getTaskInfo", () => {
    (0, mocha_1.it)("should return the path of a function", () => {
        assert.deepEqual((0, getFileInfo_1.getTaskInfo)("task foo {\n}"), { path: "foo" });
        assert.deepEqual((0, getFileInfo_1.getTaskInfo)('task "my task" {\n}'), {
            path: "my task",
        });
    });
});
(0, mocha_1.suite)("getTableInfo", () => {
    (0, mocha_1.it)("should return the path of a function", () => {
        assert.deepEqual((0, getFileInfo_1.getTableInfo)("table foo {\n}"), { path: "foo" });
        assert.deepEqual((0, getFileInfo_1.getTableInfo)('table "my table" {\n}'), {
            path: "my table",
        });
    });
});
(0, mocha_1.suite)("getToolInfo", () => {
    (0, mocha_1.it)("should return the path of a function", () => {
        assert.deepEqual((0, getFileInfo_1.getToolInfo)("tool foo {\n}"), { path: "foo" });
        assert.deepEqual((0, getFileInfo_1.getToolInfo)('tool "my tool" {\n}'), {
            path: "my tool",
        });
    });
});
//# sourceMappingURL=getFileInfo.test.js.map