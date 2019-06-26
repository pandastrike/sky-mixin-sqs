"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _pandaSkyMixin = _interopRequireDefault(require("panda-sky-mixin"));

var _pandaQuill = require("panda-quill");

var _pandaSerialize = require("panda-serialize");

var _policy = _interopRequireDefault(require("./policy"));

var _preprocess = _interopRequireDefault(require("./preprocess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mixin;

mixin = async function () {
  var SQS, read, schema, template;

  read = function (name) {
    return (0, _pandaQuill.read)((0, _path.resolve)(__dirname, "..", "..", "..", "files", name));
  };

  schema = (0, _pandaSerialize.yaml)((await read("schema.yaml")));
  template = await read("template.yaml");
  SQS = new _pandaSkyMixin.default({
    name: "sqs",
    schema,
    template,
    preprocess: _preprocess.default,
    //cli
    getPolicyStatements: _policy.default
  });
  return SQS;
}();

var _default = mixin;
exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC9yZXBvcy9za3ktbWl4aW4tc3FzL3NyYy9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBTkEsSUFBQSxLQUFBOztBQVFBLEtBQUEsR0FBVyxrQkFBQTtBQUNULE1BQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsUUFBQTs7QUFBQSxFQUFBLElBQUEsR0FBTyxVQUFBLElBQUEsRUFBQTtXQUFVLHNCQUFNLG1CQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQU4sSUFBTSxDQUFOLEM7QUFBVixHQUFQOztBQUVBLEVBQUEsTUFBQSxHQUFTLDJCQUFLLE1BQU0sSUFBQSxDQUFYLGFBQVcsQ0FBWCxFQUFUO0FBQ0EsRUFBQSxRQUFBLEdBQVcsTUFBTSxJQUFBLENBQU4sZUFBTSxDQUFqQjtBQUVBLEVBQUEsR0FBQSxHQUFNLElBQUEsc0JBQUEsQ0FBVTtBQUNkLElBQUEsSUFBQSxFQURjLEtBQUE7QUFBQSxJQUFBLE1BQUE7QUFBQSxJQUFBLFFBQUE7QUFJZCxJQUFBLFVBSmMsRUFJZCxtQkFKYzs7QUFNZCxJQUFBLG1CQUFBLEVBQUE7QUFOYyxHQUFWLENBQU47U0FRQSxHO0FBZE0sQ0FBRyxFQUFYOztlQWdCZSxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXNvbHZlfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgTUlYSU4gZnJvbSBcInBhbmRhLXNreS1taXhpblwiXG5pbXBvcnQge3JlYWQgYXMgX3JlYWR9IGZyb20gXCJwYW5kYS1xdWlsbFwiXG5pbXBvcnQge3lhbWx9IGZyb20gXCJwYW5kYS1zZXJpYWxpemVcIlxuXG5pbXBvcnQgZ2V0UG9saWN5U3RhdGVtZW50cyBmcm9tIFwiLi9wb2xpY3lcIlxuaW1wb3J0IHByZXByb2Nlc3MgZnJvbSBcIi4vcHJlcHJvY2Vzc1wiXG5cbm1peGluID0gZG8gLT5cbiAgcmVhZCA9IChuYW1lKSAtPiBfcmVhZCByZXNvbHZlIF9fZGlybmFtZSwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIiwgXCJmaWxlc1wiLCBuYW1lXG5cbiAgc2NoZW1hID0geWFtbCBhd2FpdCByZWFkIFwic2NoZW1hLnlhbWxcIlxuICB0ZW1wbGF0ZSA9IGF3YWl0IHJlYWQgXCJ0ZW1wbGF0ZS55YW1sXCJcblxuICBTUVMgPSBuZXcgTUlYSU4ge1xuICAgIG5hbWU6IFwic3FzXCJcbiAgICBzY2hlbWFcbiAgICB0ZW1wbGF0ZVxuICAgIHByZXByb2Nlc3NcbiAgICAjY2xpXG4gICAgZ2V0UG9saWN5U3RhdGVtZW50c1xuICB9XG4gIFNRU1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=/Users/david/repos/sky-mixin-sqs/src/index.coffee