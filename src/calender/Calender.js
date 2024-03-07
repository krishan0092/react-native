import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  Calendar,
  CalendarList,
  CalendarProvider,
  ExpandableCalendar,
  LocaleConfig,
} from 'react-native-calendars';
const Calender = () => {
  const [selected, setSelected] = useState('');
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'red'};
  const workout = {key: 'workout', color: 'green', selectedDotColor: 'black'};
  return (
    <View style={{flex: 1}}>
      {/* <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          '2024-03-02': {selected: true, marked: true, selectedColor: 'green',dots: [vacation, massage, workout]},
          '2024-03-03': {selected: true, marked: true, selectedColor: 'pink'},
        }}
        markingType={'multi-dot'}
        maxDate="2024-03-15"
        initialDate="2024-03-01"
        firstDay={7}
        disableMonthChange={false}
       enableSwipeMonths={true}

      /> */}
      {/* <CalendarList
        horizontal={true}
        
       
        pagingEnabled={true}
        markedDates={{
          '2024-03-02': {selected: true, marked: true, selectedColor: 'green'},
          '2024-03-03': {selected: true, marked: true, selectedColor: 'pink'},
        }}
      /> */}
      <ExpandableCalendar />
    </View>
  );
};

export default Calender;
