import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function VerticalLineDivider() {
  return (
    <View
      style={{
        borderColor: COLORS.lightGray3,
        borderWidth: wp(SIZES.responsive1 / 10),
      }}
    />
  );
}

function renderHeader(item, navigation) {
  return (
    <ImageBackground
      source={item?.bookCover}
      resizeMode="cover"
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: item?.backgroundColor,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: item?.backgroundColor,
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
                tintColor: item?.navTintColor,
              }}
            />
          </TouchableOpacity>
          <Text style={{...FONTS.h3, color: item?.navTintColor}}>
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
                tintColor: item?.navTintColor,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: hp(SIZES.responsive6)}}>
          <Image
            source={item?.bookCover}
            resizeMode="contain"
            style={{
              width: wp(40),
              height: hp(30),
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: hp(SIZES.responsive2)}}>
          <Text style={{...FONTS.h2, color: item?.navTintColor}}>
            {item?.bookName}
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: item?.navTintColor,
              marginTop: hp(SIZES.responsive1),
            }}>
            {item?.author}
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
                backgroundColor: item?.backgroundColor,
                paddingVertical: hp(SIZES.responsive1),
                borderRadius: wp(SIZES.responsive2),
              },
            ]}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...FONTS.h4, color: item?.navTintColor}}>
                {item?.rating}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>
                Rating
              </Text>
            </View>
            <VerticalLineDivider />
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...FONTS.h4, color: item?.navTintColor}}>
                {item?.rating}
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
            <VerticalLineDivider />
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...FONTS.h4, color: item?.navTintColor}}>
                {item?.rating}
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

function renderDescription(
  description,
  setScrollViewWholeHeight,
  setScrollViewVisibleHeight,
  indicator,
) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onContentSizeChange={(contentWidth, contentHeight) => {
        setScrollViewWholeHeight(contentHeight);
      }}
      onLayout={({
        nativeEvent: {
          layout: {x, y, width, height},
        },
      }) => {
        setScrollViewVisibleHeight(height);
      }}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: indicator}}}],
        {useNativeDriver: false},
      )}>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.white,
          marginBottom: hp(SIZES.responsive1),
        }}>
        Description
      </Text>
      <Text style={{...FONTS.body3, color: COLORS.lightGray}}>
        {description}
      </Text>
    </ScrollView>
  );
}

function renderBookDescription(
  scrollViewWholeHeight,
  setScrollViewWholeHeight,
  scrollViewVisibleHeight,
  setScrollViewVisibleHeight,
  bookItem,
  indicator,
) {
  const indicatorSize =
    scrollViewWholeHeight > scrollViewVisibleHeight
      ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
        scrollViewWholeHeight
      : scrollViewVisibleHeight;

  const difference =
    scrollViewVisibleHeight > indicatorSize
      ? scrollViewVisibleHeight - indicatorSize
      : 1;

  return (
    <View
      style={[
        {
          flex: 3,
          backgroundColor: COLORS.darkBlue,
          paddingHorizontal: wp(SIZES.responsive4),
          paddingVertical: hp(SIZES.responsive2),
        },
        styles.rowDirection,
      ]}>
      {/* Custom Scrollbar */}
      <View
        style={{
          width: wp(SIZES.responsive1),
          height: '100%',
          borderRadius: wp(1),
          backgroundColor: COLORS.gray1,
          marginRight: wp(SIZES.responsive4),
        }}>
        <Animated.View
          style={{
            width: wp(SIZES.responsive1),
            height: indicatorSize,
            borderRadius: wp(1),
            backgroundColor: COLORS.lightGray4,
            transform: [
              {
                translateY: Animated.multiply(
                  indicator,
                  scrollViewVisibleHeight / scrollViewWholeHeight,
                ).interpolate({
                  inputRange: [0, difference],
                  outputRange: [0, difference],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
      </View>
      {renderDescription(
        bookItem?.description,
        setScrollViewWholeHeight,
        setScrollViewVisibleHeight,
        indicator,
      )}
    </View>
  );
}

function renderReading() {
  return (
    <View
      style={[
        {flex: 1, backgroundColor: COLORS.darkBlue, paddingHorizontal: wp(4)},
      ]}>
      <View style={[{height: wp(10)}, styles.rowDirection]}>
        <TouchableOpacity
          style={{
            width: wp(10),
            borderRadius: wp(SIZES.responsive1),
            backgroundColor: COLORS.gray1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: '50%',
              height: '50%',
              tintColor: COLORS.lightGray4,
            }}
            source={icons.bookmark_icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: wp(SIZES.responsive3),
            backgroundColor: COLORS.primary,
            borderRadius: wp(SIZES.responsive1),
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function BookDetail({route, navigation}) {
  const [bookItem, setBook] = React.useState(null);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);

  React.useEffect(() => {
    let {book} = route.params;
    setBook(book);
  }, [bookItem]);
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flex: 2}}>{renderHeader(bookItem, navigation)}</View>
      <View style={[{flex: 1}]}>
        {renderBookDescription(
          scrollViewWholeHeight,
          setScrollViewWholeHeight,
          scrollViewVisibleHeight,
          setScrollViewVisibleHeight,
          bookItem,
          indicator,
        )}
        {renderReading()}
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
