import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View>
      <Text>Index asdf hi dek</Text>
      <Link push href="(main)/home">Home</Link>
    </View>
  )
}