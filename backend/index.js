const express = require('express');
const TPLSmartDevice = require('tplink-lightbulb'); // Richtig importieren
const app = express();

const lightIp = '192.168.178.27'; // Henrik
const TreppeIp = '192.168.178.62'; //Treppe
const WohnzimmerIp = '192.168.178.63'; //Wohnzimmer

app.get("/light/henrik/on", (req, res) => {
    const light = new TPLSmartDevice(lightIp);
    light.power(true)
        .then(() => console.log("Licht Henrik eingschaltet"))
        .catch(err => {
            console.log(err);
            res.status(500).send("Fehler beim Einschalten des Lichts");
        });
});

app.get("/light/henrik/off", (req, res) => {
    const light = new TPLSmartDevice(lightIp);
    light.power(false)
        .then(() => console.log("Licht Henrik ausgeschaltet"))
        .catch(err => {
            console.log(err);
            res.status(500).send("Fehler beim Ausschalten des Lichts");
        });
});

app.get("/light/treppe/on", (req, res) => {
    const light = new TPLSmartDevice(TreppeIp);
    light.power(true)
        .then(() => console.log("Licht Treppe eingeschaltet"))
        .catch(err => {
            console.log(err);
            res.status(500).send("Fehler beim Ausschalten des Lichts");
        });
});

app.get("/light/treppe/off", (req, res) => {
    const light = new TPLSmartDevice(TreppeIp);
    light.power(false)
        .then(() => console.log("Licht Treppe ausgeschaltet"))
        .catch(err => {
            console.log(err);
            res.status(500).send("Fehler beim Ausschalten des Lichts");
        });
});

app.get("/light/wohnzimmer/on", (req, res) => {
    const light = new TPLSmartDevice(WohnzimmerIp);
    light.power(true)
        .then(() => console.log("Licht Wohnzimmer eingeschaltet"))
        .catch(err => {
            console.log(err);
            res.status(500).send("Fehler beim Einschalten des Lichts");
        });
});

app.get("/light/wohnzimmer/off", (req, res) => {
    const light = new TPLSmartDevice(WohnzimmerIp);
    light.power(false)
        .then(() => console.log("Licht Wohnzimmer ausgeschaltet"))
        .catch(err => {
            console.log(err);
            res.status(500).send("Fehler beim Ausschalten des Lichts");
        });
});

app.get("/light/wohnzimmer/info", (req, res) => {
    const light = new TPLSmartDevice(WohnzimmerIp)
    light.info().then(result => {
        console.log(result)
        res.send(result)
    })
})

app.get("/light/henrik/info", (req, res) => {
    const light = new TPLSmartDevice(lightIp)
    light.info().then(result => {
        console.log(result)
        res.send(result)
    })
})

app.get("/light/treppe/info", (req, res) => {
    const light = new TPLSmartDevice(TreppeIp)
    light.info().then(result => {
        console.log(result)
        res.send(result)
    })
})

app.listen(2888, () => console.log("Server hört auf Port 2888"));
