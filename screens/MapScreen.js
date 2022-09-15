import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import EatsOptionsCard from '../components/EatsOptionsCard';

const MapScreen = () => {
    const Stack = createStackNavigator();
    return (
        <View>
          <View style={tw`h-2/5`}>
            <Map />
          </View>

          <View style={tw`h-3/5`}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="NavigateCard"
                    component={NavigateCard}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="RideOptionsCard"
                    component={RideOptionsCard}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="EatsOptionsCard"
                    component={EatsOptionsCard}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
          </View>
        </View>
    )
}

export default MapScreen;
