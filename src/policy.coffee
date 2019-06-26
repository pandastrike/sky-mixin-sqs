# Panda Sky Mixin: SQS Policy
# This mixin grants the API Lambdas access to general SQS queue manipulation powers.

# TODO: What is the best way to approach limiting this while granting flexibility?

Policy = (config, global) ->
  {region} = global.aws

  [
    Effect: "Allow"
    Action: [ "sqs:*" ]
    Resource: "arn:*:sqs:#{region}:*:*"
  ]

export default Policy
