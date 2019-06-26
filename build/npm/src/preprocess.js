"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Panda Sky Mixin: SQS
// The preprocessor needs to scan region and VPC configurations to setup a connection to those services, if needed.
var preprocess;

preprocess = function (SDK, config) {
  return {
    vpc: config.aws.vpc,
    region: config.aws.region
  };
};

var _default = preprocess;
exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC9yZXBvcy9za3ktbWl4aW4tc3FzL3NyYy9wcmVwcm9jZXNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBQSxJQUFBLFVBQUE7O0FBR0EsVUFBQSxHQUFhLFVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQTtTQUVYO0FBQUEsSUFBQSxHQUFBLEVBQUssTUFBTSxDQUFDLEdBQVAsQ0FBTCxHQUFBO0FBQ0EsSUFBQSxNQUFBLEVBQVEsTUFBTSxDQUFDLEdBQVAsQ0FBVztBQURuQixHO0FBRlcsQ0FBYjs7ZUFLZSxVIiwic291cmNlc0NvbnRlbnQiOlsiIyBQYW5kYSBTa3kgTWl4aW46IFNRU1xuIyBUaGUgcHJlcHJvY2Vzc29yIG5lZWRzIHRvIHNjYW4gcmVnaW9uIGFuZCBWUEMgY29uZmlndXJhdGlvbnMgdG8gc2V0dXAgYSBjb25uZWN0aW9uIHRvIHRob3NlIHNlcnZpY2VzLCBpZiBuZWVkZWQuXG5cbnByZXByb2Nlc3MgPSAoU0RLLCBjb25maWcpIC0+XG5cbiAgdnBjOiBjb25maWcuYXdzLnZwY1xuICByZWdpb246IGNvbmZpZy5hd3MucmVnaW9uXG5cbmV4cG9ydCBkZWZhdWx0IHByZXByb2Nlc3NcbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=/Users/david/repos/sky-mixin-sqs/src/preprocess.coffee