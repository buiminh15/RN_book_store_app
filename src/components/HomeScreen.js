import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {categoriesData, menuTopData, myBooksData} from '../config/data';

function renderHeader() {
  return (
    <View
      style={[
        {
          marginHorizontal: wp(SIZES.responsive4),
          marginTop: hp(SIZES.responsive2),
        },
      ]}>
      <Text style={{...FONTS.body3, color: COLORS.white}}>Good Morning</Text>
      <View
        style={[
          {justifyContent: 'space-between', alignItems: 'center'},
          styles.rowDirection,
        ]}>
        <Text style={{...FONTS.h2, color: COLORS.white}}>
          Batricia Salfiora
        </Text>
        <View
          style={[
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: COLORS.darkPrimary,
              width: wp(SIZES.responsive6 * 4 + 2),
              height: hp(SIZES.responsive4),
              borderRadius: wp(SIZES.responsive4),
              paddingHorizontal: wp(SIZES.responsive2),
            },
            styles.rowDirection,
          ]}>
          <View
            style={{
              width: wp(SIZES.responsive4 + 1),
              height: wp(SIZES.responsive4 + 1),
              borderRadius: wp(SIZES.responsive6),
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={icons.plus_icon}
              style={{
                width: wp(SIZES.responsive3),
                height: hp(SIZES.responsive2),
              }}
            />
          </View>
          <Text style={{...FONTS.h4, color: COLORS.white}}>240 point</Text>
        </View>
      </View>
    </View>
  );
}

function renderMenuTop() {
  return (
    <View
      style={[
        {
          height: hp(SIZES.responsive6 + 2),
          marginHorizontal: wp(SIZES.responsive4),
          marginTop: hp(SIZES.responsive4),
          backgroundColor: COLORS.gray1,
          borderRadius: wp(SIZES.responsive2),
        },
        styles.rowDirection,
      ]}>
      {menuTopData.map((m, index) => (
        <View
          key={`menu-top-id-${m.id}`}
          style={[
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            styles.rowDirection,
          ]}>
          <TouchableOpacity
            hitSlop={{
              top: hp(SIZES.responsive2),
              bottom: hp(SIZES.responsive2),
              left: wp(SIZES.responsive1),
              right: wp(SIZES.responsive1),
            }}
            style={[
              {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
              styles.rowDirection,
            ]}>
            <Image
              source={m.icon}
              resizeMode="contain"
              style={{
                width: wp(SIZES.responsive6),
                height: hp(SIZES.responsive4),
                marginRight: wp(SIZES.responsive2),
              }}
            />
            <Text style={{...FONTS.h4, color: COLORS.white}}>{m.name}</Text>
          </TouchableOpacity>
          {index !== menuTopData.length - 1 && (
            <View
              style={{
                height: hp(4),
                borderWidth: 1,
                borderColor: COLORS.lightGray,
              }}></View>
          )}
        </View>
      ))}
    </View>
  );
}

function renderMyBook() {
  return (
    <View style={{marginTop: hp(SIZES.responsive3)}}>
      <View
        style={[
          styles.rowDirection,
          {
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: wp(SIZES.responsive4),
          },
        ]}>
        <Text style={{...FONTS.h2, color: COLORS.white}}>My Book</Text>
        <TouchableOpacity>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.lightGray4,
              textDecorationLine: 'underline',
            }}>
            see more
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function renderMyBookList(navigation) {
  return (
    <View
      style={{
        marginLeft: wp(SIZES.responsive2),
        marginTop: hp(SIZES.responsive3),
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={myBooksData}
        renderItem={({item, index}) =>
          renderMyBookItem(item, index, navigation)
        }
        keyExtractor={item => `my-book-id-${item.id}`}
      />
    </View>
  );
}

function renderMyBookItem(item, index, navigation) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailBook', {
          book: item,
        });
      }}
      style={{
        marginLeft: index === 0 ? wp(SIZES.responsive1) : 0,
        marginRight: wp(SIZES.responsive1),
        width: wp(SIZES.responsive6 * 8),
        height: hp(SIZES.responsive6 * 6 + 2),
      }}>
      <Image
        source={item.bookCover}
        resizeMode="cover"
        style={{
          borderRadius: wp(SIZES.responsive3),
          width: '88%',
          height: '88%',
        }}
      />
      <View style={[styles.rowDirection, {flex: 1, alignItems: 'flex-end'}]}>
        {/* last read */}
        <View
          style={[
            styles.rowDirection,
            {alignItems: 'center', marginRight: wp(SIZES.responsive4)},
          ]}>
          <Image
            source={icons.clock_icon}
            resizeMode="contain"
            style={{
              width: wp(SIZES.responsive4),
              height: wp(SIZES.responsive4),
              tintColor: COLORS.lightGray,
              marginRight: wp(SIZES.responsive2),
            }}
          />
          <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>
            {item.lastRead}
          </Text>
        </View>
        {/* completion */}
        <View style={[styles.rowDirection, {alignItems: 'center'}]}>
          <Image
            source={icons.page_icon}
            resizeMode="contain"
            style={{
              width: wp(SIZES.responsive4),
              height: wp(SIZES.responsive4),
              tintColor: COLORS.lightGray,
              marginRight: wp(SIZES.responsive2),
            }}
          />
          <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>
            {item.completion}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function renderCategories(categoriesData) {
  const [category, setCategory] = useState(categoriesData[0]);

  return (
    <View>
      <View
        style={[
          styles.rowDirection,
          {
            marginHorizontal: wp(SIZES.responsive4),
            marginVertical: hp(SIZES.responsive2),
          },
        ]}>
        {categoriesData.map(c => (
          <TouchableOpacity
            onPress={() => setCategory(c)}
            key={`category-id${c.id}`}
            style={{marginRight: wp(SIZES.responsive4)}}>
            <Text
              style={{
                ...FONTS.h2,
                color: category.id === c.id ? COLORS.white : COLORS.lightGray,
              }}>
              {c.categoryName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderCategoriesList(category.books)}
    </View>
  );
}

function renderCategoriesList(books) {
  return (
    <View>
      <FlatList
        data={books}
        renderItem={renderCategoriesItem}
        keyExtractor={item => `book-id-${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function renderCategoriesItem({item}) {
  return (
    <TouchableOpacity
      style={[
        styles.rowDirection,
        {
          marginHorizontal: wp(SIZES.responsive4),
          marginBottom: hp(SIZES.responsive2),
        },
      ]}>
      <View
        style={{
          width: wp(22),
          height: hp(18),
          marginRight: wp(SIZES.responsive4),
        }}>
        <Image
          source={item.bookCover}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: wp(SIZES.responsive2),
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={[
            styles.rowDirection,
            {
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginTop: hp(SIZES.responsive1),
            },
          ]}>
          <View>
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {item.bookName}
            </Text>
            <Text style={{...FONTS.h3, color: COLORS.lightGray4}}>
              {item.author}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: wp(SIZES.responsive6),
                height: hp(SIZES.responsive3),
                marginTop: hp(SIZES.responsive1),
                tintColor: COLORS.lightGray4,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.rowDirection, {marginTop: hp(SIZES.responsive2)}]}>
          <View
            style={[
              styles.rowDirection,
              {alignItems: 'center', marginRight: wp(SIZES.responsive6)},
            ]}>
            <Image
              source={icons.page_filled_icon}
              resizeMode="contain"
              style={{
                width: wp(SIZES.responsive4),
                height: hp(SIZES.responsive4),
                tintColor: COLORS.lightGray4,
                marginRight: wp(SIZES.responsive3),
              }}
            />
            <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>
              {item.pageNo}
            </Text>
          </View>
          <View style={[styles.rowDirection, {alignItems: 'center'}]}>
            <Image
              source={icons.read_icon}
              resizeMode="contain"
              style={{
                width: wp(SIZES.responsive4),
                height: hp(SIZES.responsive4),
                tintColor: COLORS.lightGray4,
                marginRight: wp(SIZES.responsive3),
              }}
            />
            <Text style={{...FONTS.body4, color: COLORS.lightGray4}}>
              {item.pageNo}
            </Text>
          </View>
        </View>
        <View style={[styles.rowDirection, {flex: 1}]}>
          {item.genre.map(g => (
            <View
              key={`genre-id-${g}`}
              style={{
                marginRight: wp(SIZES.responsive2),
                marginTop: hp(1 / 2),
                height: hp(SIZES.responsive3),
                paddingHorizontal: wp(SIZES.responsive3),
                borderRadius: wp(SIZES.responsive2),
                backgroundColor:
                  g === 'Adventure'
                    ? COLORS.darkBlue
                    : g === 'Drama'
                    ? COLORS.darkRed
                    : COLORS.darkGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.h4,
                  color:
                    g === 'Adventure'
                      ? COLORS.lightBlue
                      : g === 'Drama'
                      ? COLORS.lightRed
                      : COLORS.lightGreen,
                }}>
                {g}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const VirtualizedScrollView = props => {
  return (
    <FlatList
      {...props}
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  );
};

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMenuTop()}
      <VirtualizedScrollView>
        {renderMyBook()}
        {renderMyBookList(navigation)}
        {renderCategories(categoriesData, navigation)}
      </VirtualizedScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  rowDirection: {
    flexDirection: 'row',
  },
});
