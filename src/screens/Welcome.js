import React from 'react'
import { Image, Text, View } from 'react-native'
import appBg from '../../assets/rm222-mind-14.jpg'

const Welcome = () => {
    return (
        <View className="h-full w-full">
            <Image
                source={appBg}
                className="h-full w-full top-0 absolute -z-1"
            />
            <View>
            <Text className="bg-[#007DE3] text-white p-3 rounded-md m-3 text-center min-w-[150]" onPress={() => navigation.navigate('Login')}>Login</Text>
            <Text className="bg-[#007DE3] text-white p-3 rounded-md m-3 text-center min-w-[150]" onPress={() => navigation.navigate('Signup')}>Singup</Text>
            </View>
        </View>
    )
}

export default Welcome
