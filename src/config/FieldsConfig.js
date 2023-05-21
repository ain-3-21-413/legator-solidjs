export default function useFieldsConfig(){

    const zeroFields = [ 
        {
            number:"000",
            name:"Leader",
            removable:true,
            copiable:false,
            hasIndicators:false,
            subfields:[
                {
                    number:"00",
                    name:"fixed length control field",
                    required:true,
                    editable:true,
                    repeatable:false
                }
            ]
        },

        {
            number:"001",
            name:"Control number",
            removable:true,
            copiable:false,
            hasIndicators:false,
            subfields:[
                {
                    number:"00",
                    name:"control field",
                    required:false,
                    editable:false,
                    repeatable:false
                }
            ]
        },
        {
            number:"003",
            name:"Control number identifier",
            removable:true,
            copiable:false,
            hasIndicators:false,
            subfields:[
                {
                    number:"00",
                    name:"control field",
                    required:true,
                    editable:true,
                    repeatable:false
                }
            ]
        },
        {
            number:"005",
            name:"Date and Time of Latest Transaction",
            removable:true,
            copiable:false,
            hasIndicators:false,
            subfields:[
                {
                    number:"00",
                    name:"control field",
                    required:true,
                    editable:true,
                    repeatable:false
                }
            ]
        },
        {
            number:"006",
            name:"Fixed-Length Data Elements-Additional Material Characteristics",
            removable:true,
            copiable:true,
            hasIndicators:false,
            subfields:[
                {
                    number:"00",
                    name:"fixed length control field",
                    required:false,
                    editable:true,
                    repeatable:false
                }
            ]
        },
        {
            number:"007",
            name:"Physical Description Fixed Field-General Information",
            removable:true,
            copiable:true,
            hasIndicators:false,
            subfields:[
                {
                    number:"00",
                    name:"fixed length control field",
                    required:false,
                    editable:true,
                    repeatable:false
                }
            ]
        },
        {
            number:"008",
            name:"Fixed-Length Data Elements-General Information",
            removable:true,
            copiable:false,
            hasIndicators:false,
            subfields:[
                {
                    number:"00",
                    name:"fixed length control field",
                    required:true,
                    editable:true,
                    repeatable:false
                }
            ]
        },
        {
            number:"010",
            name:"Library of Congress Control Number",
            removable:true,
            copiable:false,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"LC control number",
                    required:true,
                    editable:false,
                    repeatable:false
                }
            ]
        },
        {
            number:"015",
            name:"National Bibliography Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"2",
                    name:"Source",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"a",
                    name:"National bibliography number",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"q",
                    name:"Qualifying information",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },
        {
            number:"020",
            name:"International Standard Book Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"International Standard Book Number",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"c",
                    name:"Terms of availability",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"q",
                    name:"Qualifying information",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },
        {
            number:"022",
            name:"International Standard Serial Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"2",
                    name:"Source",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"a",
                    name:"International Standard Serial Number",
                    required:false,
                    editable:false,
                    repeatable:false
                }
            ]
        },
        {
            number:"028",
            name:"Publisher or Distributor Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"b",
                    name:"Source",
                    required:false,
                    editable:false,
                    repeatable:false
                }
            ]
        },
        {
            number:"041",
            name:"Language Code",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"Language code of text/sound track or separate title ",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"d",
                    name:"Language code of sung or spoken text",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"e",
                    name:"Language code of librettos ",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"g",
                    name:"Language code of accompanying material other than librettos and transcripts",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"h",
                    name:"Language code of original ",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },
        {
            number:"050",
            name:"Library of Congress Call Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"Classification number",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"b",
                    name:"Item number",
                    required:false,
                    editable:false,
                    repeatable:false
                }
            ]
        },
        {
            number:"082",
            name:"Dewey Decimal Classification Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"2",
                    name:"Edition information",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"a",
                    name:"Classification number",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"b",
                    name:"Item number",
                    required:false,
                    editable:false,
                    repeatable:false
                }
            ]
        },
    ]

    const oneFields = [
        {
            number: "100",
            name: "Main Entry-Personal Name",
            removable: true,
            copiable: false,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Personal name",
                    required: false,
                    editable: true,
                    repeatable: false, 
                }, 
                {
                    number: "d",
                    name: "Dates associated with a name",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "e",
                    name: "Relator term",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "q",
                    name: "Fuller form of name",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "110",
            name: "Main Entry-Corporate Name",
            removable: true,
            copiable: false,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Corporate name or jurisditction name",
                    required: false,
                    editable: true,
                    repeatable: false, 
                }, 
                {
                    number: "b",
                    name: "Subordinate unit",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "e",
                    name: "Relator term",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
            ]
        }, 
    ]
    
    const twoFields = [
        {
            number: "210",
            name: "Abbreviated Title",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "2",
                    name: "Source",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "a",
                    name: "Abbreviated title",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "b",
                    name: "Qualifying information",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "222",
            name: "Key Title",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Key title",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "b",
                    name: "Qualifying information",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "245",
            name: "Title Statement",
            removable: true,
            copiable: false,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Title",
                    required: true,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "b",
                    name: "Remainder of title",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "c",
                    name: "Statement of responsibility, etc.",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "h",
                    name: "Medium",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "246",
            name: "Varying Form of Title",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "The proper / short title",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "b",
                    name: "Remainder of title",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "h",
                    name: "Medium",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "i",
                    name: "Display text",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "250",
            name: "Edition Statement",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Edition statement",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "b",
                    name: "Remainder of edition statement",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "260",
            name: "Publication, Distribution, Etc.",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Place of publication, distribution, etc.",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "b",
                    name: "Name of publication, distribution, etc.",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "c",
                    name: "Date of publication, distribution, etc.",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
            ]
        }, 
        {
            number: "270",
            name: "Address",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Address",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "b",
                    name: "City",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "c",
                    name: "State of province",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "d",
                    name: "Country",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "e",
                    name: "Postal code",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "f",
                    name: "Terms preceding attention name",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "g",
                    name: "Attention name",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "h",
                    name: "Attention position",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "i",
                    name: "Type of address",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "j",
                    name: "Specialized telephone number",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "k",
                    name: "Telephone number",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "l",
                    name: "Fax number",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "n",
                    name: "Electronic mail address",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "p",
                    name: "TDD or TTY number",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "q",
                    name: "Title of contact person",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "r",
                    name: "Hours",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "z",
                    name: "Public note",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
            ]
        }, 
    ]

    const threeFields = [
        {
            number: "300",
            name: "Physical Description",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Extent",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "b",
                    name: "Other physical details",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "c",
                    name: "Dimensions",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "e",
                    name: "Accompanying material",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "f",
                    name: "Type of unit",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "g",
                    name: "Size of unit",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
            ]
        }, 
        {
            number: "365",
            name: "Trade Price",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "2",
                    name: "Source of price type code",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "a",
                    name: "Price type code",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "b",
                    name: "Price amount",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "c",
                    name: "Currency code",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "d",
                    name: "Unit of pricing",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "f",
                    name: "Price effective from",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "g",
                    name: "Price effective until",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "h",
                    name: "Tax rate 1",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "i",
                    name: "Tax rate 2",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "j",
                    name: "ISO country code",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "k",
                    name: "MARC country code",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "m",
                    name: "Identification of pricing entity",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
    ]

    const fourFields = [
        {
            number: "490",
            name: "Series Statement",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "3",
                    name: "Materials specified",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "a",
                    name: "Series statement",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "v",
                    name: "Volume / sequential designation",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
                {
                    number: "z",
                    name: "International Standard Series Number",
                    required: false,
                    editable: false,
                    repeatable: true, 
                }, 
            ]
        }, 
    ]

    const fiveFields = [
        {
            number: "500",
            name: "General Note",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "General note",
                    required: false,
                    editable: false,
                    repeatable: false, 
                    isTextarea: true, 
                }, 
            ]
        }, 
        {
            number: "520",
            name: "Summary, Etc.",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Summary, etc.",
                    required: false,
                    editable: false,
                    repeatable: false, 
                    isTextarea: true, 
                }, 
            ]
        }, 
        {
            number: "526",
            name: "Study Program Information Note",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Program name",
                    required: false,
                    editable: false,
                    repeatable: false, 
                    isTextarea: true, 
                }, 
                {
                    number: "b",
                    name: "Interest level",
                    required: false,
                    editable: false,
                    repeatable: false, 
                    isTextarea: true, 
                }, 
                {
                    number: "c",
                    name: "Reading level",
                    required: false,
                    editable: false,
                    repeatable: false, 
                    isTextarea: true, 
                }, 
                {
                    number: "d",
                    name: "Title point value",
                    required: false,
                    editable: false,
                    repeatable: false, 
                    isTextarea: true, 
                }, 
            ]
        }, 
        {
            number: "586",
            name: "Awards Notes",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a",
                    name: "Awards Notes",
                    required: false,
                    editable: false,
                    repeatable: false, 
                    isTextarea: true, 
                }, 
            ]
        }, 
    ]

    const sixFields = [
        {
            number: "600",
            name: "Subject Added Entry-Personal Name",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "2",
                    name: "Source of heading or term", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                },
                {
                    number: "a",
                    name: "Personal name", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                },
                {
                    number: "d",
                    name: "Dates associated with a name", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                },
                {
                    number: "t",
                    name: "Title of a work", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                },
                {
                    number: "v",
                    name: "Form subdivision", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
                {
                    number: "x",
                    name: "General subdivision", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
                {
                    number: "y",
                    name: "Chronological subdivision", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
                {
                    number: "z",
                    name: "Geographic subdivision", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
            ]
        }, 
        {
            number: "610",
            name: "Subject Added Entry-Corporate Name",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "2", 
                    name: "Source of heading or term ",
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                },
                {
                    number: "a", 
                    name: "Corporate name or jurisdiction name as entry element ",
                    required: false, 
                    editable: true, 
                    repeatable: false, 
                },
                {
                    number: "b", 
                    name: "Subordinate unit",
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
                {
                    number: "t", 
                    name: "Title of a work ",
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                },
                {
                    number: "v", 
                    name: "Form subdivision",
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
                {
                    number: "x", 
                    name: "General subdivision",
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
                {
                    number: "y", 
                    name: "Chronological subdivision",
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
                {
                    number: "z", 
                    name: "Geographic subdivision",
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                },
            ]
        }, 
    ]

    const sevenFields = [
        {
            number: "700",
            name: "Added Entry-Personal Name",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a", 
                    name: " Personal name", 
                    required: false, 
                    editable: true, 
                    repeatable: false, 
                }, 
                {
                    number: "d", 
                    name: "Dates associated with a name", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "e", 
                    name: "Relator ter", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "q", 
                    name: "Fuller form of name", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "710",
            name: "Added Entry-Corporate Name",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a", 
                    name: "Corporate name or jurisdiction name as entry element (NR)", 
                    required: false, 
                    editable: true, 
                    repeatable: false, 
                }, 
                {
                    number: "b", 
                    name: "Subordinate unit (R)", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "e", 
                    name: "Relator term (R)", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
            ]
        }, 
    ]

    const eightFields = [
        {
            number: "800",
            name: "Series Added Entry-Personal Name",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "4", 
                    name: "Relationship", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "a", 
                    name: "Personal name", 
                    required: false, 
                    editable: true, 
                    repeatable: false, 
                }, 
                {
                    number: "b", 
                    name: "Numeration", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "c", 
                    name: "Titles and other words associated with a nam", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "d", 
                    name: "Dates associated with a name", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "e", 
                    name: "Relator ter", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "q", 
                    name: "Fuller form of name", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
            ]
        }, 
        {
            number: "830",
            name: "Series Added Entry-Uniform Title",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "a", 
                    name: "Uniform title", 
                    required: false, 
                    editable: true, 
                    repeatable: false, 
                }, 
                {
                    number: "l", 
                    name: "Language of a work", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "r", 
                    name: "Key for music", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "s", 
                    name: "Versio", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
            ]
        }, 
        {
            number: "856",
            name: "Electronic Location and Access",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "3", 
                    name: "Materials specified ", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "a", 
                    name: "Host name", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "c", 
                    name: "Compression information", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "d", 
                    name: "Path", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "f", 
                    name: "Electronic name", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "g", 
                    name: "Persistent identifier", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "h", 
                    name: "Non-functioning Uniform Resource Identifier", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "l", 
                    name: "Standardized information governing access", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "m", 
                    name: "Contact for access assistance", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "n", 
                    name: "Terms governing access", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "o", 
                    name: "Operating system ", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "p", 
                    name: "Port ", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "q", 
                    name: "Electronic format type", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "r", 
                    name: "Standardized information governing use and reproduction", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "s", 
                    name: "File size", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "t", 
                    name: "Terms governing use and reproduction", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "u", 
                    name: "Uniform Resource Identifier", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "v", 
                    name: "Hours access method available", 
                    required: false, 
                    editable: false, 
                    repeatable: true, 
                }, 
                {
                    number: "w", 
                    name: "Record control number", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "x", 
                    name: "Nonpublic note", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "y", 
                    name: "Link text", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                {
                    number: "z", 
                    name: "Public note", 
                    required: false, 
                    editable: false, 
                    repeatable: false, 
                }, 
                
            ]
        }, 
        {
            number: "887",
            name: "Non-MARC Information Field",
            removable: true,
            copiable: true,
            hasIndicators: true,
            subfields: [
                {
                    number: "2",
                    name: "Source of data",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
                {
                    number: "2",
                    name: "Content of non-MARC field",
                    required: false,
                    editable: false,
                    repeatable: false, 
                }, 
            ]
        }, 
    ]
 
    return {
        zeroFields, 
        oneFields, 
        twoFields, 
        fourFields, 
        fiveFields, 
        threeFields, 
        sixFields, 
        sevenFields, 
        eightFields, 
    }


}