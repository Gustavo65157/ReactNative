import { Text, View, Image, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-gray-100" contentContainerStyle={{ padding: 20 }}>
      <View className="flex-row items-center justify-between mb-8">
        <View className="flex-row items-center gap-4">
          <View className="rounded-full w-16 h-16 bg-purple-800" />
          <View>
            <Text className="text-2xl font-semibold">Rogerin</Text>
          </View>
        </View>

        <View className="flex-row gap-4">
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/107/107831.png' }}
            className="w-8 h-8"
          />
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827349.png' }}
            className="w-8 h-8"
          />
        </View>
      </View>

      <View className="flex-row flex-wrap justify-between gap-y-5">
        {[
          'Tênis', 'Camisa', 'Boné', 'Relógio',
          'Mochila', 'Óculos', 'Calça', 'Jaqueta'
        ].map((nome, index) => (
          <View
            key={index}
            className="w-[47%] bg-white rounded-xl items-center p-3"
            style={{ height: 160 }}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/80' }}
              style={{ width: 80, height: 80, marginBottom: 8 }}
              resizeMode="contain"
            />
            <Text className="text-sm font-bold text-center">{nome}</Text>
            <Text className="text-green-600 text-xs">R$ 99,99</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
