import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SnackForm } from '@components/SnackForm';

import { styles } from './styles';

export function NewSnack(){
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
 
  return(
    <SafeAreaView style={styles.container}>
      <SnackForm
        name={name}
        setName={() => setName}
        description={description}
        setDescription={()=> setDescription}
        data={data}
        setData={()=> setData}
        time={time}
        setTime={() => setTime}
        type='new'
      />
    </SafeAreaView>
  )
}