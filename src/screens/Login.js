import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import appBg from '../../assets/rm222-mind-14.jpg'
import validator from '../screens/utils/validations'
import { showError } from './utils/loginHelperFn'

const Login = ({navigation}) => {

    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true
    })

    const { isLoading, email, password, isSecure } = state;
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () =>{
        const error = validator({
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onLogin = () => {
        if(email == '' || password == ''){
            alert("Please enter your email and password")
            return
        }
        navigation.navigate('Si')
    }

    return (
        <View className="h-full w-full">
            <Image
                source={appBg}
                className="h-full w-full top-0 absolute -z-1"
            />

            <View className="flex justify-center items-center h-full w-full">
                <View className="flex justify-center items-center h-[40%]">
                    <Text className="text-white text-3xl">Logo to be here</Text>
                    <Text className="text-white text-base">Variable area</Text>
                </View>

                <View className="flex bg-white w-full h-[60%] rounded-t-3xl p-5">
                    <Text className="text-3xl text-black text-center">Login</Text>
                    <Text className="text-xl text-black text-center">Sign in to continue</Text>

                    <View className="flex my-1 w-full flex-col">
                        <Text className="text-base text-black mb-1 ml-3">Email</Text>
                        <TextInput className="bg-[#d6ebfe] rounded-xl p-3"/>
                    </View>

                    <View className="flex my-1 w-full flex-col">
                        <Text className="text-base text-black mb-1 ml-3">Password</Text>
                        <TextInput className="bg-[#d6ebfe] rounded-xl p-3"/>
                    </View>

                    <View className="flex items-end mx-3 my-1">
                    <Text className="">Forgot Password?</Text>
                    </View>
                    <Text className="bg-[#007DE3] text-white p-3 rounded-md my-3 text-center min-w-[150]">Login</Text>
                    <Text className="text-gray-600 text-center text-base">Don't have an account?&nbsp;
                    <Text className="text-base text-[#007DE3] my-3 text-center" onPress={() => navigation.navigate('Signup')}>
                        Create a new account.
                    </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login

