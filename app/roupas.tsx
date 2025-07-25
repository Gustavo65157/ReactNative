
import { View, Text, Image, ScrollView } from "react-native";


export default function Index() {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-5">
      <View className="flex-row justify-between items-center mb-5">
        <View className="flex-row items-center">
          <View className="w-14 h-14 rounded-full bg-purple-700 mr-3" />
          <Text className="text-2xl font-bold">Jorgin</Text>
        </View>

        <View className="flex-row space-x-3">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/107/107831.png",
            }}
            className="w-8 h-8"
          />
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1827/1827349.png",
            }}
            className="w-8 h-8"
          />
        </View>
      </View>

      <View className="flex-row flex-wrap justify-between">
        <View className="w-[48%] mb-5 border border-gray-200 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUTM2lSiRfzhTKG8Oyurh-Iz9xhjuuj7LbQ&s",
            }}
            className="w-full aspect-square"
            resizeMode="cover"
          />
          <View className="p-2">
            <Text className="font-bold text-sm">Camisa polo</Text>
            <Text className="text-green-600 text-sm">R$150</Text>
          </View>
        </View>

        <View className="w-[48%] mb-5 border border-gray-200 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: "https://s.hipnoise.com.br/product/2024/05/mad-mar-2024-00071.jpg",
            }}
            className="w-full aspect-square"
            resizeMode="cover"
          />
          <View className="p-2">
            <Text className="font-bold text-sm">Calça mad enlatados</Text>
            <Text className="text-green-600 text-sm">R$400,00</Text>
          </View>
        </View>

        <View className="w-[48%] mb-5 border border-gray-200 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: "https://madenlatados.com.br/cdn/shop/files/MAD_MAR_2024_00029.jpg?v=1712714357&width=823",
            }}
            className="w-full aspect-square"
            resizeMode="cover"
          />
          <View className="p-2">
            <Text className="font-bold text-sm">Cueca box mad enlatados</Text>
            <Text className="text-green-600 text-sm">R$79,89</Text>
          </View>
        </View>

        <View className="w-[48%] mb-5 border border-gray-200 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/bc/ae/28/bcae281c98e1181e42c056942f4e06b3.jpg",
            }}
            className="w-full aspect-square"
            resizeMode="cover"
          />
          <View className="p-2">
            <Text className="font-bold text-sm">Bota Timberland</Text>
            <Text className="text-green-600 text-sm">R$248,19</Text>
          </View>
        </View>

        <View className="w-[48%] mb-5 border border-gray-200 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: "https://acdn-us.mitiendanube.com/stores/001/752/612/products/cca055b23b19c42113f9f209b4a8d6c9-f49750de592ba70ee516935797579871-1024-1024.webp",
            }}
            className="w-full aspect-square"
            resizeMode="cover"
          />
          <View className="p-2">
            <Text className="font-bold text-sm">Mochila Gengar</Text>
            <Text className="text-green-600 text-sm">R$149,59</Text>
          </View>
        </View>

        <View className="w-[48%] mb-5 border border-gray-200 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: "https://images.tcdn.com.br/img/img_prod/710966/bone_new_era_aba_reta_5950_mlb_ny_yankees_city_transit_1863_3_fd4ad16ca134c2f881061899ff0f242a.jpg",
            }}
            className="w-full aspect-square"
            resizeMode="cover"
          />
          <View className="p-2">
            <Text className="font-bold text-sm">Boné New era</Text>
            <Text className="text-green-600 text-sm">R$146,79</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
