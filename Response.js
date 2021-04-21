export default {
    kind: "customsearch#search",
    url: {
        type: "application/json",
        template: "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    queries: {
        request: [
            {
                "title": "Google Custom Search - hellow world",
                "totalResults": "6330",
                "searchTerms": "hellow world",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "fb1268901e14e938d"
            }
        ],
        nextPage: [
            {
                "title": "Google Custom Search - hellow world",
                "totalResults": "6330",
                "searchTerms": "hellow world",
                "count": 10,
                "startIndex": 11,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "fb1268901e14e938d"
            }
        ]
    },
    context: {
        title: "Google"
    },
    searchInformation: {
        searchTime: 0.430447,
        formattedSearchTime: "0.43",
        totalResults: "6330",
        formattedTotalResults: "6,330"
    },
    spelling: {
        correctedQuery: "hello world",
        htmlCorrectedQuery: "<b><i>hello</i></b> world"
    },
    items: [
        {
            kind: "customsearch#result",
            title: "Google Maps",
            htmlTitle: "Google Maps",
            link: "https://www.google.com/maps/contrib/112651616302186489180/reviews",
            displayLink: "www.google.com",
            snippet: "#1184, Hellow World Co works 2, 3rd Floor, 5th Main Rd, Sector 7, HSR Layout, \nBengaluru, Karnataka 560102, India -. a week ago. I highly recommend EIM ...",
            htmlSnippet: "#1184, <b>Hellow World</b> Co works 2, 3rd Floor, 5th Main Rd, Sector 7, HSR Layout, <br>\nBengaluru, Karnataka 560102, India -. a week ago. I highly recommend EIM&nbsp;...",
            cacheId: "Rgi1aXs37wAJ",
            formattedUrl: "https://www.google.com/maps/contrib/112651616302186489180/reviews",
            htmlFormattedUrl: "https://www.google.com/maps/contrib/112651616302186489180/reviews",
            pagemap: {
                cse_thumbnail: [
                    {
                        src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6AKPxcKCbFW7eGHGdTjCiqmdQQ5IgvK--21nWN8kIjF239s-qTIZ3Jk8T",
                        width: "310",
                        height: "163"
                    }
                ],
               
                
        }
    }
  ]
}    
            
        
    
