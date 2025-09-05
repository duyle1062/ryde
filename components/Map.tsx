import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { Text } from "react-native";

const Map = () {
  return (
    <MapView
      provider={PROVIDER_DEFAULT} c
      lassName="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
    showsPointsOfInterests={false}
    // initialRegion={region}
    showsUserLocation={true}
      userInterfaceStyle="light"
    >
    <Text> </Text>
    </MapView>
  )
}

export default Map;