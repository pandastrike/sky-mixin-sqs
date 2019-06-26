"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Panda Sky Mixin: SQS Policy
// This mixin grants the API Lambdas access to general SQS queue manipulation powers.
// TODO: What is the best way to approach limiting this while granting flexibility?
var Policy;

Policy = function (config, global) {
  var region;
  ({
    region
  } = global.aws);
  return [{
    Effect: "Allow",
    Action: ["sqs:*"],
    Resource: `arn:*:sqs:${region}:*:*`
  }];
};

var _default = Policy;
exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC9yZXBvcy9za3ktbWl4aW4tc3FzL3NyYy9wb2xpY3kuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBQSxJQUFBLE1BQUE7O0FBS0EsTUFBQSxHQUFTLFVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNQLE1BQUEsTUFBQTtBQUFBLEdBQUE7QUFBQSxJQUFBO0FBQUEsTUFBVyxNQUFNLENBQWpCLEdBQUE7U0FFQSxDQUNFO0FBQUEsSUFBQSxNQUFBLEVBQUEsT0FBQTtBQUNBLElBQUEsTUFBQSxFQUFRLENBRFIsT0FDUSxDQURSO0FBRUEsSUFBQSxRQUFBLEVBQVUsYUFBQSxNQUFBO0FBRlYsR0FERixDO0FBSE8sQ0FBVDs7ZUFTZSxNIiwic291cmNlc0NvbnRlbnQiOlsiIyBQYW5kYSBTa3kgTWl4aW46IFNRUyBQb2xpY3lcbiMgVGhpcyBtaXhpbiBncmFudHMgdGhlIEFQSSBMYW1iZGFzIGFjY2VzcyB0byBnZW5lcmFsIFNRUyBxdWV1ZSBtYW5pcHVsYXRpb24gcG93ZXJzLlxuXG4jIFRPRE86IFdoYXQgaXMgdGhlIGJlc3Qgd2F5IHRvIGFwcHJvYWNoIGxpbWl0aW5nIHRoaXMgd2hpbGUgZ3JhbnRpbmcgZmxleGliaWxpdHk/XG5cblBvbGljeSA9IChjb25maWcsIGdsb2JhbCkgLT5cbiAge3JlZ2lvbn0gPSBnbG9iYWwuYXdzXG5cbiAgW1xuICAgIEVmZmVjdDogXCJBbGxvd1wiXG4gICAgQWN0aW9uOiBbIFwic3FzOipcIiBdXG4gICAgUmVzb3VyY2U6IFwiYXJuOio6c3FzOiN7cmVnaW9ufToqOipcIlxuICBdXG5cbmV4cG9ydCBkZWZhdWx0IFBvbGljeVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=/Users/david/repos/sky-mixin-sqs/src/policy.coffee