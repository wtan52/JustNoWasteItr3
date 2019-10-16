 AOS.init({
     duration: 800,
     easing: 'slide'
 });


 function validate_activity() {

     var availableTags = ['Campbellfield 3061',
            'Clayton South 3169',
            'Braeside 3195',
            'Merricks 3916',
            'Dandenong 3175',
            'Fyansford 3221',
            'Batesford 3221',
            'Dandenong South 3175',
            'Eaglehawk 3556',
            'Geelong North 3215',
            'Korumburra 3950',
            'Lake Bolac 3351',
            'Portland 3305',
            'Seymour 3660',
            'Shepparton 3630',
            'Stawell 3380',
            'Thomastown 3074',
            'Port Melbourne 3207',
            'Werribee 3030',
            'Altona  3018',
            'Traralgon 3844',
            'Somerton 3062',
            'Lara 3212',
            'Springvale 3171',
            'Goornong 3557',
            'Sunshine 3020',
            'Yarraville 3013',
            'Moolap 3221',
            'Anglesea 3230',
            'Point Henry 3221',
            'Laverton North 3026',
            'Prahran 3181',
            'Caulfield 3162',
            'Ararat 3377',
            'Bairnsdale 3875',
            'Wangaratta 3677',
            'Myrtleford 3737',
            'Porepunkah 3740',
            'Footscray 3011',
            'Mulgrave 3170',
            'Moorabbin 3189',
            'Mitcham 3132',
            'Oakleigh 3166',
            'Preston 3072',
            'Wendouree 3355',
            'Box Hill South 3128',
            'Alphington 3078',
            'Cheltenham 3192',
            'Corio 3214',
            'Berriwillock 3531',
            'Irymple 3498',
            'Dingley 3172',
            'Melbourne Airport 3045',
            'Tullamarine 3043',
            'Brooklyn 3012',
            'Euroa  3666',
            'Moe 3825',
            'Waarre  3269',
            'Koroit 3282',
            'Kyneton 3444',
            'Springhurst 3682',
            'Wollert 3750',
            'Lakes Entrance 3909',
            'Orbost 3888',
            'Sale 3850',
            'Manangatang 3546',
            'Trentham 3458',
            'Burwood 3125',
            'Lyndhurst 3975',
            'Laverton 3028',
            'Box Hill 3128',
            'Swan Hill 3585',
            'Colac 3250',
            'Yarram 3971',
            'Heidelberg 3084',
            'Heidelberg West 3081',
            'Morwell 3840',
            'Simpson 3266',
            'Deer Park 3023',
            'Newbridge 3551',
            'Pyramid Hill 3575',
            'Colignan 3494',
            'Merbein 3505',
            'Geelong South 3220',
            'Ballarat 3350',
            'Williamstown 3016',
            'Devon Meadows 3977',
            'Lethbridge 3332',
            'Strathmerton 3641',
            'Stewarton 3725',
            'Nagambie 3608',
            'Wandin East 3139',
            'North Shore 3214',
            'Maiden Gully 3551',
            'Echuca 3564',
            'Smythesdale 3351',
            'Mt Clear 3350',
            'Collingwood 3066',
            'Richmond 3121',
            'Burnley 3121',
            'Wodonga 3690',
            'Donnybrook 3064',
            'Point Wilson 3212',
            'Wyndham Vale 3024',
            'Kealba 3021',
            'Aireys Inlet 3231',
            'Apollo Bay 3233',
            'Bannockburn 3331',
            'Connewarre 3227',
            'Elliminyt 3249',
            'Lorne 3232',
            'She Oaks 3331',
            'Portarlington 3223',
            'Wurdiboluc 3241',
            'Grantville 3984',
            'Lardner 3821',
            'Trafalgar 3824',
            'Warrnambool 3280',
            'Nirranda South 3268',
            'Lang Lang 3984',
            'Port Campbell 3269',
            'Coburg North 3058',
            'Wemen 3549',
            'Bendigo 3550',
            'Yarra Glen 3775',
            'Great Western 3374',
            'Castlemaine 3450',
            'Barnawartha 3688',
            'Avoca 3467',
            'Clayton 3168',
            'Hastings 3915',
            'Tyabb 3913',
            'Nirranda 3268',
            'Altona North 3018',
            'Mansfield 3722',
            'Hoddles Creek 3139',
            'Camperdown 3260',
            'Drouin 3818',
            'Toora 3962',
            'Hamilton 3300',
            'Horsham 3400',
            'Dennington 3280',
            'Waurn Ponds 3216',
            'Scoresby 3179',
            'Bendigo 3551',
            'Truganina 3029',
            'Montrose 3765',
            'Bacchus Marsh 3340',
            'Lysterfield 3156',
            'Epping 3076',
            'Charlton 3525',
            'Lilydale 3140',
            'Dunnstown 3352',
            'Cosgrove South 3631',
            'Langwarrin 3910',
            'Cosgrove 3631',
            'Yallourn North 3825',
            'Harrietville 3741',
            'Fulham 3851',
            'Mangalore 3663',
            'Moorabbin Airport 3194',
            'Portland Junction 3305',
            'Yarpturk 3283',
            'Essendon Fields 3041',
            'Altona North 3025',
            'Breakwater 3219',
            'Cranbourne South 3977',
            'Milawa 3678',
            'Emu 3475',
            'Coburg 3058',
            'Hawthorn East 3123',
            'Malvern 3144',
            'Notting Hill 3168',
            'Newport 3015',
            'Benalla 3672',
            'St Arnaud 3478',
            'Corryong 3707',
            'Kyabram 3620',
            'Mildura 3500',
            'Yarrawonga 3730',
            'Warragul 3820',
            'Rowville 3178',
            'Wantirna South 3152',
            'Lemnos 3631',
            'Rutherglen 3685',
            'Delacombe 3356',
            'Footscray West 3012',
            'Hazelwood North 3840',
            'Glenrowan 3675',
            'Cranbourne 3977',
            'Craigieburn 3064',
            'Rockbank 3335',
            'Hampton Park 3976',
            'Maffra 3860',
            'Dutson 3851',
            'Giffard 3850',
            'Carisbrook 3464',
            'Bentleigh East 3165',
            'Altona Meadows 3028',
            'North Melbourne 3051',
            'Wahgunyah 3687',
            'Bayswater 3153',
            'Heathcote 3523',
            'Epsom 3551',
            'Rochester 3561',
            'Bayswater North  3153',
            'Maidstone 3012',
            'Naroghid 3266',
            'Murchison East 3610',
            'Geelong East 3219',
            'Belmont 3216',
            'Broadmeadows 3047',
            'Parkville 3052',
            'Vermont 3133',
            'Abbotsford 3067',
            'Bridgewater On Loddon 3516',
            'Kilsyth 3137',
            'Tongala 3621',
            'Nunawading 3131',
            'Dixons Creek 3775',
            'Croydon 3136',
            'Queenscliff 3225',
            'Crib Point 3920',
            'East Sale 3852',
            'Yallambie 3085',
            'Southbank 3006',
            'Leongatha 3953',
            'Shepparton North 3631',
            'Tatura 3616',
            'Coldstream 3770',
            'West Melbourne 3003',
            'Glen Waverley 3150',
            'Mickleham 3064',
            'Newtown 3220',
            'Newmerella 3886',
            'Forge Creek 3875',
            'Ferntree Gully 3156',
            'Ringwood East 3135',
            'Narre Warren 3805',
            'Moorooduc 3933',
            'Hallam 3803',
            'Brunswick 3056',
            'Lucknow 3875',
            'Lockwood 3551',
            'Woodend 3442',
            'Albion 3020',
            'Northcote 3070',
            'Croydon South 3136',
            'Longford 3851',
            'Golden Beach 3851',
            'Marong 3515',
            'Tottenham 3012',
            'Mount Helen 3350',
            'Braybrook 3019',
            'Oakleigh South 3167',
            'Melton 3337',
            'Delcombe 3350',
            'Cobden 3266',
            'Cororooke 3254',
            'Darnum 3822',
            'Stanhope 3623',
            'Norlane 3214',
            'Airport West 3042',
            'Fosterville 3557',
            'Avenel 3664',
            'Melton 3777',
            'Westall 3169',
            'Tylden 3444',
            'Tynong 3813',
            'Pakenham 3810',
            'Blackburn 3130',
            'Kerang 3579',
            'Piangil 3597',
            'North Geelong 3215',
            'Noble Park North 3174',
            'Healesville 3777',
            'Boronia 3155',
            'St Arnaud North 3477',
            'Alexandra 3174',
            'Broadford 3658',
            'Cobram 3644',
            'Eildon 3713',
            'Kilmore 3764',
            'Mooroopna 3629',
            'Nathalia 3638',
            'Numurkah 3636',
            'Tallarook 3659',
            'Wallan 3756',
            'Fawkner 3060',
            'Allansford 3277',
            'Drysdale 3222',
            'Hoppers Crossing 3029',
            'Dartmoor 3304',
            'Leitchville 3567',
            'West Footscray  3012',
            'Alexandra 3714',
            'Heyfield 3858',
            'Girgarre 3624',
            'Mill Park 3082',
            'Noble Park 3174',
            'Harkaway 3806',
            'Axedale 3551',
            'Breakaway Creek 3303',
            'Mambourin 3024',
            'Prairie 3572',
            'Mentone 3194',
            'Daylesford 3460',
            'Ondit  3249',
            'Grantville 3894',
            'Leongatha South 3953',
            'Moriac 3240',
            'Oaklands Junction 3063',
            'Tarrone 3282',
            'Sunbury 3429',
            'Maribyrnong 3032',
            'Peechelba 3678',
            'Douglas 3401',
            'Ouyen 3490',
            'Linton 3360',
            'Yannathan 3981',
            'Clyde 3978',
            'Somerville 3912',
            'Pakenham South 3810',
            'Nar Nar Goon 3812',
            'Yellingbo 3139',
            'Donald 3480',
            'Cann River 3890',
            'Lake Gardens 3355',
            'Koo Wee Rup 3981',
            'Thornbury 3071',
            'Somerton 3061',
            'Bundoora 3083',
            'Loy Yang 3844',
            'Newborough 3825',
            'Yinnar 3869',
            'Mount Waverley 3149',
            'Chelsea Heights 3196',
            'Eaglehawk, Bendigo 3556',
            'Rye 3941',
            'Koorlong 3501',
            'Cullellerain 3496',
            'Robinvale 3549',
            'Nhill 3418',
            'Lancefield 3435',
            'Bullengarook 3437',
            'Costerfield 3523',
            'Bangholme 3175',
            'Kensington 3031',
            'Dromana 3936',
            'South Yarra 3141',
            'Emerald 3782',
            'Greenvale 3059',
            'Reservoir 3073',
            'Silvan  3795',
            'Drouin West 3818',
            'Christmas Hills 3775',
            'Spotswood 3015',
            'Balmoral 3407',
            'Goroke 3412',
            'Berwick 3806',
            'Caulfield East 3145',
            'Churchill 3842',
            'Ringwood 3134',
            'Katunga 3640',
            'Winton 3673',
            'Maddingley 3340',
            'Ballan 3342',
            'Wunghnu 3635',
            'Maryborough 3465',
            'Kangaroo Ground 3097',
            'Yarrambat 3091',
            'Waaia 3637',
            'Keon Park 3073',
            'Baranduda 3691',
            'Wooragee 3747',
            'Mt Beauty 3699',
            'Traralgon East 3844',
            'Huntingdale 3166',
            'Seaford 3198',
            'Mortlake 3272',
            'Timboon 3268',
            'Patho 3564',
            'Crib Point 3919',
            'Frankston 3199',
            'Lockington 3563',
            'Melbourne 3000',
            'Mount Evelyn 3796',
            'Wantirna 3152',
            'Heywood 3304',
            'Sunshine West 3020',
            'Seville 3139',
            'Tullamarine Airport 3045',
            'Ballarat East 3350',
            'Barry Beach 3962',
            'Beverford 3590',
            'Bamawm 3561',
            'Moonambel 3478',
            'Yarra Junction 3797',
            'Cohuna 3568',
            'Gunbower 3566',
            'Terang 3264',
            'Gre Gre 3478',
            'Huntly 3551',
            'Casterton 3311',
            'Bandiana 3691',
            'Rosedale 3847',
            'Pine Lodge 3631',
            'Leithbridge 3332',
            'Oxley 3678',
            'Tangambalanga 3691',
            'Beechworth 3747',
            'Buchan 3885',
            'Knoxfield 3180',
            'Branxholme 3302',
            'Blind Bight 3980',
            'Boneo 3939',
            'Longwarry 3816',
            'Mount Martha 3934',
            'Somers 3927',
            'Welshpool 3966',
            'Tarwin 3956',
            'Foster 3960',
            'Wonthaggi 3995',
            'Koonwarra 3954',
            'Heytesbury Lower 3268',
            'Bridgewater 3516',
            'Port Fairy 3284',
            'Clifton Hill 3068',
            'Paradise 3381',
            'Lance Creek 3995',
            'Tabilk 3607',
            'Seaspray 3851',
            'Yeungroon 3525',
            'Newham 3442',
            'East Melbourne 3002',
            'Carlton 3053',
            'Essendon 3040',
            'Great Western 3377',
            'Karadoc 3496',
            'Melbourne 3004',
            'Geelong 3220',
            'Fitzroy 3065',
            'Kangaroo Flat 3555',
            'Geelong West 3012',
            'Murchison 3610',
            'Keysborough 3173',
            'Ballarat North 3350',
            'Tourello 3363',
            'Kingston 3364',
            'Bungal 3334',
            'Glen Park 3352',
            'Gapsted 3737',
            'Coolaroo 3048',
            'Carrum Downs 3201',
            'Bell Park 3215',
            'Bowser 3678',
            'Kilmany 3851',
            'Boisdale 3860',
            'Flemington 3031',
            'Wandin North 3139',
            'St Albans 3021',
            'Gisborne 3437',
            'Melton South 3338',
            'Parwan 3340',
            'Romsey 3434',
            'Cowes 3922',
            'Iraak 3494',
            'Peterborough 3270',
            'Essendon Airport 3041',
            'Mildura South 3500',
            'Yan Yean 3755',
            'Chirnside Park 3116',
            'Launching Place 3139',
            'Whittlesea 3757'
            ];

     for (var i = 0; i < availableTags.length; i++) {
         availableTags[i] = availableTags[i].toLocaleLowerCase();
     }

     var suburbName = document.getElementById("tags").value;


     if (availableTags.includes(suburbName.toLowerCase())) {
         return true;

     } else {

         if (suburbName.length == 0) {
             return false;
         }
         document.getElementById("not-found").style.display = "block";
         return false;

     }

 }

 $(document).ready(function () {

     $("#tags").on('input',function(e){
         document.getElementById("not-found").style.display = "none";
     });


     $(function () {
         var availableTags = ['Campbellfield 3061',
            'Clayton South 3169',
            'Braeside 3195',
            'Merricks 3916',
            'Dandenong 3175',
            'Fyansford 3221',
            'Batesford 3221',
            'Dandenong South 3175',
            'Eaglehawk 3556',
            'Geelong North 3215',
            'Korumburra 3950',
            'Lake Bolac 3351',
            'Portland 3305',
            'Seymour 3660',
            'Shepparton 3630',
            'Stawell 3380',
            'Thomastown 3074',
            'Port Melbourne 3207',
            'Werribee 3030',
            'Altona  3018',
            'Traralgon 3844',
            'Somerton 3062',
            'Lara 3212',
            'Springvale 3171',
            'Goornong 3557',
            'Sunshine 3020',
            'Yarraville 3013',
            'Moolap 3221',
            'Anglesea 3230',
            'Point Henry 3221',
            'Laverton North 3026',
            'Prahran 3181',
            'Caulfield 3162',
            'Ararat 3377',
            'Bairnsdale 3875',
            'Wangaratta 3677',
            'Myrtleford 3737',
            'Porepunkah 3740',
            'Footscray 3011',
            'Mulgrave 3170',
            'Moorabbin 3189',
            'Mitcham 3132',
            'Oakleigh 3166',
            'Preston 3072',
            'Wendouree 3355',
            'Box Hill South 3128',
            'Alphington 3078',
            'Cheltenham 3192',
            'Corio 3214',
            'Berriwillock 3531',
            'Irymple 3498',
            'Dingley 3172',
            'Melbourne Airport 3045',
            'Tullamarine 3043',
            'Brooklyn 3012',
            'Euroa  3666',
            'Moe 3825',
            'Waarre  3269',
            'Koroit 3282',
            'Kyneton 3444',
            'Springhurst 3682',
            'Wollert 3750',
            'Lakes Entrance 3909',
            'Orbost 3888',
            'Sale 3850',
            'Manangatang 3546',
            'Trentham 3458',
            'Burwood 3125',
            'Lyndhurst 3975',
            'Laverton 3028',
            'Box Hill 3128',
            'Swan Hill 3585',
            'Colac 3250',
            'Yarram 3971',
            'Heidelberg 3084',
            'Heidelberg West 3081',
            'Morwell 3840',
            'Simpson 3266',
            'Deer Park 3023',
            'Newbridge 3551',
            'Pyramid Hill 3575',
            'Colignan 3494',
            'Merbein 3505',
            'Geelong South 3220',
            'Ballarat 3350',
            'Williamstown 3016',
            'Devon Meadows 3977',
            'Lethbridge 3332',
            'Strathmerton 3641',
            'Stewarton 3725',
            'Nagambie 3608',
            'Wandin East 3139',
            'North Shore 3214',
            'Maiden Gully 3551',
            'Echuca 3564',
            'Smythesdale 3351',
            'Mt Clear 3350',
            'Collingwood 3066',
            'Richmond 3121',
            'Burnley 3121',
            'Wodonga 3690',
            'Donnybrook 3064',
            'Point Wilson 3212',
            'Wyndham Vale 3024',
            'Kealba 3021',
            'Aireys Inlet 3231',
            'Apollo Bay 3233',
            'Bannockburn 3331',
            'Connewarre 3227',
            'Elliminyt 3249',
            'Lorne 3232',
            'She Oaks 3331',
            'Portarlington 3223',
            'Wurdiboluc 3241',
            'Grantville 3984',
            'Lardner 3821',
            'Trafalgar 3824',
            'Warrnambool 3280',
            'Nirranda South 3268',
            'Lang Lang 3984',
            'Port Campbell 3269',
            'Coburg North 3058',
            'Wemen 3549',
            'Bendigo 3550',
            'Yarra Glen 3775',
            'Great Western 3374',
            'Castlemaine 3450',
            'Barnawartha 3688',
            'Avoca 3467',
            'Clayton 3168',
            'Hastings 3915',
            'Tyabb 3913',
            'Nirranda 3268',
            'Altona North 3018',
            'Mansfield 3722',
            'Hoddles Creek 3139',
            'Camperdown 3260',
            'Drouin 3818',
            'Toora 3962',
            'Hamilton 3300',
            'Horsham 3400',
            'Dennington 3280',
            'Waurn Ponds 3216',
            'Scoresby 3179',
            'Bendigo 3551',
            'Truganina 3029',
            'Montrose 3765',
            'Bacchus Marsh 3340',
            'Lysterfield 3156',
            'Epping 3076',
            'Charlton 3525',
            'Lilydale 3140',
            'Dunnstown 3352',
            'Cosgrove South 3631',
            'Langwarrin 3910',
            'Cosgrove 3631',
            'Yallourn North 3825',
            'Harrietville 3741',
            'Fulham 3851',
            'Mangalore 3663',
            'Moorabbin Airport 3194',
            'Portland Junction 3305',
            'Yarpturk 3283',
            'Essendon Fields 3041',
            'Altona North 3025',
            'Breakwater 3219',
            'Cranbourne South 3977',
            'Milawa 3678',
            'Emu 3475',
            'Coburg 3058',
            'Hawthorn East 3123',
            'Malvern 3144',
            'Notting Hill 3168',
            'Newport 3015',
            'Benalla 3672',
            'St Arnaud 3478',
            'Corryong 3707',
            'Kyabram 3620',
            'Mildura 3500',
            'Yarrawonga 3730',
            'Warragul 3820',
            'Rowville 3178',
            'Wantirna South 3152',
            'Lemnos 3631',
            'Rutherglen 3685',
            'Delacombe 3356',
            'Footscray West 3012',
            'Hazelwood North 3840',
            'Glenrowan 3675',
            'Cranbourne 3977',
            'Craigieburn 3064',
            'Rockbank 3335',
            'Hampton Park 3976',
            'Maffra 3860',
            'Dutson 3851',
            'Giffard 3850',
            'Carisbrook 3464',
            'Bentleigh East 3165',
            'Altona Meadows 3028',
            'North Melbourne 3051',
            'Wahgunyah 3687',
            'Bayswater 3153',
            'Heathcote 3523',
            'Epsom 3551',
            'Rochester 3561',
            'Bayswater North  3153',
            'Maidstone 3012',
            'Naroghid 3266',
            'Murchison East 3610',
            'Geelong East 3219',
            'Belmont 3216',
            'Broadmeadows 3047',
            'Parkville 3052',
            'Vermont 3133',
            'Abbotsford 3067',
            'Bridgewater On Loddon 3516',
            'Kilsyth 3137',
            'Tongala 3621',
            'Nunawading 3131',
            'Dixons Creek 3775',
            'Croydon 3136',
            'Queenscliff 3225',
            'Crib Point 3920',
            'East Sale 3852',
            'Yallambie 3085',
            'Southbank 3006',
            'Leongatha 3953',
            'Shepparton North 3631',
            'Tatura 3616',
            'Coldstream 3770',
            'West Melbourne 3003',
            'Glen Waverley 3150',
            'Mickleham 3064',
            'Newtown 3220',
            'Newmerella 3886',
            'Forge Creek 3875',
            'Ferntree Gully 3156',
            'Ringwood East 3135',
            'Narre Warren 3805',
            'Moorooduc 3933',
            'Hallam 3803',
            'Brunswick 3056',
            'Lucknow 3875',
            'Lockwood 3551',
            'Woodend 3442',
            'Albion 3020',
            'Northcote 3070',
            'Croydon South 3136',
            'Longford 3851',
            'Golden Beach 3851',
            'Marong 3515',
            'Tottenham 3012',
            'Mount Helen 3350',
            'Braybrook 3019',
            'Oakleigh South 3167',
            'Melton 3337',
            'Delcombe 3350',
            'Cobden 3266',
            'Cororooke 3254',
            'Darnum 3822',
            'Stanhope 3623',
            'Norlane 3214',
            'Airport West 3042',
            'Fosterville 3557',
            'Avenel 3664',
            'Melton 3777',
            'Westall 3169',
            'Tylden 3444',
            'Tynong 3813',
            'Pakenham 3810',
            'Blackburn 3130',
            'Kerang 3579',
            'Piangil 3597',
            'North Geelong 3215',
            'Noble Park North 3174',
            'Healesville 3777',
            'Boronia 3155',
            'St Arnaud North 3477',
            'Alexandra 3174',
            'Broadford 3658',
            'Cobram 3644',
            'Eildon 3713',
            'Kilmore 3764',
            'Mooroopna 3629',
            'Nathalia 3638',
            'Numurkah 3636',
            'Tallarook 3659',
            'Wallan 3756',
            'Fawkner 3060',
            'Allansford 3277',
            'Drysdale 3222',
            'Hoppers Crossing 3029',
            'Dartmoor 3304',
            'Leitchville 3567',
            'West Footscray  3012',
            'Alexandra 3714',
            'Heyfield 3858',
            'Girgarre 3624',
            'Mill Park 3082',
            'Noble Park 3174',
            'Harkaway 3806',
            'Axedale 3551',
            'Breakaway Creek 3303',
            'Mambourin 3024',
            'Prairie 3572',
            'Mentone 3194',
            'Daylesford 3460',
            'Ondit  3249',
            'Grantville 3894',
            'Leongatha South 3953',
            'Moriac 3240',
            'Oaklands Junction 3063',
            'Tarrone 3282',
            'Sunbury 3429',
            'Maribyrnong 3032',
            'Peechelba 3678',
            'Douglas 3401',
            'Ouyen 3490',
            'Linton 3360',
            'Yannathan 3981',
            'Clyde 3978',
            'Somerville 3912',
            'Pakenham South 3810',
            'Nar Nar Goon 3812',
            'Yellingbo 3139',
            'Donald 3480',
            'Cann River 3890',
            'Lake Gardens 3355',
            'Koo Wee Rup 3981',
            'Thornbury 3071',
            'Somerton 3061',
            'Bundoora 3083',
            'Loy Yang 3844',
            'Newborough 3825',
            'Yinnar 3869',
            'Mount Waverley 3149',
            'Chelsea Heights 3196',
            'Eaglehawk, Bendigo 3556',
            'Rye 3941',
            'Koorlong 3501',
            'Cullellerain 3496',
            'Robinvale 3549',
            'Nhill 3418',
            'Lancefield 3435',
            'Bullengarook 3437',
            'Costerfield 3523',
            'Bangholme 3175',
            'Kensington 3031',
            'Dromana 3936',
            'South Yarra 3141',
            'Emerald 3782',
            'Greenvale 3059',
            'Reservoir 3073',
            'Silvan  3795',
            'Drouin West 3818',
            'Christmas Hills 3775',
            'Spotswood 3015',
            'Balmoral 3407',
            'Goroke 3412',
            'Berwick 3806',
            'Caulfield East 3145',
            'Churchill 3842',
            'Ringwood 3134',
            'Katunga 3640',
            'Winton 3673',
            'Maddingley 3340',
            'Ballan 3342',
            'Wunghnu 3635',
            'Maryborough 3465',
            'Kangaroo Ground 3097',
            'Yarrambat 3091',
            'Waaia 3637',
            'Keon Park 3073',
            'Baranduda 3691',
            'Wooragee 3747',
            'Mt Beauty 3699',
            'Traralgon East 3844',
            'Huntingdale 3166',
            'Seaford 3198',
            'Mortlake 3272',
            'Timboon 3268',
            'Patho 3564',
            'Crib Point 3919',
            'Frankston 3199',
            'Lockington 3563',
            'Melbourne 3000',
            'Mount Evelyn 3796',
            'Wantirna 3152',
            'Heywood 3304',
            'Sunshine West 3020',
            'Seville 3139',
            'Tullamarine Airport 3045',
            'Ballarat East 3350',
            'Barry Beach 3962',
            'Beverford 3590',
            'Bamawm 3561',
            'Moonambel 3478',
            'Yarra Junction 3797',
            'Cohuna 3568',
            'Gunbower 3566',
            'Terang 3264',
            'Gre Gre 3478',
            'Huntly 3551',
            'Casterton 3311',
            'Bandiana 3691',
            'Rosedale 3847',
            'Pine Lodge 3631',
            'Leithbridge 3332',
            'Oxley 3678',
            'Tangambalanga 3691',
            'Beechworth 3747',
            'Buchan 3885',
            'Knoxfield 3180',
            'Branxholme 3302',
            'Blind Bight 3980',
            'Boneo 3939',
            'Longwarry 3816',
            'Mount Martha 3934',
            'Somers 3927',
            'Welshpool 3966',
            'Tarwin 3956',
            'Foster 3960',
            'Wonthaggi 3995',
            'Koonwarra 3954',
            'Heytesbury Lower 3268',
            'Bridgewater 3516',
            'Port Fairy 3284',
            'Clifton Hill 3068',
            'Paradise 3381',
            'Lance Creek 3995',
            'Tabilk 3607',
            'Seaspray 3851',
            'Yeungroon 3525',
            'Newham 3442',
            'East Melbourne 3002',
            'Carlton 3053',
            'Essendon 3040',
            'Great Western 3377',
            'Karadoc 3496',
            'Melbourne 3004',
            'Geelong 3220',
            'Fitzroy 3065',
            'Kangaroo Flat 3555',
            'Geelong West 3012',
            'Murchison 3610',
            'Keysborough 3173',
            'Ballarat North 3350',
            'Tourello 3363',
            'Kingston 3364',
            'Bungal 3334',
            'Glen Park 3352',
            'Gapsted 3737',
            'Coolaroo 3048',
            'Carrum Downs 3201',
            'Bell Park 3215',
            'Bowser 3678',
            'Kilmany 3851',
            'Boisdale 3860',
            'Flemington 3031',
            'Wandin North 3139',
            'St Albans 3021',
            'Gisborne 3437',
            'Melton South 3338',
            'Parwan 3340',
            'Romsey 3434',
            'Cowes 3922',
            'Iraak 3494',
            'Peterborough 3270',
            'Essendon Airport 3041',
            'Mildura South 3500',
            'Yan Yean 3755',
            'Chirnside Park 3116',
            'Launching Place 3139',
            'Whittlesea 3757'
            ];
         $("#tags").autocomplete({
             focus: function (event, ui) {
                 console.log(this.value);
                 console.log(ui.item.label);
                 this.value = ui.item.label;
                 // $('#autocomplete-input').val(ui.item.label);

                 // Prevent the default focus behavior.
                 event.preventDefault();
                 // or return false;
             },
             source: function (request, response) {
                 var tempLength = request.term.length;
                 var matches = $.map(availableTags, function (acItem) {
                     if (acItem.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                         return acItem;
                     } else if (!isNaN(request.term)) {
                         var resultsOut = acItem.indexOf(request.term.substring(tempLength - 4, tempLength));
                         if (resultsOut != -1) {

                             return acItem;
                         }
                     }
                 });
                 response(matches);
             }
         });
     });
 });


 function classifications(type) {

     console.log(type);

     var xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {

             var JSONData = JSON.parse(this.responseText);

             console.log(JSONData);
         }

     }
     xhttp.open("GET", "/classification?Type=" + type, true);
     xhttp.send();
 }


 (function ($) {

     "use strict";

     var isMobile = {
         Android: function () {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function () {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function () {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function () {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function () {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function () {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };


     $(window).stellar({
         responsive: true,
         parallaxBackgrounds: true,
         parallaxElements: true,
         horizontalScrolling: false,
         hideDistantElements: false,
         scrollProperty: 'scroll'
     });


     var fullHeight = function () {

         $('.js-fullheight').css('height', $(window).height());
         $(window).resize(function () {
             $('.js-fullheight').css('height', $(window).height());
         });

     };
     fullHeight();

     // loader
     var loader = function () {
         setTimeout(function () {
             if ($('#ftco-loader').length > 0) {
                 $('#ftco-loader').removeClass('show');
             }
         }, 1);
     };
     loader();

     // Scrollax
     $.Scrollax();

     var carousel = function () {
         $('.carousel-testimony').owlCarousel({
             center: true,
             loop: true,
             items: 1,
             margin: 30,
             stagePadding: 0,
             nav: false,
             navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 2
                 },
                 1000: {
                     items: 3
                 }
             }
         });

     };
     carousel();

     $('nav .dropdown').hover(function () {
         var $this = $(this);
         // 	 timer;
         // clearTimeout(timer);
         $this.addClass('show');
         $this.find('> a').attr('aria-expanded', true);
         // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').addClass('show');
     }, function () {
         var $this = $(this);
         // timer;
         // timer = setTimeout(function(){
         $this.removeClass('show');
         $this.find('> a').attr('aria-expanded', false);
         // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').removeClass('show');
         // }, 100);
     });


     $('#dropdown04').on('show.bs.dropdown', function () {
         console.log('show');
     });

     // scroll
     var scrollWindow = function () {
         $(window).scroll(function () {
             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.ftco_navbar'),
                 sd = $('.js-scroll-wrap');

             if (st > 150) {
                 if (!navbar.hasClass('scrolled')) {
                     navbar.addClass('scrolled');
                 }
             }
             if (st < 150) {
                 if (navbar.hasClass('scrolled')) {
                     navbar.removeClass('scrolled sleep');
                 }
             }
             if (st > 350) {
                 if (!navbar.hasClass('awake')) {
                     navbar.addClass('awake');
                 }

                 if (sd.length > 0) {
                     sd.addClass('sleep');
                 }
             }
             if (st < 350) {
                 if (navbar.hasClass('awake')) {
                     navbar.removeClass('awake');
                     navbar.addClass('sleep');
                 }
                 if (sd.length > 0) {
                     sd.removeClass('sleep');
                 }
             }
         });
     };
     scrollWindow();

     var isMobile = {
         Android: function () {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function () {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function () {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function () {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function () {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function () {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };

     var counter = function () {

         $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                 $('.number').each(function () {
                     var $this = $(this),
                         num = $this.data('number');
                     console.log(num);
                     $this.animateNumber({
                         number: num,
                         numberStep: comma_separator_number_step
                     }, 7000);
                 });

             }

         }, {
             offset: '95%'
         });

     }
     counter();


     var contentWayPoint = function () {
         var i = 0;
         $('.ftco-animate').waypoint(function (direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 i++;

                 $(this.element).addClass('item-animate');
                 setTimeout(function () {

                     $('body .ftco-animate.item-animate').each(function (k) {
                         var el = $(this);
                         setTimeout(function () {
                             var effect = el.data('animate-effect');
                             if (effect === 'fadeIn') {
                                 el.addClass('fadeIn ftco-animated');
                             } else if (effect === 'fadeInLeft') {
                                 el.addClass('fadeInLeft ftco-animated');
                             } else if (effect === 'fadeInRight') {
                                 el.addClass('fadeInRight ftco-animated');
                             } else {
                                 el.addClass('fadeInUp ftco-animated');
                             }
                             el.removeClass('item-animate');
                         }, k * 50, 'easeInOutExpo');
                     });

                 }, 100);

             }

         }, {
             offset: '95%'
         });
     };
     contentWayPoint();


     // navigation
     var OnePageNav = function () {
         $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
             e.preventDefault();

             var hash = this.hash,
                 navToggler = $('.navbar-toggler');
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 700, 'easeInOutExpo', function () {
                 window.location.hash = hash;
             });


             if (navToggler.is(':visible')) {
                 navToggler.click();
             }
         });
         $('body').on('activate.bs.scrollspy', function () {
             console.log('nice');
         })
     };
     OnePageNav();


     // magnific popup
     $('.image-popup').magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         closeBtnInside: false,
         fixedContentPos: true,
         mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
             verticalFit: true
         },
         zoom: {
             enabled: true,
             duration: 300 // don't foget to change the duration also in CSS
         }
     });

     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,

         fixedContentPos: false
     });


     $('#book_pick_date,#book_off_date').datepicker({
         'format': 'm/d/yyyy',
         'autoclose': true
     });
     $('#time_pick').timepicker();

     var goHere = function () {

         $('.mouse-icon').on('click', function (event) {

             event.preventDefault();

             $('html,body').animate({
                 scrollTop: $('.goto-here').offset().top
             }, 500, 'easeInOutExpo');

             return false;
         });
     };
     goHere();


 })(jQuery);
