import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function renderHeader(item, navigation) {
  return (
    <ImageBackground
      source={item.bookCover}
      resizeMode="cover"
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: item.backgroundColor,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
        }}>
        <View
          style={[
            styles.rowDirection,
            {
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: wp(SIZES.responsive4),
              marginTop: hp(SIZES.responsive2),
            },
          ]}>
          <TouchableOpacity
            hitSlop={{
              top: hp(SIZES.responsive2),
              bottom: hp(SIZES.responsive2),
              left: wp(SIZES.responsive1),
              right: wp(SIZES.responsive1),
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: wp(SIZES.responsive4 + 1),
                height: hp(SIZES.responsive4),
                tintColor: item.navTintColor,
              }}
            />
          </TouchableOpacity>
          <Text style={{...FONTS.h3, color: item.navTintColor}}>
            Detail Book
          </Text>
          <TouchableOpacity
            hitSlop={{
              top: hp(SIZES.responsive2),
              bottom: hp(SIZES.responsive2),
              left: wp(SIZES.responsive1),
              right: wp(SIZES.responsive1),
            }}
            onPress={() => {}}>
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                width: wp(SIZES.responsive6),
                height: hp(SIZES.responsive4),
                tintColor: item.navTintColor,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: hp(SIZES.responsive6)}}>
          <Image
            source={item.bookCover}
            resizeMode="contain"
            style={{
              width: wp(40),
              height: hp(30),
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: hp(SIZES.responsive2)}}>
          <Text style={{...FONTS.h2, color: item.navTintColor}}>
            {item.bookName}
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: item.navTintColor,
              marginTop: hp(SIZES.responsive1),
            }}>
            {item.author}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={[
              styles.rowDirection,
              {
                marginHorizontal: wp(4),
                backgroundColor: item.backgroundColor,
                paddingVertical: hp(SIZES.responsive1),
                borderRadius: wp(SIZES.responsive2),
              },
            ]}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...FONTS.h4, color: item.navTintColor}}>
                {item.rating}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>
                Rating
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...FONTS.h4, color: item.navTintColor}}>
                {item.rating}
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray4,
                  flexWrap: 'wrap',
                }}>
                Number of Page
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...FONTS.h4, color: item.navTintColor}}>
                {item.rating}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>
                Language
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

function renderDescription(description) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onContentSizeChange={(width, height) => {
          setScrollViewWholeHeight(height)
      }}
      onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
          setScrollViewVisibleHeight(height)
      }}
      onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: indicator } } }],
          { useNativeDriver: false }
      )}
      
      >
      <Text style={{...FONTS.h3, color: COLORS.white, marginVertical: hp(2)}}>
        Description
      </Text>
      <Text style={{...FONTS.body3, color: COLORS.lightGray}}>{description}</Text>
    </ScrollView>
  );
}

export default function DetailBook({route, navigation}) {
  const {item} = route.params;
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flex: 2}}>{renderHeader(item, navigation)}</View>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 2,
            backgroundColor: COLORS.darkBlue,
            paddingHorizontal: wp(SIZES.responsive4),
          }}>
          {renderDescription(item.description)}
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowDirection: {
    flexDirection: 'row',
  },
});
