export default [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 5, 0),
        end: new Date(2018, 5, 2),
        setByAssistant: true,
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2018, 5, 7),
        end: new Date(2018, 5, 10),
        setByAssistant: false,
    },
    {
        id: 2,
        title: 'Some Event',
        start: new Date(2018, 5, 0),
        end: new Date(2018, 5, 1),
        setByAssistant: false,
    },
    {
        id: 3,
        title: 'Today is a day',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        setByAssistant: true,
    },
]