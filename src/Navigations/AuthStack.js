import Welcome  from '../screens/Welcome'
import Login from '../screens/Login'
import SignUp from '../screens/Signup'
import HomeScreen from '../screens/HomeScreen'


export default function (Stack) {
    return (
        <>
            {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="Home" component={HomeScreen} />

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />

        </>
    )
}
