import React, { Fragment } from 'react';
import { Image, Platform, StyleSheet, Text } from 'react-native';
import { Images, normalize, screenHeight } from 'themes';

export const InfoHeader = () => {
  return (
    <Fragment>
      <Image source={Images.BoilerPlate} style={styles.image} />
      <Text style={styles.text}>React Native Biolerplate</Text>
      <Text style={styles.smallText}>
        This boilerplate can be used to kick start mobile application with a
        clean architecture. Here are few of the key functionalities are listed
        below
      </Text>
    </Fragment>
  );
};

export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: Platform.select({ android: 20, ios: 60 }),
    height: screenHeight * 0.15,
  },
  text: {
    marginVertical: normalize(14),
    fontSize: normalize(15),
    lineHeight: normalize(16),
    textAlign: 'center',
  },
  smallText: {
    marginVertical: normalize(14),
    marginStart: normalize(12),
    textAlign: 'left',
    fontSize: normalize(13),
    lineHeight: normalize(17),
  },
});
