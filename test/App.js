import * as SecureStore from 'expo-secure-store';
import LoginScreen from './Screens/Auth/LoginScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { useEffect, useState } from 'react';
import StackNavigator from './StackNavigator';
import { PageLoader } from './Components/PageLoader';




export default function App() {

  const [appToken, setAppToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveData()
  }, [])

  const retrieveData = async () => {
    try {
      const storedData = await SecureStore.getItemAsync('appToken');
      if (storedData !== null) {
        setAppToken(storedData)
      } else {
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }

    setLoading(false)
  };

  if (loading) {

    return (<PageLoader />)
  }

  return <StackNavigator />;
  // return (


  //   <>
  //     {appToken ? <HomeScreen /> : <LoginScreen />}

  //   </>
  // );
}


