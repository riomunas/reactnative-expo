import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';

export default function Links() {
  return (
    <View>
      <Link replace href="/">
          <Text style={{ color: 'blue', fontSize: 30 }}>Go to Home</Text>
      </Link>
      <Link replace href="/about">
          <Text style={{ color: 'blue', fontSize: 30 }}>Go to About</Text>
      </Link>
      <Pressable onPress={() => router.replace('user/bacon')} >
        <Text style={{ color: 'blue', fontSize: 30 }}>Go to User bacon using push</Text>
      </Pressable>
      <Link replace href={{
          pathname: 'user/[id]',
          params: {id: 'bacon'},
        }}>
          <Text style={{ color: 'blue', fontSize: 30 }}>Go to User Bacon</Text>
      </Link>
      
    </View>
  );
}