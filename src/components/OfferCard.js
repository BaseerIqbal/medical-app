import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'

const OfferCard = ({
    id,
    imgUrl,
    title,
    rating,
    speciality,
    address,
    short_description,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
        <Image
            source={{
                uri: imgUrl,
            }}
            className="h-36 w-64 rounded-sm"
        />
        <View>
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {speciality}
                </Text>
            </View>

            <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
        </View>

    </TouchableOpacity>
  )
}

export default OfferCard
