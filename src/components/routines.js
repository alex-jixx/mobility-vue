// Daily Yinyasa
import angle_stretch from '../assets/angle_stretch.jpg'
import standing_bendover from '../assets/standing_bendover.jpg'
import nature_pose from '../assets/nature_pose.jpg'
import tordenkile from '../assets/tordenkile.jpg'
import shake_body from '../assets/shake_body.jpg'
import relaxing_breathing from '../assets/relaxing_breathing.jpg'

// Karin's exercises
import baekkenloeft from '../assets/karins/baekkenloeft.jpeg'
import crunch from '../assets/karins/crunch.jpeg'
import mavespaend from '../assets/karins/mavespaend.jpeg'
import musling from '../assets/karins/musling.jpeg'
import staaenede_taeppetoef from '../assets/karins/staaende_taeppetoef.jpeg'

export default {
    dailyYinyasa: [
        {
            name: 'Ryst kroppen',
            durationInSec: 120,
            image: shake_body,
        },
        {
            name: 'Træk vejret på ryggen',
            durationInSec: 120,
            image: relaxing_breathing,
        },
        {
            name: 'Stående foroverbøj',
            durationInSec: 60,
            image: standing_bendover,
        },
        {
            name: 'Naturstillingen',
            durationInSec: 120,
            image: nature_pose,
        },
        {
            name: 'Tordenkile',
            durationInSec: 60,
            image: tordenkile,
        },
        {
            name: 'Ankelstræk',
            durationInSec: 60,
            image: angle_stretch,
        },
    ],
    karinsHipExercises: [
        {
            name: 'Mavespænd',
            durationInSec: 90,
            image: mavespaend,
        },
        {
            name: 'Musling - Højre',
            durationInSec: 90,
            image: musling,
        },
        {
            name: 'Musling - Venstre',
            durationInSec: 90,
            image: musling,
        },
        {
            name: 'Bækkenløft',
            durationInSec: 90,
            image: baekkenloeft,
        },
        {
            name: 'Crunch',
            durationInSec: 90,
            image: crunch,
        },
        {
            name: 'Stående tæppetøf',
            durationInSec: 90,
            image: staaenede_taeppetoef,
        },
    ],
}
