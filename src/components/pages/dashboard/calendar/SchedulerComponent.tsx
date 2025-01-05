'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import '@/styles/calendar.css'
import type { CalendarApi } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import { useRef, useState } from 'react'

export default function SchedulerComponent() {
  const calendarRef = useRef<FullCalendar | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const events = [
    {
      title: 'Open Time',
      start: new Date(),
      end: new Date(),
      backgroundColor: '#f5a623',
      borderColor: '#f5a623',
      textColor: '#000000',
    },
  ]

  const handleMonthChange = (month: string) => {
    const calendarApi: CalendarApi | undefined = calendarRef.current?.getApi()
    if (calendarApi) {
      const date = new Date()
      date.setMonth(months.indexOf(month))
      calendarApi.gotoDate(date)
      setCurrentMonth(months.indexOf(month))
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[120px]">
        <Select value={months[currentMonth]} onValueChange={handleMonthChange}>
          <SelectTrigger className="bg-background-200">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            {months.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="h-dvh w-full max-w-[1200px] pb-5 md:h-auto">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          events={events}
          headerToolbar={{
            start: 'prev,next today',
            center: 'title',
            end: '',
          }}
          height="100%"
          datesSet={(dateInfo) => {
            setCurrentMonth(dateInfo.start.getMonth())
          }}
        />
      </div>
    </div>
  )
}
