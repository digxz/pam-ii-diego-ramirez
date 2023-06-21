import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "#F28705",
            fontFamily: "TimesNewRoman",
          }}
        >
          Snorlax Berrie 
        </Text>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png',
          }}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          alignSelf: 'center',
          height: 40,
          width: 300,
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite aqui!"
      />
    </ScrollView>
  );
}

export default Pokemon;