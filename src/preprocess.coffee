# Panda Sky Mixin: SQS
# The preprocessor needs to scan region and VPC configurations to setup a connection to those services, if needed.

preprocess = (SDK, config) ->

  vpc: config.aws.vpc
  region: config.aws.region

export default preprocess
