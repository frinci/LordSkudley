const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key0fDuNoUEGLekpc'
})

export const base = Airtable.base('appIBkVe41KvJV7HH')