import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'Enjoy effortless access to our services, making your experience smooth and hassle-free.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: "Explore cost-effective solutions that won't compromise on quality or value.",
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Study Time',
    description:
      'Craft your own study timetable to match your pace and preferences for a tailored learning experience.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Receive valuable insights and support from seasoned mentors to enhance your learning journey.',
    icon: <ContactSupportIcon />,
  },
]
