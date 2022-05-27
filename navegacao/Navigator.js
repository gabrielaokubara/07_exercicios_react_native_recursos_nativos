import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../componentes/HeaderButton'
import Contact from '../views/Contact'
import Home from '../views/Home'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Página Inicial"
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name="Contato" component={Contact}></Stack.Screen>
            <Stack.Screen
                name="Página Inicial"
                component={Home}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Adicionar"
                                iconName="md-add"
                                onPress={() => {
                                    props.navigation.navigate('Contato')
                                }}
                            />
                        </HeaderButtons>
                    ),
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container