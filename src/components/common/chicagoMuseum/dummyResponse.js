const dataSample = [
    {
        "_score": 131.18599,
        "thumbnail": {
            "alt_text": "A work made of appliquéd and embroidered quilt; dyed and undyed cotton plain weave fabrics; cotton embroidery threads; graphite pencil pattern outlines.",
            "width": 4867,
            "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAAK+spLCvpbSyp7OyqL+8r7+8sMG9r8G8sMG9sMK/scG/s8O/ssPBtcbDt9bOvdfOvdjQv9bQwNjSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURYFAcAONASBNJSvJAxGAsQggAOw==",
            "height": 6075
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/18421",
        "id": 18421,
        "title": "State Birds and Flowers Quilt",
        "timestamp": "2023-03-01T03:12:39-06:00"
    },
    {
        "_score": 88.68484,
        "thumbnail": {
            "alt_text": "A work made of cotton, plain weave; screen printed.",
            "width": 3812,
            "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAADEvL0NDSE1LVGFdW2Nke6OfrbeyxMbDwsjB2t3Z1t7c3+Pi3tvW5t/d6eLk5efn6unn7Ozt6/Lw5/Hw7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAUR4CIlQwQZwsMghNMUgTIdQAgAOw==",
            "height": 4500
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/150852",
        "id": 150852,
        "title": "Sunflower (Furnishing Fabric)",
        "timestamp": "2023-05-17T10:40:09-05:00"
    },
    {
        "_score": 55.21261,
        "thumbnail": {
            "alt_text": "A work made of silk and gold-leaf-over-lacquered-paper strips, warp-float faced 2:1 'z' twill weave with supplementary patterning wefts; lined with silk, plain weave; dyed with safflower, beni.",
            "width": 4735,
            "lqip": "data:image/gif;base64,R0lGODlhBQAFAPQAAFJTVldYW1dZXGhbU3lfVHxoW3doYH1zbnZ4fIdmU550VZt0XoBsYINtYox1Z5Z8b499cot9dpB9caV/Zqh+Y5mFeqyEbISIjYWIjQAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVoNE4UkQs1vQEDFVhQqFAFzAkBxICADs=",
            "height": 5200
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/796",
        "id": 796,
        "title": "Atsuita karaori (Noh Costume)",
        "timestamp": "2023-03-01T03:16:19-06:00"
    },
    {
        "_score": 55.046467,
        "thumbnail": {
            "alt_text": "A work made of cotton, bobbin straight lace of a type known as \"mechlin\" with a kat stitch mesh ground.",
            "width": 2684,
            "lqip": "data:image/gif;base64,R0lGODlhBgAFAPQAAAAAAAYGBQgHBggIBwkIBwgICGdlZG1rZ3JwanZzbnh3dH99fIiEfIKBgYeFgY+Kg5CMhpOPiZ+cnKejnailoa6sp7Owrbi2tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUWYDEIxBA0DvNEkERNlXUZB5IoC6DvIQA7",
            "height": 2136
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/39129",
        "id": 39129,
        "title": "Border (Fragment)",
        "timestamp": "2023-03-01T03:52:18-06:00"
    },
    {
        "_score": 45.02193,
        "thumbnail": {
            "alt_text": "A work made of woodblock print in yellow and white inks on cream wove paper.",
            "width": 4853,
            "lqip": "data:image/gif;base64,R0lGODlhBwAFAPUAAOfLkenNkurPlOrPlejOlujOl+nPl+fOmOnPmOjPm+vQlevQmOvRmezSme3Tme3Smu3TmuzTm+3Tm+rSnu3TnOzTnubQoevUo+3VoO7Voe3Vo+nUpe/Ype/ZperWquvXq+nZugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhwAmnw9FcQAQFxKEIWA4RCYVh8BQEj8YAsElUMJkF4hMEADs=",
            "height": 6502
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/249070",
        "id": 249070,
        "title": "Sunflower",
        "timestamp": "2023-09-19T23:25:07-05:00"
    },
    {
        "_score": 45.02193,
        "thumbnail": {
            "alt_text": "A work made of woodblock print in green and white inks on cream wove paper.",
            "width": 4651,
            "lqip": "data:image/gif;base64,R0lGODlhCAAFAPUAAMXIqsfKrMjLrcjLr8nLscnMsMnNsMrNsMrMssrMs8vOssvOs83NtMzOtMzPtM3PtM3Ptc7Pt87Qtc7Rtc7Rts/Rt8/Quc/RudDSuNDQutLTutPSu9LUutPUutLUvNTVvNTVvdTUvtXWwNbWwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlQItkwvk4CqGIQUEBGQYWwkOiwVQaI4YgcOgIAIkMZOERXRCbIAA7",
            "height": 7751
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/250771",
        "id": 250771,
        "title": "Sunflower",
        "timestamp": "2023-09-19T23:25:04-05:00"
    },
    {
        "_score": 42.44958,
        "thumbnail": {
            "alt_text": "A work made of silk and gold-leaf-over-lacquered-paper strips, plain weave with supplementary patterning wefts bound on reverse face by secondary binding warps in plain interlacing; lined in red silk crepe (chirimen), plain weave; padded in silk, non-woven; dyed with safflower (beni).",
            "width": 491,
            "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAEg1KV5LOmhUPHFcSHphR3pjSnhoWZJ/apKDcZaHdKOQfMrFws3IxNrX1N3Z1QAAACH5BAAAAAAALAAAAAADAAUAAAQLUKFEijjDuMAaWBEAOw==",
            "height": 769
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/918",
        "id": 918,
        "title": "Furisode",
        "timestamp": "2023-03-01T04:26:29-06:00"
    },
    {
        "_score": 38.44269,
        "thumbnail": {
            "alt_text": "A work made of cotton, plain weave; screen printed.",
            "width": 6897,
            "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAAEWGX0aMY0iJYUmPZlWNaVaOaliTcF+XdWqPdWOXeGedfnaWe3SVfXGdgXWhgnWhhXSjhnumioOljIKmjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAUR4OJEEgEEBpIoTyEMB9NAUwgAOw==",
            "height": 8716
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/260003",
        "id": 260003,
        "title": "Van Gogh",
        "timestamp": "2023-01-24T22:30:39-06:00"
    },
    {
        "_score": 36.945255,
        "thumbnail": {
            "alt_text": "A work made of silk and gold-leaf-over-lacquered-paper strips, twill weave; lined with silk; plain weave; dyed with beni, safflower.",
            "width": 2100,
            "lqip": "data:image/gif;base64,R0lGODlhBQAFAPQAAHBfVmBkZWVmaG1oa2tsbn5vZ3VxamptcnBzcoJvZo11Y4h3bYZ5bZp6Y5B9b5F+b459cIt/dJF+cIaCfLiNbbWPcbaOcLaSdrqQcQAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUV4AQ9USFZV6UMC+YgR0IxhGA0QBACADs=",
            "height": 2250
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/90488",
        "id": 90488,
        "title": "Karaori (Noh Costume)",
        "timestamp": "2023-03-01T03:15:51-06:00"
    },
    {
        "_score": 28.956709,
        "thumbnail": {
            "alt_text": "A work made of block printed cotton.",
            "width": 7990,
            "lqip": "data:image/gif;base64,R0lGODlhBQAFAPQAAJmQeJmQeZ6XeZyUfZ6ZfKCXfaGZe6CZfqOZfqGbfqOcfp2Vg6acgqGbhaKah6Gfh6SeiKaeiaWhh6ajiaagiqmhjaiijqqolq2olAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUV4BIMgNMICUFFCFNUkKEcFiZNzxUCADs=",
            "height": 8098
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/249120",
        "id": 249120,
        "title": "Corncockle",
        "timestamp": "2023-01-24T22:29:45-06:00"
    }
]

export {dataSample}