const express = require('express');
const app = express();
const port = 3000;

app.get('/events', (req, res) => {
  res.json([
    {
      name: 'HalfStack',
      url: 'https://halfstackconf.com/phoenix/',
      startDate: '2020-01-17',
      endDate: '2020-01-17',
      city: 'Phoenix',
      country: 'U.S.A.',
      twitter: '@halfstackconf',
      cfpUrl: 'https://halfstackconf.com/phoenix/',
      cfpEndDate: '2019-09-15'
    },
    {
      name: 'Covalence',
      url: 'http://www.covalenceconf.com',
      startDate: '2020-01-24',
      endDate: '2020-01-24',
      city: 'San Francisco',
      country: 'U.S.A.',
      twitter: '@CovalenceConf',
      cfpUrl: 'https://www.papercall.io/covalence2020',
      cfpEndDate: '2019-10-31'
    },
    {
      name: "c't <webdev>",
      url: 'https://ctwebdev.de',
      startDate: '2020-02-04',
      endDate: '2020-02-06',
      city: 'Köln',
      country: 'Germany',
      twitter: '@ct_webdev',
      cfpUrl: 'https://ctwebdev.de/international.html',
      cfpEndDate: '2019-08-31'
    },
    {
      name: "JSConf Hawai'i",
      url: 'https://www.jsconfhi.com',
      startDate: '2020-02-05',
      endDate: '2020-02-07',
      city: 'Honolulu',
      country: 'U.S.A.',
      twitter: '@JSConfHi',
      cfpUrl: 'https://sessionize.com/jsconf-hawaii-2020',
      cfpEndDate: '2019-09-30'
    },
    {
      name: 'nodeAtlanta',
      url: 'https://node-atl.org',
      startDate: '2020-02-17',
      endDate: '2020-02-21',
      city: 'Alpharetta',
      country: 'U.S.A.',
      twitter: '@nodeAtlanta'
    },
    {
      name: 'ngAtlanta',
      url: 'https://ng-atl.org',
      startDate: '2020-02-17',
      endDate: '2020-02-21',
      city: 'Alpharetta, GA',
      country: 'U.S.A.',
      twitter: '@ngAtlanta'
    },
    {
      name: 'ReactConf AU',
      url: 'https://reactconfau.com',
      startDate: '2020-02-27',
      endDate: '2020-02-28',
      city: 'Sydney',
      country: 'Australia',
      twitter: '@reactconfau'
    },
    {
      name: 'Vueconf.US',
      url: 'http://vueconf.us',
      startDate: '2020-03-02',
      endDate: '2020-03-04',
      city: 'Austin',
      country: 'U.S.A.',
      twitter: '@vueconfus'
    },
    {
      name: 'Node.TLV',
      url: 'https://www.nodetlv.com',
      startDate: '2020-03-03',
      endDate: '2020-03-03',
      city: 'Tel Aviv',
      country: 'Israel',
      twitter: '@NodeTLV',
      cfpUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSd8XUCFgFpAidZIPYWmKURAnmYQs4EvHrEFb3AdgVez0HJUtw/viewform',
      cfpEndDate: '2019-11-15'
    },
    {
      name: 'JS Kongress',
      url: 'https://js-kongress.com',
      startDate: '2020-04-15',
      endDate: '2020-04-16',
      city: 'Munich',
      country: 'Germany',
      twitter: '@JSKongress',
      cfpUrl: 'https://medium.com/@jskongress/jsk-20-opens-call-for-papers-fbefdf6831f5',
      cfpEndDate: '2019-12-15'
    },
    {
      name: 'JSHeroes',
      url: 'https://jsheroes.io',
      startDate: '2020-04-23',
      endDate: '2020-04-23',
      city: 'Cluj',
      country: 'Romania',
      twitter: '@jsheroes'
    },
    {
      name: 'RenderATL',
      url: 'https://www.renderatl.com',
      startDate: '2020-05-04',
      endDate: '2020-05-06',
      city: 'Atlanta',
      country: 'U.S.A.',
      twitter: '@renderATL'
    },
    {
      name: 'HalfStack Israel',
      url: 'https://halfstackconf.com/telaviv',
      startDate: '2020-05-11',
      endDate: '2020-05-11',
      city: 'Tel Aviv',
      country: 'Israel',
      twitter: '@halfstackconf',
      cfpUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSe3_boCyHHf4vm8OF49gTD39ZOLH44yg5e3Q_SfIaxDQW0Flw/viewform',
      cfpEndDate: '2019-12-15'
    },
    {
      name: 'ReactEurope',
      url: 'https://www.react-europe.org',
      startDate: '2020-05-14',
      endDate: '2020-05-15',
      city: 'Paris',
      country: 'France',
      twitter: '@reacteurope'
    },
    {
      name: 'You Gotta Love Frontend (YGLF)',
      url: 'https://lithuania.yglfconf.com',
      startDate: '2020-05-14',
      endDate: '2020-05-15',
      city: 'Vilnius',
      country: 'Lithuania',
      twitter: '@yglf_lt',
      cfpUrl: 'https://forms.gle/oNdum1wyVntd5HvPA',
      cfpEndDate: '2020-02-01'
    },
    {
      name: 'React Finland',
      url: 'https://react-finland.fi',
      startDate: '2020-05-26',
      endDate: '2020-05-29',
      city: 'Helsinki',
      country: 'Finland',
      twitter: '@ReactFinland'
    },
    {
      name: 'JSNation',
      url: 'http://jsnation.com',
      startDate: '2020-06-03',
      endDate: '2020-06-05',
      city: 'Amsterdam',
      country: 'Netherlands',
      twitter: '@amsterdamjs'
    },
    {
      name: 'ReactNext',
      url: 'https://react-next.com',
      startDate: '2020-06-15',
      endDate: '2020-06-15',
      city: 'Tel Aviv',
      country: 'Israel',
      twitter: '@ReactNext',
      cfpUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLScZh0jCIxXX2F3kObeBVR2R-IVGjt_QWeFGnvR-l6453NX8-A/viewform',
      cfpEndDate: '2020-02-15'
    },
    {
      name: 'JScamp Barcelona',
      url: 'https://jscamp.tech',
      startDate: '2020-07-16',
      endDate: '2020-07-17',
      city: 'Barcelona',
      country: 'Spain',
      twitter: '@jscamp'
    }
  ]);
});

app.listen(port, () => console.log(`Listen to port ${port}`));
