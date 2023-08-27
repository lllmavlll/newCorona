
fetch(`http://localhost:4000/iname/getGname`)
.then(response => response.json())
.then(data =>{
    console.log(data);
  
})
.catch(error => {
    console.error('Error fetching user data:', error);
});

export const dependentDropDown =[
    {
        groupName:"ADG",
        subGroupName:["ADG_B","ADG_CHAIN","ADG_PL","ADG_PINJI","ADG_KOSE",]
    },
    {
        groupName:"CAST",
        subGroupName:["CAST_B","CAST_CHAIN","CAST_PL","CAST_PINJI","CAST_KOSE",]
    },
    {
        groupName:"JAVAI",
        subGroupName:["JAVAI_B","JAVAI_CHAIN","JAVAI_PL","JAVAI_PINJI","JAVAI_KOSE",]
    },
    {
        groupName:"PLAIN",
        subGroupName:["PLAIN_B","PLAIN_CHAIN","PLAIN_PL","PLAIN_PINJI","PLAIN_KOSE",]
    },
    {
        groupName:"PLATE-AD",
        subGroupName:["PLATE-AD_B","PLATE-AD_CHAIN","PLATE-AD_PL","PLATE-AD_PINJI","PLATE-AD_KOSE",]
    },
    {
        groupName:"SSTPR",
        subGroupName:["SSTPR_B","SSTPR_CHAIN","SSTPR_PL","SSTPR_PINJI","SSTPR_KOSE",]
    },
]