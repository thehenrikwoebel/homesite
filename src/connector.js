let connections = {
    turnLightOnHenrik() {
        fetch("http://192.168.178.28:2888/light/henrik/on").then(res => {
            console.log(res);
        });
    },
    turnLightOffHenrik() {
        fetch("http://192.168.178.28:2888/light/henrik/off").then(res => {
            console.log(res);
        });
    },
    turnLightOnTreppe() {
        fetch("http://192.168.178.28:2888/light/treppe/on").then(res => {
            console.log(res);
        });
    },
    turnLightOffTreppe() {
        fetch("http://192.168.178.28:2888/light/treppe/off").then(res => {
            console.log(res);
        });
    },
    turnLightOnWohnzimmer() {
        fetch("http://192.168.178.28:2888/light/wohnzimmer/on").then(res => {
            console.log(res)
        })
    },
    turnLightOffWohnzimmer() {
        fetch("http://192.168.178.28:2888/light/wohnzimmer/off").then(res => {
            console.log(res)
        })
    },
    lightInfoWohnzimmer() {
        fetch("http://192.168.178.28:2888/light/wohnzimmer/info").then(res => {
            console.log(res)
        })
    },
    lightInfoHenrik() {
        fetch("http://192.168.178.28:2888/light/henrik/info").then(res => {
            return res["relay_state"]
        })
    },
    lightInfoTreppe() {
        fetch("http://192.168.178.28:2888/light/treppe/info").then(res => {
            return res["relay_state"]
        })
    }
}

export default connections