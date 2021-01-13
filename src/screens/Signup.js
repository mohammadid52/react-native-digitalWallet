import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {SIZES, COLORS, icons, images, FONTS} from '../constants';

const Signup = () => {
  const [secureText, setSecureText] = useState(true);
  const renderHeader = () => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 6,
        paddingHorizontal: SIZES.padding * 2,
      }}>
      <Image
        source={icons.back}
        resizeMode="contain"
        style={{width: 20, height: 20, tintColor: COLORS.white}}
      />
      <Text
        style={{
          marginLeft: SIZES.padding * 1.5,
          color: COLORS.white,
          ...FONTS.h4,
        }}>
        Sign Up
      </Text>
    </TouchableOpacity>
  );

  const renderLogo = () => (
    <View
      style={{
        marginTop: SIZES.padding * 5,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={images.wallieLogo}
        resizeMode="contain"
        style={{width: '60%'}}
      />
    </View>
  );

  const renderForm = () => (
    <View
      style={{
        marginTop: SIZES.padding * 3,
        marginHorizontal: SIZES.padding * 3,
      }}>
      {/* Full Name  */}
      <View style={{marginTop: SIZES.padding * 3}}>
        <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>
          Full Name
        </Text>
        <TextInput
          style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 50,
            color: COLORS.white,
            ...FONTS.body3,
          }}
          placeholder="Enter Full Name"
          placeholderTextColor={COLORS.white}
          selectionColor={COLORS.white}
        />
      </View>
      {/* Password  */}
      <View style={{marginTop: SIZES.padding * 3}}>
        <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>Password</Text>
      </View>
      <TextInput
        style={{
          marginVertical: SIZES.padding,
          borderBottomColor: COLORS.white,
          borderBottomWidth: 1,
          height: 50,
          color: COLORS.white,
          ...FONTS.body3,
        }}
        placeholder="Enter Password"
        placeholderTextColor={COLORS.white}
        selectionColor={COLORS.white}
        secureTextEntry={secureText}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          bottom: 10,
          width: 30,
          height: 30,
        }}
        onPress={() => setSecureText(!secureText)}>
        <Image
          source={secureText ? icons.disable_eye : icons.eye}
          style={{height: 20, width: 20, tintColor: COLORS.white}}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
