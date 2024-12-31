import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSubmit = () => {
    console.log('Số điện thoại:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.separator}/>
      <View style={styles.break2}/>
      <View style={styles.content}>
        <Text style={styles.subTitle}>Nhập số điện thoại</Text>
        <View style={styles.break}/>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View style={styles.separator}/>
        <View style={styles.break3}/>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start', // Đưa nội dung sang phía bên trái
    justifyContent: 'flex-start', // Đưa nội dung lên trên cùng
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  content: {
    width: '100%',
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  break: {
    height: 10,
  },
  break2: {
    height: 20,
  },
  break3: {
    height: 80,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 0,
    // backgroundColor: 'gray',
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 0,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center', // Canh giữa văn bản trong nút
    fontSize: 20,
  },
  buttonText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    width: '100%', // Đặt chiều rộng của văn bản là 100%
  },
});
