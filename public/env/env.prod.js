(function(window) {
    window["env"] = window["env"] || {};

    // Environment variables
    window["env"]["auth_idpUrl"] = '${ODJ_DEP_UI_STATICS_AUTH_IDP_URL}';
    window["env"]["auth_idpClientId"] = '${ODJ_DEP_UI_STATICS_AUTH_IDP_CLIENT_ID}';
    window["env"]["backend_apiUrl"] = '${ODJ_DEP_UI_STATICS_BACKEND_API_URL}';
})(this);