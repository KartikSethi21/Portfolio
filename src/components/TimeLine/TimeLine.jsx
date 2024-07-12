import React from 'react'
import { Timeline,TimelineItem,
    TimelineConnector,TimelineContent,
    TimelineSeparator,TimelineOppositeContent,
    TimelineDot
 } from '@mui/lab';
 import { Typography} from "@mui/material";
import { Event } from '@mui/icons-material';
function TimeLine({timelines=[]}) {
  return (
    <div>
        <Timeline position="alternate">
         {
            timelines.map((item,index)=>(
                <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{m:"auto 0"}}
                    align='right'
                    variant='body2'
                    color="text.secondary"
                    >
                        {
                            item.date
                        }
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <Event/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py:"12px",px:2}}>
                        <Typography variant='h6'>
                            {item.title}
                        </Typography> 
                    <Typography>{item.description}</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))
         }   
        </Timeline>
    </div>
  )
}

export default TimeLine