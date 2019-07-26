Policy = ({region}) ->

  [
    Effect: "Allow"
    Action: [ "sqs:*" ]
    Resource: "arn:*:sqs:#{region}:*:*"
  ]

export default Policy
