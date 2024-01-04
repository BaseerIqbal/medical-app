import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import OfferCard from './OfferCard'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4" >
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          showsHorizontalScrollIndicator={false} 
          className="pt-4"
        >

        {/* Offer's Cards */}
        <OfferCard 
            id={123}
            imgUrl="https://freerangestock.com/photos/149940/doctor-doing-physical-examination-of-young-female-patient.html"
            title="Mohammed Faraj"
            rating={4.5}
            speciality="Orthopedics"
            address="1st Taif st. Abq"
            short_description=" It's a test description "
            long={20}
            lat={0}
        />
        <OfferCard 
            id={123}
            imgUrl="https://freerangestock.com/photos/149940/doctor-doing-physical-examination-of-young-female-patient.html"
            title="Mohammed Faraj"
            rating={4.5}
            speciality="Orthopedics"
            address="1st Taif st. Abq"
            short_description=" It's a test description "
            long={20}
            lat={0}
        />
        <OfferCard 
            id={123}
            imgUrl="https://freerangestock.com/photos/149940/doctor-doing-physical-examination-of-young-female-patient.html"
            title="Mohammed Faraj"
            rating={4.5}
            speciality="Orthopedics"
            address="1st Taif st. Abq"
            short_description=" It's a test description "
            long={20}
            lat={0}
        />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow