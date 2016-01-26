var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Pittsburgh, PA',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'b7fa8fcf22b037fb2ef1b184c9fe4f8b'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, did you take your heart medication?',
            'Enjoy your day!',
            'How was your sleep?',
            'Hi, Brad!'
        ],
        afternoon: [
            'Hello, I see you worked out this afternoon, how did it feel?',
            'Did you take your meds?',
            'Hi, Brad!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, Brad!'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://calendar.google.com/calendar/ical/k95amtccvcq09o5kl8grpvmavg%40group.calendar.google.com/private-9c21795c6c310152525512a97e19a4fb/basic.ics"
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
