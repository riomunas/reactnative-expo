import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function OneLayout() {
  const { id } = useLocalSearchParams<{id:string}>()
  console.log("asdfasfads", id);
  return (
    <Stack>
      <Stack.Screen name="one" options={{ title: 'One', headerTitleAlign: 'center'}} />
      <Stack.Screen name="detail" options={{ title: 'Detail', headerTitleAlign: 'center'}} />
      <Stack.Screen name="[id]" options={{ title: id, headerTitleAlign: 'center'}} />
    </Stack>
  )
}