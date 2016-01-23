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
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, I see you worked out this afternoon, how did it feel?',
            'Did you take your meds?',
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
