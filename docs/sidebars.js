const sidebars = {
  sidebar: [
    "index",
    {
      type: "category",
      label: "Core Types",
      collapsed: false,
      items: [
        "datatypes/index",
        "datatypes/standardtype",
        "datatypes/schema",
        "datatypes/codec",
        "datatypes/doc"
      ]
    },
    {
      type: "category",
      label: "Http Types",
      collapsed: false,
      items: [
        "datatypes/http/method",
        "datatypes/http/route",
        "datatypes/http/uri",
        "datatypes/http/httpstatus",
        "datatypes/http/httpclientconfig",
        "datatypes/http/httpserverconfig",
        "datatypes/http/httpheaders",
        "datatypes/http/httprequest",
        "datatypes/http/scheme",
        "datatypes/http/httpresponse",
        "datatypes/http/httpmiddleware",
        "datatypes/http/request",
        "datatypes/http/requestbuilder",
        "datatypes/http/response",
        "datatypes/http/middleware"
      ]
    },
    {
      type: "category",
      label: "Modules",
      collapsed: false,
      items: [
        "datatypes/modules/annotations",
        "datatypes/modules/endpoint",
        "datatypes/modules/endpoints",
        "datatypes/modules/clientservice",
        "datatypes/modules/protocolmodule",
        "datatypes/modules/httpprotocolmodule"
      ]
    },
  ]
};

module.exports = sidebars;
