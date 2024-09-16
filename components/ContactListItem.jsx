import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { theme } from '../constants/theme';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

const ContactListItem = ({ name, avatar, phone, onPress, isFavorite, onFavoritePress }) => {
  return (
    <TouchableHighlight
      underlayColor={theme.colors.subTextPrimary}
      style={styles.container}
      onPress={onPress} // Sự kiện khi bấm vào toàn bộ item sẽ chuyển sang trang chi tiết
    >
      <View style={styles.contactInfor}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar
          }}
        />

        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>

        {/* Icon yêu thích */}
        <TouchableOpacity onPress={onFavoritePress}> 
          <MaterialIcons
            name={isFavorite ? 'star' : 'star-border'}
            size={24}
            color={isFavorite ? 'red' : 'gray'}
            style={styles.favoriteIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func, 
  isFavorite: PropTypes.bool,
  onFavoritePress: PropTypes.func 
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24
  },
  contactInfor: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  avatar: {
    borderRadius: theme.radius.xxl,
    width: 44,
    height: 44
  },
  details: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20
  },
  title: {
    color: theme.colors.textPriamry,
    fontWeight: theme.fonts.bold,
    fontSize: 16
  },
  subtitle: {
    color: 'blue',
    fontSize: 15,
    marginTop: 4
  },
  favoriteIcon: {
    marginLeft: 10
  }
});
