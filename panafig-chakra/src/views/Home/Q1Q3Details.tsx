'use client'

import ALIGNMENT from "@/components/HomeAlignment";
import Q1Q3Circle from "@/components/Q1_Q3Circle"
import { Q1Q3DATA } from "@/utils/Q1Q3DATA";
import { Box } from "@chakra-ui/react";


const Q1Q3Details = ()=> {
    return(
        <ALIGNMENT>
            {Q1Q3DATA.map((data)=>(
                <Box key={data.quarter}>
                      <Q1Q3Circle quarter={data.quarter} details={data.details}/>
                </Box>
            ))}

          
        </ALIGNMENT>
    )
}

export default Q1Q3Details;