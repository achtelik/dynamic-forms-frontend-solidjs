(function(window) {
    console.log("DUD")
    window["env"] = window["env"] || {};

    // Environment variables
    window["env"]["auth_idpUrl"] = 'https://achtelik.eu.auth0.com/';
    window["env"]["auth_idpClientId"] = 'MbOEWBs9wxzr8qwXqsYMQTrvLA0Y0Ls1';
    window["env"]["backend_apiUrl"] = 'http://localhost:8080/backend';
})(this);
