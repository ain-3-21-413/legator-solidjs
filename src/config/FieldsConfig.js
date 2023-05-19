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
                    name:"contol field",
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
                    required:false,
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
            number:"016",
            name:"National Bibliographic Agency Control Number ",
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
                    name:"Record control number",
                    required:false,
                    editable:false,
                    repeatable:false
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
        },{
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
        },{
            number:"024",
            name:"Other Standard Identifier",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"2",
                    name:"Source of number or code",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"a",
                    name:"Standard number or code",
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
                    number:"d",
                    name:"Additional codes following the standard number or code",
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
        },{
            number:"027",
            name:"Standard Technical Report Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"q",
                    name:"Qualifying information",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },{
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
        },{
            number:"035",
            name:"System Control Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"System control number",
                    required:false,
                    editable:false,
                    repeatable:false
                }
            ]
        },
        {
            number:"037",
            name:"Source of Acquisition",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"Stock number",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"b",
                    name:"Source of stock number/acquisition",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"c",
                    name:"Terms of availability",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"f",
                    name:"Form of issue",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"g",
                    name:"Additional format characteristics",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"n",
                    name:"Note",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },
        {
            number:"040",
            name:"Cataloging Source",
            removable:true,
            copiable:false,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"Original cataloging agency ",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"b",
                    name:"Language of cataloging",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"c",
                    name:"Transcribing agency ",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"d",
                    name:"Modifying agency",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"e",
                    name:"Description conventions ",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },{
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
        },{
            number:"045",
            name:"Time Period of Content ",
            removable:true,
            copiable:false,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"Time period code",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"b",
                    name:"Formatted 9999 B.C. through C.E. time period",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },{
            number:"047",
            name:"Form of Musical Composition Code",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"2",
                    name:"Source of code",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"a",
                    name:"Form of musical composition code",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },{
            number:"048",
            name:"Number of Musical Instruments or Voices Code",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"2",
                    name:"Source of code",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"a",
                    name:"Performer or ensemble",
                    required:false,
                    editable:false,
                    repeatable:true
                },
                {
                    number:"b",
                    name:"Soloist",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },{
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
        },{
            number:"074",
            name:"GPO Item Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"a",
                    name:"GPO item number",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"z",
                    name:"Canceled/invalid GPO item number",
                    required:false,
                    editable:false,
                    repeatable:true
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
        },{
            number:"086",
            name:"Government Document Classification Number",
            removable:true,
            copiable:true,
            hasIndicators:true,
            subfields:[
                {
                    number:"2",
                    name:"Number source",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"a",
                    name:"Classification number",
                    required:false,
                    editable:false,
                    repeatable:false
                },
                {
                    number:"z",
                    name:"Canceled/invalid classification number",
                    required:false,
                    editable:false,
                    repeatable:true
                }
            ]
        },
    ]
    
    const twoFields = [
    
    ]


    const fiveFields=[
        
    ]
    return {zeroFields}


}