preprocess = (SDK, global, meta, local) ->

  if meta.vpc
    vpc: meta.vpc
    region: global.region
  else
    false

export default preprocess
