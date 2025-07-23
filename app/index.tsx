import { View, Text, Image, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ padding: 20 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 40,
              backgroundColor: "purple",
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Jorgin</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/107/107831.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1827/1827349.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/I/61ZGHUZ3V1L._AC_SX569_.jpg",
            }}
            style={{ width: "100%", aspectRatio: 1 }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Camisa polo</Text>
            <Text style={{ color: "#29a745", fontSize: 13 }}>R$150</Text>
          </View>
        </View>

        <View
          style={{
            width: "48%",
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://s.hipnoise.com.br/product/2024/05/mad-mar-2024-00071.jpg",
            }}
            style={{ width: "100%", aspectRatio: 1 }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              Calça mad enlatados
            </Text>
            <Text style={{ color: "#28a745", fontSize: 13 }}>R$400,00</Text>
          </View>
        </View>

        <View
          style={{
            width: "48%",
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://madenlatados.com.br/cdn/shop/files/MAD_MAR_2024_00029.jpg?v=1712714357&width=823",
            }}
            style={{ width: "100%", aspectRatio: 1 }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              Cueca box mad enlatados
            </Text>
            <Text style={{ color: "#28a745", fontSize: 13 }}>R$79,89</Text>
          </View>
        </View>
        <View
          style={{
            width: "48%",
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/bc/ae/28/bcae281c98e1181e42c056942f4e06b3.jpg",
            }}
            style={{ width: "90%", aspectRatio: 1 }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              Bota Timberland
            </Text>
            <Text style={{ color: "#28a745", fontSize: 13 }}>R$248,19</Text>
          </View>
        </View>

        <View
          style={{
            width: "48%",
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://acdn-us.mitiendanube.com/stores/001/752/612/products/cca055b23b19c42113f9f209b4a8d6c9-f49750de592ba70ee516935797579871-1024-1024.webp",
            }}
            style={{ width: "100%", aspectRatio: 1 }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              Mochila Gengar
            </Text>
            <Text style={{ color: "#28a745", fontSize: 13 }}>R$149,59</Text>
          </View>
        </View>


        <View
          style={{
            width: "48%",
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://images.tcdn.com.br/img/img_prod/710966/bone_new_era_aba_reta_5950_mlb_ny_yankees_city_transit_1863_3_fd4ad16ca134c2f881061899ff0f242a.jpg",
            }}
            style={{ width: "100%", aspectRatio: 1 }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Boné New era</Text>
            <Text style={{ color: "#28a745", fontSize: 13 }}>R$146,79</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
