# React-Native-do-Zero
Repositório para arquivos de um workshop em React Native. 

link: https://www.youtube.com/watch?v=qcCM7sq8t50&list=PLAF5G8rnMmBbh-xQavcjkOJvhtH7SHN63

<h2>Terminal:</h2>

<h3>Como criar app</h3>

- ```npm i -g expo-cli```

- ```npx create-expo-app my-app```


<h3>Como rodar:</h3>

- ```cd my-app```

- ```npm run start```

- caso nao funcione, rodar ```npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0```

<h2>Entendendo como funciona</h2>

- A tag view funciona como uma DIV, e foi importada do React Native. 

```javaScript 
import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>

    </View>
  );
}
```

- StyleSheet é usada para dar estilo aos elementos.  

```javaScript
const styles = StyleSheet.create({
  container:{
    flex:1,                     //o q eh flex? 
  }
})
```

    - Dentro do elemento: 
    
``` javaScript
<View style={styles.container}>
```


