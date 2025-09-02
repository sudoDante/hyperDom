import "./app_conf/public_conf.js"

const lib = await import(hyperLibsUrl + "test.js")

lib.test()