tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "transparent"
        }
    },

    fpsLimit: 120,

    particles: {

        number: {
            value: 80,
            density: {
                enable: true
            }
        },

        color: {
            value: "#ff4d00"
        },

        links: {
            enable: true,
            color: "#ff4d00",
            distance: 150,
            opacity: 0.25,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.2,
            outModes: {
                default: "bounce"
            }
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: {
                min: 1,
                max: 4
            }
        }
    },

    interactivity: {

        events: {

            onHover: {
                enable: true,
                mode: "grab"
            },

            onClick: {
                enable: true,
                mode: "push"
            },

            resize: true

        },

        modes: {

            grab: {
                distance: 180,
                links: {
                    opacity: 0.8
                }
            },

            push: {
                quantity: 4
            }

        }

    },

    detectRetina: true
});