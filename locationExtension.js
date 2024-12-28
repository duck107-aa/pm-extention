(function(Scratch) {
    'use strict';

    class LocationExtension {
        getInfo() {
            return {
                id: 'locationExtension',
                name: 'Location Getter',
                blocks: [
                    {
                        opcode: 'getLocation',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Get my location',
                        arguments: {}
                    }
                ]
            };
        }

        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

                        alert(`Your location is: Latitude ${latitude}, Longitude ${longitude}`);
                    },
                    (error) => {
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                alert("Location access denied by user.");
                                break;
                            case error.POSITION_UNAVAILABLE:
                                alert("Location information is unavailable.");
                                break;
                            case error.TIMEOUT:
                                alert("The request to get user location timed out.");
                                break;
                            default:
                                alert("An unknown error occurred.");
                        }
                    }
                );
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
    }

    Scratch.extensions.register(new LocationExtension());
})(Scratch);
