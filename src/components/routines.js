// Daily Yinyasa
import angle_stretch from '../assets/angle_stretch.jpg'
import standing_bendover from '../assets/standing_bendover.jpg'
import nature_pose from '../assets/nature_pose.jpg'
import tordenkile from '../assets/tordenkile.jpg'
import shake_body from '../assets/shake_body.jpg'
import relaxing_breathing from '../assets/relaxing_breathing.jpg'

// Karin's exercises
import exercise_1 from '../assets/exercise_1.jpeg'
import exercise_2 from '../assets/exercise_2.jpeg'

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
            name: 'Øvelse 1',
            durationInSec: 120,
            image: exercise_1,
        },
        {
            name: 'Øvelse 2',
            durationInSec: 120,
            image: exercise_2,
        },
    ],
}
