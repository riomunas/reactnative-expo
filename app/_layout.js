import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(main)" options={{ headerShown: true }} />
    </Stack>
  )
}