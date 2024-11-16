import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-5 bg-white">
      <Text className="text-center text-3xl font-semibold">
        Expo Starter Template
      </Text>
      <Text className="text-center text-gray-700">
        Configured with NativeWind, TypeScript, EsLint, Prettier, Husky,
        LintStaged, Conventional Commit.
      </Text>
      <Button title="Click me" onPress={() => alert("Hello World!")} />
    </View>
  );
}
