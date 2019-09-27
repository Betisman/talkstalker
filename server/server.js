const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/events', (req, res) => {
  res.json([
    { 
        "_id" : "5d8dd5cbf795967f8dc2a2f0", 
        "type" : "conference", 
        "name" : "GDG DevFest", 
        "city" : "Orlando, FL", 
        "country" : "U.S.A.", 
        "url" : "https://devfestflorida.org", 
        "startDate" : "2019-01-19T00:00:00.000+0000", 
        "endDate" : "2019-01-19T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 28.5421097, 
            "lng" : -81.3790388
        }
    },
    { 
        "_id" : "5d8dd5cbf795967f8dc2a2f1", 
        "type" : "conference", 
        "name" : "GDG DevFest", 
        "city" : "Chicago, IL", 
        "country" : "U.S.A.", 
        "url" : "https://windycity.devfest.io", 
        "startDate" : "2019-02-01T00:00:00.000+0000", 
        "endDate" : "2019-02-01T00:00:00.000+0000", 
        "cfpEndDate" : "2019-12-01T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/windycitydevfest", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.8755616, 
            "lng" : -87.6244212
        }
    },
    { 
        "_id" : "5d8dd5ccf795967f8dc2a2f2", 
        "type" : "conference", 
        "name" : "GDG DevFest", 
        "city" : "Minneapolis", 
        "country" : "U.S.A.", 
        "url" : "https://devfest.mn", 
        "startDate" : "2019-02-02T00:00:00.000+0000", 
        "endDate" : "2019-02-02T00:00:00.000+0000", 
        "cfpEndDate" : "2019-11-02T00:00:00.000+0000", 
        "cfpUrl" : "https://devfest.mn/cfp", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 44.9706705, 
            "lng" : -93.2682241
        }
    },
    { 
        "_id" : "5d8dd5cdf795967f8dc2a2f3", 
        "type" : "conference", 
        "name" : "DroidKaigi", 
        "city" : "Tokyo", 
        "country" : "Japan", 
        "url" : "https://droidkaigi.jp/2019/en", 
        "startDate" : "2019-02-07T00:00:00.000+0000", 
        "endDate" : "2019-02-08T00:00:00.000+0000", 
        "cfpEndDate" : "2018-10-21T00:00:00.000+0000", 
        "cfpUrl" : "https://sessionize.com/droidkaigi2019", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 35.6828387, 
            "lng" : 139.7594549
        }
    },
    { 
        "_id" : "5d8dd5cdf795967f8dc2a2f4", 
        "type" : "conference", 
        "name" : "RO MobOS", 
        "city" : "Cluj-Napoca", 
        "country" : "Romania", 
        "url" : "http://romobos.com", 
        "startDate" : "2019-02-14T00:00:00.000+0000", 
        "endDate" : "2019-02-16T00:00:00.000+0000", 
        "cfpEndDate" : "2018-12-15T00:00:00.000+0000", 
        "cfpUrl" : "http://romobos.com/2019-edition/call-for-papers", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 46.769379, 
            "lng" : 23.5899542
        }
    },
    { 
        "_id" : "5d8dd5cef795967f8dc2a2f5", 
        "type" : "conference", 
        "name" : "FITC Amsterdam", 
        "city" : "Amsterdam", 
        "country" : "Netherlands", 
        "url" : "http://fitc.ca/event/am19/", 
        "startDate" : "2019-02-18T00:00:00.000+0000", 
        "endDate" : "2019-02-19T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.3745403, 
            "lng" : 4.8979755
        }
    },
    { 
        "_id" : "5d8dd5cef795967f8dc2a2f6", 
        "type" : "conference", 
        "name" : "AppDevCon", 
        "city" : "Amsterdam", 
        "country" : "Netherlands", 
        "url" : "https://appdevcon.nl", 
        "startDate" : "2019-03-12T00:00:00.000+0000", 
        "endDate" : "2019-03-15T00:00:00.000+0000", 
        "cfpEndDate" : "2018-12-21T00:00:00.000+0000", 
        "cfpUrl" : "https://appdevcon.nl/cfp/", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.3745403, 
            "lng" : 4.8979755
        }
    },
    { 
        "_id" : "5d8dd5cff795967f8dc2a2f7", 
        "type" : "conference", 
        "name" : "MobileTech", 
        "city" : "Munich", 
        "country" : "Germany", 
        "url" : "https://mobiletechcon.de/en", 
        "startDate" : "2019-03-25T00:00:00.000+0000", 
        "endDate" : "2019-03-27T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 48.1371079, 
            "lng" : 11.5753822
        }
    },
    { 
        "_id" : "5d8dd5cff795967f8dc2a2f8", 
        "type" : "conference", 
        "name" : "GreachConf", 
        "city" : "Madrid", 
        "country" : "Spain", 
        "url" : "http://greachconf.com", 
        "startDate" : "2019-03-28T00:00:00.000+0000", 
        "endDate" : "2019-03-30T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-14T00:00:00.000+0000", 
        "cfpUrl" : "http://greachconf.com/cfp", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd5d0f795967f8dc2a2f9", 
        "type" : "conference", 
        "name" : "CodeMobile", 
        "city" : "Chester", 
        "country" : "U.K.", 
        "url" : "http://www.codemobile.co.uk", 
        "startDate" : "2019-04-01T00:00:00.000+0000", 
        "endDate" : "2019-04-04T00:00:00.000+0000", 
        "cfpEndDate" : "2018-10-31T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSdf9uZoBzmfv-oCN0povGPNK3kFKNb5MIvThZd8QH-dVnuQzQ/viewform", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 53.1908873, 
            "lng" : -2.8908955
        }
    },
    { 
        "_id" : "5d8dd5d0f795967f8dc2a2fa", 
        "type" : "conference", 
        "name" : "Droidcon", 
        "city" : "Boston", 
        "country" : "U.S.A.", 
        "url" : "http://www.droidcon-boston.com", 
        "startDate" : "2019-04-08T00:00:00.000+0000", 
        "endDate" : "2019-04-09T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-01T00:00:00.000+0000", 
        "cfpUrl" : "http://bit.ly/dcbos-19-cfp", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.3602534, 
            "lng" : -71.0582912
        }
    },
    { 
        "_id" : "5d8dd5d1f795967f8dc2a2fb", 
        "type" : "conference", 
        "name" : "FITC Toronto", 
        "city" : "Toronto", 
        "country" : "Canada", 
        "url" : "http://fitc.ca/event/to19/", 
        "startDate" : "2019-04-21T00:00:00.000+0000", 
        "endDate" : "2019-04-23T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.653963, 
            "lng" : -79.387207
        }
    },
    { 
        "_id" : "5d8dd5d1f795967f8dc2a2fc", 
        "type" : "conference", 
        "name" : "Android Makers", 
        "city" : "Paris", 
        "country" : "France", 
        "url" : "https://androidmakers.fr", 
        "startDate" : "2019-04-23T00:00:00.000+0000", 
        "endDate" : "2019-04-24T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-21T00:00:00.000+0000", 
        "cfpUrl" : "https://cfp.androidmakers.fr/", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 48.8566969, 
            "lng" : 2.3514616
        }
    },
    { 
        "_id" : "5d8dd5d2f795967f8dc2a2fd", 
        "type" : "conference", 
        "name" : "Chicago Roboto", 
        "city" : "Chicago, IL", 
        "country" : "U.S.A.", 
        "url" : "http://chicagoroboto.com", 
        "startDate" : "2019-04-25T00:00:00.000+0000", 
        "endDate" : "2019-04-26T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-04T00:00:00.000+0000", 
        "cfpUrl" : "http://chicagoroboto.com/call-for-papers", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.8755616, 
            "lng" : -87.6244212
        }
    },
    { 
        "_id" : "5d8dd5d2f795967f8dc2a2fe", 
        "type" : "conference", 
        "name" : "App Builders", 
        "city" : "Lugano", 
        "country" : "Switzerland", 
        "url" : "https://www.appbuilders.ch", 
        "startDate" : "2019-04-29T00:00:00.000+0000", 
        "endDate" : "2019-04-30T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 46.0050102, 
            "lng" : 8.9520281
        }
    },
    { 
        "_id" : "5d8dd5d3f795967f8dc2a2ff", 
        "type" : "conference", 
        "name" : "Google I/O", 
        "city" : "Mountain View, CA", 
        "country" : "U.S.A.", 
        "url" : "https://events.google.com/io", 
        "startDate" : "2019-05-07T00:00:00.000+0000", 
        "endDate" : "2019-05-09T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.6878246, 
            "lng" : -114.2502063
        }
    },
    { 
        "_id" : "5d8dd5d3f795967f8dc2a300", 
        "type" : "conference", 
        "name" : "Droidcon", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://www.de.droidcon.com", 
        "startDate" : "2019-05-27T00:00:00.000+0000", 
        "endDate" : "2019-05-29T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5d4f795967f8dc2a301", 
        "type" : "conference", 
        "name" : "mDevCamp", 
        "city" : "Prague", 
        "country" : "Czech Republic", 
        "url" : "https://mdevcamp.eu", 
        "startDate" : "2019-05-30T00:00:00.000+0000", 
        "endDate" : "2019-05-31T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-28T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSfaELijX77h5xdoLtKbFmYeZGjHOpkGp7lV5JDrzcxOJP68Ow/viewform", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 50.0874654, 
            "lng" : 14.4212535
        }
    },
    { 
        "_id" : "5d8dd5d4f795967f8dc2a302", 
        "type" : "conference", 
        "name" : "ADDC - App Design & Development Conference", 
        "city" : "Barcelona", 
        "country" : "Spain", 
        "url" : "https://addconf.com", 
        "startDate" : "2019-06-26T00:00:00.000+0000", 
        "endDate" : "2019-06-28T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd5d5f795967f8dc2a303", 
        "type" : "conference", 
        "name" : "360|AnDev", 
        "city" : "Denver, CO", 
        "country" : "U.S.A.", 
        "url" : "http://360andev.com", 
        "startDate" : "2019-07-18T00:00:00.000+0000", 
        "endDate" : "2019-07-19T00:00:00.000+0000", 
        "cfpEndDate" : "2019-04-06T00:00:00.000+0000", 
        "cfpUrl" : "http://360andev.com/call-for-papers/", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 39.7392364, 
            "lng" : -104.9848623
        }
    },
    { 
        "_id" : "5d8dd5d5f795967f8dc2a304", 
        "type" : "conference", 
        "name" : "DroidconKE", 
        "city" : "Nairobi", 
        "country" : "Kenya", 
        "url" : "https://droidcon.co.ke", 
        "startDate" : "2019-08-08T00:00:00.000+0000", 
        "endDate" : "2019-08-09T00:00:00.000+0000", 
        "cfpEndDate" : "2019-06-30T00:00:00.000+0000", 
        "cfpUrl" : "https://sessionize.com/droidconke", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -1.2832533, 
            "lng" : 36.8172449
        }
    },
    { 
        "_id" : "5d8dd5d5f795967f8dc2a305", 
        "type" : "conference", 
        "name" : "Droidcon", 
        "city" : "Vienna", 
        "country" : "Austria", 
        "url" : "https://droidcon.at", 
        "startDate" : "2019-09-19T00:00:00.000+0000", 
        "endDate" : "2019-09-20T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 48.2083537, 
            "lng" : 16.3725042
        }
    },
    { 
        "_id" : "5d8dd5d6f795967f8dc2a306", 
        "type" : "conference", 
        "name" : ".droidcon Greece", 
        "city" : "Heraklion, Crete", 
        "country" : "Greece", 
        "url" : "https://droidcon.gr", 
        "startDate" : "2019-09-24T00:00:00.000+0000", 
        "endDate" : "2019-09-25T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-31T00:00:00.000+0000", 
        "cfpUrl" : "https://sessionize.com/droidconGR", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 35.3400127, 
            "lng" : 25.1343475
        }
    },
    { 
        "_id" : "5d8dd5d6f795967f8dc2a307", 
        "type" : "conference", 
        "name" : "Droidcon", 
        "city" : "London", 
        "country" : "U.K.", 
        "url" : "https://skillsmatter.com/conferences/11785-droidcon-london-2019", 
        "startDate" : "2019-10-24T00:00:00.000+0000", 
        "endDate" : "2019-10-25T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.5073219, 
            "lng" : -0.1276474
        }
    },
    { 
        "_id" : "5d8dd5d7f795967f8dc2a308", 
        "type" : "conference", 
        "name" : "Mobilization IX", 
        "city" : "Lodz", 
        "country" : "Poland", 
        "url" : "http://2019.mobilization.pl", 
        "startDate" : "2019-10-26T00:00:00.000+0000", 
        "endDate" : "2019-10-26T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-13T00:00:00.000+0000", 
        "cfpUrl" : "http://bit.ly/mobilization9-c4p-ct", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.7687323, 
            "lng" : 19.4569911
        }
    },
    { 
        "_id" : "5d8dd5d8f795967f8dc2a309", 
        "type" : "conference", 
        "name" : "Droidcon", 
        "city" : "San Francisco, CA", 
        "country" : "U.S.A.", 
        "url" : "https://sf.droidcon.com", 
        "startDate" : "2019-11-18T00:00:00.000+0000", 
        "endDate" : "2019-11-19T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7790262, 
            "lng" : -122.4199061
        }
    },
    { 
        "_id" : "5d8dd5d8f795967f8dc2a30a", 
        "type" : "conference", 
        "name" : "KotlinConf", 
        "city" : "Copenhagen", 
        "country" : "Denmark", 
        "url" : "https://kotlinconf.com/", 
        "startDate" : "2019-12-04T00:00:00.000+0000", 
        "endDate" : "2019-12-06T00:00:00.000+0000", 
        "cfpEndDate" : "2019-05-20T00:00:00.000+0000", 
        "cfpUrl" : "https://sessionize.com/kotlinconf", 
        "topics" : [
            "android"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 55.6867243, 
            "lng" : 12.5700724
        }
    },
    { 
        "_id" : "5d8dd5d9f795967f8dc2a30b", 
        "type" : "conference", 
        "name" : "Clojure/north", 
        "city" : "Toronto", 
        "country" : "Canada", 
        "url" : "https://clojurenorth.com", 
        "startDate" : "2019-04-19T00:00:00.000+0000", 
        "endDate" : "2019-04-20T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-01T00:00:00.000+0000", 
        "cfpUrl" : "https://clojurenorth.typeform.com/to/YuveUZ", 
        "topics" : [
            "clojure"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.653963, 
            "lng" : -79.387207
        }
    },
    { 
        "_id" : "5d8dd5d9f795967f8dc2a30c", 
        "type" : "conference", 
        "name" : "YOW! Lambda Jam", 
        "city" : "Melbourne", 
        "country" : "Australia", 
        "url" : "https://lambdajam.yowconference.com.au", 
        "startDate" : "2019-05-13T00:00:00.000+0000", 
        "endDate" : "2019-05-15T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "clojure"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -37.8142176, 
            "lng" : 144.9631608
        }
    },
    { 
        "_id" : "5d8dd5daf795967f8dc2a30d", 
        "type" : "conference", 
        "name" : "Heart of Clojure", 
        "city" : "Leuven", 
        "country" : "Belgium", 
        "url" : "https://heartofclojure.eu", 
        "startDate" : "2019-08-02T00:00:00.000+0000", 
        "endDate" : "2019-08-03T00:00:00.000+0000", 
        "cfpEndDate" : "2019-03-03T00:00:00.000+0000", 
        "cfpUrl" : "https://cfp.heartofclojure.eu/events/heart-of-clojure", 
        "topics" : [
            "clojure"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 50.879202, 
            "lng" : 4.7011675
        }
    },
    { 
        "_id" : "5d8dd5daf795967f8dc2a30e", 
        "type" : "conference", 
        "name" : "C++ Now", 
        "city" : "Aspen, CO", 
        "country" : "U.S.A.", 
        "url" : "http://cppnow.org/", 
        "startDate" : "2019-05-05T00:00:00.000+0000", 
        "endDate" : "2019-05-10T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "cpp"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 39.1911128, 
            "lng" : -106.8235606
        }
    },
    { 
        "_id" : "5d8dd5dbf795967f8dc2a30f", 
        "type" : "conference", 
        "name" : "Meeting Embedded", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://meetingembedded.com", 
        "startDate" : "2019-09-13T00:00:00.000+0000", 
        "endDate" : "2019-09-13T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "cpp"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5dbf795967f8dc2a310", 
        "type" : "conference", 
        "name" : "Qt World Summit Berlin", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://www.qt.io/qtws19/home", 
        "startDate" : "2019-11-04T00:00:00.000+0000", 
        "endDate" : "2019-11-06T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "cpp"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5dcf795967f8dc2a311", 
        "type" : "conference", 
        "name" : "Meeting C++", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://meetingcpp.com/2019", 
        "startDate" : "2019-11-14T00:00:00.000+0000", 
        "endDate" : "2019-11-16T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "cpp"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5dcf795967f8dc2a312", 
        "type" : "conference", 
        "name" : "Source Up!", 
        "city" : "Cape Town ", 
        "country" : "South Africa", 
        "url" : "https://sourceup.co.za", 
        "startDate" : "2019-03-11T00:00:00.000+0000", 
        "endDate" : "2019-03-12T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -33.928992, 
            "lng" : 18.417396
        }
    },
    { 
        "_id" : "5d8dd5ddf795967f8dc2a313", 
        "type" : "conference", 
        "name" : "CSSConf China", 
        "city" : "Shenzhen", 
        "country" : "China", 
        "url" : "https://css.w3ctech.com", 
        "startDate" : "2019-03-30T00:00:00.000+0000", 
        "endDate" : "2019-03-30T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 22.5445697, 
            "lng" : 114.0545346
        }
    },
    { 
        "_id" : "5d8dd5ddf795967f8dc2a314", 
        "type" : "conference", 
        "name" : "Smashing Conference", 
        "city" : "San Francisco, CA", 
        "country" : "U.S.A.", 
        "url" : "https://smashingconf.com/sf-2019/", 
        "startDate" : "2019-04-16T00:00:00.000+0000", 
        "endDate" : "2019-04-17T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7790262, 
            "lng" : -122.4199061
        }
    },
    { 
        "_id" : "5d8dd5def795967f8dc2a315", 
        "type" : "conference", 
        "name" : "Frontend United", 
        "city" : "Utrecht", 
        "country" : "Netherlands", 
        "url" : "https://www.frontendunited.org", 
        "startDate" : "2019-05-17T00:00:00.000+0000", 
        "endDate" : "2019-05-18T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.0809856, 
            "lng" : 5.127684
        }
    },
    { 
        "_id" : "5d8dd5def795967f8dc2a316", 
        "type" : "conference", 
        "name" : "CSSConf EU", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://2019.cssconf.eu", 
        "startDate" : "2019-05-31T00:00:00.000+0000", 
        "endDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5dff795967f8dc2a317", 
        "type" : "conference", 
        "name" : "Pixel Pioneers", 
        "city" : "Bristol", 
        "country" : "U.K.", 
        "url" : "https://pixelpioneers.co/events/bristol-2019", 
        "startDate" : "2019-06-07T00:00:00.000+0000", 
        "endDate" : "2019-06-07T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : "https://pixelpioneers.co/call-for-speakers", 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.4538022, 
            "lng" : -2.5972985
        }
    },
    { 
        "_id" : "5d8dd5e0f795967f8dc2a318", 
        "type" : "conference", 
        "name" : "CSS Day", 
        "city" : "Amsterdam", 
        "country" : "Netherlands", 
        "url" : "https://cssday.nl/2019", 
        "startDate" : "2019-06-13T00:00:00.000+0000", 
        "endDate" : "2019-06-14T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.3745403, 
            "lng" : 4.8979755
        }
    },
    { 
        "_id" : "5d8dd5e0f795967f8dc2a319", 
        "type" : "conference", 
        "name" : "Smashing Conference", 
        "city" : "Toronto", 
        "country" : "Canada", 
        "url" : "https://smashingconf.com/toronto-2019/", 
        "startDate" : "2019-06-25T00:00:00.000+0000", 
        "endDate" : "2019-06-26T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.653963, 
            "lng" : -79.387207
        }
    },
    { 
        "_id" : "5d8dd5e1f795967f8dc2a31a", 
        "type" : "conference", 
        "name" : "CSSCamp Barcelona", 
        "city" : "Barcelona", 
        "country" : "Spain", 
        "url" : "https://csscamp.tech", 
        "startDate" : "2019-07-17T00:00:00.000+0000", 
        "endDate" : "2019-07-17T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd5e1f795967f8dc2a31b", 
        "type" : "conference", 
        "name" : "Smashing Conference", 
        "city" : "Freiburg", 
        "country" : "Germany", 
        "url" : "https://smashingconf.com/freiburg-2019/", 
        "startDate" : "2019-09-09T00:00:00.000+0000", 
        "endDate" : "2019-09-10T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 47.9960901, 
            "lng" : 7.8494005
        }
    },
    { 
        "_id" : "5d8dd5e2f795967f8dc2a31c", 
        "type" : "conference", 
        "name" : "dotCSS", 
        "city" : "Paris", 
        "country" : "France", 
        "url" : "https://2019.dotcss.io", 
        "startDate" : "2019-12-04T00:00:00.000+0000", 
        "endDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "css"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 48.8566969, 
            "lng" : 2.3514616
        }
    },
    { 
        "_id" : "5d8dd5e2f795967f8dc2a31d", 
        "type" : "conference", 
        "name" : "DataWorks Summit", 
        "city" : "Melbourne", 
        "country" : "Australia", 
        "url" : "https://dataworkssummit.com/melbourne-2019", 
        "startDate" : "2019-02-06T00:00:00.000+0000", 
        "endDate" : "2019-02-06T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -37.8142176, 
            "lng" : 144.9631608
        }
    },
    { 
        "_id" : "5d8dd5e3f795967f8dc2a31e", 
        "type" : "conference", 
        "name" : "FITC Amsterdam", 
        "city" : "Amsterdam", 
        "country" : "Netherlands", 
        "url" : "http://fitc.ca/event/am19/", 
        "startDate" : "2019-02-18T00:00:00.000+0000", 
        "endDate" : "2019-02-19T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.3745403, 
            "lng" : 4.8979755
        }
    },
    { 
        "_id" : "5d8dd5e3f795967f8dc2a31f", 
        "type" : "conference", 
        "name" : "Applied AI", 
        "city" : "London", 
        "country" : "U.K.", 
        "url" : "https://www.appliedai.co.uk", 
        "startDate" : "2019-03-01T00:00:00.000+0000", 
        "endDate" : "2019-03-01T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.5073219, 
            "lng" : -0.1276474
        }
    },
    { 
        "_id" : "5d8dd5e4f795967f8dc2a320", 
        "type" : "conference", 
        "name" : "ITWeb BI & Analytics Summit", 
        "city" : "Johannesburg", 
        "country" : "South Africa", 
        "url" : "https://v2.itweb.co.za/event/itweb/business-intelligence-and-analytics-summit-2019", 
        "startDate" : "2019-03-12T00:00:00.000+0000", 
        "endDate" : "2019-03-14T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -26.205, 
            "lng" : 28.049722
        }
    },
    { 
        "_id" : "5d8dd5e4f795967f8dc2a321", 
        "type" : "conference", 
        "name" : "DataWorks Summit", 
        "city" : "Barcelona", 
        "country" : "Spain", 
        "url" : "https://dataworkssummit.com/barcelona-2019", 
        "startDate" : "2019-03-18T00:00:00.000+0000", 
        "endDate" : "2019-03-21T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd5e5f795967f8dc2a322", 
        "type" : "conference", 
        "name" : "PostgresConf", 
        "city" : "New York", 
        "country" : "U.S.A.", 
        "url" : "https://postgresconf.org/conferences/2019", 
        "startDate" : "2019-03-18T00:00:00.000+0000", 
        "endDate" : "2019-03-22T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.7127281, 
            "lng" : -74.0060152
        }
    },
    { 
        "_id" : "5d8dd5e5f795967f8dc2a323", 
        "type" : "conference", 
        "name" : "Women in Analytics Conference", 
        "city" : "Columbus, OH", 
        "country" : "U.S.A.", 
        "url" : "https://www.womeninanalytics.org/", 
        "startDate" : "2019-03-21T00:00:00.000+0000", 
        "endDate" : "2019-03-22T00:00:00.000+0000", 
        "cfpEndDate" : "2018-11-23T00:00:00.000+0000", 
        "cfpUrl" : "https://www.womeninanalytics.org/call-for-speakers", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 39.9622601, 
            "lng" : -83.0007065
        }
    },
    { 
        "_id" : "5d8dd5e5f795967f8dc2a324", 
        "type" : "conference", 
        "name" : "Reinforce AI Conference", 
        "city" : "Budapest", 
        "country" : "Hungary", 
        "url" : "https://reinforceconf.com", 
        "startDate" : "2019-03-21T00:00:00.000+0000", 
        "endDate" : "2019-03-22T00:00:00.000+0000", 
        "cfpEndDate" : "2018-11-30T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/reinforce-ai-2019", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 47.4983815, 
            "lng" : 19.0404707
        }
    },
    { 
        "_id" : "5d8dd5e6f795967f8dc2a325", 
        "type" : "conference", 
        "name" : "0111 CTO Conference Las Vegas", 
        "city" : "Las Vegas, NV", 
        "country" : "U.S.A.", 
        "url" : "https://7ctos.com/0111-las-vegas-2019", 
        "startDate" : "2019-03-29T00:00:00.000+0000", 
        "endDate" : "2019-03-29T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 36.1672559, 
            "lng" : -115.1485163
        }
    },
    { 
        "_id" : "5d8dd5e6f795967f8dc2a326", 
        "type" : "conference", 
        "name" : "Kafka Summit New York", 
        "city" : "New York", 
        "country" : "U.S.A.", 
        "url" : "https://kafka-summit.org/events/kafka-summit-new-york-2019", 
        "startDate" : "2019-04-02T00:00:00.000+0000", 
        "endDate" : "2019-04-02T00:00:00.000+0000", 
        "cfpEndDate" : "2018-12-20T00:00:00.000+0000", 
        "cfpUrl" : "https://kafka-summit.org/kafka-summit-new-york-2019/speakers/", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.7127281, 
            "lng" : -74.0060152
        }
    },
    { 
        "_id" : "5d8dd5e7f795967f8dc2a327", 
        "type" : "conference", 
        "name" : "QCon.ai", 
        "city" : "San Francisco", 
        "country" : "U.S.A.", 
        "url" : "http://bit.ly/2AZ7VHo", 
        "startDate" : "2019-04-15T00:00:00.000+0000", 
        "endDate" : "2019-04-17T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-24T00:00:00.000+0000", 
        "cfpUrl" : "http://bit.ly/2AZ7VHo", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7790262, 
            "lng" : -122.4199061
        }
    },
    { 
        "_id" : "5d8dd5e8f795967f8dc2a328", 
        "type" : "conference", 
        "name" : "FITC Toronto", 
        "city" : "Toronto", 
        "country" : "Canada", 
        "url" : "http://fitc.ca/event/to19/", 
        "startDate" : "2019-04-21T00:00:00.000+0000", 
        "endDate" : "2019-04-23T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.653963, 
            "lng" : -79.387207
        }
    },
    { 
        "_id" : "5d8dd5e8f795967f8dc2a329", 
        "type" : "conference", 
        "name" : "GOTO", 
        "city" : "Chicago, IL", 
        "country" : "U.S.A.", 
        "url" : "http://gotochgo.com", 
        "startDate" : "2019-04-28T00:00:00.000+0000", 
        "endDate" : "2019-05-02T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.8755616, 
            "lng" : -87.6244212
        }
    },
    { 
        "_id" : "5d8dd5e8f795967f8dc2a32a", 
        "type" : "conference", 
        "name" : "Insurance AI and Analytics USA", 
        "city" : "Chicago", 
        "country" : "U.S.A.", 
        "url" : "https://events.insurancenexus.com/analyticsusa/?utm_source=confs.tech&utm_medium=event+listing&utm_campaign=5010", 
        "startDate" : "2019-05-02T00:00:00.000+0000", 
        "endDate" : "2019-05-03T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.8755616, 
            "lng" : -87.6244212
        }
    },
    { 
        "_id" : "5d8dd5e9f795967f8dc2a32b", 
        "type" : "conference", 
        "name" : "YOW! Data", 
        "city" : "Sydney", 
        "country" : "Australia", 
        "url" : "https://data.yowconference.com.au", 
        "startDate" : "2019-05-06T00:00:00.000+0000", 
        "endDate" : "2019-05-07T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -33.8548157, 
            "lng" : 151.2164539
        }
    },
    { 
        "_id" : "5d8dd5e9f795967f8dc2a32c", 
        "type" : "conference", 
        "name" : "PyData Amsterdam", 
        "city" : "Amsterdam", 
        "country" : "Netherlands", 
        "url" : "https://pydata.org/amsterdam2019", 
        "startDate" : "2019-05-10T00:00:00.000+0000", 
        "endDate" : "2019-05-12T00:00:00.000+0000", 
        "cfpEndDate" : "2019-03-31T00:00:00.000+0000", 
        "cfpUrl" : "https://pydata.org/amsterdam2019/cfp", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.3745403, 
            "lng" : 4.8979755
        }
    },
    { 
        "_id" : "5d8dd5eaf795967f8dc2a32d", 
        "type" : "conference", 
        "name" : "Kafka Summit London", 
        "city" : "London", 
        "country" : "U.K.", 
        "url" : "https://kafka-summit.org/events/kafka-summit-london-2019", 
        "startDate" : "2019-05-13T00:00:00.000+0000", 
        "endDate" : "2019-05-14T00:00:00.000+0000", 
        "cfpEndDate" : "2018-12-20T00:00:00.000+0000", 
        "cfpUrl" : "https://kafka-summit.org/kafka-summit-london-2019/speakers/", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.5073219, 
            "lng" : -0.1276474
        }
    },
    { 
        "_id" : "5d8dd5ebf795967f8dc2a32e", 
        "type" : "conference", 
        "name" : "J on the Beach", 
        "city" : "Marbella", 
        "country" : "Spain", 
        "url" : "https://jonthebeach.com/", 
        "startDate" : "2019-05-15T00:00:00.000+0000", 
        "endDate" : "2019-05-17T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-04T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/jotb19", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 36.508976, 
            "lng" : -4.88562
        }
    },
    { 
        "_id" : "5d8dd5ebf795967f8dc2a32f", 
        "type" : "conference", 
        "name" : "DataWorks Summit", 
        "city" : "Washington, DC", 
        "country" : "U.S.A.", 
        "url" : "https://dataworkssummit.com/washington-dc-2019", 
        "startDate" : "2019-05-20T00:00:00.000+0000", 
        "endDate" : "2019-05-23T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 38.8948932, 
            "lng" : -77.0365529
        }
    },
    { 
        "_id" : "5d8dd5ecf795967f8dc2a330", 
        "type" : "conference", 
        "name" : "Percona Live", 
        "city" : "Austin, TX", 
        "country" : "U.S.A.", 
        "url" : "https://www.percona.com/live", 
        "startDate" : "2019-05-28T00:00:00.000+0000", 
        "endDate" : "2019-05-30T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-27T00:00:00.000+0000", 
        "cfpUrl" : "https://perconacfp.hubb.me", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 30.2711286, 
            "lng" : -97.7436995
        }
    },
    { 
        "_id" : "5d8dd5ecf795967f8dc2a331", 
        "type" : "conference", 
        "name" : "PGCon", 
        "city" : "Ottawa", 
        "country" : "Canada", 
        "url" : "https://www.pgcon.org/2019", 
        "startDate" : "2019-05-28T00:00:00.000+0000", 
        "endDate" : "2019-05-31T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 45.421106, 
            "lng" : -75.690308
        }
    },
    { 
        "_id" : "5d8dd5edf795967f8dc2a332", 
        "type" : "conference", 
        "name" : "Azure AI Conference", 
        "city" : "Orlando", 
        "country" : "U.S.A.", 
        "url" : "https://www.azureaiconf.com", 
        "startDate" : "2019-06-09T00:00:00.000+0000", 
        "endDate" : "2019-06-13T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 28.5421097, 
            "lng" : -81.3790388
        }
    },
    { 
        "_id" : "5d8dd5edf795967f8dc2a333", 
        "type" : "conference", 
        "name" : "GOTO", 
        "city" : "Amsterdam", 
        "country" : "Netherlands", 
        "url" : "https://gotoams.nl", 
        "startDate" : "2019-06-17T00:00:00.000+0000", 
        "endDate" : "2019-06-19T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.3745403, 
            "lng" : 4.8979755
        }
    },
    { 
        "_id" : "5d8dd5eef795967f8dc2a334", 
        "type" : "conference", 
        "name" : "RE•WORK Applied AI Summit", 
        "city" : "San Francisco", 
        "country" : "U.S.A.", 
        "url" : "https://www.re-work.co/events/applied-ai-summit-san-francisco-2019", 
        "startDate" : "2019-06-20T00:00:00.000+0000", 
        "endDate" : "2019-06-21T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7790262, 
            "lng" : -122.4199061
        }
    },
    { 
        "_id" : "5d8dd5eff795967f8dc2a335", 
        "type" : "conference", 
        "name" : "Chatbot Summit", 
        "city" : "Tel Aviv", 
        "country" : "Israel", 
        "url" : "http://www.chatbotsummit.com", 
        "startDate" : "2019-06-25T00:00:00.000+0000", 
        "endDate" : "2019-06-26T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 32.0804808, 
            "lng" : 34.7805274
        }
    },
    { 
        "_id" : "5d8dd5eff795967f8dc2a336", 
        "type" : "conference", 
        "name" : "DataXDay", 
        "city" : "Paris", 
        "country" : "France", 
        "url" : "https://dataxday.fr", 
        "startDate" : "2019-06-27T00:00:00.000+0000", 
        "endDate" : "2019-06-27T00:00:00.000+0000", 
        "cfpEndDate" : "2019-03-31T00:00:00.000+0000", 
        "cfpUrl" : "https://conference-hall.io/public/event/sciLlnq7UjZdqYhVCMHO", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 48.8566969, 
            "lng" : 2.3514616
        }
    },
    { 
        "_id" : "5d8dd5f0f795967f8dc2a337", 
        "type" : "conference", 
        "name" : "Infiniteconf", 
        "city" : "London", 
        "country" : "U.K.", 
        "url" : "https://skillsmatter.com/conferences/11187-infiniteconf-2019-the-conference-on-big-data-and-ai#overview", 
        "startDate" : "2019-07-04T00:00:00.000+0000", 
        "endDate" : "2019-07-05T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-28T00:00:00.000+0000", 
        "cfpUrl" : "https://skillsmatter.com/conferences/11187-infiniteconf-2019-the-conference-on-big-data-and-ai#get_involved", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.5073219, 
            "lng" : -0.1276474
        }
    },
    { 
        "_id" : "5d8dd5f0f795967f8dc2a338", 
        "type" : "conference", 
        "name" : "SIGIR", 
        "city" : "Paris", 
        "country" : "France", 
        "url" : "http://sigir.org/sigir2019", 
        "startDate" : "2019-07-21T00:00:00.000+0000", 
        "endDate" : "2019-07-25T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 48.8566969, 
            "lng" : 2.3514616
        }
    },
    { 
        "_id" : "5d8dd5f0f795967f8dc2a339", 
        "type" : "conference", 
        "name" : "Anthill Inside", 
        "city" : "Bangalore", 
        "country" : "India", 
        "url" : "https://anthillinside.in/2019/", 
        "startDate" : "2019-07-24T00:00:00.000+0000", 
        "endDate" : "2019-07-24T00:00:00.000+0000", 
        "cfpEndDate" : "2019-04-30T00:00:00.000+0000", 
        "cfpUrl" : "https://hasgeek.com/anthillinside/2019", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 12.9791198, 
            "lng" : 77.5912997
        }
    },
    { 
        "_id" : "5d8dd5f1f795967f8dc2a33a", 
        "type" : "conference", 
        "name" : "The Fifth Elephant", 
        "city" : "Bangalore", 
        "country" : "India", 
        "url" : "https://fifthelephant.in/2019/", 
        "startDate" : "2019-07-25T00:00:00.000+0000", 
        "endDate" : "2019-07-26T00:00:00.000+0000", 
        "cfpEndDate" : "2019-04-15T00:00:00.000+0000", 
        "cfpUrl" : "https://hasgeek.com/fifthelephant/2019", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 12.9791198, 
            "lng" : 77.5912997
        }
    },
    { 
        "_id" : "5d8dd5f1f795967f8dc2a33b", 
        "type" : "conference", 
        "name" : "Open Data Science Conference India", 
        "city" : "Bangalore", 
        "country" : "India", 
        "url" : "https://india.odsc.com/", 
        "startDate" : "2019-08-07T00:00:00.000+0000", 
        "endDate" : "2019-08-10T00:00:00.000+0000", 
        "cfpEndDate" : "2019-04-05T00:00:00.000+0000", 
        "cfpUrl" : "https://confengine.com/odsc-india-2019/proposals", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 12.9791198, 
            "lng" : 77.5912997
        }
    },
    { 
        "_id" : "5d8dd5f2f795967f8dc2a33c", 
        "type" : "conference", 
        "name" : "Data Con LA", 
        "city" : "Los Angeles", 
        "country" : "U.S.A.", 
        "url" : "https://www.dataconla.com", 
        "startDate" : "2019-08-17T00:00:00.000+0000", 
        "endDate" : "2019-08-17T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 34.0536909, 
            "lng" : -118.2427666
        }
    },
    { 
        "_id" : "5d8dd5f2f795967f8dc2a33d", 
        "type" : "conference", 
        "name" : "Very Large Data Bases", 
        "city" : "Los Angeles, CA", 
        "country" : "U.S.A.", 
        "url" : "http://vldb.org/2019", 
        "startDate" : "2019-08-26T00:00:00.000+0000", 
        "endDate" : "2019-08-30T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : "http://vldb.org/2019/?call-for-research-track", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 34.0536909, 
            "lng" : -118.2427666
        }
    },
    { 
        "_id" : "5d8dd5f3f795967f8dc2a33e", 
        "type" : "conference", 
        "name" : "DataOps Summit", 
        "city" : "San Francisco, CA", 
        "country" : "U.S.A.", 
        "url" : "https://www.dataopssummit-sf.com", 
        "startDate" : "2019-09-03T00:00:00.000+0000", 
        "endDate" : "2019-09-05T00:00:00.000+0000", 
        "cfpEndDate" : "2019-04-05T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/1mhy543yotmEEf22737MdWJ0IsGitoTNaQpOPRtM-4nE/viewform?edit_requested=true", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7790262, 
            "lng" : -122.4199061
        }
    },
    { 
        "_id" : "5d8dd5f4f795967f8dc2a33f", 
        "type" : "conference", 
        "name" : "PICANTE TECH Conference Europe", 
        "city" : "Prague", 
        "country" : "Czech Republic", 
        "url" : "https://techconference.eu", 
        "startDate" : "2019-09-03T00:00:00.000+0000", 
        "endDate" : "2019-09-04T00:00:00.000+0000", 
        "cfpEndDate" : "2019-08-01T00:00:00.000+0000", 
        "cfpUrl" : "https://techconference.eu/become-a-speaker-at-tce2019", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 50.0874654, 
            "lng" : 14.4212535
        }
    },
    { 
        "_id" : "5d8dd5f4f795967f8dc2a340", 
        "type" : "conference", 
        "name" : "AI Expo Africa", 
        "city" : "Cape Town", 
        "country" : "South Africa", 
        "url" : "http://aiexpoafrica.com", 
        "startDate" : "2019-09-04T00:00:00.000+0000", 
        "endDate" : "2019-09-05T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -33.928992, 
            "lng" : 18.417396
        }
    },
    { 
        "_id" : "5d8dd5f5f795967f8dc2a341", 
        "type" : "conference", 
        "name" : "O'Reilly AI Conference", 
        "city" : "San Jose", 
        "country" : "U.S.A.", 
        "url" : "https://conferences.oreilly.com/artificial-intelligence/ai-ca?utm_medium=content+synd&utm_source=general+ad&utm_campaign=aica19&utm_content=org+confstech", 
        "startDate" : "2019-09-09T00:00:00.000+0000", 
        "endDate" : "2019-09-12T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.3361905, 
            "lng" : -121.8905833
        }
    },
    { 
        "_id" : "5d8dd5f5f795967f8dc2a342", 
        "type" : "conference", 
        "name" : "PostgresOpen", 
        "city" : "Orlando, FL", 
        "country" : "U.S.A.", 
        "url" : "http://2019.postgresopen.org", 
        "startDate" : "2019-09-11T00:00:00.000+0000", 
        "endDate" : "2019-09-13T00:00:00.000+0000", 
        "cfpEndDate" : "2019-06-30T00:00:00.000+0000", 
        "cfpUrl" : "http://2019.postgresopen.org/callforpapers", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 28.5421097, 
            "lng" : -81.3790388
        }
    },
    { 
        "_id" : "5d8dd5f6f795967f8dc2a343", 
        "type" : "conference", 
        "name" : "MLOps NYC19", 
        "city" : "New York", 
        "country" : "U.S.A.", 
        "url" : "https://www.mlopsnyc.com", 
        "startDate" : "2019-09-24T00:00:00.000+0000", 
        "endDate" : "2019-09-24T00:00:00.000+0000", 
        "cfpEndDate" : "2019-08-15T00:00:00.000+0000", 
        "cfpUrl" : "https://www.mlopsnyc.com/call-for-papers", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.7127281, 
            "lng" : -74.0060152
        }
    },
    { 
        "_id" : "5d8dd5f6f795967f8dc2a344", 
        "type" : "conference", 
        "name" : "DataWorkshop Club Conf", 
        "city" : "Warsaw", 
        "country" : "Poland", 
        "url" : "http://conf.dataworkshop.eu", 
        "startDate" : "2019-09-27T00:00:00.000+0000", 
        "endDate" : "2019-09-28T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.2319237, 
            "lng" : 21.0067265
        }
    },
    { 
        "_id" : "5d8dd5f7f795967f8dc2a345", 
        "type" : "conference", 
        "name" : "Kafka Summit SF", 
        "city" : "San Francisco", 
        "country" : "U.S.A.", 
        "url" : "https://kafka-summit.org/events/kafka-summit-san-francisco-2019", 
        "startDate" : "2019-09-30T00:00:00.000+0000", 
        "endDate" : "2019-10-01T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7790262, 
            "lng" : -122.4199061
        }
    },
    { 
        "_id" : "5d8dd5f7f795967f8dc2a346", 
        "type" : "conference", 
        "name" : "IEEE International Conference on Data Science and Advanced Analytics (DSAA)", 
        "city" : "Washington, DC", 
        "country" : "U.S.A.", 
        "url" : "http://www.dsaa.co", 
        "startDate" : "2019-10-05T00:00:00.000+0000", 
        "endDate" : "2019-10-08T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 38.8948932, 
            "lng" : -77.0365529
        }
    },
    { 
        "_id" : "5d8dd5f8f795967f8dc2a347", 
        "type" : "conference", 
        "name" : "PostgresConf South Africa", 
        "city" : "Johannesburg", 
        "country" : "South Africa", 
        "url" : "https://postgresconf.org/conferences/SouthAfrica2019", 
        "startDate" : "2019-10-08T00:00:00.000+0000", 
        "endDate" : "2019-10-09T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : -26.205, 
            "lng" : 28.049722
        }
    },
    { 
        "_id" : "5d8dd5f8f795967f8dc2a348", 
        "type" : "conference", 
        "name" : "AI DevWorld", 
        "city" : "San Jose", 
        "country" : "U.S.A.", 
        "url" : "https://aidevworld.com", 
        "startDate" : "2019-10-08T00:00:00.000+0000", 
        "endDate" : "2019-10-10T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.3361905, 
            "lng" : -121.8905833
        }
    },
    { 
        "_id" : "5d8dd5f9f795967f8dc2a349", 
        "type" : "conference", 
        "name" : "Minds & Tech", 
        "city" : "Toulouse", 
        "country" : "France", 
        "url" : "https://mindsandtech.com", 
        "startDate" : "2019-10-09T00:00:00.000+0000", 
        "endDate" : "2019-10-09T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.6044622, 
            "lng" : 1.4442469
        }
    },
    { 
        "_id" : "5d8dd5f9f795967f8dc2a34a", 
        "type" : "conference", 
        "name" : "World Summit Ai", 
        "city" : "Zaandam", 
        "country" : "Netherlands", 
        "url" : "https://worldsummit.ai", 
        "startDate" : "2019-10-09T00:00:00.000+0000", 
        "endDate" : "2019-10-09T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.4503062, 
            "lng" : 4.8159442
        }
    },
    { 
        "_id" : "5d8dd5faf795967f8dc2a34b", 
        "type" : "conference", 
        "name" : "IEEE 29th International Workshop on Machine Learning for Signal Processing (MLSP)", 
        "city" : "Pittsburgh, PA", 
        "country" : "U.S.A.", 
        "url" : "https://conferences.ieee.org/conferences_events/conferences/conferencedetails/46386", 
        "startDate" : "2019-10-13T00:00:00.000+0000", 
        "endDate" : "2019-10-16T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4416941, 
            "lng" : -79.9900861
        }
    },
    { 
        "_id" : "5d8dd5faf795967f8dc2a34c", 
        "type" : "conference", 
        "name" : "O'Reilly AI Conference", 
        "city" : "London", 
        "country" : "U.K.", 
        "url" : "https://conferences.oreilly.com/artificial-intelligence/ai-eu", 
        "startDate" : "2019-10-14T00:00:00.000+0000", 
        "endDate" : "2019-10-17T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.5073219, 
            "lng" : -0.1276474
        }
    },
    { 
        "_id" : "5d8dd5fbf795967f8dc2a34d", 
        "type" : "conference", 
        "name" : "PostgreSQL Conference Europe", 
        "city" : "Milan", 
        "country" : "Italy", 
        "url" : "https://2019.pgconf.eu", 
        "startDate" : "2019-10-15T00:00:00.000+0000", 
        "endDate" : "2019-10-18T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 45.4667971, 
            "lng" : 9.1904984
        }
    },
    { 
        "_id" : "5d8dd5fbf795967f8dc2a34e", 
        "type" : "conference", 
        "name" : "data2day", 
        "city" : "Heidelberg", 
        "country" : "Germany", 
        "url" : "https://www.data2day.de", 
        "startDate" : "2019-10-22T00:00:00.000+0000", 
        "endDate" : "2019-10-24T00:00:00.000+0000", 
        "cfpEndDate" : "2019-05-03T00:00:00.000+0000", 
        "cfpUrl" : "https://www.data2day.de/proposal_einreichen_en.php", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 49.4093582, 
            "lng" : 8.694724
        }
    },
    { 
        "_id" : "5d8dd5fcf795967f8dc2a34f", 
        "type" : "conference", 
        "name" : "AI World Conference & Expo", 
        "city" : "Boston", 
        "country" : "U.S.A.", 
        "url" : "https://aiworld.com", 
        "startDate" : "2019-10-23T00:00:00.000+0000", 
        "endDate" : "2019-10-25T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.3602534, 
            "lng" : -71.0582912
        }
    },
    { 
        "_id" : "5d8dd5fcf795967f8dc2a350", 
        "type" : "conference", 
        "name" : "Haystack Europe", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://haystackconf.com/europe2019", 
        "startDate" : "2019-10-28T00:00:00.000+0000", 
        "endDate" : "2019-10-28T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-31T00:00:00.000+0000", 
        "cfpUrl" : "https://haystackconf.com", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5fdf795967f8dc2a351", 
        "type" : "conference", 
        "name" : "Data Natives", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://datanatives.io", 
        "startDate" : "2019-11-21T00:00:00.000+0000", 
        "endDate" : "2019-11-22T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5fdf795967f8dc2a352", 
        "type" : "conference", 
        "name" : "Big Data Conference Europe", 
        "city" : "Vilnius", 
        "country" : "Lithuania", 
        "url" : "https://www.bigdataconference.lt", 
        "startDate" : "2019-11-26T00:00:00.000+0000", 
        "endDate" : "2019-11-28T00:00:00.000+0000", 
        "cfpEndDate" : "2019-08-15T00:00:00.000+0000", 
        "cfpUrl" : "https://www.bigdataconference.lt/cfp", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 54.6870458, 
            "lng" : 25.2829111
        }
    },
    { 
        "_id" : "5d8dd5fef795967f8dc2a353", 
        "type" : "conference", 
        "name" : "Chief Information Officer Innovation Conference", 
        "city" : "Singapore", 
        "country" : "Singapore", 
        "url" : "https://pgsolx.com/IT-Tech/CIO/5th", 
        "startDate" : "2019-11-28T00:00:00.000+0000", 
        "endDate" : "2019-11-29T00:00:00.000+0000", 
        "cfpEndDate" : "2019-11-29T00:00:00.000+0000", 
        "cfpUrl" : "https://pgsolx.com/IT-Tech/CIO/5th", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 1.340863, 
            "lng" : 103.8303918
        }
    },
    { 
        "_id" : "5d8dd5fef795967f8dc2a354", 
        "type" : "conference", 
        "name" : "Machine Learning Conference", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://mlconference.ai", 
        "startDate" : "2019-12-09T00:00:00.000+0000", 
        "endDate" : "2019-12-11T00:00:00.000+0000", 
        "cfpEndDate" : "2019-06-16T00:00:00.000+0000", 
        "cfpUrl" : "https://callforpapers.sandsmedia.com", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd5fff795967f8dc2a355", 
        "type" : "conference", 
        "name" : "PyData", 
        "city" : "Warsaw", 
        "country" : "Poland", 
        "url" : "https://pydata.org/warsaw2019", 
        "startDate" : "2019-12-12T00:00:00.000+0000", 
        "endDate" : "2019-12-13T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-13T00:00:00.000+0000", 
        "cfpUrl" : "https://pydata.org/warsaw2019//cfp", 
        "topics" : [
            "data"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.2319237, 
            "lng" : 21.0067265
        }
    },
    { 
        "_id" : "5d8dd5fff795967f8dc2a356", 
        "type" : "conference", 
        "name" : "Serverless Days", 
        "city" : "Hamburg", 
        "country" : "Germany", 
        "url" : "https://hamburg.serverlessdays.io", 
        "startDate" : "2019-02-15T00:00:00.000+0000", 
        "endDate" : "2019-02-15T00:00:00.000+0000", 
        "cfpEndDate" : "2018-12-08T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/slsdaysham2019", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 53.550341, 
            "lng" : 10.000654
        }
    },
    { 
        "_id" : "5d8dd600f795967f8dc2a357", 
        "type" : "conference", 
        "name" : "DSConf", 
        "city" : "Pune", 
        "country" : "India", 
        "url" : "https://dsconf.in", 
        "startDate" : "2019-02-16T00:00:00.000+0000", 
        "endDate" : "2019-02-16T00:00:00.000+0000", 
        "cfpEndDate" : "2018-12-15T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/distributed-systems-conf", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 18.5203062, 
            "lng" : 73.8543185
        }
    },
    { 
        "_id" : "5d8dd601f795967f8dc2a358", 
        "type" : "conference", 
        "name" : "SCaLE 17x", 
        "city" : "Pasadena", 
        "country" : "U.S.A.", 
        "url" : "https://www.socallinuxexpo.org/scale/17x", 
        "startDate" : "2019-03-07T00:00:00.000+0000", 
        "endDate" : "2019-03-10T00:00:00.000+0000", 
        "cfpEndDate" : "2018-10-31T00:00:00.000+0000", 
        "cfpUrl" : "http://www.socallinuxexpo.org/scale/17x/cfp/", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 34.1476452, 
            "lng" : -118.1444779
        }
    },
    { 
        "_id" : "5d8dd601f795967f8dc2a359", 
        "type" : "conference", 
        "name" : "DevOpsDay LA", 
        "city" : "Pasadena", 
        "country" : "U.S.A.", 
        "url" : "https://devopsdays.org/events/2019-los-angeles", 
        "startDate" : "2019-03-08T00:00:00.000+0000", 
        "endDate" : "2019-03-08T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-15T00:00:00.000+0000", 
        "cfpUrl" : "https://www.devopsdays.org/events/2019-los-angeles/propose//", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 34.1476452, 
            "lng" : -118.1444779
        }
    },
    { 
        "_id" : "5d8dd602f795967f8dc2a35a", 
        "type" : "conference", 
        "name" : "Cloud Expo Europe", 
        "city" : "London", 
        "country" : "U.K.", 
        "url" : "https://www.cloudexpoeurope.com/ezone", 
        "startDate" : "2019-03-12T00:00:00.000+0000", 
        "endDate" : "2019-03-13T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.5073219, 
            "lng" : -0.1276474
        }
    },
    { 
        "_id" : "5d8dd602f795967f8dc2a35b", 
        "type" : "conference", 
        "name" : "DevOps Pro Europe", 
        "city" : "Vilnius", 
        "country" : "Lithuania", 
        "url" : "https://devopspro.lt", 
        "startDate" : "2019-03-19T00:00:00.000+0000", 
        "endDate" : "2019-03-21T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-10T00:00:00.000+0000", 
        "cfpUrl" : "https://devopspro.lt/cfp/", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 54.6870458, 
            "lng" : 25.2829111
        }
    },
    { 
        "_id" : "5d8dd603f795967f8dc2a35c", 
        "type" : "conference", 
        "name" : "gRPC Conf", 
        "city" : "Sunnyvale", 
        "country" : "U.S.A.", 
        "url" : "https://grpconf19.sched.com/", 
        "startDate" : "2019-03-21T00:00:00.000+0000", 
        "endDate" : "2019-03-21T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.3688301, 
            "lng" : -122.0363496
        }
    },
    { 
        "_id" : "5d8dd603f795967f8dc2a35d", 
        "type" : "conference", 
        "name" : "Kubernetes Day India", 
        "city" : "Bengaluru", 
        "country" : "India", 
        "url" : "https://kdi19.sched.com/", 
        "startDate" : "2019-03-23T00:00:00.000+0000", 
        "endDate" : "2019-03-23T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 12.9791198, 
            "lng" : 77.5912997
        }
    },
    { 
        "_id" : "5d8dd603f795967f8dc2a35e", 
        "type" : "conference", 
        "name" : "SREcon19 Americas", 
        "city" : "Brooklyn, NY", 
        "country" : "U.S.A.", 
        "url" : "https://www.usenix.org/conference/srecon19americas", 
        "startDate" : "2019-03-25T00:00:00.000+0000", 
        "endDate" : "2019-03-27T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.6501038, 
            "lng" : -73.9495823
        }
    },
    { 
        "_id" : "5d8dd604f795967f8dc2a35f", 
        "type" : "conference", 
        "name" : "ServerlessDays Amsterdam", 
        "city" : "Amsterdam", 
        "country" : "Netherlands", 
        "url" : "https://serverlessdays.amsterdam/", 
        "startDate" : "2019-03-29T00:00:00.000+0000", 
        "endDate" : "2019-03-29T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.3745403, 
            "lng" : 4.8979755
        }
    },
    { 
        "_id" : "5d8dd605f795967f8dc2a360", 
        "type" : "conference", 
        "name" : "DevOpsDays Vancouver", 
        "city" : "Vancouver", 
        "country" : "Canada", 
        "url" : "https://www.devopsdays.org/events/2019-vancouver", 
        "startDate" : "2019-03-29T00:00:00.000+0000", 
        "endDate" : "2019-03-30T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 49.2608724, 
            "lng" : -123.1139529
        }
    },
    { 
        "_id" : "5d8dd605f795967f8dc2a361", 
        "type" : "conference", 
        "name" : "DevOpsDays Copenhagen", 
        "city" : "Copenhagen", 
        "country" : "Denmark", 
        "url" : "https://www.devopsdays.org/events/2019-copenhagen/welcome", 
        "startDate" : "2019-04-03T00:00:00.000+0000", 
        "endDate" : "2019-04-04T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 55.6867243, 
            "lng" : 12.5700724
        }
    },
    { 
        "_id" : "5d8dd606f795967f8dc2a362", 
        "type" : "conference", 
        "name" : "DevOps Fest", 
        "city" : "Kyiv", 
        "country" : "Ukraine", 
        "url" : "http://devopsfest.com.ua", 
        "startDate" : "2019-04-06T00:00:00.000+0000", 
        "endDate" : "2019-04-06T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-23T00:00:00.000+0000", 
        "cfpUrl" : "http://devopsfest.com.ua/speakers.html", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 50.4500336, 
            "lng" : 30.5241361
        }
    },
    { 
        "_id" : "5d8dd607f795967f8dc2a363", 
        "type" : "conference", 
        "name" : "UKNOF 43", 
        "city" : "Manchester", 
        "country" : "U.K.", 
        "url" : "https://indico.uknof.org.uk/event/46/", 
        "startDate" : "2019-04-09T00:00:00.000+0000", 
        "endDate" : "2019-04-09T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-26T00:00:00.000+0000", 
        "cfpUrl" : "https://indico.uknof.org.uk/event/46/abstracts/", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 53.4794892, 
            "lng" : -2.2451148
        }
    },
    { 
        "_id" : "5d8dd608f795967f8dc2a364", 
        "type" : "conference", 
        "name" : "DevOpsDays Atlanta", 
        "city" : "Atlanta", 
        "country" : "U.S.A.", 
        "url" : "https://www.devopsdays.org/events/2019-atlanta/welcome", 
        "startDate" : "2019-04-09T00:00:00.000+0000", 
        "endDate" : "2019-04-10T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-28T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/devopsdaysatl2019", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 33.7490987, 
            "lng" : -84.3901849
        }
    },
    { 
        "_id" : "5d8dd608f795967f8dc2a365", 
        "type" : "conference", 
        "name" : "DevOne", 
        "city" : "Linz", 
        "country" : "Austria", 
        "url" : "https://devone.at", 
        "startDate" : "2019-04-11T00:00:00.000+0000", 
        "endDate" : "2019-04-11T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-31T00:00:00.000+0000", 
        "cfpUrl" : "https://goo.gl/forms/vNci5cxE4TdbcNVI2", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 48.3059078, 
            "lng" : 14.286198
        }
    },
    { 
        "_id" : "5d8dd609f795967f8dc2a366", 
        "type" : "conference", 
        "name" : "DevOpsDays Seattle", 
        "city" : "Seattle", 
        "country" : "U.S.A.", 
        "url" : "https://www.devopsdays.org/events/2019-seattle/welcome", 
        "startDate" : "2019-04-23T00:00:00.000+0000", 
        "endDate" : "2019-04-24T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 47.6038321, 
            "lng" : -122.3300624
        }
    },
    { 
        "_id" : "5d8dd609f795967f8dc2a367", 
        "type" : "conference", 
        "name" : "GOTO", 
        "city" : "Chicago, IL", 
        "country" : "U.S.A.", 
        "url" : "http://gotochgo.com", 
        "startDate" : "2019-04-28T00:00:00.000+0000", 
        "endDate" : "2019-05-02T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.8755616, 
            "lng" : -87.6244212
        }
    },
    { 
        "_id" : "5d8dd60af795967f8dc2a368", 
        "type" : "conference", 
        "name" : "DockerCon", 
        "city" : "San Francisco", 
        "country" : "U.S.A.", 
        "url" : "https://events.docker.com/events/dockercon", 
        "startDate" : "2019-04-29T00:00:00.000+0000", 
        "endDate" : "2019-05-02T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7790262, 
            "lng" : -122.4199061
        }
    },
    { 
        "_id" : "5d8dd60af795967f8dc2a369", 
        "type" : "conference", 
        "name" : "DevOps Days Des Moines", 
        "city" : "Des Moines", 
        "country" : "U.S.A.", 
        "url" : "https://www.devopsdays.org/events/2019-des-moines/welcome", 
        "startDate" : "2019-05-02T00:00:00.000+0000", 
        "endDate" : "2019-05-03T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.5910641, 
            "lng" : -93.6037149
        }
    },
    { 
        "_id" : "5d8dd60bf795967f8dc2a36a", 
        "type" : "conference", 
        "name" : "WeRockIT", 
        "city" : "Huntsville, AL", 
        "country" : "U.S.A.", 
        "url" : "http://werockitconf.com", 
        "startDate" : "2019-05-03T00:00:00.000+0000", 
        "endDate" : "2019-05-04T00:00:00.000+0000", 
        "cfpEndDate" : "2018-11-20T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/werockitconf", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 34.729847, 
            "lng" : -86.5859011
        }
    },
    { 
        "_id" : "5d8dd60bf795967f8dc2a36b", 
        "type" : "conference", 
        "name" : "Salt Lake City DevOps Days", 
        "city" : "Salt Lake City, UT", 
        "country" : "U.S.A.", 
        "url" : "https://www.slcdevopsdays.org", 
        "startDate" : "2019-05-14T00:00:00.000+0000", 
        "endDate" : "2019-05-15T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-01T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/slcdod2018", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.7596198, 
            "lng" : -111.8867975
        }
    },
    { 
        "_id" : "5d8dd60cf795967f8dc2a36c", 
        "type" : "conference", 
        "name" : "Open Source Data Center", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://osdc.de/", 
        "startDate" : "2019-05-14T00:00:00.000+0000", 
        "endDate" : "2019-05-15T00:00:00.000+0000", 
        "cfpEndDate" : "2019-01-31T00:00:00.000+0000", 
        "cfpUrl" : "https://osdc.de/submit-a-talk/", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd60cf795967f8dc2a36d", 
        "type" : "conference", 
        "name" : "JAX DevOps", 
        "city" : "London", 
        "country" : "U.K.", 
        "url" : "https://devops.jaxlondon.com", 
        "startDate" : "2019-05-14T00:00:00.000+0000", 
        "endDate" : "2019-05-17T00:00:00.000+0000", 
        "cfpEndDate" : null, 
        "cfpUrl" : null, 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 51.5073219, 
            "lng" : -0.1276474
        }
    },
    { 
        "_id" : "5d8dd60df795967f8dc2a36e", 
        "type" : "conference", 
        "name" : "Statscraft", 
        "city" : "Tel Aviv", 
        "country" : "Israel", 
        "url" : "http://www.statscraft.org.il", 
        "startDate" : "2019-05-14T00:00:00.000+0000", 
        "endDate" : "2019-05-14T00:00:00.000+0000", 
        "cfpEndDate" : "2019-03-01T00:00:00.000+0000", 
        "cfpUrl" : "https://www.papercall.io/stastcraft-2019", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 32.0804808, 
            "lng" : 34.7805274
        }
    },
    { 
        "_id" : "5d8dd60df795967f8dc2a36f", 
        "type" : "conference", 
        "name" : "Open Source Camp - Ansible", 
        "city" : "Berlin", 
        "country" : "Germany", 
        "url" : "https://opensourcecamp.de/", 
        "startDate" : "2019-05-16T00:00:00.000+0000", 
        "endDate" : "2019-05-16T00:00:00.000+0000", 
        "cfpEndDate" : "2019-02-28T00:00:00.000+0000", 
        "cfpUrl" : "https://opensourcecamp.de/submit-a-talk/", 
        "topics" : [
            "devops"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 52.5170365, 
            "lng" : 13.3888599
        }
    },
    { 
        "_id" : "5d8dd748a00b92807743a0a6", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "https://www.mmeetup.com/GDG-Jaen", 
        "startDate" : "2019-07-18T00:00:00.000+0000", 
        "endDate" : "2019-07-19T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-19T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSe8avenFngiiKdOak3rKxTAX9K1re8DFJn_nzBGTOjir5Ko1g/viewform", 
        "city" : "Jaén, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGJaen", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.7728858, 
            "lng" : -3.7883289
        }
    },
    { 
        "_id" : "5d8dd749a00b92807743a0a7", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : null, 
        "startDate" : "2019-11-08T00:00:00.000+0000", 
        "endDate" : "2019-11-08T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Santander, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/gdgsantander", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.4620412, 
            "lng" : -3.8099719
        }
    },
    { 
        "_id" : "5d8dd749a00b92807743a0a8", 
        "type" : "conference", 
        "name" : "AdaloversConf", 
        "url" : "http://adaloversconf.es/", 
        "startDate" : "2019-09-28T00:00:00.000+0000", 
        "endDate" : "2019-09-28T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-01T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSctp7j6kOzeG4PgyyR5pe6rr0ALZFefts-Kv20d3XWIg7Fd9w/viewform", 
        "city" : "Tenerife, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/adalovedev", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 28.2935785, 
            "lng" : -16.6214471
        }
    },
    { 
        "_id" : "5d8dd74aa00b92807743a0a9", 
        "type" : "conference", 
        "name" : "ADDC", 
        "url" : "https://addconf.com/2019", 
        "startDate" : "2019-06-26T00:00:00.000+0000", 
        "endDate" : "2019-06-28T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/addconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd74aa00b92807743a0aa", 
        "type" : "conference", 
        "name" : "AOS", 
        "url" : "https://aos2019.agile-spain.org", 
        "startDate" : "2019-06-27T00:00:00.000+0000", 
        "endDate" : "2019-06-28T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Vizcaya, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/agileopenspain", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.238482, 
            "lng" : -2.8516316
        }
    },
    { 
        "_id" : "5d8dd74ba00b92807743a0ab", 
        "type" : "conference", 
        "name" : "Api Days", 
        "url" : "https://www.apidays.co/barcelona", 
        "startDate" : "2019-09-12T00:00:00.000+0000", 
        "endDate" : "2019-09-13T00:00:00.000+0000", 
        "cfpEndDate" : "2019-09-12T00:00:00.000+0000", 
        "cfpUrl" : "https://apidays.typeform.com/to/J1snsg", 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/apidaysglobal", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd74ba00b92807743a0ac", 
        "type" : "conference", 
        "name" : "Atlántica Conf", 
        "url" : "http://atlanticaconf.com/", 
        "startDate" : "2019-10-04T00:00:00.000+0000", 
        "endDate" : "2019-10-05T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "A Coruña, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/atlanticaconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.3712091, 
            "lng" : -8.3958768
        }
    },
    { 
        "_id" : "5d8dd74ca00b92807743a0ad", 
        "type" : "conference", 
        "name" : "Big Things", 
        "url" : "https://www.bigthingsconference.com/", 
        "startDate" : "2019-11-20T00:00:00.000+0000", 
        "endDate" : "2019-11-21T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-31T00:00:00.000+0000", 
        "cfpUrl" : "https://www.bigthingsconference.com/call-for-papers/", 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/BigThingsConf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd74ca00b92807743a0ae", 
        "type" : "conference", 
        "name" : "BilboStack", 
        "url" : "https://bilbostack.com/2019/", 
        "startDate" : "2019-01-26T00:00:00.000+0000", 
        "endDate" : "2019-01-26T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Bilbao, Vizcaya, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/bilbostack", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.2630051, 
            "lng" : -2.9349915
        }
    },
    { 
        "_id" : "5d8dd74da00b92807743a0af", 
        "type" : "conference", 
        "name" : "BilboStack", 
        "url" : "https://bilbostack.com", 
        "startDate" : "2020-01-25T00:00:00.000+0000", 
        "endDate" : "2020-01-25T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Bilbao, Vizcaya, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/bilbostack", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.2630051, 
            "lng" : -2.9349915
        }
    },
    { 
        "_id" : "5d8dd74da00b92807743a0b0", 
        "type" : "conference", 
        "name" : "Call of Data", 
        "url" : "http://callofdata.info/", 
        "startDate" : "2019-06-02T00:00:00.000+0000", 
        "endDate" : "2019-06-03T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/RLadiesMAD", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd74da00b92807743a0b1", 
        "type" : "conference", 
        "name" : "CAS", 
        "url" : "https://cas2019.agile-spain.org/", 
        "startDate" : "2019-11-22T00:00:00.000+0000", 
        "endDate" : "2019-11-23T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/confagilespain", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd74ea00b92807743a0b2", 
        "type" : "conference", 
        "name" : "Codemotion", 
        "url" : "https://madrid2018.codemotionworld.com/es/", 
        "startDate" : "2019-09-24T00:00:00.000+0000", 
        "endDate" : "2019-09-25T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/CodemoMadrid", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd74ea00b92807743a0b3", 
        "type" : "conference", 
        "name" : "Commit Conf", 
        "url" : "https://2019.commit-conf.com/", 
        "startDate" : "2019-11-22T00:00:00.000+0000", 
        "endDate" : "2019-11-23T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/commitconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd74fa00b92807743a0b4", 
        "type" : "conference", 
        "name" : "CyberCamp", 
        "url" : "https://cybercamp.es/", 
        "startDate" : "2019-11-27T00:00:00.000+0000", 
        "endDate" : "2019-11-30T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Valencia, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/cybercampes", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 39.4699014, 
            "lng" : -0.3759513
        }
    },
    { 
        "_id" : "5d8dd74fa00b92807743a0b5", 
        "type" : "conference", 
        "name" : "CSS Camp", 
        "url" : "https://csscamp.tech/", 
        "startDate" : "2019-07-17T00:00:00.000+0000", 
        "endDate" : "2019-07-17T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/csscamp", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd750a00b92807743a0b6", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "http://devfestalicante.com/", 
        "startDate" : "2019-11-16T00:00:00.000+0000", 
        "endDate" : "2019-11-16T00:00:00.000+0000", 
        "cfpEndDate" : "2019-09-05T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLScRcS3tgRF1i9N14uoSE9ZD_SoxEu4lvA95cs1CmEY_5Elp0A/viewform", 
        "city" : "Alicante, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGAlicante", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 38.353738, 
            "lng" : -0.4901846
        }
    },
    { 
        "_id" : "5d8dd751a00b92807743a0b7", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "http://devfest.gdgasturias.com/", 
        "startDate" : "2019-11-16T00:00:00.000+0000", 
        "endDate" : "2019-11-16T00:00:00.000+0000", 
        "cfpEndDate" : "2019-09-20T00:00:00.000+0000", 
        "cfpUrl" : "bit.ly/C4TDevfest2019", 
        "city" : "Asturias, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGAsturias", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.3133868, 
            "lng" : -5.94192
        }
    },
    { 
        "_id" : "5d8dd751a00b92807743a0b8", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "https://devfest.gdggalicia.com/", 
        "startDate" : "2019-10-26T00:00:00.000+0000", 
        "endDate" : "2019-10-26T00:00:00.000+0000", 
        "cfpEndDate" : "2019-09-01T00:00:00.000+0000", 
        "cfpUrl" : "https://bit.ly/2YpNj7N", 
        "city" : "Ourense, Galicia, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGGalicia", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.1968459, 
            "lng" : -7.6114105
        }
    },
    { 
        "_id" : "5d8dd752a00b92807743a0b9", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "https://www.meetup.com/granadagdg/events/263394864/", 
        "startDate" : "2019-11-09T00:00:00.000+0000", 
        "endDate" : "2019-11-09T00:00:00.000+0000", 
        "cfpEndDate" : "2019-09-15T00:00:00.000+0000", 
        "cfpUrl" : "https://forms.gle/xf1SpJHfSdNr9h3A9", 
        "city" : "Granada, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGGranada", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.183054, 
            "lng" : -3.6021928
        }
    },
    { 
        "_id" : "5d8dd752a00b92807743a0ba", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "https://www.gdglleida.com/2019/06/devfest-lleida-2019.html", 
        "startDate" : "2019-11-09T00:00:00.000+0000", 
        "endDate" : "2019-11-09T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Lleida, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGLleida", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.6147605, 
            "lng" : 0.6267842
        }
    },
    { 
        "_id" : "5d8dd753a00b92807743a0bb", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "https://devfest.gdgmalaga.com/", 
        "startDate" : "2019-12-14T00:00:00.000+0000", 
        "endDate" : "2019-12-14T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-26T00:00:00.000+0000", 
        "cfpUrl" : "https://devfest.gdgmalaga.com/blog/posts/c4p/", 
        "city" : "Malaga, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGMalaga", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 36.7213028, 
            "lng" : -4.4216366
        }
    },
    { 
        "_id" : "5d8dd753a00b92807743a0bc", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "https://devfest-sev.firebaseapp.com/", 
        "startDate" : "2019-10-11T00:00:00.000+0000", 
        "endDate" : "2019-10-11T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-11T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSfndIZHsooOlMhlSSwDgz2ohqE-e0ocGj_sSkVtkvXMkWRkgA/viewform", 
        "city" : "Sevilla, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGSevilla", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.3886303, 
            "lng" : -5.9953403
        }
    },
    { 
        "_id" : "5d8dd754a00b92807743a0bd", 
        "type" : "conference", 
        "name" : "DevFest", 
        "url" : "http://gdgzaragoza.es/devfest/", 
        "startDate" : "2019-11-23T00:00:00.000+0000", 
        "endDate" : "2019-11-23T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-09T00:00:00.000+0000", 
        "cfpUrl" : "https://forms.gle/UbXyvGZ5jj5qvtp39", 
        "city" : "Zaragoza, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGZaragoza", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.840047, 
            "lng" : -1.169509
        }
    },
    { 
        "_id" : "5d8dd754a00b92807743a0be", 
        "type" : "conference", 
        "name" : "Droidcon", 
        "url" : "https://www.madrid.droidcon.com/", 
        "startDate" : "2019-12-20T00:00:00.000+0000", 
        "endDate" : "2019-12-21T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-30T00:00:00.000+0000", 
        "cfpUrl" : "https://sessionize.com/droidcon-madrid", 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/droidconMAD", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd754a00b92807743a0bf", 
        "type" : "conference", 
        "name" : "DrupalCamp", 
        "url" : "https://2019.drupalcamp.es/es", 
        "startDate" : "2019-05-06T00:00:00.000+0000", 
        "endDate" : "2019-05-12T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Conil, Cádiz, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/drupalcampspain", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 36.2757882, 
            "lng" : -6.0889112
        }
    },
    { 
        "_id" : "5d8dd755a00b92807743a0c0", 
        "type" : "conference", 
        "name" : "EDD", 
        "url" : "https://2019.extremaduradigitalday.com", 
        "startDate" : "2019-10-05T00:00:00.000+0000", 
        "endDate" : "2019-10-05T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-05T00:00:00.000+0000", 
        "cfpUrl" : "https://2019.extremaduradigitalday.com/call-for-papers/", 
        "city" : "Cáceres, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/extredigitalday", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 39.4745175, 
            "lng" : -6.3716761
        }
    },
    { 
        "_id" : "5d8dd755a00b92807743a0c1", 
        "type" : "conference", 
        "name" : "esLibre", 
        "url" : "https://eslib.re/2019/", 
        "startDate" : "2019-06-21T00:00:00.000+0000", 
        "endDate" : "2019-06-21T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Granada, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/esLibre_", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.183054, 
            "lng" : -3.6021928
        }
    },
    { 
        "_id" : "5d8dd756a00b92807743a0c2", 
        "type" : "conference", 
        "name" : "ExFest", 
        "url" : "https://exfest.tech/", 
        "startDate" : "2019-04-26T00:00:00.000+0000", 
        "endDate" : "2019-04-27T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Cáceres, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/gdgcaceres", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 39.4745175, 
            "lng" : -6.3716761
        }
    },
    { 
        "_id" : "5d8dd756a00b92807743a0c3", 
        "type" : "conference", 
        "name" : "expo:QA", 
        "url" : "http://www.expoqa.com", 
        "startDate" : "2019-06-17T00:00:00.000+0000", 
        "endDate" : "2019-06-19T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/expoqa", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd757a00b92807743a0c4", 
        "type" : "conference", 
        "name" : "Fabada Conf", 
        "url" : "https://fabadaconf.com", 
        "startDate" : "2019-11-09T00:00:00.000+0000", 
        "endDate" : "2019-11-09T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Gijón, Asturias, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/fabadaconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.5450394, 
            "lng" : -5.6626443
        }
    },
    { 
        "_id" : "5d8dd757a00b92807743a0c5", 
        "type" : "conference", 
        "name" : "Firebase Summit", 
        "url" : "https://firebase.google.com/summit", 
        "startDate" : "2019-09-26T00:00:00.000+0000", 
        "endDate" : "2019-09-26T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/Firebase", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd758a00b92807743a0c6", 
        "type" : "conference", 
        "name" : "FlutterConf", 
        "url" : "http://flutterconf.gdgmarbella.com/", 
        "startDate" : "2019-10-18T00:00:00.000+0000", 
        "endDate" : "2019-10-19T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-19T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSd5S1YDOYYyrEAsEMdy6VEuTeYm-3oj5_Sfl38QA35R5ZDrpw/viewform", 
        "city" : "Marbella, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/GDGMarbella", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 36.508976, 
            "lng" : -4.88562
        }
    },
    { 
        "_id" : "5d8dd758a00b92807743a0c7", 
        "type" : "conference", 
        "name" : "FrontFest", 
        "url" : "https://2019.frontfest.es/", 
        "startDate" : "2019-02-02T00:00:00.000+0000", 
        "endDate" : "2019-02-02T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/frontfest", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd759a00b92807743a0c8", 
        "type" : "conference", 
        "name" : "Full Stack Fest", 
        "url" : "https://2019.fullstackfest.com/", 
        "startDate" : "2019-09-03T00:00:00.000+0000", 
        "endDate" : "2019-09-06T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Sitges, Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/fullstackfest", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.2366707, 
            "lng" : 1.8228136
        }
    },
    { 
        "_id" : "5d8dd75aa00b92807743a0c9", 
        "type" : "conference", 
        "name" : "Greach", 
        "url" : "https://greachconf.com/", 
        "startDate" : "2019-03-28T00:00:00.000+0000", 
        "endDate" : "2019-03-30T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/greachconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd75aa00b92807743a0ca", 
        "type" : "conference", 
        "name" : "GSAS", 
        "url" : "https://gsas.io", 
        "startDate" : "2019-10-10T00:00:00.000+0000", 
        "endDate" : "2019-10-10T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/gsas_io", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd75ba00b92807743a0cb", 
        "type" : "conference", 
        "name" : "JBCNConf", 
        "url" : "http://www.jbcnconf.com/2019/", 
        "startDate" : "2019-05-27T00:00:00.000+0000", 
        "endDate" : "2019-05-29T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/jbcnconf/", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd75ba00b92807743a0cc", 
        "type" : "conference", 
        "name" : "J on the Beach", 
        "url" : "https://jonthebeach.com/", 
        "startDate" : "2019-05-15T00:00:00.000+0000", 
        "endDate" : "2019-05-17T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Málaga, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/jotb19", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 36.7213028, 
            "lng" : -4.4216366
        }
    },
    { 
        "_id" : "5d8dd75ca00b92807743a0cd", 
        "type" : "conference", 
        "name" : "JS Camp", 
        "url" : "https://jscamp.tech/", 
        "startDate" : "2019-07-18T00:00:00.000+0000", 
        "endDate" : "2019-07-19T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/jscamp", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd75ca00b92807743a0ce", 
        "type" : "conference", 
        "name" : "JSDay Canarias", 
        "url" : "https://jsdaycanarias.com/", 
        "startDate" : "2019-11-08T00:00:00.000+0000", 
        "endDate" : "2019-11-10T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-01T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSdhBUYjk_rBch1zQh5lWotYInFM6pFkvNzwNVoyM6gYiRzdbQ/viewform", 
        "city" : "Tenerife, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/canariasjs", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 28.2935785, 
            "lng" : -16.6214471
        }
    },
    { 
        "_id" : "5d8dd75ca00b92807743a0cf", 
        "type" : "conference", 
        "name" : "JSDayES", 
        "url" : "http://2019.jsday.es/", 
        "startDate" : "2020-05-09T00:00:00.000+0000", 
        "endDate" : "2020-05-09T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/jsdayes", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd75da00b92807743a0d0", 
        "type" : "conference", 
        "name" : "Lambda World", 
        "url" : "http://cadiz.lambda.world/", 
        "startDate" : "2019-10-17T00:00:00.000+0000", 
        "endDate" : "2019-10-18T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-01T00:00:00.000+0000", 
        "cfpUrl" : "http://www.lambda.world/call-for-papers/", 
        "city" : "Cádiz, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/lambda_world", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 36.5298292, 
            "lng" : -6.2925679
        }
    },
    { 
        "_id" : "5d8dd75da00b92807743a0d1", 
        "type" : "conference", 
        "name" : "LechazoConf", 
        "url" : "https://lechazoconf.com/", 
        "startDate" : "2019-05-18T00:00:00.000+0000", 
        "endDate" : "2019-05-18T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Valladolid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/lechazoconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.6521328, 
            "lng" : -4.728562
        }
    },
    { 
        "_id" : "5d8dd75ea00b92807743a0d2", 
        "type" : "conference", 
        "name" : "LechazoConf '20", 
        "url" : "https://lechazoconf.com/", 
        "startDate" : "2020-05-30T00:00:00.000+0000", 
        "endDate" : "2020-05-30T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Valladolid, Spain", 
        "country" : "Spain", 
        "twitter" : "http://twitter.com/lechazoconf/", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.6521328, 
            "lng" : -4.728562
        }
    },
    { 
        "_id" : "5d8dd75ea00b92807743a0d3", 
        "type" : "conference", 
        "name" : "MorcillaConf", 
        "url" : "http://morcillaconf.es/", 
        "startDate" : "2019-09-07T00:00:00.000+0000", 
        "endDate" : "2019-09-07T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-20T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLSdqlsK-E5C_phC-GrN4TDlMpxt8l_9IFkHeqTbmszkl7q9psA/viewform", 
        "city" : "Burgos, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/morcillaconf/", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.343926, 
            "lng" : -3.696977
        }
    },
    { 
        "_id" : "5d8dd75fa00b92807743a0d4", 
        "type" : "conference", 
        "name" : "Navaja Negra Conference", 
        "url" : "https://www.navajanegra.com/2019/", 
        "startDate" : "2019-10-03T00:00:00.000+0000", 
        "endDate" : "2019-10-05T00:00:00.000+0000", 
        "cfpEndDate" : "2019-08-18T00:00:00.000+0000", 
        "cfpUrl" : "https://www.navajanegra.com/2019/#cfp", 
        "city" : "Albacete, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/navajanegra_ab", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 38.9890121, 
            "lng" : -1.8548699
        }
    },
    { 
        "_id" : "5d8dd75fa00b92807743a0d5", 
        "type" : "conference", 
        "name" : "NetCoreConf", 
        "url" : "https://galicia.netcoreconf.com/", 
        "startDate" : "2019-09-28T00:00:00.000+0000", 
        "endDate" : "2019-09-28T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Santiago de Compostela, Galicia, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/netcoreconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.8804219, 
            "lng" : -8.5458608
        }
    },
    { 
        "_id" : "5d8dd75fa00b92807743a0d6", 
        "type" : "conference", 
        "name" : "NG Spain", 
        "url" : "https://ngspain.com/", 
        "startDate" : "2019-10-19T00:00:00.000+0000", 
        "endDate" : "2019-10-20T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/ngspain/", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd760a00b92807743a0d7", 
        "type" : "conference", 
        "name" : "NSSpain", 
        "url" : "https://2019.nsspain.com/", 
        "startDate" : "2019-09-18T00:00:00.000+0000", 
        "endDate" : "2019-09-20T00:00:00.000+0000", 
        "cfpEndDate" : "2019-09-18T00:00:00.000+0000", 
        "cfpUrl" : "https://luisascorbe.typeform.com/to/V5t8cH", 
        "city" : "Logroño, La Rioja, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/nsspain", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.4661196, 
            "lng" : -2.4396676
        }
    },
    { 
        "_id" : "5d8dd760a00b92807743a0d8", 
        "type" : "conference", 
        "name" : "PHP.Barcelona", 
        "url" : "https://php.barcelona/", 
        "startDate" : "2019-11-12T00:00:00.000+0000", 
        "endDate" : "2019-11-13T00:00:00.000+0000", 
        "cfpEndDate" : "2019-07-03T00:00:00.000+0000", 
        "cfpUrl" : "https://php.barcelona/call-for-papers", 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/phpbcnconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd761a00b92807743a0d9", 
        "type" : "conference", 
        "name" : "Pucela Tech Day", 
        "url" : "https://pucelatechday.com/", 
        "startDate" : "2020-05-16T00:00:00.000+0000", 
        "endDate" : "2020-05-16T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Valladolid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/pucelatechday/", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.6521328, 
            "lng" : -4.728562
        }
    },
    { 
        "_id" : "5d8dd761a00b92807743a0da", 
        "type" : "conference", 
        "name" : "PulpoCon", 
        "url" : "https://pulpocon.es", 
        "startDate" : "2019-09-07T00:00:00.000+0000", 
        "endDate" : "2019-09-07T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Pontevedra, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/phpulpocon", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.6075172, 
            "lng" : -8.4714942
        }
    },
    { 
        "_id" : "5d8dd762a00b92807743a0db", 
        "type" : "conference", 
        "name" : "React Alicante", 
        "url" : "https://reactalicante.es/", 
        "startDate" : "2019-09-26T00:00:00.000+0000", 
        "endDate" : "2019-09-28T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Alicante, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/reactalicante", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 38.353738, 
            "lng" : -0.4901846
        }
    },
    { 
        "_id" : "5d8dd762a00b92807743a0dc", 
        "type" : "conference", 
        "name" : "PyConEs", 
        "url" : "https://2019.es.pycon.org", 
        "startDate" : "2019-10-04T00:00:00.000+0000", 
        "endDate" : "2019-10-06T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Alicante, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/pycones", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 38.353738, 
            "lng" : -0.4901846
        }
    },
    { 
        "_id" : "5d8dd763a00b92807743a0dd", 
        "type" : "conference", 
        "name" : "Salmorejo Tech", 
        "url" : "https://salmorejotech.com", 
        "startDate" : "2019-09-13T00:00:00.000+0000", 
        "endDate" : "2019-09-13T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Córdoba, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/AulaSL", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.8845813, 
            "lng" : -4.7760138
        }
    },
    { 
        "_id" : "5d8dd763a00b92807743a0de", 
        "type" : "conference", 
        "name" : "Software Crafters Conference", 
        "url" : "https://pamplonaswcraft.com/", 
        "startDate" : "2019-06-14T00:00:00.000+0000", 
        "endDate" : "2019-06-15T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Pamplona, Navarra, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/pamplonaswcraft", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 42.8184538, 
            "lng" : -1.6442556
        }
    },
    { 
        "_id" : "5d8dd763a00b92807743a0df", 
        "type" : "conference", 
        "name" : "Software Crafters", 
        "url" : "https://softwarecrafters.barcelona/", 
        "startDate" : "2019-10-05T00:00:00.000+0000", 
        "endDate" : "2019-10-06T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Catalunya, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/bcnswcraft", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd764a00b92807743a0e0", 
        "type" : "conference", 
        "name" : "SOS", 
        "url" : "http://sosz19.cachirulovalley.com", 
        "startDate" : "2019-03-23T00:00:00.000+0000", 
        "endDate" : "2019-03-23T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Zaragoza, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/cachiruloValley", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.840047, 
            "lng" : -1.169509
        }
    },
    { 
        "_id" : "5d8dd764a00b92807743a0e1", 
        "type" : "conference", 
        "name" : "T3chFest", 
        "url" : "https://t3chfest.uc3m.es/2019", 
        "startDate" : "2019-03-14T00:00:00.000+0000", 
        "endDate" : "2019-03-15T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Leganés, Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/t3chfest", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.3281942, 
            "lng" : -3.76527
        }
    },
    { 
        "_id" : "5d8dd764a00b92807743a0e2", 
        "type" : "conference", 
        "name" : "T3chFest", 
        "url" : "http://t3chfest.es/2020/", 
        "startDate" : "2020-03-12T00:00:00.000+0000", 
        "endDate" : "2020-03-14T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Leganes, Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "http://twitter.com/t3chfest/", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.3281942, 
            "lng" : -3.76527
        }
    },
    { 
        "_id" : "5d8dd765a00b92807743a0e3", 
        "type" : "conference", 
        "name" : "TarugoConf", 
        "url" : "https://www.tarugoconf.com", 
        "startDate" : "2019-10-24T00:00:00.000+0000", 
        "endDate" : "2019-10-26T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/tarugoconf", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd765a00b92807743a0e4", 
        "type" : "conference", 
        "name" : "Techne Forum", 
        "url" : "https://techneforum.com/", 
        "startDate" : "2019-10-19T00:00:00.000+0000", 
        "endDate" : "2019-10-19T00:00:00.000+0000", 
        "cfpEndDate" : "2019-10-19T00:00:00.000+0000", 
        "cfpUrl" : "https://techneforum.com/llamada-a-ponentes-techne-forum-2019/", 
        "city" : "Tarragona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/techneforum", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.1172364, 
            "lng" : 1.2546057
        }
    },
    { 
        "_id" : "5d8dd766a00b92807743a0e5", 
        "type" : "conference", 
        "name" : "Try IT", 
        "url" : "https://congresotryit.es/", 
        "startDate" : "2019-03-18T00:00:00.000+0000", 
        "endDate" : "2019-03-22T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/tryit_upm", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd766a00b92807743a0e6", 
        "type" : "conference", 
        "name" : "WeCode", 
        "url" : "https://wecodefest.com/", 
        "startDate" : "2019-02-22T00:00:00.000+0000", 
        "endDate" : "2019-02-23T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Valladolid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/wecodefest/", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.6521328, 
            "lng" : -4.728562
        }
    },
    { 
        "_id" : "5d8dd766a00b92807743a0e7", 
        "type" : "conference", 
        "name" : "WordCamp", 
        "url" : "https://2019.madrid.wordcamp.org", 
        "startDate" : "2019-04-06T00:00:00.000+0000", 
        "endDate" : "2019-04-07T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Madrid, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/wordcampmad", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 40.4167047, 
            "lng" : -3.7035825
        }
    },
    { 
        "_id" : "5d8dd767a00b92807743a0e8", 
        "type" : "conference", 
        "name" : "WordCamp", 
        "url" : "https://2019-developers.sevilla.wordcamp.org/", 
        "startDate" : "2019-10-04T00:00:00.000+0000", 
        "endDate" : "2019-10-06T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Sevilla, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/WCSevilla", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 37.3886303, 
            "lng" : -5.9953403
        }
    },
    { 
        "_id" : "5d8dd768a00b92807743a0e9", 
        "type" : "conference", 
        "name" : "WTM", 
        "url" : "http://wtm.gdgasturias.com/", 
        "startDate" : "2019-04-06T00:00:00.000+0000", 
        "endDate" : "2019-04-06T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Asturias, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/WTMASturias", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 43.3133868, 
            "lng" : -5.94192
        }
    },
    { 
        "_id" : "5d8dd768a00b92807743a0ea", 
        "type" : "conference", 
        "name" : "WTM", 
        "url" : "http://wtm.gdgbarcelona.com/", 
        "startDate" : "2019-04-06T00:00:00.000+0000", 
        "endDate" : "2019-04-06T00:00:00.000+0000", 
        "cfpEndDate" : "1970-01-01T00:00:00.000+0000", 
        "cfpUrl" : null, 
        "city" : "Barcelona, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/wtmbcn", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.3828939, 
            "lng" : 2.1774322
        }
    },
    { 
        "_id" : "5d8dd769a00b92807743a0eb", 
        "type" : "conference", 
        "name" : "WTM", 
        "url" : "http://wtmz19.mullerestech.es", 
        "startDate" : "2019-11-16T00:00:00.000+0000", 
        "endDate" : "2019-11-16T00:00:00.000+0000", 
        "cfpEndDate" : "2019-06-30T00:00:00.000+0000", 
        "cfpUrl" : "https://docs.google.com/forms/d/e/1FAIpQLScTw-sNNo0KBFt-73th3S1vEwKeDx-MOA_iOZyseaBYFDvXPA/viewform", 
        "city" : "Zaragoza, Spain", 
        "country" : "Spain", 
        "twitter" : "https://twitter.com/WTMZaragoza", 
        "topics" : [
            "general"
        ], 
        "description" : "", 
        "instagram" : "", 
        "friendsAttending" : [
    
        ], 
        "friendsSpeaker" : [
    
        ], 
        "geometry" : {
            "lat" : 41.840047, 
            "lng" : -1.169509
        }
    }
    ]
    );
});

app.listen(port, () => console.log(`Listen to port ${port}`));
