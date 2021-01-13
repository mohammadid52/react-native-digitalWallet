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
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);

  React.useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        const areaData = data.map((item) => ({
          code: item.alpha2Code,
          name: item.name,
          callingCode: item.callingCodes[0],
          flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
        }));
        setAreas(areaData);
        if (areaData.length > 0) {
          const defaultData = areaData.filter((item) => item.code === 'IN');
          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);

  const renderHeader = () => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 3,
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

      {/* Phone Number */}
      <View style={{marginTop: SIZES.padding * 2}}>
        <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>
          Phone Number
        </Text>

        <View style={{flexDirection: 'row'}}>
          {/* Country Code */}
          <TouchableOpacity
            style={{
              width: 100,
              height: 60,
              marginHorizontal: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              flexDirection: 'row',
              ...FONTS.body2,
            }}
            // onPress={() => setModalVisible(true)}
          >
            <View style={{justifyContent: 'center'}}>
              <Image
                source={icons.down}
                style={{
                  width: 10,
                  height: 10,
                  tintColor: COLORS.white,
                }}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 5}}>
              <Image
                source={{uri: selectedArea?.flag}}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>

            <View style={{justifyContent: 'center', marginLeft: 5}}>
              <Text style={{color: COLORS.white, ...FONTS.body3}}>
                {selectedArea?.callingCode}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Phone Number */}
          <TextInput
            style={{
              flex: 1,
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 50,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Enter Phone Number"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
      </View>

      {/* Password  */}
      <View style={{marginTop: SIZES.padding * 3}}>
        <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>Password</Text>
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
            source={secureText ? icons.eye : icons.disable_eye}
            style={{height: 20, width: 20, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderButton = () => (
    <View style={{margin: SIZES.padding * 3}}>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: COLORS.black,
          borderRadius: SIZES.radius / 1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
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
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
