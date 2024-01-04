import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import appBg from '../../assets/rm222-mind-14.jpg'

const SignUp = ({navigation}) => {
    return (
        <View className="h-full w-full">
            <Image
                source={appBg}
                className="h-full w-full top-0 absolute -z-1"
            />

            <View className="flex justify-center items-center h-full w-full">
                <View className="flex justify-center items-center h-[10%]">
                </View>

                <View className="flex bg-white w-full h-[90%] rounded-t-3xl p-5">
                    <Text className="text-3xl text-black text-center font-bold">Create a new account</Text>
                    <Text className="text-gray-600 m-3 text-base text-center">Already registered?&nbsp; 
                    <Text className="text-base text-[#007DE3] my-3" 
                        onPress={ () => navigation.navigate('Login') }>
                        Login here.
                    </Text>
                    </Text>
                
                    <View className="flex my-1 w-full flex-col">
                        <Text className="text-base text-black mb-1 ml-3">Name <Text className='text-red-600'>*</Text></Text>
                        <TextInput className="bg-[#d6ebfe] rounded-xl p-3" placeholder='Enter name here'/>
                    </View>
                    <View className="flex my-1 w-full flex-col">
                        <Text className="text-base text-black mb-1 ml-3">Email <Text className='text-red-600'>*</Text></Text>
                        <TextInput className="bg-[#d6ebfe] rounded-xl p-3" placeholder='Enter email address here'/>
                    </View>
                    <View className="flex my-1 w-full flex-col">
                        <Text className="text-base text-black mb-1 ml-3">Date of birth <Text className='text-red-600'>*</Text></Text>
                        <TextInput className="bg-[#d6ebfe] rounded-xl p-3" placeholder='Enter DOB here'/>
                    </View>
                    <View className="flex my-1 w-full flex-col">
                        <Text className="text-base text-black mb-1 ml-3">Password <Text className='text-red-600'>*</Text></Text>
                        <TextInput className="bg-[#d6ebfe] rounded-xl p-3" placeholder='Enter password here'/>
                    </View>

                    <View className="flex my-1 w-full flex-col">
                        <Text className="text-base text-black mb-1 ml-3">Confirm Password <Text className='text-red-600'>*</Text></Text>
                        <TextInput className="bg-[#d6ebfe] rounded-xl p-3" placeholder='Re-enter password here'/>
                    </View>

                    {/* <View className="flex items-end mx-3 my-1">
                    <Text className="">Forgot Password?</Text>
                    </View> */}
                    <Text className="bg-[#007DE3] text-white p-3 rounded-md my-5 text-center min-w-[150]">Login</Text>
                </View>
            </View>
        </View>
    )
}

export default SignUp

